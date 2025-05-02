const fs = require('fs').promises;

function validarFecha(fecha) {
  return /^\d{4}-\d{2}-\d{2}$/.test(fecha) && !isNaN(new Date(fecha));
}

function validarLinea(linea, numero) {
  const [fecha, nombre, id] = linea.split(',');
  const errores = [];
  
  if (!validarFecha(fecha)) errores.push('Fecha inválida');
  if (!nombre || nombre.trim() === '') errores.push('Campo nombre vacío');
  if (!/^\d+$/.test(id)) errores.push('ID no numérico');
  
  return errores.length > 0 ? `- Línea ${numero}: ${errores.join(', ')}` : null;
}

