let burgerIcon;
let barsIcon;
let navBox;
let wrapper;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    $burgerIcon = document.querySelector('.nav__icon--burger');
    $barsIcon = document.querySelector('.nav__icon--bars');
    $navBox = document.querySelector('.nav__box');
    $wrapper = document.querySelector('.wrapper');
}

prepareDOMEvents = () => {
    $burgerIcon.addEventListener('click', openNavigation);
    $barsIcon.addEventListener('click', closeNavigation);
}


const openNavigation = () => {
    if(window.innerWidth < 578){
    $navBox.style.display = 'flex';
    $navBox.classList.add('active');
    $wrapper.classList.add('shadow');
    $burgerIcon.style.display = 'none';
    $barsIcon.style.display = 'block';
    } else{
        return;
    }
}

const closeNavigation = () =>{
    if(window.innerWidth < 578){
    $navBox.style.display = 'none';
    $navBox.classList.remove('active');
    $wrapper.classList.remove('shadow');
    $burgerIcon.style.display = 'block';
    $barsIcon.style.display = 'none';
    } else {
        $navBox.style.display = 'flex';
    }
}



document.addEventListener('DOMContentLoaded', main);