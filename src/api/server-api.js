const createSession = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`http://${window.location.hostname}:${window.location.port}/clients?session=${Math.floor(Math.random() * 10000000000)}`);
    }, 2000);
  });
};

export default {
  createSession,
};
