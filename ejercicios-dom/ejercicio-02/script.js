// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div1 = document.createElement('div');
document.body.appendChild(div1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement('div');
const p2 = document.createElement('p');
div2.appendChild(p2);
document.body.appendChild(div2);

// No me ha quedado claro si se refería a un párrafo con 'p', así que lo resuelvo de ambas formas. 
// const div2 = document.createElement('div');
// div2.textContent = 'p';
// document.body.appendChild(div2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    div3.appendChild(p);
}
document.body.appendChild(div3);

// Igual que el anterior. Resuelto de ambas formas.
// const div3 = document.createElement('div');
// for (let i = 0; i < 6; i++) {
//     div3.textContent += 'p';
// }
// document.body.appendChild(div3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p4 = document.createElement('p');
p4.textContent = 'Soy dinámico!';
document.body.appendChild(p4);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
for (let i = 0; i < apps.length; i++) {
    const li = document.createElement('li');
    li.textContent = apps[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeElements = document.querySelectorAll('.fn-remove-me');
for (let i = 0; i < removeElements.length; i++) {
    removeElements[i].remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.

const p8 = document.createElement('p');
p8.textContent = 'Voy en medio!';
const divs = document.querySelectorAll('body > div');
divs[0].parentNode.insertBefore(p8, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDivs = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < insertDivs.length; i++) {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    insertDivs[i].appendChild(p);
}