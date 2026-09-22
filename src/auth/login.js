// Módulo de autenticación de usuarios
// Funcionalidad: Login

function login(username, password) {
  if (!username || !password) {
    throw new Error('Usuario y contraseña son obligatorios');
  }
  // Lógica de validación de credenciales (placeholder)
  return {
    success: true,
    user: username
  };
}

module.exports = { login };
