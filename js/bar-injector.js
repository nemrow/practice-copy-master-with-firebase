var prefix = "nemrow--";
var body = document.getElementsByTagName('body')[0];

var bar = document.createElement("div");
var name = prefix + "copy-master-bar";
bar.setAttribute("class", name);

var modeDisplay = document.createElement("p");
var t = document.createTextNode("copy");
modeDisplay.setAttribute("id", "mode-display");
modeDisplay.appendChild(t);
bar.append(modeDisplay);

["copy", "paste", "learn-copy", "learn-paste"].forEach(function (type) {
  var btn = document.createElement("button");
  var t = document.createTextNode(type + " mode");
  btn.appendChild(t);
  btn.setAttribute("id", prefix + type + "-mode");
  bar.prepend(btn);
});

body.prepend(bar);
