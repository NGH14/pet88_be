module.exports = {
  reporter: 'node_modules/mochawesome',
  'reporter-option': [
    "reportDir=tests/.reports/[name]",
    'overwrite=true',
   " reportFilename=[status]-[name]-report",
    "timestamp= shortDate",        'showPassed=true'
  ],};