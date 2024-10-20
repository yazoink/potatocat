function addLeadingZero(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
}

function dateToRSS(dateString) {
  const [dayString, monthString, yearString] = dateString.split('/');
  const date = new Date(yearString, monthString - 1, dayString);
  const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthStrings = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayOfWeek = dayStrings[date.getDay()];
  const dayOfMonth = addLeadingZero(date.getDate());
  const month = monthStrings[date.getMonth()];
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());
  const timezone = "AEST";
  return `${dayOfWeek}, ${dayOfMonth} ${month} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;
}

function getRSS(blog, rss) {
  let rssXML = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
  <channel>
    <title>${rss.feedTitle}</title>
    <link>https://${window.location.hostname}</link>
    <description>${rss.feedDescription}</description>
    `;
  for (var i = 0; i < blog.length; i++) {
    var entry = blog[i].title.replace(/ /g, "-");
    entry = entry.toLowerCase();
    var postDate = dateToRSS(blog[i].datePublished);
    rssXML += `
      <item>
        <title>${blog[i].title}</title>
        <link>https://${window.location.hostname}/index.html?nav=blog&entry=${entry}</link>
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
/* const rssXML = getRSS(blog, rss);
const blob = new Blob([rssXML], { type: 'application/rss+xml; charset=utf-8' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'rss.xml'; */
