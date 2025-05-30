fetch('http://localhost:5000/')
  .then(response => response.text())
  .then(data => {
    document.getElementById('status').innerText = data;
  })
  .catch(error => {
    document.getElementById('status').innerText = 'Erro ao conectar com a API.';
  });
