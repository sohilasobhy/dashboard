const menu = document.getElementById('mainMenu');
const rightPart = document.getElementById('rightPart')
function closeMenu() {
    menu.classList.add('sideMenuClose');
    menu.classList.remove('sideMenu');
    rightPart.classList.remove('sideNavOpen')
    rightPart.classList.add('sideNavClose')
    document.body.classList.remove("Open")
}
function openMenu() {
    menu.classList.remove('sideMenuClose');
    menu.classList.add('sideMenu');
    rightPart.classList.add('sideNavOpen')
    rightPart.classList.remove('sideNavClose')
    document.body.classList.add("Open")
}
document.getElementById("menuBtn").addEventListener('click', function () {
    if (menu.classList.contains("sideMenuClose")) {
        openMenu()
    } else {
        closeMenu()
    }
});
document.getElementById('closeBtn').addEventListener('click', function () {
    closeMenu()
});

window.onresize = function () {
    if (window.innerWidth <= 992) {
        closeMenu();
    } else {
        openMenu()
    }
};

