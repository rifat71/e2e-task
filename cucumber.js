module.exports = {
  default: {
    // format: ['progress', 'json:reports/cucumber_report.json'],
    require: [
      'support/hooks.js',
      'support/world.js',
      'features/step_definitions/**/*.js',
    ],
    tags: 'not @ignore',
  },
};
