var hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
var nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
    hamburger_icon.classList.toggle('active');
    nav_list.classList.toggle('open');
})