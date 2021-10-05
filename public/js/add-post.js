const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('input[name="post-content"]').value;

    const response =  await fetch(`/api/posts`, {
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
    
    document.querySelector('.add-post-form').addEventListener('submit', newFormHandler);