<template>
  <section>
    <!-- Topbar Start -->
    <div class="container-fluid bg-light pt-3 d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
              <p><i class="fa fa-envelope mr-2"></i>info@kettu-tur.uz</p>
              <p class="text-body px-3">|</p>
              <p><i class="fa fa-phone-alt mr-2"></i>+998 90 000-00-00</p>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <NuxtLink class="text-primary px-3" to="">
                <i class="fab fa-facebook-f"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-3" to="">
                <i class="fab fa-twitter"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-3" to="">
                <i class="fab fa-linkedin-in"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-3" to="">
                <i class="fab fa-instagram"></i>
              </NuxtLink>
              <NuxtLink class="text-primary pl-3" to="">
                <i class="fab fa-youtube"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <div class="container-fluid position-relative nav-bar p-0">
      <div
        class="container-lg position-relative p-0 px-lg-3"
        style="z-index: 9"
      >
        <nav
          class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5"
        >
          <NuxtLink to="/" class="navbar-brand">
            <h1 class="m-0 text-primary">
              <img src="img/LOGO.PNG" alt="" width="150" />
            </h1>
          </NuxtLink>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav ml-auto py-0">
              <NuxtLink to="/" class="nav-item nav-link" active-class="active">
                Bosh sahifa
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="nav-item nav-link"
                active-class="active"
              >
                Biz haqimizda
              </NuxtLink>
              <NuxtLink
                to="/services"
                class="nav-item nav-link"
                active-class="active"
              >
                Xizmatlarimiz
              </NuxtLink>
              <NuxtLink
                to="/packages"
                class="nav-item nav-link"
                active-class="active"
              >
                Tur paketlar
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="nav-item nav-link"
                active-class="active"
              >
                Aloqa
              </NuxtLink>

              <div class="nav-item dropdown">
                <div
                  style="cursor: pointer"
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Til
                </div>
                <div class="dropdown-menu border-0 rounded-0 m-0">
                  <NuxtLink to="/en" class="dropdown-item">English</NuxtLink>
                  <NuxtLink to="/uz" class="dropdown-item">O'zbek</NuxtLink>
                  <NuxtLink to="/ru" class="dropdown-item">Русский</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Navbar End -->
    <slot />

    <!-- Footer Start -->
    <div
      class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
      style="margin-top: 0px"
    >
      <div class="row pt-5">
        <div class="col-lg-3 col-md-6 mb-5">
          <NuxtLink to="/" class="navbar-brand">
            <h1 class="text-primary">
              <img src="./img/logo white.png" width="200" alt="" />
            </h1>
          </NuxtLink>
          <p>
            KettuTur - sayyohlik agentligi. Ko'plab davlatlarda turli xil safar
            yo'llarini amalga oshiruvchi agentlik. Kettu Tur bu agentliklar
            ichida o'zining yuqori xizmat ko'rsatish hamda ko'plab ajoyib
            takliflari bilan ajralib turadi.
          </p>
          <h6
            class="text-white text-uppercase mt-4 mb-3"
            style="letter-spacing: 5px"
          >
            Bizga Qo'shiling
          </h6>
          <div class="d-flex justify-content-start">
            <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="">
              <i class="fab fa-twitter"></i>
            </NuxtLink>
            <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="">
              <i class="fab fa-facebook-f"></i>
            </NuxtLink>
            <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="">
              <i class="fab fa-linkedin-in"></i>
            </NuxtLink>
            <NuxtLink class="btn btn-outline-primary btn-square" to="">
              <i class="fab fa-instagram"></i>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h5
            class="text-white text-uppercase mb-4"
            style="letter-spacing: 5px"
          >
            Xizmatlarimiz
          </h5>
          <div class="d-flex flex-column justify-content-start">
            <NuxtLink class="text-white-50 mb-2" to="/about">
              <i class="fa fa-angle-right mr-2"></i>
              Biz haqimizda
            </NuxtLink>
            <NuxtLink class="text-white-50 mb-2" to="/services">
              <i class="fa fa-angle-right mr-2"></i>
              Xizmatlarimiz
            </NuxtLink>
            <NuxtLink class="text-white-50 mb-2" to="/packages">
              <i class="fa fa-angle-right mr-2"></i>
              Tur paketlar
            </NuxtLink>
            <NuxtLink class="text-white-50 mb-2" to="/contact">
              <i class="fa fa-angle-right mr-2"></i>
              Biz bilan bog'lanish
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h5
            class="text-white text-uppercase mb-4"
            style="letter-spacing: 5px"
          >
            Ichki turizm
          </h5>
          <div class="d-flex flex-column justify-content-start">
            <NuxtLink class="text-white-50 mb-2" to="/packages">
              <i class="fa fa-angle-right mr-2"></i>
              Xivaga guruh sayohati
            </NuxtLink>
            <NuxtLink class="text-white-50 mb-2" to="/packages"
              ><i class="fa fa-angle-right mr-2"></i>Buxoroga guruh
              sayohati</NuxtLink
            >
            <NuxtLink class="text-white-50 mb-2" to="/packages"
              ><i class="fa fa-angle-right mr-2"></i>Samarqandga guruh
              sayohati</NuxtLink
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-5">
          <h5
            class="text-white text-uppercase mb-4"
            style="letter-spacing: 5px"
          >
            Biz bilan bog'lanish
          </h5>
          <p>
            <i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
          </p>
          <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
          <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
        </div>
      </div>
    </div>
    <div
      class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
      style="border-color: rgba(256, 256, 256, 0.1) !important"
    >
      <div class="row">
        <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
          <p class="m-0 text-white-50">
            Copyright &copy; <NuxtLink to="/">Kettu-Tur</NuxtLink>. All Rights
            Reserved.
          </p>
        </div>
        <div class="col-lg-6 text-center text-md-right">
          <p class="m-0 text-white-50">
            Developed by
            <NuxtLink to="https://zaky.uz">Zakiy - IT Company</NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <NuxtLink to="" class="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i class="fa fa-angle-double-up"></i
    ></NuxtLink>
  </section>
</template>

<script setup>
useHead({
  title: "Bosh sahifa",
});
</script>
