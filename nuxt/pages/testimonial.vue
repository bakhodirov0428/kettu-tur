<template>
  <!-- Topbar Start -->
  <div class="container-fluid bg-light pt-3 d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center">
            <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
            <p class="text-body px-3">|</p>
            <p><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
          </div>
        </div>
        <div class="col-lg-6 text-center text-lg-right">
          <div class="d-inline-flex align-items-center">
            <NuxtLink class="text-primary px-3" to="/">
              <i class="fab fa-facebook-f"></i>
            </NuxtLink>
            <NuxtLink class="text-primary px-3" to="/">
              <i class="fab fa-twitter"></i>
            </NuxtLink>
            <NuxtLink class="text-primary px-3" to="/">
              <i class="fab fa-linkedin-in"></i>
            </NuxtLink>
            <NuxtLink class="text-primary px-3" to="/">
              <i class="fab fa-instagram"></i>
            </NuxtLink>
            <NuxtLink class="text-primary pl-3" to="/">
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
    <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9">
      <nav
        class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5"
      >
        <a to="/" class="navbar-brand">
          <h1 class="m-0 text-primary">
            <span class="text-dark">TRAVEL</span>ER
          </h1>
        </a>
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
            <NuxtLink
              to="/
              /index"
              class="nav-item nav-link"
              >Home</NuxtLink
            >
            <NuxtLink to="/about" class="nav-item nav-link">About</NuxtLink>
            <NuxtLink to="/service" class="nav-item nav-link"
              >Services</NuxtLink
            >
            <NuxtLink to="/package" class="nav-item nav-link"
              >Tour Packages</NuxtLink
            >
            <div class="nav-item dropdown">
              <NuxtLink
                to="/#"
                class="nav-link dropdown-toggle active"
                data-toggle="dropdown"
                >Pages</NuxtLink
              >
              <div class="dropdown-menu border-0 rounded-0 m-0">
                <NuxtLink to="/blog" class="dropdown-item">Blog Grid</NuxtLink>
                <NuxtLink to="/single" class="dropdown-item"
                  >Blog Detail</NuxtLink
                >
                <NuxtLink to="/destination" class="dropdown-item"
                  >Destination</NuxtLink
                >
                <NuxtLink to="/guide" class="dropdown-item"
                  >Travel Guides</NuxtLink
                >
                <NuxtLink to="/testimonial" class="dropdown-item active"
                  >Testimonial</NuxtLink
                >
              </div>
            </div>
            <NuxtLink to="//contact" class="nav-item nav-link"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->

  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">Testimonial</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" to="/">Home</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">Testimonial</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Booking Start -->
  <div class="container-fluid booking mt-5 pb-5">
    <div class="container pb-5">
      <div class="bg-light shadow" style="padding: 30px">
        <div class="row align-items-center" style="min-height: 60px">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-3">
                <div class="mb-3 mb-md-0">
                  <select class="custom-select px-4" style="height: 47px">
                    <option selected>Destination</option>
                    <option value="1">Destination 1</option>
                    <option value="2">Destination 1</option>
                    <option value="3">Destination 1</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3 mb-md-0">
                  <div class="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      class="form-control p-4 datetimepicker-input"
                      placeholder="Depart Date"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3 mb-md-0">
                  <div class="date" id="date2" data-target-input="nearest">
                    <input
                      type="text"
                      class="form-control p-4 datetimepicker-input"
                      placeholder="Return Date"
                      data-target="#date2"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="mb-3 mb-md-0">
                  <select class="custom-select px-4" style="height: 47px">
                    <option selected>Duration</option>
                    <option value="1">Duration 1</option>
                    <option value="2">Duration 1</option>
                    <option value="3">Duration 1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <button
              class="btn btn-primary btn-block"
              type="submit"
              style="height: 47px; margin-top: -2px"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Booking End -->

  <!-- Testimonial Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          Testimonial
        </h6>
        <h1>What Say Our Clients</h1>
      </div>
      <div class="owl-carousel testimonial-carousel">
        <div class="text-center pb-4">
          <img
            class="img-fluid mx-auto"
            src="/img/testimonial-1.jpg"
            style="width: 100px; height: 100px"
          />
          <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 class="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div class="text-center">
          <img
            class="img-fluid mx-auto"
            src="/img/testimonial-2.jpg"
            style="width: 100px; height: 100px"
          />
          <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 class="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div class="text-center">
          <img
            class="img-fluid mx-auto"
            src="/img/testimonial-3.jpg"
            style="width: 100px; height: 100px"
          />
          <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 class="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
        <div class="text-center">
          <img
            class="img-fluid mx-auto"
            src="/img/testimonial-4.jpg"
            style="width: 100px; height: 100px"
          />
          <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
              stet amet eirmod eos labore diam
            </p>
            <h5 class="text-truncate">Client Name</h5>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Testimonial End -->
</template>
