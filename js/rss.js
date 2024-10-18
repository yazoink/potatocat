// this is kinda useless without a web server

function addLeadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
}

function dateToRSS(dateString) {
  const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const timeStamp = Date.parse(dateString);
  const date = new Date(timeStamp);
  const day = dayStrings[date.getDay()];
  const dayNumber = addLeadingZero(date.getDate());
  const month = monthStrings[date.getMonth()];
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const timezoneOffset = "AEST";
  return `${day}, ${dayNumber} ${month} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;
}

function outputRSS(blog) {
  let rssXML = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
  <channel>
    <title>${rssFeedInfo.blogTitle}</title>
    <link>https://${window.location.hostname}</link>
    <description>${rssFeedInfo.blogDescription}</description>
    `;
  for (var i = 0; i < blog.length; i++) {
    var postDate = dateToRSS(blog[i].date);
    rssXML += `
      <item>
        <title>${blog[i].title}</title>
        <link>https://${window.location.hostname}/index.html?nav=blog&entry=${blog[i].entry}</link>
        <description>${blog[i].subheading}</description>
        <pubDate>${postDate}</pubdate>
      </item>
    `;
  }
  rssXML += `
    </channel>
  </rss>
  `;
  return rssXML;
}
