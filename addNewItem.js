addNewItem = (content) => {
  let newPost  = document.createElement('div');
  newPost.innerText = content;
  document.write(newPost);
};

module.exports = addNewItem;