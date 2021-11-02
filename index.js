const fetchGithubRepo = require('./fetchGithubRepo');
const addNewItem = require('./addNewItem');

const text = document.querySelector('#repoText')
const button = document.querySelector('#repoBtn')
const json = document.querySelector('#jsonData')

button.addEventListener('click', () => {
  fetchGithubRepo(text.value, (repoData) => {
    console.log(repoData);
    json.innerHTML = "";
    json.innerHTML += addNewItem(repoData.owner.avatar_url);
    json.innerHTML += addNewItem(repoData.html_url);
    json.innerHTML += addNewItem(repoData.stargazers_count);
    json.innerHTML += addNewItem(repoData.forks);
    json.innerHTML += addNewItem(repoData.language);
  });
});


