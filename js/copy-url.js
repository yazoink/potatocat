const delay = ms => new Promise(res => setTimeout(res, ms));

const copyURL = async () => {
  url = `${window.location.hostname}/index.html?nav=blog&entry=${entry}`;
  navigator.clipboard.writeText(url);
  document.getElementById("copy-url").innerHTML = "&#x2398; Copied!"; 
  await delay(1000);
  document.getElementById("copy-url").innerHTML = "&#x2398; Copy URL"; 
}

