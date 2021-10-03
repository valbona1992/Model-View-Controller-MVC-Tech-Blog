const newFormHandler = async function(event) {
    event.preventDefault();
  
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postContent = document.querySelector('textarea[name="post-body"]').value;

    await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
    
    document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);