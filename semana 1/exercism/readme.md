Twofer.ts
*/
name: string = "you": Este es el parámetro de la función. El tipo de dato que espera es un string (cadena de texto). Si cuando llamas a la función no proporcionas un valor para este parámetro, automáticamente utilizará el valor "you".
La función devuelve una cadena de texto que dice: "One for // nombre , one for me.".
Utiliza la técnica de interpolación de cadenas (indicado por los backticks ` y ${}), que permite insertar directamente el valor de una variable o expresión dentro de una cadena de texto.
Dependiendo del valor de name que se pase a la función, ese valor se inserta en lugar de ${name} en la cadena de texto final.*/
links del codigo
// 1.https://youtu.be/bM2w7c16ZjA

*/Resistor-color

Función colorCode
Esta función toma un parámetro llamado color, que es de tipo string. Su objetivo es devolver el índice numérico asociado a un color específico según una lista predeterminada.

Mapa de Colores (colorMap):
colorMap es un objeto que actúa como un diccionario donde cada clave es un color (como "black" o "red") y cada valor es el índice correspondiente (como 0 para "black").
Este mapa está definido dentro de la función y contiene pares clave-valor para diez colores diferentes.

La función primero convierte el color dado a minúsculas usando color.toLowerCase() para evitar problemas de coincidencia debido a mayúsculas/minúsculas.
Luego, verifica si el color proporcionado existe en el colorMap usando hasOwnProperty(). Esta función de JavaScript comprueba si el objeto tiene una propiedad con el nombre especificado.
Si el color existe, devuelve el índice asociado a ese color.
Si el color no está en el mapa, lanza un error indicando que el color es inválido.*/

links de los codigo
//2.https://youtu.be/hUxdE_81-PU 