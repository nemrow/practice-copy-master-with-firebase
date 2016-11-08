var prefix = "nemrow--";
nemrowMode = "copy";

var modeDisplay = document.getElementById("mode-display");

var copyBtn = document.getElementById("copy-mode");
var pasteBtn = document.getElementById("paste-mode");
var learnCopyBtn = document.getElementById("learn-copy-mode");
var learnPasteBtn = document.getElementById("learn-paste-mode");

["copy", "paste", "learn-copy", "learn-paste"].forEach(function (type) {
  var btn = document.getElementById(prefix + type + "-mode");
  btn.onclick = function () {
    nemrowMode = type;
    modeDisplay.innerText = nemrowMode;
  }
});
