const fetchGithubRepo = require('./fetchGithubRepo');
const addNewItem = require('./addNewItem');

const text = document.querySelector('#repoText')
const button = document.querySelector('#repoBtn')
const json = document.querySelector('#jsonData')

button.addEventListener('click', () => {
  fetchGithubRepo(text.value, (repoData) => {
    console.log(repoData);
    document.querySelector('#name').innerHTML = repoData.name;
    document.querySelector('#avatar_url').innerHTML = repoData.owner.avatar_url;
    document.querySelector('#html_url').innerHTML = repoData.html_url;
    document.querySelector('#stargazers_count').innerHTML = repoData.stargazers_count;
    document.querySelector('#forks').innerHTML = repoData.forks;
    document.querySelector('#language').innerHTML = repoData.language;
  });
});

addNewItem('name')
addNewItem('avatar_url');
addNewItem('html_url');
addNewItem('stargazers_count');
addNewItem('forks');
addNewItem('language');


