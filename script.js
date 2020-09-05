let menu = document.querySelector('#menu');
let mobMenu = document.querySelector('.mbl-nav-lst');
let layerTwo = document.querySelector('.layer-two');

menu.onclick = function() {
    if(layerTwo.style.height === '0px' && mobMenu.style.display === 'none') {
        layerTwo.style.height = '200px';
        mobMenu.style.display = 'block';
    } else {
        layerTwo.style.height = '0px';
        mobMenu.style.display = 'none';       
    }
}