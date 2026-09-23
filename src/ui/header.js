// Componente de interfaz de usuario
// Funcionalidad: Header

function renderHeader(tituloProyecto, navLinks = []) {
  const nav = navLinks.map((link) => `<a href="${link.url}">${link.label}</a>`).join('');
  return `
    <header>
      <h1>${tituloProyecto}</h1>
      <nav>${nav}</nav>
    </header>
  `;
}

module.exports = { renderHeader };
