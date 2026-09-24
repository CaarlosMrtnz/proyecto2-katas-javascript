/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los 
nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página. */

/* Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url 
necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la 
documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, 
en la slide siguiente tendréis la url directa de esos datos. */

/* URL: https://thronesapi.com/api/v2/Characters */

const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
    .then((response) => response.json())
    .then((characters) => {
        characters.forEach((character) => {
            const option = document.createElement('option');
            option.value = character.imageUrl;
            option.textContent = character.fullName;
            select.appendChild(option);
        });
    });

select.addEventListener('change', (e) => {
    img.src = e.target.value;
});