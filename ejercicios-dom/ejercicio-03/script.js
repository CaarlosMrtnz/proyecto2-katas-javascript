// 3.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul1 = document.createElement('ul');
for (let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.textContent = countries[i];
    ul1.appendChild(li);
}
document.body.appendChild(ul1);

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ul3 = document.createElement('ul');
for (let i = 0; i < cars.length; i++) {
    const li = document.createElement('li');
    li.textContent = cars[i];
    ul3.appendChild(li);
}
printHereDiv.appendChild(ul3);

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const container = document.createElement('div');
container.id = 'cards-container';
for (let i = 0; i < countries2.length; i++) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = countries2[i].title;
    const img = document.createElement('img');
    img.src = countries2[i].imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    container.appendChild(div);
}
document.body.appendChild(container);

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';
btnRemoveLast.addEventListener('click', function () {
    const cards = container.querySelectorAll('div');
    if (cards.length > 0) {
        cards[cards.length - 1].remove();
    }
});
document.body.appendChild(btnRemoveLast);

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const cardDivs = container.querySelectorAll('div');
for (let i = 0; i < cardDivs.length; i++) {
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.addEventListener('click', function () {
        cardDivs[i].remove();
    });
    cardDivs[i].appendChild(btn);
}