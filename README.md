# Katas de JavaScript

Este repositorio reúne una colección de ejercicios prácticos (**katas**) desarrollados para reforzar y consolidar los fundamentos de **JavaScript**.

El proyecto está orientado para repasar desde estructuras básicas de programación hasta la interacción con el navegador, la manipulación del DOM y el consumo asíncrono de APIs.

El objetivo no es construir una aplicación completa, sino trabajar cada concepto de forma independiente para comprender su funcionamiento y comportamiento.

## ⚖️ Filosofía del proyecto

Los ejercicios se han desarrollado de forma progresiva, usando herramientas nativas de JavaScript.

Este enfoque permite comprender mejor cómo se ejecuta el código, cómo se manipulan y transforman los datos, cómo se modifica dinámicamente una página web y cómo se gestionan operaciones asíncronas.

Además de resolver cada ejercicio, el propósito ha sido reforzar aspectos como:

- La descomposición de problemas en operaciones más pequeñas.
- El control del flujo de ejecución.
- La elección adecuada de estructuras de datos.
- La transformación y recorrido de colecciones.
- La interacción entre JavaScript y el entorno del navegador.
- La comprensión del flujo asíncrono de una aplicación.
- La escritura de código legible y fácilmente verificable.

## ⚙️ Conceptos trabajados

A lo largo de los diferentes ejercicios se han trabajado los siguientes conceptos:

### Variables y tipos de datos

Declaración de variables mediante `const` y `let`, junto con operaciones sobre strings, números y otros tipos de datos básicos.

### Estructuras de control

Uso de condicionales como `if` / `else` para controlar el flujo de ejecución en función de diferentes condiciones.

### Bucles e iteración

Recorrido de colecciones y ejecución repetitiva de operaciones mediante estructuras como:

- `for`
- `for...of`

### Arrays y objetos

Creación, acceso y modificación de estructuras de datos utilizando arrays y objetos, junto con métodos nativos como:

- `.push()`
- `.includes()`

### Manipulación del DOM

Interacción directa con la estructura de una página web mediante las APIs proporcionadas por el navegador.

Entre las operaciones realizadas se encuentran:

- Selección de elementos mediante `querySelector` y `getElementById`.
- Creación dinámica de nodos con `createElement`.
- Inserción de elementos mediante `appendChild` e `insertBefore`.
- Modificación de propiedades como `textContent` y `src`.
- Eliminación de elementos mediante `remove()`.

### Gestión de eventos

Captura y tratamiento de interacciones del usuario utilizando `addEventListener`.

Se han trabajado eventos como:

- `input`
- `change`

### Características de ES6+

Uso de funcionalidades modernas de JavaScript como:

- **Destructuring:** extracción de valores de objetos y arrays.
- **Arrow functions:** definición de funciones mediante una sintaxis más precisa.
- **Spread operator:** copia y composición de estructuras de datos.

### Métodos funcionales de arrays

Procesamiento de colecciones mediante métodos nativos como:

- `.map()`
- `.filter()`
- `.reduce()`
- `.find()`

Estos métodos permiten hacer operaciones de transformación, filtrado, búsqueda y agregación de datos evitando modificaciones innecesarias sobre las estructuras originales.

### Asincronía y consumo de APIs

Realización de peticiones HTTP a APIs públicas utilizando la función `fetch`.

Las respuestas y operaciones asíncronas se gestionan mediante promesas y el uso de `.then()`, permitiendo trabajar con datos obtenidos desde servicios externos.

## 📂 Organización del proyecto

Los ejercicios están organizados en tres bloques según los conceptos trabajados:

```
proyecto2-katas-javascript/
├── ejercicios-basicos-avanzados/   # 42 ejercicios de lógica, funciones, bucles, arrays y objetos.
├── ejercicios-dom/                 # 5 ejercicios de interacción y manipulación del DOM.
└── ejercicios-es6-asincronia/      # 9 ejercicios sobre ES6+, métodos funcionales, asincronía y APIs.
```