// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const copyPointsList = [...pointsList];
console.log('2.1', copyPointsList);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };
console.log('2.2', toyCopy);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList3 = [32, 54, 21, 64, 75, 43];
const pointsLis3_2 = [54, 87, 99, 65, 32];
const allPoints = [...pointsList3, ...pointsLis3_2];
console.log('2.3', allPoints);

// 2.4 Dado los siguientes objetos. 
// Crea un nuevo objeto fusionando los dos con spread operators.
const toy4 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'led', power: ['laser', 'volar'] }
const mergedToy = { ...toy4, ...toyUpdate };
console.log('2.4', mergedToy);

// 2.5 Dado el siguiente array. 
// Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsWithoutThird = [...colors.slice(0, 2), ...colors.slice(3)];
console.log('2.5', colorsWithoutThird);