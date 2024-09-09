function handleSubmit(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    const clubname = document.getElementById('clubname').value;
    const clubdesc = document.getElementById('clubdesc').value;
    const clubcity = document.getElementById('clubcity').value;
    const clubaudit = document.getElementById('clubaudit').value;
    const id = Date.now();
    // Получаем ранее сохраненные данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Добавляем новые данные в массив
    savedData.push({ id, clubname: clubname, clubdesc: clubdesc, clubcity: clubcity, clubaudit: clubaudit});

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Перенаправляем на страницу с результатом
    window.location.href = 'clubs.html';
}
