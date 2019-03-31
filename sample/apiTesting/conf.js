exports.config = {
  profile: 'visual',
  apiURL:'https://helloworld1i304310trial.hanatrial.ondemand.com',
  baseUrl: 'https://helloworld1i304310trial.hanatrial.ondemand.com/helloworld2',
  browsers:[{
    platformResolution:'1270x720',
  }],
  reporters: [
    {name:'./reporter/htmlReporter',reportName:'reports/test.html',templateName:'report.tpl.html'},
    {name:'./reporter/screenshotReporter', screenshotsRoot: 'myScreenshots/'}
  ]
};
