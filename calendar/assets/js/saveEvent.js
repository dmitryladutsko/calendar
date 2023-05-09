// Получаем элемент кнопки
const saveButton = document.getElementById("saveButton");

async function saveEvent(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

// Example usage:
const data = {
    name: 'dima',
    date: 'ee',
    description: 'sgsgs',
    ownerId: 12
};
const url = 'http://localhost:8080/api/events';
saveEvent(url, data)
    // .then(response => console.log(response))
    .catch(error => console.error(error));
