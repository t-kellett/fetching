const fetchGithubRepo = require('./fetchGithubRepo');

const text = document.querySelector('#repoText')
const button = document.querySelector('#repoBtn')

button.addEventListener('click', () => {
  let div = document.querySelector('#jsonData')
  fetchGithubRepo(text.value, (repoData) => {
    console.log(repoData);
    div.innerHTML = JSON.stringify(repoData);
  });
});


