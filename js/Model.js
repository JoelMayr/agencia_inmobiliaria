/* =========================================================================
   MODELO (Model.js)
   -------------------------------------------------------------------------
   Este archivo es la "fuente de la verdad" de todo el contenido de la web.
   Es JavaScript puro (sin dependencias) y NO toca el DOM: solo define datos.

   >>> PARA PERSONALIZAR TU WEB, SOLO NECESITAS EDITAR ESTE ARCHIVO <<<

   Guía rápida de edición:
   1. NOMBRE Y MARCA        -> objeto `agencia.marca`
   2. HISTORIA / QUIÉNES    -> objeto `agencia.historia`
   3. FOTOS DE LA OFICINA   -> array `agencia.oficina.fotos`
      (reemplazá cada `url` por la ruta real de tu imagen, ej: "img/local-1.jpg")
   4. UBICACIÓN Y MAPA      -> objeto `agencia.ubicacion`
      (para el mapa, reemplazá `mapaEmbedUrl` por el iframe "src" que te da
       Google Maps al hacer clic en Compartir > Insertar un mapa)
   5. REDES SOCIALES        -> objeto `agencia.redes`
      (reemplazá cada `url` por el link real de tu Instagram/Facebook/WhatsApp)
   6. IMAGEN DEL HERO       -> `agencia.hero.imagenFondo`
   ========================================================================= */

const agencia = {

  // -----------------------------------------------------------------------
  // 1. MARCA / IDENTIDAD
  // -----------------------------------------------------------------------
  marca: {
    nombre: "Inmobiliaria Mayr",
    // Texto corto que aparece en el logo del header (podés dejar el nombre
    // completo o una sigla, ej: "VP")
    logoTexto: "Vértice",
    // Frase corta que acompaña al nombre en el header (opcional, dejar "" si no querés)
    eslogan: "Bienes raíces con criterio",
  },

  // -----------------------------------------------------------------------
  // 2. SECCIÓN HERO (portada)
  // -----------------------------------------------------------------------
  hero: {
    titulo: "Encontramos el lugar donde empieza tu próxima etapa",
    subtitulo:
      "Compra, venta y alquiler de propiedades con acompañamiento real, " +
      "de principio a fin.",
    textoBoton: "Conócenos",
    // Reemplazá esta URL por una foto real en alta resolución (arquitectura,
    // fachada de una propiedad, oficina, etc.). Podés usar una ruta local
    // como "img/hero.jpg" en vez de una URL externa.
    imagenFondo:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
  },

  // -----------------------------------------------------------------------
  // 3. QUIÉNES SOMOS / HISTORIA
  // -----------------------------------------------------------------------
  historia: {
    titulo: "Quiénes somos",
    parrafos: [
      "Desde 2010 acompañamos a familias y empresas de la zona en cada " +
        "operación inmobiliaria, con un criterio simple: asesorar como " +
        "asesoraríamos a alguien de nuestra propia familia.",
      "Hoy nuestro equipo combina conocimiento del mercado local, " +
        "tasaciones actualizadas y un proceso de compra-venta transparente, " +
        "sin letra chica.",
    ],
    // Datos destacados en formato "número + etiqueta". Podés agregar,
    // quitar o modificar los que quieras; el Controller los recorre
    // automáticamente sin que tengas que tocar el HTML.
    estadisticas: [
      { numero: "14", etiqueta: "años en el mercado" },
      { numero: "500+", etiqueta: "operaciones cerradas" },
      { numero: "98%", etiqueta: "clientes que nos recomiendan" },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. NUESTRA OFICINA (galería)
  // -----------------------------------------------------------------------
  oficina: {
    titulo: "Nuestra oficina",
    descripcion: "Te esperamos en un espacio pensado para conversar con calma sobre tu próximo paso.",
    // Cada objeto es una foto de la galería. Reemplazá `url` por la imagen
    // real y `alt` por una descripción corta (accesibilidad / SEO).
    fotos: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        alt: "Recepción de la oficina",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
        alt: "Sala de reuniones",
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
        alt: "Espacio de trabajo del equipo",
      },
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
        alt: "Fachada de la oficina",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. UBICACIÓN Y CONTACTO
  // -----------------------------------------------------------------------
  ubicacion: {
    titulo: "Ubicación y contacto",
    direccionTexto: "Av. Principal 1234, Piso 2 · Ciudad, Provincia",
    horario: "Lunes a viernes de 9 a 18 h · Sábados de 9 a 13 h",
    telefono: "+54 9 11 0000-0000",
    email: "contacto@verticepropiedades.com",
    // Pegá acá el "src" que te da Google Maps en Compartir > Insertar un mapa.
    // Si todavía no lo tenés, dejá esta URL de ejemplo: el mapa se va a ver,
    // pero apuntando a una ubicación genérica.
    mapaEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.994!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjInNTQuMCJX!5e0!3m2!1ses!2sar!4v1600000000000",
  },

  // -----------------------------------------------------------------------
  // 6. REDES SOCIALES
  // -----------------------------------------------------------------------
  redes: {
    instagram: {
      url: "https://instagram.com/tu_usuario",
      etiqueta: "Instagram",
    },
    facebook: {
      url: "https://facebook.com/tu_pagina",
      etiqueta: "Facebook",
    },
    whatsapp: {
      // Formato recomendado: https://wa.me/<código de país + número, sin espacios ni +>
      url: "https://wa.me/5491100000000",
      etiqueta: "WhatsApp",
    },
  },

  // -----------------------------------------------------------------------
  // 7. PIE DE PÁGINA
  // -----------------------------------------------------------------------
  footer: {
    textoDerechos: "Todos los derechos reservados.",
  },
};

/* Exportamos el objeto para que Controller.js pueda usarlo.
   `window.agencia` lo deja disponible como variable global en el navegador,
   ya que este proyecto no usa un bundler/módulos. Si en el futuro migrás a
   ES Modules, podés reemplazar esta línea por: export default agencia; */
window.agencia = agencia;
