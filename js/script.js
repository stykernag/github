/*const input = document.querySelector('input');

input.addEventListener('click', (event) => {
    const menu = document.querySelector('.nav-btn').childNodes;

    console.log(input.checked);
});
*/

const menu = document.querySelector('.nav-btn ul').childNodes;
console.log(menu)

let input = document.querySelector('input');
let nav = document.querySelector('.nav-menu');
nav.style.transform = 'translateX(-180px)';
input.addEventListener('click', (event) => {
    console.log(input.checked);
    nav.style.transition = '600ms';
    if (input.checked === true) {
        menu[3].style.opacity = "0";
        menu[1].style.transform = "translateY(4px) rotate(45deg)";
        menu[5].style.transform = "translateY(-4px) rotate(-45deg)";
        nav.style.transform = 'translateX(0px)';
    } else {
        menu[3].style.opacity = "1";
        menu[1].style.transform = "rotate(0deg)";
        menu[5].style.transform = "rotate(0deg)";
        nav.style.transform = 'translateX(-180px)';
    }
});