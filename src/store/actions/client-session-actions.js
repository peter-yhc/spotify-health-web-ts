const displayHealthIndicator = ({ area, awesome, crappy }) => ({
  type: 'SHOW_HEALTH_INDICATOR',
  area,
  awesome,
  crappy,
});

export default {
  displayHealthIndicator,
};
