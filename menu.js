let navBar = document.querySelector('#header')
document.addEventListener("scroll",()=>{
    let scrollTop = window.scrollY
    if(scrollTop > 0){
        navBar. classList.add('rolar')
    }else{
        navBar. classList.remove('rolar')
    }

})

function menuShow() {
    let menuMobile =document.querySelector('#menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="images/menu_white_36dp.svg";


    }else{
        menuMobile.classList.add('open');
         document.querySelector('.icon').src="images/close_white_36dp.svg";
    }
}