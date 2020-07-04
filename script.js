console.log('it works');

// code your solution in here

function postModel (title,content, span) {
    this.title = title;
    this.content = content;
    this.span = span;
};

function blogModel() {
    this.post1 = [];

    this.addPost = function(post1){
        this.post1.push(post1);
    };
};

let newPost = new postModel('title', 'content', 'span'); 

let newBlog = new blogModel();

blogModel.addPost(newPost);

function addToHTML() {
  for(let i = 0; i < newBlog.newPost.length; i++) {
    let addNewPost = document.querySelector('#post-list');  
    let newFirstDiv = document.createElement('div');
    newFirstDiv.classList.add('card some-space');
    let newSecondDiv = document.createElement('div');
    newSecondDiv.classList.add('card-body');
    let newHeading = document.createElement('h5');
    newHeading.classList.add('card-title');
    let newParagraph = document.createElement('p');
    newParagraph.classList.add('card-text');
    let newFirstSpan = document.createElement('span');
    newFirstSpan.classList.add('badge badge-light');
    let newSecondSpan = document.createElement('span');
    newSecondSpan.classList.add('badge badge-light');
    let newThirdSpan = document.createElement('span');
    newThirdSpan.classList.add('badge badge-light');

    let newBlog_title = newBlog.newPost[i].newHeading;
    let newBlog_content = newBlog.newPost[i].newParagraph;
    let newBlog_span1 = newBlog.newPost[i].newFirstSpan;
    let newBlog_span2 = newBlog.newPost[i].newSecondSpan;
    let newBlog_span3 = newBlog.newPost[i].newThirdSpan;

    newHeading.textContent = newBlog_title;
    newParagraph.textContent = newBlog_content;
    newFirstSpan.textContent = newBlog_span1;
    newSecondSpan.textContent = newBlog_span2;
    newThirdSpan.textContent = newBlog_span3;

    addNewPost.appendChild(newFirstDiv);
    newFirstDiv.appendChild(newSecondDiv);
    newSecondDiv.appendChild(newHeading);
    newSecondDiv.appendChild(newParagraph);
    newSecondDiv.appendChild(newFirstSpan);
    newSecondDiv.appendChild(newSecondSpan);
    newSecondDiv.appendChild(newThirdSpan);
  };
};

let submitButton = document.querySelector('#submit-form');
    submitButton.addEventListener('click', function getTarget(e) {
        e.preventDefault();
        let titleInput = document.getElementById('new-post-title').value;
        let textarea = document.getElementById('new-post-content').value;
        var creatNewPost = new.newPost(titleInput, textarea);
        newBlog.addPost(creatNewPost);
        addToHTML();
    });
        
