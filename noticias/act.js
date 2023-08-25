paginas=["https://www.abc.com.py/","https://www.ultimahora.com/","https://cincodias.elpais.com/"];
const anterior = document.getElementById('anterior');
const afterButton = document.getElementById('siguiente');
const iframe = document.getElementById('iframe');
cont=paginas.legnth


beforeButton.addEventListener('click', () => {
pageFrame.src = 'before.html';
});

afterButton.addEventListener('click', () => {
    pageFrame.src = 'after.html';
    }
);