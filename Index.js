let sideNavOpen = true;
document.getElementById("menuBtn").addEventListener('click', function () {
    const menu = document.getElementById('mainMenu');
    const rightPart = document.getElementById('rightPart')
    if (menu.classList.contains("sideMenuClose")) {
        menu.classList.remove('sideMenuClose');
        menu.classList.add('sideMenu');
        rightPart.classList.add('sideNavOpen')
        rightPart.classList.remove('sideNavClose')
    } else {
        menu.classList.add('sideMenuClose');
        menu.classList.remove('sideMenu');
        rightPart.classList.remove('sideNavOpen')
        rightPart.classList.add('sideNavClose')
    }
});

