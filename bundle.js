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

  // addNewItem.js
  var require_addNewItem = __commonJS({
    "addNewItem.js"(exports, module) {
      addNewItem = (content) => {
        let newPost = document.createElement("div");
        newPost.innerText = content;
        document.write(newPost);
      };
      module.exports = addNewItem;
    }
  });

  // index.js
  var fetchGithubRepo2 = require_fetchGithubRepo();
  var addNewItem2 = require_addNewItem();
  var text = document.querySelector("#repoText");
  var button = document.querySelector("#repoBtn");
  var json = document.querySelector("#jsonData");
  button.addEventListener("click", () => {
    fetchGithubRepo2(text.value, (repoData) => {
      console.log(repoData);
      json.innerHTML = "";
      json.innerHTML += addNewItem2(repoData.owner.avatar_url);
      json.innerHTML += addNewItem2(repoData.html_url);
      json.innerHTML += addNewItem2(repoData.stargazers_count);
      json.innerHTML += addNewItem2(repoData.forks);
      json.innerHTML += addNewItem2(repoData.language);
    });
  });
})();
