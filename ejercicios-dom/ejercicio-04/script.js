// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click

const btn = document.getElementById('btnToClick');
btn.addEventListener('click', function (event) {
    console.log(event);
});

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', function (event) {
    console.log(event.target.value);
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', function (event) {
    console.log(event.target.value);
});