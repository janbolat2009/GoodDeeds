function handleSubmit(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    const eventname = document.getElementById('eventname').value;
    const eventdesc = document.getElementById('eventdesc').value;
    const eventcity = document.getElementById('eventcity').value;
    const eventdate = document.getElementById('eventdate').value;
    const id = Date.now();
    // Получаем ранее сохраненные данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Добавляем новые данные в массив
    savedData.push({ id, eventname: eventname, eventdesc: eventdesc, eventcity: eventcity, eventdate: eventdate});

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Перенаправляем на страницу с результатом
    window.location.href = 'events.html';
}
