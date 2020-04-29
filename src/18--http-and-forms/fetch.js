const fetch = require("node-fetch");

fetch("https://eloquentjavascript.net/author", { headers: { Accept: "application/json" } })
  .then(resp => resp.json())
  .then(console.log);


fetch("https://eloquentjavascript.net/author", { headers: { Accept: "text/plain" } })
  .then(resp => resp.text())
  .then(console.log);


fetch("https://eloquentjavascript.net/author", { headers: { Accept: "text/html" } })
  .then(resp => resp.text())
  .then(console.log);


fetch("https://eloquentjavascript.net/author", { headers: { Accept: "application/rainbows+unicorns" } })
  .then(resp => resp.text())
  .then(console.log);
