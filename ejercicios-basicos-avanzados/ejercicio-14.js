// Ejercicio 14

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    const repetitions = {};

    for (const word of list) {
        if (repetitions[word] === undefined) {
            repetitions[word] = 1;
        } else {
            repetitions[word]++;
        }
    }

    return repetitions;
}

console.log(repeatCounter(words));