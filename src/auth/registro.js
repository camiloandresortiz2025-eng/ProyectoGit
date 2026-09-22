// Módulo de autenticación de usuarios
// Funcionalidad: Registro

function registrarUsuario(username, email, password) {
  if (!username || !email || !password) {
    throw new Error('Todos los campos son obligatorios');
  }
  return {
    success: true,
    username,
    email
  };
}

module.exports = { registrarUsuario };
