const token = '60c3cf8e82a234bb6432a250cb1756dae96bb625'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
