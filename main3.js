function displayFormData() {
    // Получаем данные из localStorage
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // Очищаем контейнер перед добавлением

    // Проходим по массиву данных и добавляем их на страницу
    savedData.forEach((data) => {
      resultContainer.insertAdjacentHTML('beforeend', `
                  <div class="user-data2" id="item-${data.id}">
                      <p><span class="user-data">${data.title}</span></p>
                      <p><span class="user-data1">${data.content}</span></p>
                      <span class="edit" onclick="editItem(${data.id})">Редактировать</span>
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
              const newTitle = prompt('Введите новое имя:', item.title);
              const newContent = prompt('Введите новый Email:', item.content);

              if (newTitle && newContent) {
                  // Обновляем данные
                  item.title = newTitle;
                  item.content = newContent;

                  // Сохраняем обновленные данные в localStorage
                  localStorage.setItem('formData', JSON.stringify(savedData));

                  // Обновляем страницу
                  displayFormData();
              }
          }
      }

      window.onload = displayFormData;
