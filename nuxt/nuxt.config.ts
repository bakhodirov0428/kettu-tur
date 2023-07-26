// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "assets/css/style.min.css",
    "assets/css/owl.carousel.min.css",
    "assets/css/tempusdominus-bootstrap-4.min.css",
  ],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",
        },
      ],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.4.1.min.js",
          body: true,
        },
        {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js",
          body: true,
        },
        {
          src: "assets/js/easing/easing.min.js",
          body: true,
        },
        {
          src: "assets/js/owlcarousel/owl.carousel.min.js",
          body: true,
        },
        {
          src: "assets/js/tempusdominus/moment.min.js",
          body: true,
        },
        {
          src: "assets/js/tempusdominus/moment-timezone.min.js",
          body: true,
        },
        {
          src: "assets/js/tempusdominus/tempusdominus-bootstrap-4.min.js",
          body: true,
        },
        {
          src: "assets/js/mail/jqBootstrapValidation.min.js",
          body: true,
        },
        {
          src: "assets/js/mail/contact.js",
          body: true,
        },
        {
          src: "assets/js/main.js",
          body: true,
        },
      ],
    },
  },
});
