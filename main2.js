function handleSubmit(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const id = Date.now();
    // Получаем ранее сохраненные данные из localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Добавляем новые данные в массив
    savedData.push({ id, title: title, content: content });

    // Сохраняем обновленные данные в localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Перенаправляем на страницу с результатом
    window.location.href = 'news.html';
}
