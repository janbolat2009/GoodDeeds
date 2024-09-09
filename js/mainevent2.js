function displayFormData() {
    // Получаем данные из localStorage
    const savedData = JSON.parse(localStorage.getItem('formData')) || [];

    const resultContainer = document.getElementById('result2');
    resultContainer.innerHTML = ''; // Очищаем контейнер перед добавлением

    // Проходим по массиву данных и добавляем их на страницу
    savedData.forEach((data) => {
      resultContainer.insertAdjacentHTML('beforeend', `
                  <div class="user-data2" id="item-${data.id}">
                      <p><span class="user-data">${data.eventname}</span></p>
                      <p><span class="user-data1">${data.eventdesc}</span></p>
                      <p><span class="user-data3">${data.eventcity}</span></p><br>
                      <p><span class="user-data3">${data.eventdate}</span></p><br>
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
              const neweventname = prompt('Введите новое имя:', item.eventname);
              const neweventdesc = prompt('Введите новое описание:', item.eventdesc);

              if (newclubname && newclubdesc) {
                  // Обновляем данные
                  item.eventname = neweventname;
                  item.eventdesc = neweventdesc;

                  // Сохраняем обновленные данные в localStorage
                  localStorage.setItem('formData', JSON.stringify(savedData));

                  // Обновляем страницу
                  displayFormData();
              }
          }
      }

      window.onload = displayFormData;
