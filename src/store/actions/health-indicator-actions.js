const voteSubmitted = (indicator, value) => ({
  type: 'VOTE_SUBMITTED',
  indicator,
  value,
});

export default {
  voteSubmitted,
};
