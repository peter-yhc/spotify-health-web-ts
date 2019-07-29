import axios from 'axios';

const HOSTNAME = window.location.hostname;
const PORT = window.location.port ? `:${+window.location.port + 1}` : '';

function getBrowserKey(): string {
    const browserkey = localStorage.getItem('shw.browserkey');
    if (browserkey) {
        return browserkey;
    }
    const randomString = Math.random()
        .toString(36)
        .slice(2);
    localStorage.setItem('shw.browserkey', randomString);
    return randomString;
}

async function createSession(): Promise<SessionResponse> {
    const newSessionResponse = await axios({
        method: 'POST',
        url: `http://${HOSTNAME}${PORT}/creator/new`,
        data: {
            name: Math.random()
                .toString(36)
                .slice(2),
        },
    });
    const sessionId = newSessionResponse.data.id;

    const finaliseSessonResponse = await axios({
        method: 'POST',
        url: `http://${HOSTNAME}${PORT}/creator/${sessionId}/done`,
    });

    return {
        sessionId: finaliseSessonResponse.data.id,
        indicators: finaliseSessonResponse.data.indicators,
    };
}

async function retrieveHealthIndicators(
    sessionId: string,
    passkey: string,
): Promise<HealthIndicator[]> {
    const response = await axios.get(
        `http://${HOSTNAME}${PORT}/sessions/${sessionId}?passkey=${passkey}`,
    );
    return response.data.indicators;
}

async function registerClient(sessionId: string, username: string): Promise<string> {
    const browserKey = getBrowserKey();
    const response = await axios({
        method: 'PUT',
        url: `http://${HOSTNAME}${PORT}/sessions/${sessionId}/participants`,
        data: {
            username,
            browserKey,
        },
    });
    return response.data.passkey;
}

interface HealthIndicator {
    name: string;
    textAwesome: string;
    textCrappy: string;
}

interface SessionResponse {
    sessionId: string;
    indicators: HealthIndicator[];
}

export default {
    createSession,
    registerClient,
    retrieveHealthIndicators,
};
