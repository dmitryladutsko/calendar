// Получаем ссылку на кнопку "Сохранить"
const saveButton = document.getElementById('saveButton');

// Определяем функцию saveEvent
function saveEvent() {
    // Получаем значения полей ввода
    const name = document.getElementById('nameInput').value;
    const date = document.getElementById('dateInput').value;
    const description = document.getElementById('descriptionInput').value;
    const ownerId = document.getElementById('ownerIdInput').value;

    // Формируем объект с данными
    const eventData = {
        name: name,
        date: date,
        description: description,
        ownerId: ownerId
    };

    // Отправляем POST-запрос на сервер
    fetch('http://localhost:37302/api/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Привязываем обработчик событий к кнопке "Сохранить"
saveButton.addEventListener('click', saveEvent);
//
//
// $.ajax({
//     type: "POST",
//     url: "https://reqbin.com/echo/post/json",
//     data: `{
//     "Id": 78912,
//     "Customer": "Jason Sweet",
//   }`,
//     success: function (result) {
//         console.log(result);
//     },
//     dataType: "json"
// });