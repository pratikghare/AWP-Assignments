var userChat = document.getElementById('input-text');
var commentBox = document.getElementById('comment-section');


function enterChat(){

    var parent = document.createElement('div');
    parent.setAttribute('class', 'user-text');

    var child = document.createElement('p');
    child.innerText = new Date();

    userChat.value = "";

    parent.appendChild(child);

    commentBox.append(parent);
}