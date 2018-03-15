//1. define functions:
const getPosts = () => {
	/* Grabs the html and the posts stored on the server and then calls showPosts. */
    container.innerHTML = ''
    fetch('http://localhost:3000/posts/').then(response =>{
        return response.json();
      }).then(showPosts)
}

const showPosts = (posts) => {
    console.log(posts)
    const container = document.getElementById('container')
	/* Takes the posts grabbed using the getPosts function and adds HTML to the html file to make it visible. Each post will get it's own entry. */
    posts.forEach(post => {
        let template = `
              <h2>${post.name}</h2>
			  <img src="${post.imageURL}" alt="${post.imageAltText}" /*height="42" width="42"*/>
              <a href="${post.url}">More</a>
              <p>${post.text}</p>
              <div class="comments">
                    <h3>Comments</h3>
                    <p>TODO next week...</p>
              </div>`
        container.innerHTML += template;
    })
}
getPosts()