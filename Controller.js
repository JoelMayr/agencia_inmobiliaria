/* =========================================================================
   CONTROLADOR (Controller.js)
   -------------------------------------------------------------------------
   Este archivo conecta el MODELO (Model.js) con la VISTA (index.html).
   No tiene datos "hardcodeados": todo lo que se ve en pantalla sale del
   objeto `agencia` definido en Model.js.

   Si en el futuro agregás una sección nueva:
   1. Agregá el dato correspondiente en Model.js.
   2. Agregá el contenedor vacío con su `data-*` en index.html.
   3. Agregá acá una función `render...()` que lo complete, y llamala
      desde `initApp()` al final del archivo.

   No hace falta tocar nada más: este patrón mantiene datos, estructura y
   comportamiento separados (Modelo / Vista / Controlador).
   ========================================================================= */

/**
 * Rellena el header: nombre de marca, eslogan y año actual del footer.
 */
function renderMarca() {
  document.querySelector('[data-marca="nombre"]').textContent = agencia.marca.logoTexto;
  const eslogan = document.querySelector('[data-marca="eslogan"]');
  if (agencia.marca.eslogan) {
    eslogan.textContent = agencia.marca.eslogan;
  } else {
    eslogan.remove();
  }
  document.title = `${agencia.marca.nombre} · Inmobiliaria`;
}

/**
 * Rellena la sección Hero (portada).
 */
function renderHero() {
  const hero = document.querySelector('[data-section="hero"]');
  hero.style.backgroundImage =
    `linear-gradient(180deg, rgba(20,10,10,.55), rgba(20,10,10,.75)), url("${agencia.hero.imagenFondo}")`;

  document.querySelector('[data-hero="titulo"]').textContent = agencia.hero.titulo;
  document.querySelector('[data-hero="subtitulo"]').textContent = agencia.hero.subtitulo;

  const boton = document.querySelector('[data-hero="boton"]');
  boton.textContent = agencia.hero.textoBoton;
  // El botón hace scroll suave hacia la sección "Quiénes somos"
  boton.addEventListener("click", () => {
    document.querySelector('[data-section="historia"]').scrollIntoView({ behavior: "smooth" });
  });
}

/**
 * Rellena la sección "Quiénes somos": título, párrafos y estadísticas.
 */
function renderHistoria() {
  document.querySelector('[data-historia="titulo"]').textContent = agencia.historia.titulo;

  const contenedorParrafos = document.querySelector('[data-historia="parrafos"]');
  contenedorParrafos.innerHTML = ""; // limpiamos por si se recarga el render
  agencia.historia.parrafos.forEach((texto) => {
    const p = document.createElement("p");
    p.textContent = texto;
    contenedorParrafos.appendChild(p);
  });

  const contenedorStats = document.querySelector('[data-historia="estadisticas"]');
  contenedorStats.innerHTML = "";
  agencia.historia.estadisticas.forEach((stat) => {
    const item = document.createElement("div");
    item.className = "stat";
    item.innerHTML = `
      <span class="stat__numero">${stat.numero}</span>
      <span class="stat__etiqueta">${stat.etiqueta}</span>
    `;
    contenedorStats.appendChild(item);
  });
}

/**
 * Rellena la galería de fotos de la oficina.
 */
function renderOficina() {
  document.querySelector('[data-oficina="titulo"]').textContent = agencia.oficina.titulo;
  document.querySelector('[data-oficina="descripcion"]').textContent = agencia.oficina.descripcion;

  const galeria = document.querySelector('[data-oficina="galeria"]');
  galeria.innerHTML = "";
  agencia.oficina.fotos.forEach((foto) => {
    const figure = document.createElement("figure");
    figure.className = "galeria__item";
    figure.innerHTML = `<img src="${foto.url}" alt="${foto.alt}" loading="lazy" />`;
    galeria.appendChild(figure);
  });
}

/**
 * Rellena la sección de ubicación, contacto, mapa y redes sociales.
 */
function renderUbicacion() {
  const u = agencia.ubicacion;
  document.querySelector('[data-ubicacion="titulo"]').textContent = u.titulo;
  document.querySelector('[data-ubicacion="direccion"]').textContent = u.direccionTexto;
  document.querySelector('[data-ubicacion="horario"]').textContent = u.horario;

  const telLink = document.querySelector('[data-ubicacion="telefono"]');
  telLink.textContent = u.telefono;
  telLink.href = `tel:${u.telefono.replace(/[^+\d]/g, "")}`;

  const emailLink = document.querySelector('[data-ubicacion="email"]');
  emailLink.textContent = u.email;
  emailLink.href = `mailto:${u.email}`;

  const iframe = document.querySelector('[data-ubicacion="mapa"]');
  iframe.src = u.mapaEmbedUrl;

  // Redes sociales: recorremos el objeto `agencia.redes` para no depender
  // de que existan las tres siempre; si agregás una red nueva en el Modelo
  // (ej. LinkedIn), este bloque la va a renderizar sin cambios de código,
  // siempre que también agregues su link en index.html con el mismo data-red.
  Object.entries(agencia.redes).forEach(([clave, red]) => {
    const link = document.querySelector(`[data-red="${clave}"]`);
    if (link) {
      link.href = red.url;
      link.setAttribute("aria-label", red.etiqueta);
      link.querySelector(".red-social__texto").textContent = red.etiqueta;
    }
  });
}

/**
 * Rellena el pie de página (footer): nombre de la agencia y año actual.
 */
function renderFooter() {
  document.querySelector('[data-footer="nombre"]').textContent = agencia.marca.nombre;
  document.querySelector('[data-footer="anio"]').textContent = new Date().getFullYear();
  document.querySelector('[data-footer="derechos"]').textContent = agencia.footer.textoDerechos;
}

/**
 * Header sticky con sombra al hacer scroll (mejora visual, no depende del Modelo).
 */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 10);
  });
}

/**
 * Menú de navegación mobile (hamburguesa).
 */
function initMenuMobile() {
  const boton = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");
  boton.addEventListener("click", () => {
    const abierto = nav.classList.toggle("header__nav--abierto");
    boton.setAttribute("aria-expanded", String(abierto));
  });
  // Cierra el menú al tocar un link (útil en mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("header__nav--abierto");
      boton.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Punto de entrada: se ejecuta una vez cargado el DOM y orquesta
 * todas las funciones de renderizado.
 */
function initApp() {
  renderMarca();
  renderHero();
  renderHistoria();
  renderOficina();
  renderUbicacion();
  renderFooter();
  initHeaderScroll();
  initMenuMobile();
}

document.addEventListener("DOMContentLoaded", initApp);
