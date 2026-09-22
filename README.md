# ProyectoGit

## Descripción
Proyecto colaborativo implementando Gitflow y Conventional Commits como estándar de trabajo en equipo. Demuestra el flujo de desarrollo profesional con ramas, pull requests y code reviews.

## Tecnologías Utilizadas
- Git / GitHub
- Node.js (plataforma de ejecución)
- Gitflow (estrategia de branching)
- Conventional Commits (estándar de mensajes)

## Instalación Local

### Requisitos
- Git instalado
- Node.js v14+ (opcional, según componentes)

### Pasos
```bash
# Clonar el repositorio
git clone https://github.com/camiloandresortiz2025-eng/ProyectoGit.git

# Acceder al directorio
cd ProyectoGit

# Configurar datos locales de usuario
git config user.name "Tu Nombre"
git config user.email "tu.email@example.com"

# Posicionarse en develop
git checkout develop
git pull origin develop
```

## Integrantes del Proyecto
- **Camilo Ortiz** (camiloandresortiz2025-eng) - Líder de Repositorio
- **Tomás** (Tomas0512) - Desarrollador
- **Edwin Delgado** (pmtsenda-a11y) - Desarrollador

## Estructura del Proyecto
```
ProyectoGit/
├── .github/                  # Plantillas para Issues y Pull Requests
│   └── PULL_REQUEST_TEMPLATE.md
├── src/                      # Código fuente principal de la aplicación
│   ├── components/           # Componentes reutilizables
│   ├── screens/              # Pantallas o vistas
│   └── utils/                # Funciones auxiliares o configuración
├── .eslintrc.json            # Configuración de análisis estático (Linter)
├── .gitignore                # Archivos y carpetas omitidos por Git
├── .prettierrc               # Reglas de formateo de código
├── LICENSE                   # Licencia del software
├── MANUAL_ESTANDARES.md      # Estándares de codificación adoptados
└── README.md                 # Documentación principal del proyecto
```

## Flujo de Trabajo (Gitflow)

### Ramas Principales
- **main**: Rama de producción, versiones estables
- **develop**: Rama de integración, desarrollo conjunto

### Ramas de Soporte
- **feature/***: Nuevas funcionalidades
- **bugfix/***: Corrección de errores
- **release/***: Preparación de versión

## Estándares de Commits (Conventional Commits)
- `feat:` Nueva funcionalidad
- `fix:` Corrección de errores
- `docs:` Cambios en documentación
- `style:` Formato o ajustes visuales
- `refactor:` Refactorización de código
- `test:` Adición o modificación de tests

**Ejemplo:**
```bash
git commit -m "feat: agregar componente de autenticación"
git commit -m "fix: resolver problema de validación en login"
```

## Proceso de Pull Request
1. Crear rama desde `develop`: `git checkout -b feature/nombre-funcionalidad`
2. Realizar cambios y commits
3. Subir rama: `git push origin feature/nombre-funcionalidad`
4. Crear PR en GitHub hacia `develop`
5. Asignar revisor del equipo
6. Revisor aprueba y realiza merge

## Licencia
Proyecto académico - Bootcamp ADSO

## Contacto
Para preguntas o sugerencias, contactar al Líder del Repositorio.
