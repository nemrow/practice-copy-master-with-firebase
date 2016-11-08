database = firebase.database()

var addSelector = function (selector) {
  return firebase.database().ref('selector/' + createUuid()).set({
    value: selector,
    md5: md5(selector).slice(0,8),
    refColor: randomColor()
  })
}

var createUuid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

var randomColor = function () {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
