const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-Link');
const registerLink = document.querySelector('.register-Link');
const btnPopup = document.querySelector('.btnlogin-popup');
 registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
 })
 
 
 loginLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
 
 });


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
 
 