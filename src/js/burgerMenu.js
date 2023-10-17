export function getMobMenu() {
    const burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav_box-mob');
    const body = document.querySelector('body');
    burgerMenuBTN.addEventListener('click', actionMenu);
    function actionMenu() {
        menu.classList.toggle('active')
        body.classList.toggle('hidden')
        burgerMenu.classList.toggle('active')
    }
}
getMobMenu()