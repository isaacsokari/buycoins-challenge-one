const date = new Date();

// console.log(date)

const setFullName = (fullname) => {
  document.getElementById('fullname').innerText = fullname.trim();
};

const setUserName = (username) => {
  document.getElementById('username').innerText = username.trim();
};

const setBio = (bio) => {
  document.getElementById('bio').innerText = bio.trim();
};

const setAvatarUrl = (avatarUrl) => {
  const avatars = document.getElementsByClassName('avatar');

  for (let i = 0; i < avatars.length; i++) {
    avatars[i].src = avatarUrl;
  }
};

const setFollowerCount = (count) => {
  document.getElementById('followerCount').innerText = count || 0;
};

const setFollowingCount = (count) => {
  document.getElementById('followingCount').innerText = count || 0;
};

const setStarredReposCount = (count) => {
  document.getElementById('starredRepos').innerText = count || 0;
};

const setLocation = (location) => {
  const field = document.getElementById('location');

  if (!location) return field.parentElement.classList.add('hide');

  field.innerText = location;
};

const setTwitterUsername = (twitterUsername) => {
  const field = document.getElementById('twitterUsername');

  if (!twitterUsername) return field.parentElement.classList.add('hide');

  field.innerText = `@${twitterUsername}`;
  field.href = `https://www.twitter.com/${twitterUsername}`;
};

const setRepoCount = (count) => {
  document.getElementById('repoCount1').innerText = count;
  document.getElementById('repoCount2').innerText = count;
};

const getRelativeTime = (updatedAt) => {
  const now = Date.now();
  const then = Date.console.log(now);
};

// getRelativeTime();

const populateUI = (data) => {
  console.log(data.data.user);
  const {
    avatarUrl,
    bio,
    followers: { totalCount: followerCount },
    following: { totalCount: followingCount },
    name,
    repositories: { totalCount: repoCount, edges: repositories },
    starredRepositories: { totalCount: starredReposCount },
    login,
    location,
    twitterUsername,
  } = data.data.user;

  setAvatarUrl(avatarUrl);
  setFullName(name);
  setUserName(login);
  setBio(bio);
  setFollowerCount(followerCount);
  setFollowingCount(followingCount);
  setStarredReposCount(starredReposCount);
  setLocation(location);
  setTwitterUsername(twitterUsername);
  setRepoCount(repoCount);

  // console.log(repositories)
};
