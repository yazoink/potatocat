function getGET(url) {
  const parts = url.search.substr(1).split("&");
  let GET = {};
  for (let i = 0; i < parts.length; i++) {
    let temp = parts[i].split("=");
    GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  return GET;
}
