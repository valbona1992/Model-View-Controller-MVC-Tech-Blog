const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value;
    const content = document.querySelector("#post-content").value;
    const id = window.location.toString().split('/')[ window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }

  const deletePostHandler = async (event) => {
    const id = window.location.toString().split('/')[ window.location.toString().split('/').length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};
  
document.querySelector('#updatePostButton').addEventListener('click', editPostHandler);

document.querySelector('#deletePostButton').addEventListener('click', deletePostHandler);