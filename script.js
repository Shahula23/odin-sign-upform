let check = function() {
    if (document.getElementById('password').value != document.getElementById('cnfrm_password').value) {
        password.classList.add("error");
        cnfrm_password.classList.add("error");
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = '*passwords do not match';
        document.getElementById('form-submit').disabled = true;
    }
    else {
        password.classList.remove("error");
        cnfrm_password.classList.remove("error");
        document.getElementById('message').innerHTML = '';
        document.getElementById('form-submit').disabled = false;
    }
}