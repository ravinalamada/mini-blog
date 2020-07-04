console.log('it works');

// code your solution in here

// This funtion creat new elements
function creatNewPost() {
    const newFirstDiv = document.createElement('div');
    newFirstDiv.classList.add('card', 'some-space');
    const newSecondDiv = document.createElement('div');
    newSecondDiv.classList.add('card-body');
    const newHeading = document.createElement('h5');
    newHeading.classList.add('card-title');
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('card-text');

// Put content inside these new elements    
    newHeading.textContent = document.getElementById("new-post-title").value;
    newParagraph.textContent = document.getElementById("new-post-content").value;
    
// Insert these new child element in DOM

    newFirstDiv.appendChild(newSecondDiv);
    newSecondDiv.appendChild(newHeading);
    newSecondDiv.appendChild(newParagraph);

    return newFirstDiv;
  };

// Link the input form with the submit button

const submitButton = document.querySelector('#submit-form');

const addNewPost = document.querySelector('#post-list');
    submitButton.addEventListener('click', ($event) => {
        let addPost = creatNewPost();  
        addNewPost.appendChild(addPost);  
        $event.preventDefault();

    });
        
