let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuIcon.addEventListener('click', function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
})

