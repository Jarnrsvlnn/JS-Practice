let user;


document.getElementById('myButton').onclick = function() {
    user = document.getElementById('myUser').value;
    document.getElementById('text').textContent = user;
}

