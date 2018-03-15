
const createPost = () => {
	/* Data object containing the information from the post form */
    const data = {
        name: document.querySelector('#name').value,
        imageURL: document.querySelector('#imageURL').value,
        imageAltText: document.querySelector('#imageAltText').value,
        url: document.querySelector('#url').value,
        text: document.querySelector('#text').value
    }
    console.log('Saving the following object to the server:', data);

	/* Fetches the server and adds the information to the JSON file then empties the form and displays the changed webpage. */
    fetch('http://localhost:3000/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        document.querySelector('#name').value = ''
        document.querySelector('#imageURL').value = ''
        document.querySelector('#imageAltText').value = ''
        document.querySelector('#url').value = ''
        document.querySelector('#text').value = ''
        document.querySelector('.modal').classList.toggle('show')
        getPosts()
    })
}
/* Makes this run when we hit the 'save' button */
document.querySelector('.button-primary').onclick = createPost
