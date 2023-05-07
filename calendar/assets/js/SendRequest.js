function sendRequest() {
    fetch('http://localhost:37302/api/public/test')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}