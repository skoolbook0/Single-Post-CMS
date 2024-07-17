document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("post-form");
  let titleInput = document.getElementById("title-input");
  let contentInput = document.getElementById("content-input");
  let postsContainer = document.getElementById("posts-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addPost(titleInput.value, contentInput.value);
    titleInput.value = "";
    contentInput.value = "";
  });

  function addPost(title, content) {
    let postDiv = document.createElement("div");
    postDiv.className = "post";

    let postTitle = document.createElement("div");
    postTitle.className = "post-title";
    postTitle.textContent = title;

    let postContent = document.createElement("div");
    postContent.className = "post-content";
    postContent.textContent = content;

    let postButtons = document.createElement("div");
    postButtons.className = "post-buttons";

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      editPost(postDiv, postTitle, postContent);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deletePost(postDiv);
    });

    postButtons.appendChild(editButton);
    postButtons.appendChild(deleteButton);

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);
    postDiv.appendChild(postButtons);

    postsContainer.appendChild(postDiv);
  }

  function editPost(postDiv, postTitle, postContent) {
    let newTitle = prompt("Edit title:", postTitle.textContent);
    let newContent = prompt("Edit content:", postContent.textContent);

    if (newTitle !== null) postTitle.textContent = newTitle;
    if (newContent !== null) postContent.textContent = newContent;
  }

  function deletePost(postDiv) {
    postsContainer.removeChild(postDiv);
  }
});
