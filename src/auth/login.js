// Módulo de autenticación de usuarios
// Funcionalidad: Login

function login(username, password) {
  if (!username || !password) {
    throw new Error('Usuario y contraseña son obligatorios');
  }
  if (password.length < 6) {
    throw new Error('La contraseña debe tener al menos 6 caracteres');
  }
  // Lógica de validación de credenciales (placeholder)
  return {
    success: true,
    user: username
  };
}

module.exports = { login };
