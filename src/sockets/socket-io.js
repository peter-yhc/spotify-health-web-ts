/* eslint-disable import/prefer-default-export */

export const submitVoteToSocket = async (session, { indicator, value }) => {
  return new Promise((resolve) => {
    console.log(`Submitting vote for session ${session}, for indicator ${indicator} with value ${value}`);
    setTimeout(() => {
      console.log('vote promise resolved');
      resolve('Ok good job');
    }, 200);
  });
};
