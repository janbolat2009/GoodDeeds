function displayFormData() {
    // Получаем данные из localStorage
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];

    const resultContainer = document.getElementById('result1');
    resultContainer.innerHTML = ''; // Очищаем контейнер перед добавлением

    // Проходим по массиву данных и добавляем их на страницу
    savedData.forEach((data) => {
      resultContainer.insertAdjacentHTML('beforeend', `
                  <div class="user-data2" id="item-${data.id}">
                      <p><span class="user-data">${data.clubname}</span></p>
                      <p><span class="user-data1">${data.clubdesc}</span></p>
                      <p><span class="user-data3">${data.clubcity}</span></p><br>
                      <p><span class="user-data3">${data.clubaudit}</span></p><br>
                      <span class="edit" onclick="editItem(${data.id})">Редактировать</span><br>
                      <span class="delete" onclick="deleteItem(${data.id})">Удалить</span>
                  </div>
              `);
          });
      }

      function deleteItem(id) {
          // Получаем данные из localStorage
          let savedData = JSON.parse(localStorage.getItem('formData')) || [];

          // Фильтруем данные, исключая элемент с указанным id
          savedData = savedData.filter(item => item.id !== id);

          // Сохраняем обновленные данные в localStorage
          localStorage.setItem('formData', JSON.stringify(savedData));

          // Обновляем страницу
          displayFormData();
      }

      function editItem(id) {
          // Получаем данные из localStorage
          let savedData = JSON.parse(localStorage.getItem('formData')) || [];

          // Находим элемент для редактирования
          const item = savedData.find(item => item.id === id);
          if (item) {
              const newclubname = prompt('Введите новое имя:', item.clubname);
              const newclubdesc = prompt('Введите новое описание:', item.clubdesc);

              if (newclubname && newclubdesc) {
                  // Обновляем данные
                  item.clubname = newclubname;
                  item.clubdesc = newclubdesc;

                  // Сохраняем обновленные данные в localStorage
                  localStorage.setItem('formData', JSON.stringify(savedData));

                  // Обновляем страницу
                  displayFormData();
              }
          }
      }

      window.onload = displayFormData;




      // Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const choice = urlParams.get('choice');

// Определяем текст для каждого варианта
let resultText;
switch (choices) {
  case 'option1':
    resultText = 'Стать спонсором клуба';
    break;
}

// Отображаем текст на странице
document.getElementById('result1').innerText = resultText;
