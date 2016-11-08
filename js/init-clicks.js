document.addEventListener("click",handler,true);
var allSelectors = firebase.database().ref('selector/');

function handler(e){
  switch(nemrowMode) {
    case "copy":
      if (!isNemrowFunction(e)) {
        preventDefault(e)
        copyHandler(e.target)
      }
      break;
    case "paste":
      if (!isNemrowFunction(e)) {
        preventDefault(e)
        pasteHandler(e.target)
      }
      break;
    case "learn-copy":
      if (!isNemrowFunction(e)) {
        preventDefault(e)
        learnCopyHandler(e.target)
      }
      break;
    case "learn-paste":
      if (!isNemrowFunction(e)) {
        preventDefault(e)
        learnPasteHandler(e.target)
      }
      break;
  }
}

var copyHandler = function (target) {
  console.log(target)
}

var pasteHandler = function (target) {
  console.log(target)
}

var learnCopyHandler = function (target) {
  var selectorGenerator = new CssSelectorGenerator
  var selector = selectorGenerator.getSelector(target)
  addSelector(selector)
}

var learnPasteHandler = function (target) {
  console.log(target)
}

var isNemrowFunction = function (e) {
  return e.target.id.match(/^nemrow--/);
}

var setBackgroundColors = function (data) {
  var elem = document.querySelectorAll(data.val().value)[0]
  if (elem) {
    elem.style.background = data.val().refColor
  }
}

var preventDefault = function (e) {
  e.stopPropagation();
  e.preventDefault();
}

allSelectors.on('child_added', function(data) {
  setBackgroundColors(data)
});
