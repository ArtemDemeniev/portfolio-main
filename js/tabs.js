const tabs = document.querySelectorAll('.tabs__tab');
const contentBoxes = document.querySelectorAll('.tabs__content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Убираем активный класс у всех вкладок и контента
        tabs.forEach(t => t.classList.remove('tabs__tab--active'));
        contentBoxes.forEach(c => c.classList.remove('tabs__content--active'));

        // Добавляем активный класс к текущей вкладке и её контенту
        this.classList.add('tabs__tab--active');
        document.querySelector(`#${this.dataset.tab}`).classList.add('tabs__content--active');
    });
});