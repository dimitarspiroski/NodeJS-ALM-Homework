const API_URL = "http://localhost:3000";

const getUsersBtn = document.querySelector("#get-user-btn");
const postUserBtn = document.querySelector("#post-user-btn");
const postsContainer = document.querySelector(".posts-container");

const nameInput = document.querySelector("#name-input");
const usernameInput = document.querySelector("#username-input");
const emailInput = document.querySelector("#email-input");
const websiteInput = document.querySelector("#website-input");

let usersData = [];

getUsersBtn.addEventListener("click", () => {
  getUsers();
});

postUserBtn.addEventListener("click", e => {
  e.preventDefault();
  let user = userInput();
  createUser(user);
});

const userInput = () => {
  const name = nameInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;
  const website = websiteInput.value;

  const newUser = {
    name,
    username,
    email,
    website,
  };
  return newUser;
};

const getUsers = () => {
  fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(result => {
      usersData = result;
      renderUsers(usersData);
    });
};

const createUser = newUser => {
  fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(newUser),
  });
};

const renderUsers = users => {
  postsContainer.innerHTML = "";
  //console.log(users);
  users.forEach(user => {
    postsContainer.innerHTML += `<div class="user-div">
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>E-Mail: ${user.email}</p>
        <p>Website: ${user.website}</p>
      </div>`;
  });
};
