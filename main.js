console.log('Script loaded');


function checkUserStatus() {
    // Получаем статус пользователя из localStorage
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    // Получаем текущий URL страницы
    const currentPage = window.location.pathname;

    // Логируем текущее состояние для диагностики
    console.log('User logged in:', userLoggedIn);
    console.log('Current page:', currentPage);

    // Если пользователь не залогинен
    if (!userLoggedIn) {
        console.log('User is not logged in. Checking for registration page...');

        // Если мы не на странице регистрации, перенаправляем на неё
        if (currentPage !== '/register.html') {
            console.log('Redirecting to register.html');
            window.location.href = 'register.html';
        }
    } else if (userLoggedIn === 'true') {
        console.log('User is logged in. Checking for main page...');

        // Если пользователь залогинен, но не на странице main.html, перенаправляем его туда
        if (currentPage !== '/account.html') {
            console.log('Redirecting to account.html');
            window.location.href = 'account.html';
        }
    }
}

// Проверяем статус пользователя при загрузке страницы
window.onload = checkUserStatus;

  console.log(localStorage.getItem('userLoggedIn')); // Посмотрите, что выводится в консоли



  // Получаем элементы
const fileInput = document.getElementById('profile-photo');
const preview = document.getElementById('preview');

// Слушаем событие изменения файла
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Получаем выбранный файл

    if (file) {
        const reader = new FileReader();

        // Когда файл загружен, отображаем его как изображение
        reader.onload = function(e) {
            preview.src = e.target.result; // Заменяем изображение камеры на загруженное фото
        }

        reader.readAsDataURL(file); // Читаем файл как Data URL для предварительного просмотра
    }
});



// Получаем параметр из URL
const urlParams = new URLSearchParams(window.location.search);
const emailper = urlParams.get('emailper');

// Отображаем почту на странице
document.body.innerHTML = `<p class="emailperclass">${emailper}</p>`;
