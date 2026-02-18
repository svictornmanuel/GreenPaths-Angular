const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuración
const PROJECT_ID = 'uffbrabseddykohjyzbv';
const OUTPUT_DIR = path.join(__dirname, '..', '..', 'shared', 'types');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'database.types.ts');

// Asegurar que la carpeta de salida existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

try {
  console.log('Generando tipos desde Supabase...');
  
  // Ejecutar comando de generación de tipos
  const command = `npx supabase gen types typescript --project-id ${PROJECT_ID} --schema public`;
  const types = execSync(command, { encoding: 'utf-8' });
  
  // Escribir el archivo
  fs.writeFileSync(OUTPUT_FILE, types);
  console.log(`Tipos generados correctamente en ${OUTPUT_FILE}`);
} catch (error) {
  console.error('Error al generar tipos:', error.message);
  process.exit(1);
}