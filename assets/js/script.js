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
    bioHTML
    repositories(privacy: PUBLIC, first: 20) {
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
        }
      }
    }
    status {
      emojiHTML
      emoji
    }
  }
  viewer {
    login
  }
}`;

// const url = 'https://api.github.com/graphql';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'bearer f377bc7b8ad40049823e0f93d76e62cd2de09e44',
  },
  body: JSON.stringify({ query }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => console.log(data.data))
  .catch(console.error);
