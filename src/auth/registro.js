// Módulo de autenticación de usuarios
// Funcionalidad: Registro

function validarEmail(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
}

function registrarUsuario(username, email, password) {
  if (!username || !email || !password) {
    throw new Error('Todos los campos son obligatorios');
  }
  if (!validarEmail(email)) {
    throw new Error('El formato del correo electrónico no es válido');
  }
  return {
    success: true,
    username,
    email
  };
}

module.exports = { registrarUsuario };
