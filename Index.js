document.getElementById("menuBtn").addEventListener('click', function () {
    const menu = document.getElementById('mainMenu');
    menu.classList.toggle('sideMenuClose');
    menu.classList.toggle('sideMenu');
});
document.getElementById("messageBtn").addEventListener('click', function (event) {
    event.stopPropagation();
    const messages = document.getElementById('messages');
    messages.classList.toggle('d-none');
});
document.body.addEventListener('click', function () {
    const messages = document.getElementById('messages');
    messages.classList.add('d-none');
});
