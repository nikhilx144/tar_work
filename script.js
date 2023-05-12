const wrapper = document.querySelector('.wrapper');
const closeBtn = document.querySelector('.close');

const signup = document.querySelector('.signup');
const login = document.querySelector('.loginB');

const login_a = document.querySelector('.login-a');
const signup_a = document.querySelector('.signup-a');


signup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
  wrapper.classList.remove('active');
})  

login.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup')
  wrapper.classList.add('active');
})

login_a.addEventListener('click', ()=> {
  wrapper.classList.add('active');
})

signup_a.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
})

closeBtn.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})