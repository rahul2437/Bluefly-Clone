let form = document.querySelector("form");
let loggedin = localStorage.getItem('loginData');
if(loggedin==true){
  document.getElementById('loginBtn').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'block';
}
else{
  document.getElementById('logoutBtn').style.display = 'none';
  document.getElementById('loginBtn').style.display = 'block';
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let error = document.getElementById("error");
    error.innerText = "";
    let password = document.getElementById("password").value;
    if (password.length >= 8) {
        let UserInfo = {
            email: document.getElementById("email").value,
            password: password
        };

        let UserDataArr = JSON.parse(localStorage.getItem("userData")) || [];
        let Already = UserDataArr.filter((e) => {
            return e.email == UserInfo.email && e.password == UserInfo.password;
        });

        if (Already.length !== 0) {
            window.location.href = '../index.html';
            loggedin = true;
            localStorage.setItem('loginData',loggedin);
        }
        else {
            error.innerText = "Email does not exists Or Wrong password!";
            loggedin = false;
            localStorage.setItem('loginData',loggedin);
        }

        clearForm();
    }
    else {
        error.innerText = "Password should be atleast 8 characters";
    }

});

function clearForm() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}