setTimeout(changeLogin, 100);
function changeLogin(){
  let loggedin = localStorage.getItem('loginData');
  if (loggedin===true) {
    document.getElementById('loginBtn').setAttribute('class','inactive');
    document.getElementById('logoutBtn').setAttribute('class','active');
  }
  else {
    document.getElementById('loginBtn').setAttribute('class','active');
    document.getElementById('logoutBtn').setAttribute('class','inactive');
  }
}
document.getElementById('logoutBtn').addEventListener('click',()=>{
  localStorage.setItem('loginData',false);
  changeLogin();
});
document.getElementById('loginBtn').addEventListener('click',()=>{
  window.location.href = '../pages/LoginPage.html';
});

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let er = document.getElementById('error');
  er.innerText = '';
  let password = document.getElementById('password').value;
  if (password.length >= 8) {
    let userInfo = {
      name: document.getElementById('fName').value + ' ' + document.getElementById('lName').value,
      email: document.getElementById('email').value,
      password: password
    };

    let userDataArr = JSON.parse(localStorage.getItem('userData')) || [];

    let exist = userDataArr.filter((e) => {
      return e.email == userInfo.email;
    });
    if (exist.length === 0) {
      userDataArr.push(userInfo);
      clearForm();
      loginUser();
    }
    else {
      er.innerText = 'User with Email already exists!!';
    }

    localStorage.setItem('userData', JSON.stringify(userDataArr));
  }
  else {
    er.innerText = 'Password should be alteast 8 characters';
  }
});

function loginUser() {
  loggedin = true;
  localStorage.setItem('loginData', loggedin);
  window.location.href = 'products.html'
}

function clearForm() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}