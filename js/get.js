var parts = window.location.search.substr(1).split("&");
var get = {};
for (var i = 0; i < parts.length; i++) {
  var temp = parts[i].split("=");
  get[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}
