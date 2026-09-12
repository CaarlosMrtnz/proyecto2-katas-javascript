// Ejercicio 22

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

// Recuerda no usar frutas duplicadas.

// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

const resultingFoodSchedule = foodSchedule.map((food) => ({ ...food }));

let fruitIndex = 0;

for (let i = 0; i < resultingFoodSchedule.length; i++) {
    if (!resultingFoodSchedule[i].isVegan) {
        resultingFoodSchedule[i] = {
        name: fruits[fruitIndex],
        isVegan: true,
        };

    fruitIndex++;

    }
}

console.log(resultingFoodSchedule);