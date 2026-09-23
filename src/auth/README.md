# Módulo de Autenticación

## login(username, password)
Valida credenciales de usuario.

**Parámetros:**
- `username` (string): Nombre de usuario
- `password` (string): Contraseña (mínimo 6 caracteres)

**Retorna:** `{ success: boolean, user: string }`

**Errores:**
- Lanza excepción si faltan usuario o contraseña.
- Lanza excepción si la contraseña tiene menos de 6 caracteres.
