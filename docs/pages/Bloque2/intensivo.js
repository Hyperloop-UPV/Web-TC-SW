
/* TC Software Hyperloop UPV  */

/* =====================================================
   1. VARIABLES Y TIPOS BÁSICOS
   ===================================================== */

/*
- En JS se usan `let` y `const` (evitar `var`)
- `let`: permite reasignar
- `const`: no permite reasignar
- `const` NO significa inmutable
- JS es de tipado dinámico
- El tipo depende del valor, no de la variable
- Tipos primitivos:
  string, number, boolean, null, undefined
*/

let edad = 12;    // Numérico
let altura = 1.8  // Numérico 
let nombre = "Javier";    // String
let casado = false;       // boolean

let ordenador = null;     // Null vacío

let direccion;            // Variable undefined

// Shadowing: propiedad por el cual las variables pueden cambiar de tipo


nombre = 23;    // Funcional


const dni = "1235678L";

dni = "23";   // Error




/* =====================================================
   2. NULL VS UNDEFINED
   ===================================================== */

/*
- `undefined`: variable declarada pero sin valor
- `null`: ausencia intencionada de valor
- JS distingue entre:
  “todavía no hay valor” y “no hay valor”
*/


console.log(ordenador);   // null: valor desconocido que todavía no tiene valor
console.log(direccion);   // undefined: no hay valor



/* =====================================================
   3. ARITMÉTICA Y OPERADORES
   ===================================================== */

/*
- Operadores aritméticos: +, -, *, /, %
- El operador + concatena strings
- El resto fuerzan conversión a number
- Operadores de comparación:
  == compara valor (evitar)
  === compara valor y tipo (usar)
- Operadores lógicos:
  && (AND), || (OR), ! (NOT)
*/


let a = 12, b = 4, res;

// operaciones básicas

a + b
a - b
a / b
a * b
a % b

a = a + b

a += b
a -= b
a *= b

b--; b++;
--b; ++b;


a = "hola ";
b = "mundo";

2 ** 7 // 2^7




/* =====================================================
   4. ESTRUCTURAS DE CONTROL
   ===================================================== */

/*
- if / else
- Condiciones simples y compuestas
- for: cuando sabemos cuántas iteraciones
- while: cuando no
*/

// Condicionales

if (a === b) {

}

else if (a == b) {


}
else {


}

// Bucles
a = 20
while (a < 50) {


  a += 10;
}

for (let i = 0; i < 10; i++) {



}



/* =====================================================
   5. FUNCIONES
   ===================================================== */

/*
- Una función encapsula lógica reutilizable
- Puede recibir parámetros
- Puede devolver un valor
- Funciones clásicas
- Funciones flecha
- Las funciones son ciudadanos de primera clase
*/

// Función normal
function sumar2(num, num2 = 2) {

  num += num2;

  return;
}


// Paso de variables por  valor

a = 7;

b = sumar2(a, a); // b = 14

a // 7

// Función arrow, funciones de orden superior

const concatenarHola = (input) => {
  return input + " Hola";
};

concatenarHola("sdf");



function ejecuta(fun) {

  fun();
}

// Uso de función anónima

ejecuta(() => { console.log("hola") });


// Funciones propias de los strings

a = "jsadfsadf "


a.trim();

a.length();

/* =====================================================
   6. ARRAYS (BASE)
   ===================================================== */

/*
- Un array es una lista ordenada
- Los índices empiezan en 0
- Propiedad length
- Métodos básicos:
  push, pop, shift, unshift
*/

let cajon = [8, "hola", true, () => { return 7 }];


// Adiciones
cajon.push(false);  // Añade al final

cajon.unshift(0);   // Añade al principio

// Eliminaciones
cajon.pop();      // Elimina último 

cajon.shift();    // Eliminar primero


cajon.length

/* =====================================================
   7. OBJETOS
   ===================================================== */


/*
- Un objeto representa una entidad
- Estructura clave–valor
- Acceso con punto o corchetes
- Las propiedades se pueden modificar y añadir
- Diferencia conceptual entre objeto y array
*/


// Creación de un objeto
let gente = { pepe: 7, juanes: 8, andreas: 10, fran: [4, 2] };

// Modificación 
gente.andreas = 32; 
gente.pepe++


nombre = "pablo";

gente.nombre    // undefined

gente[nombre] = 2; //




/* =====================================================
   8. REFERENCIAS VS VALORES (MUY IMPORTANTE)
   ===================================================== */

/*
- Los tipos primitivos se copian por valor
- Objetos y arrays se copian por referencia
- Dos variables pueden apuntar al mismo objeto
- Modificar una referencia afecta a todas
- Este concepto explica muchos bugs en JS
*/

// Crear array
let e3 = ["juan", "pepe"];


// Copia del array
let d = e3;

// Añadir un elemento, se añade tanto a d como a e3
d.push("andrés");


// Al añadir el elemento en población también se añadirá a gente
const poblacion = gente;
poblacion["julio"] = 8; 



/* =====================================================
   9. SPREAD OPERATOR (...)
   ===================================================== */

/*
- El spread operator expande arrays u objetos
- Se usa para copiar o combinar
- Permite trabajar de forma inmutable
- En objetos, si una propiedad se repite:
  gana la última
- El spread hace copias superficiales
*/

// Crear array
let arr = ["Alice", "Bob", "Kevin"];

// Copia y addición
let arr2 = [...arr, "Javier"];

// Copia y adicción
const sociedad = { ...poblacion, julia: 12 };

/* =====================================================
   10. FUNCIONES DE ARRAY (CLAVE DEL JS MODERNO)
   ===================================================== */

/*
- Pensar en arrays como datos
- map: transformar elementos
- filter: seleccionar elementos
- Programación declarativa vs imperativa
*/

// Numeros
let y = [2, 4, 6, 7];

// Definimos la función cuadrado dado un input devuelve su cuadrado

const cuadrado = n => n ** 2; // Equivalente a const  cuadrado = (n) =>{return n**2};

// Aplicamos la función map para obtenerun array donde a cada elemento se le ha aplicado la operación

const y2 = y.map(cuadrado);  // Map aplica la función cudrado a cada elemento


// Función par: devuelve true si el nuemero es par

const even = n => n % 2 == 0;

const y2Even = y.filter(even);    // Crea un array donde encontramos los mismos elementos de y que cumplen la condición definida en la función even


// Todo esto podemos rescribirlo utilizando funciones anónimas, comodines o lambda
const y2Compacto = y.map(n => n ** 2).filter(n => n % 2 == 0);

