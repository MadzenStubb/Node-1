const fs = require("fs");

// Para leer un archivo

console.log("Antes de leer el archivo");

const lecturaDeArchivo = fs.readFileSync("index.html", "utf8");

console.log(lecturaDeArchivo);

console.log("despues de leer el archivo");

// Para cambiar el nombre de un archivo, y también su

console.log("Antes de cambiar el nombre");

fs.renameSync("index.html", "leprox.jsx");

console.log("despues de cambiar el nombre del archivo");

// Agregar contenido al final de un archivo.

fs.appendFileSync("leprox.jsx", "<h1>Que linda mi Mags</h1>");

console.log("despues de agregar el contenido");

// Reemplazar todos el contenido del archivo.

fs.writeFileSync("leprox.jsx", "<h1>Que linda mi Mags</h1>");

console.log("despues de reemplazar el contenido");

// Eliminar un archivo

fs.unlinkSync("leprox.jsx");

console.log("despues de eliminar el archivo");
