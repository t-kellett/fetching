(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchGithubRepo.js
  var require_fetchGithubRepo = __commonJS({
    "fetchGithubRepo.js"(exports, module) {
      fetchGithubRepo = (name, onDataFetched) => {
        fetch(`https://api.github.com/repos/${name}`).then((response) => response.json()).then((jsonData) => {
          onDataFetched(jsonData);
        });
      };
      module.exports = fetchGithubRepo;
    }
  });

  // index.js
  var fetchGithubRepo2 = require_fetchGithubRepo();
  var text = document.querySelector("#repoText");
  var button = document.querySelector("#repoBtn");
  button.addEventListener("click", () => {
    let div = document.querySelector("#jsonData");
    fetchGithubRepo2(text.value, (repoData) => {
      console.log(repoData);
      div.innerHTML = JSON.stringify(repoData);
    });
  });
})();
