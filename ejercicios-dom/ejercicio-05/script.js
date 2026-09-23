// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums. 
// Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.maxWidth = '600px';
document.body.style.margin = '40px auto';
document.body.style.padding = '0 20px';
document.body.style.backgroundColor = '#f5f5f5';
document.body.style.color = '#333';

const section = document.createElement('section');
section.style.backgroundColor = '#fff';
section.style.borderRadius = '8px';
section.style.padding = '20px 30px';
section.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';

const ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.margin = '0';

for (let i = 0; i < albums.length; i++) {
    const li = document.createElement('li');
    li.textContent = albums[i];
    li.style.padding = '10px 0';
    li.style.borderBottom = '1px solid #eee';
    ul.appendChild(li);
}

section.appendChild(ul);
document.body.appendChild(section);