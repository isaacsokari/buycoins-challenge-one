const toggler = document.getElementById('toggler');

toggler.addEventListener('click', (event) => {
  document.querySelector('.search-and-nav').classList.toggle('show');
});

let query = `{
  user(login: "isaacsokari") {
    avatarUrl
    name
    following {
      totalCount
    }
    followers {
      totalCount
    }
    bio
    repositories(privacy: PUBLIC, first: 20, orderBy: {field: PUSHED_AT, direction: DESC}, ownerAffiliations: OWNER) {
      edges {
        node {
          name
          watchers {
            totalCount
          }
          url
          description
          stargazerCount
          forkCount
          licenseInfo {
            name
            nickname
            url
          }
          primaryLanguage {
            name
            color
          }
          pushedAt
          parent {
            url
            name
            nameWithOwner
            forkCount
            stargazerCount
          }
          isFork
        }
      }
      totalCount
    }
    status {
      emojiHTML
      emoji
      message
    }
    bio
    createdAt
    twitterUsername
    location
    login
    starredRepositories {
      totalCount
    }
  }
}
`;

const url = 'https://api.github.com/graphql';

const encryptedKey = 'ZjUyZmU0NjNmMDJhMDQyMWQwZmVhZGQ3NjI0ZDVjMmZkNGZkNmZkYw==';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${atob(encryptedKey)}`,
  },
  body: JSON.stringify({ query }),
};

fetch(url, options)
  .then((res) => res.json())
  .then(populateUI)
  .catch(console.error);
