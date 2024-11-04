const htmlTag = document.querySelector('#htmlTag');
const moon = document.querySelector('#moon');

moon.addEventListener('click', function () {
    htmlTag.classList.toggle('dark');
});