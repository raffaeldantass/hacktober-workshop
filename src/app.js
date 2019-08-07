const userImg = document.getElementById('data-picture');
const userName = document.getElementById('data-name');
const userLocation = document.getElementById('data-location');

const userRepos = document.getElementById('data-repositorie');
const userFollowing = document.getElementById('data-following');
const userFollowers = document.getElementById('data-followers');

const searchUser = () => {
  const user = document.getElementById('user-search');
  const userValue = user.value;

  const url =`https://api.github.com/users/${userValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userImg.src = data.avatar_url;
      userName.innerText = data.name;
      userLocation.innerText = data.location || 'O usuário não inseriu uma localização';

      userRepos.innerText = data.public_repos;
      userFollowing.innerText = data.following;
      userFollowers.innerText = data.followers;
    })
    .catch((err) => console.log(err))
}
