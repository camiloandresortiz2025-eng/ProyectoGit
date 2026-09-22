// Componente de interfaz de usuario
// Funcionalidad: Header

function renderHeader(tituloProyecto) {
  return `
    <header>
      <h1>${tituloProyecto}</h1>
    </header>
  `;
}

module.exports = { renderHeader };
