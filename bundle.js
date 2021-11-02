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
        newPost.id = content;
        document.body.appendChild(newPost);
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
      document.querySelector("#name").innerHTML = repoData.name;
      document.querySelector("#avatar_url").innerHTML = repoData.owner.avatar_url;
      document.querySelector("#html_url").innerHTML = repoData.html_url;
      document.querySelector("#stargazers_count").innerHTML = repoData.stargazers_count;
      document.querySelector("#forks").innerHTML = repoData.forks;
      document.querySelector("#language").innerHTML = repoData.language;
    });
  });
  addNewItem2("name");
  addNewItem2("avatar_url");
  addNewItem2("html_url");
  addNewItem2("stargazers_count");
  addNewItem2("forks");
  addNewItem2("language");
})();
