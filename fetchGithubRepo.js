fetchGithubRepo = (name, onDataFetched) => {
  fetch(`https://api.github.com/repos/${name}`)
  .then(response => response.json())
  .then(jsonData => {
      onDataFetched(jsonData);
  });
}

module.exports = fetchGithubRepo;