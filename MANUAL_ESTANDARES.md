# Manual de Estándares del Proyecto

## 1. Control de Versiones

### Configuración Inicial
Todo integrante del equipo debe configurar su identidad antes de realizar commits:
```bash
git config user.name "Nombre Apellido"
git config user.email "correo@example.com"
```

### Estados de Archivo
Git maneja tres estados principales para los archivos del repositorio:
- **Untracked**: Archivo nuevo no rastreado por Git
- **Staged**: Archivo preparado para el próximo commit (`git add`)
- **Committed**: Archivo guardado en el historial del repositorio (`git commit`)

Verificar el estado actual:
```bash
git status
```

## 2. Convención de Commits

Se aplica el estándar **Conventional Commits** en todo el proyecto:

| Prefijo | Uso |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de errores |
| `docs:` | Cambios en documentación |
| `style:` | Formato o ajustes visuales sin cambio de lógica |
| `refactor:` | Refactorización de código sin cambiar comportamiento |
| `test:` | Adición o corrección de pruebas |

**Formato:**
```
git commit -m "tipo: descripción breve en minúsculas"
```

**Ejemplos válidos:**
```bash
git commit -m "feat: estructura inicial del proyecto"
git commit -m "feat: agregar login"
git commit -m "fix: corregir validación de formulario"
git commit -m "docs: actualizar README con instrucciones"
```

## 3. Estrategia de Ramificación (Gitflow)

### Ramas Principales
- **main**: Contiene el código en producción, siempre estable.
- **develop**: Rama de integración donde convergen todas las funcionalidades antes de pasar a main.

### Ramas de Soporte
- **feature/nombre-funcionalidad**: Se crea desde `develop` para desarrollar una funcionalidad específica.
- **bugfix/nombre-error**: Se crea para corregir errores detectados.
- **release/version**: Se usa para preparar una nueva versión antes de fusionar a `main`.

### Nomenclatura
Las ramas feature deben nombrarse en minúsculas, con guiones y descriptivas:
```
feature/login
feature/registro-usuario
feature/ui-header
bugfix/error-validacion
```

## 4. Flujo de Trabajo Colaborativo

### Roles
- **Líder de Repositorio (Admin)**: Configura el repositorio, gestiona colaboradores, integra develop a main.
- **Desarrolladores (Collaborators)**: Trabajan en ramas feature, crean PRs, revisan código de compañeros.

### Proceso Estándar
1. El desarrollador se posiciona en `develop` y actualiza:
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Crea su rama de trabajo:
   ```bash
   git checkout -b feature/nombre-funcionalidad
   ```
3. Desarrolla y realiza al menos 3 commits siguiendo Conventional Commits.
4. Sube la rama al repositorio remoto:
   ```bash
   git push origin feature/nombre-funcionalidad
   ```
5. Crea un **Pull Request** en GitHub hacia `develop` (nunca directo a `main`).
6. Asigna un compañero como **Reviewer**.
7. El revisor evalúa los cambios (`Files changed`), comenta y aprueba.
8. Se realiza el **Merge** hacia `develop`.

### Sincronización Final
Una vez integradas todas las funcionalidades en `develop`:
```bash
git checkout develop
git pull origin develop
```
El Líder del Equipo crea el PR final `develop → main` para publicar la versión estable.

## 5. Resolución de Conflictos

Cuando dos ramas modifican las mismas líneas de código, Git señala un conflicto que debe resolverse manualmente:
1. Abrir el archivo en conflicto y localizar las marcas `<<<<<<<`, `=======`, `>>>>>>>`.
2. Decidir qué código conservar (o combinar ambos).
3. Eliminar las marcas de conflicto.
4. Agregar el archivo resuelto y crear un nuevo commit:
   ```bash
   git add archivo-resuelto.js
   git commit -m "fix: resolver conflicto de fusión en archivo-resuelto"
   ```

## 6. Organización del Repositorio

```
ProyectoGit/
├── src/                    # Código fuente ejecutable
├── .gitignore              # Exclusión de archivos sensibles
├── README.md               # Documentación principal
└── MANUAL_ESTANDARES.md    # Este documento
```

### Reglas Fundamentales
- **Archivos sensibles**: Nunca subir `node_modules/`, `.env`, `dist/`, `build/`.
- **README.md**: Debe incluir título, descripción, tecnologías, instalación e integrantes.
- **src/**: Todo el código ejecutable reside aquí, manteniendo la raíz limpia.
