// use the GitHub API to get issues from repo larryhudson/eleven-labs-feed
// and return the data as JSON
const fetch = require("node-fetch");

module.exports = async () => {
  const response = await fetch(
    "https://api.github.com/repos/larryhudson/eleven-labs-feed/issues"
  );
  const data = await response.json();
  console.log(data);
  return data;
};
