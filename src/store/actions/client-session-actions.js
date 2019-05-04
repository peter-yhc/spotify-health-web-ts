const displayHealthIndicator = ({ area, textAwesome, textCrappy }) => ({
  type: 'SHOW_HEALTH_INDICATOR',
  area,
  textAwesome,
  textCrappy,
});

export default {
  displayHealthIndicator,
};
