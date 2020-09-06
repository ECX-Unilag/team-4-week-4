let menu = document.querySelector('#menu');
let mobMenu = document.querySelector('.mbl-nav-lst');
let layerTwo = document.querySelector('.layer-two');
let closes = "../../Assets/img/close-menu.svg";
let ham = '../../Assets/img/menu.svg';


menu.onclick = function() {
    if(layerTwo.style.height === '0px' && mobMenu.style.display === 'none') {
        layerTwo.style.height = '200px';
        mobMenu.style.display = 'block';
        menu.src = closes;
    } else {
        layerTwo.style.height = '0px';
        mobMenu.style.display = 'none';  
        menu.src = ham;     
    }
}