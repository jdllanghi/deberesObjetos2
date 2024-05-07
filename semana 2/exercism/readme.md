dualcolor
1. `const COLORS = [...]`:
 - Aquí estamos definiendo una constante llamada `COLORS`, la cual contiene los nombres de colores
utilizados en el sistema de codificación de resistencias electrónicas. Cada color corresponde a un
número específico en este sistema. Por ejemplo, "rojo" puede representar el número 2.

2. `const colorCode = (color: string): number => ...`:
 - Esta línea de código define una función llamada `colorCode`. Esta función toma como entrada un
color (por ejemplo, "rojo") y devuelve el número asociado a ese color en el sistema de codificación de
resistencias. Para hacer esto, la función busca el índice del color en el arreglo `COLORS`. Si encuentra el
color, devuelve su posición en el arreglo (que corresponde a su número). Si no encuentra el color,
devuelve -1.

3. `export const decodedValue = ([tens, ones]: string[]): number => ...`:
 - Aquí estamos exportando una función llamada `decodedValue`. Esta función toma un arreglo de dos
elementos, que normalmente representan las bandas de colores de una resistencia (la banda de
decenas y la banda de unidades). Utilizamos la desestructuración de arreglos para asignar estos
elementos a las variables `tens` y `ones`. Luego, calculamos el valor numérico de la resistencia
combinando los números asociados a cada color. Para la banda de decenas (`tens`), multiplicamos su
número por 10 para asegurarnos de que esté en la posición correcta en el valor final de la resistencia.
Luego sumamos el número asociado a la banda de unidades (`ones`). En resumen, esta función nos
permite obtener el valor numérico de una resistencia basándonos en sus bandas de colores. Por
ejemplo, si las bandas de colores son "rojo" y "verde", la función devolverá 25, que es el valor de la
resistencia en ohmios.
links del codigo
// 1. https://www.youtube.com/watch?v=T0GImctC5pA&ab_channel=JUANDIEGOLLANGHISARABIA 


triocolr
1. Colors 
   contiene los nombres de  las bandas de las resistencias para codificar su valor.
   - Se usa `as const` para que TypeScript trate a `Colors` como una tupla inmutable y pueda inferir un tipo más específico (cada elemento es un valor literal de cadena), lo que ayuda en la precisión y seguridad del tipo.


2. `Color`
   - Se define un tipo `Color` que es una unión de todos los elementos del arreglo `Colors`.
   - Este tipo se utiliza para asegurar que los valores usados en funciones relacionadas sean exclusivamente uno de los colores especificados en el arreglo `Colors`.

3. `prefixes`
   - Este arreglo contiene tuplas de números y sus correspondientes prefijos de unidad (como "giga", "mega", "kilo"), utilizados para representar los valores grandes de resistencias de forma simplificada.
   - Al igual que con `Colors`, se usa `as const` para asegurar que los valores en `prefixes` no cambien y para que TypeScript pueda inferir los tipos de manera más precisa.

4. `decodedResistorValue`
   - Esta función decodifica el valor de una resistencia basada en las bandas de colores.
   -  Recibe un arreglo de tres `Color`, correspondiente a las tres primeras bandas de una resistencia.
   
     - **Índices de Color**: Obtiene los índices de los colores (`band1`, `band2`, `band3`) en `Colors`, y los asigna a `tens`, `ones`, y `zeros` respectivamente.
     - **Cálculo del Valor**: Calcula el valor de la resistencia con la fórmula `(tens * 10 + ones) * 10 ** zeros`, donde `tens` es el valor de las decenas, `ones` el de las unidades, y `zeros` determina el número de ceros a añadir.
     - **Uso de Prefijos**: Busca el prefijo adecuado en `prefixes` basándose en el tamaño del número. Si el número es suficientemente grande, se utiliza un prefijo para simplificar la representación del valor.
  Resultado Retorna el valor de la resistencia en forma de cadena, incluyendo el prefijo y la unidad "ohms", como "10 kiloohms".

links del codigo
// 2. https://www.youtube.com/watch?v=RmD7z2yn868&ab_channel=JUANDIEGOLLANGHISARABIA 