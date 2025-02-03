const btnDrop = document.getElementById('drop1');
const btnDrop2 = document.getElementById('drop2');
const activeBtn = document.getElementById('nav__dropdown1');
const activeBtn1 = document.getElementById('nav__dropdown2');

btnDrop.addEventListener('click', function () {
    activeBtn.classList.toggle('nav__dropdown--active');
    if (activeBtn1.classList.contains('nav__dropdown--active')) {
        activeBtn1.classList.remove('nav__dropdown--active')
    }
});
btnDrop2.addEventListener('click', function () {
    activeBtn1.classList.toggle('nav__dropdown--active');
    if (activeBtn.classList.contains('nav__dropdown--active')) {
        activeBtn.classList.remove('nav__dropdown--active')
    }
});
document.addEventListener('click', function (event) {
    if (!activeBtn.contains(event.target) && !btnDrop.contains(event.target)) {
        activeBtn.classList.remove('nav__dropdown--active');
    }
    if (!activeBtn1.contains(event.target) && !btnDrop2.contains(event.target)) {
        activeBtn1.classList.remove('nav__dropdown--active');
    }
});