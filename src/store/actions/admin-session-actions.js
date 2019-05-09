const voteSubmitted = ({ indicator, value, username }) => ({
  type: 'VOTE_SUBMITTED',
  indicator,
  value,
  username,
});

export default {
  voteSubmitted,
};
