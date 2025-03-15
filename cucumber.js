module.exports = {
  default: {
    format: ['progress', 'json:reports/cucumber_report.json'],
    require: [
      'support/hooks.js',  // Ensure hooks are loaded
      'support/world.js',  // Ensure World is loaded
      'features/step_definitions/**/*.js',
    ],
    tags: 'not @ignore',
  },
};
