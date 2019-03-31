exports.config = {
  profile: 'integration',
  apiURL: 'https://helloworld1i304310trial.hanatrial.ondemand.com',
  baseUrl: 'https://helloworld1i304310trial.hanatrial.ondemand.com/helloworld2',
  browsers: [{
    browserName: 'chrome',
    platformResolution: '1270x720',
  }],
  reporters: [
    //Default template pre-defined
    //{name:'./reporter/htmlReporter',reportName:'Results/report.html'},
    {
      name: './reporter/screenshotReporter',
      screenshotsRoot: 'Results/'
    }
  ],
  takeScreenshot: {
    //Change these to reduce disk space perhaps
    onExpectFailure: true,
    onExpectSuccess: true,
    onAction: true
  }
};
