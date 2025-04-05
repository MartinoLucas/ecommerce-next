// post-build.js
const fs = require('fs');
const path = require('path');

// Directorio donde están los archivos generados por next build
const outDir = path.join(__dirname, 'out');

// Función para procesar archivos HTML
function processHTMLFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Si es un directorio, procesa sus archivos recursivamente
      processHTMLFiles(filePath);
    } else if (file.endsWith('.html')) {
      // Si es un archivo HTML, modifica las rutas
      let content = fs.readFileSync(filePath, 'utf8');

      // Reemplaza las rutas absolutas por relativas
      // Cambiar rutas como "/_next/static/" a "./_next/static/"
      content = content.replace(/"\/_next\//g, '"./_next/');

      // También modifica otras rutas absolutas si es necesario
      content = content.replace(/"\/(images|assets|icons)\//g, '"./$1/');

      fs.writeFileSync(filePath, content);
      console.log(`Processed: ${filePath}`);
    }
  });
}

// Inicia el procesamiento
console.log('Post-processing build output...');
processHTMLFiles(outDir);
console.log('Done!');
