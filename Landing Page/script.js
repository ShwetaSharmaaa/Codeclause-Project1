const wrapper = document.querySelector('.wrapper');

const btnPopup =  document.querySelector('.btnlogin-popup');

const iconclose = document.querySelector('.icon-close');
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
