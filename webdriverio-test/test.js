var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
/*
WebDriver dr = new RemoteWebDriver("http://localhost:9515", DesiredCapabilities.chrome());
var site = dr.get("http://www.google.com");
var title = site.getTitle().then(function(title) {
        console.log('Title was: ' + title);
    });
*/

//console.log(site, title);
/*
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();
    */