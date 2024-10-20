function getGET(url) {
  var parts = url.search.substr(1).split("&");
  var GET = {};
  for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  return GET;
}
