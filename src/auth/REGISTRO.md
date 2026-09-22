# Módulo de Registro

## registrarUsuario(username, email, password)
Registra un nuevo usuario en el sistema.

**Parámetros:**
- `username` (string): Nombre de usuario
- `email` (string): Correo electrónico válido
- `password` (string): Contraseña

**Retorna:** `{ success: boolean, username: string, email: string }`

**Errores:**
- Lanza excepción si falta algún campo obligatorio.
- Lanza excepción si el formato del correo no es válido.
