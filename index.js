const fetchGithubRepo = require('./fetchGithubRepo');

document.write(fetchGithubRepo('sinatra/sinatra', (repoData) => {
  console.log(repoData);
  document.write(JSON.stringify(repoData));
}));