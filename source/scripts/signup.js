let form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let er = document.getElementById('error');
  er.innerText = '';
  let password = document.getElementById('password').value;
  if(password.length>=8){
    let userInfo = {
      name: document.getElementById('fName').value+' '+document.getElementById('lName').value,
      email: document.getElementById('email').value,
      password: password
    };
  
    let userDataArr = JSON.parse(localStorage.getItem('userData'))||[];
  
    let exist = userDataArr.filter((e)=>{
      return e.email == userInfo.email;
    });
    if(exist.length === 0)  userDataArr.push(userInfo);
    else er.innerText = 'User with Email already exists!!'
  
    localStorage.setItem('userData',JSON.stringify(userDataArr));
    clearForm();
  }
  else{
    er.innerText = 'Password should be alteast 8 characters';
  }
});

function clearForm() {
  document.getElementById('fName').value = '';
  document.getElementById('lName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}