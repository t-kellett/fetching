addNewItem = (content) => {
  let newPost  = document.createElement('div');
  // newPost.innerText = content;
  newPost.id = content
  document.body.appendChild(newPost);
};

module.exports = addNewItem;