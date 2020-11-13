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
    repositories(privacy: PUBLIC, last: 20) {
      edges {
        node {
          name
          nameWithOwner
          languages(first: 1) {
            edges {
              node {
                name
                color
              }
            }
          }
          forks {
            totalCount
          }
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
          url
          updatedAt
          description
        }
      }
      totalCount
    }
    status {
      emojiHTML
      emoji
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
