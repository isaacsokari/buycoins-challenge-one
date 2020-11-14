// const date = new Date();

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
  const then = Date(updatedAt);

  const elapsed = now - then;

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerWeek = msPerDay * 7;
  const msPerMonth = msPerDay * 30;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'about ' + Math.round(elapsed / msPerWeek) + ' 1 week ago';
  } else {
    return 'on ';
  }
};

// getRelativeTime('+2017-06-09T11:58:46Z');

const populateRepositoryList = (repositories) => {
  const repoContainer = document.querySelector('.repo-list');
  let repoHTML = '';

  repositories.map((repo) => {
    const {
      node: {
        name,
        description,
        forks,
        stargazerCount,
        updatedAt,
        url,
        primaryLanguage,
      },
    } = repo;

    repoHTML += `<div class="repository-info">
            <h3><a href="${url}" class="repo-title">${name}</a></h3>
            <p class="repo-description">
            ${description ? description : ''}
            </p>
            <div class="repo-stats">
              <span class="language ${primaryLanguage ? '' : 'hide'}">
                <span class="language-color" style="background: ${
                  primaryLanguage ? primaryLanguage.color : ''
                }"></span>
                ${primaryLanguage ? primaryLanguage.name : ''}
              </span>
  
              <span class="times-forked ${forks.totalCount ? '' : 'hide'}">
                <svg aria-label="fork" class="" viewBox="0 0 16 16" width="16" height="16" role="img">
                  <path fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
                  </path>
                </svg>${forks.totalCount}</span>
  
              <span class="times-starred ${stargazerCount ? '' : 'hide'}">
                <svg aria-label="star" class="" viewBox="0 0 16 16" width="16" height="16" role="img">
                  <path fill-rule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                  </path>
                </svg>
                ${stargazerCount}</span>
  
              <span class="updated-at">
                Updated <span class="relative-time">3 days ago</span>
              </span>
            </div>
  
            <button class="btn star-repo">
              <svg class="" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
                </path>
              </svg>Star
            </button>
          </div>`;

    repoContainer.innerHTML = repoHTML;
  });
};

const populateUI = (data) => {
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

  populateRepositoryList(repositories);
};
