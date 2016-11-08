chrome.browserAction.onClicked.addListener(function (tab) {
  [
    "js/vendor/firebase-app.js",
    "js/vendor/firebase-auth.js",
    "js/vendor/firebase-database.js",
    "js/vendor/md5.min.js",
    "js/vendor/selector-generator.js",
    "js/init-firebase.js",
    "js/database.js",
    "js/bar-injector.js",
    "js/controller.js",
    "js/init-clicks.js"
  ].forEach(function (script) {
    chrome.tabs.executeScript(tab.id, {
      "file": script
    });
  })
})
