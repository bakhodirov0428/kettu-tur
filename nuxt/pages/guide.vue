<template>
  <!-- Topbar Start -->
  <div class="container-fluid bg-light pt-3 d-none d-lg-block">
    1
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
    <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9">
      <nav
        class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5"
      >
        <NuxtLink to="" class="navbar-brand">
          <h1 class="m-0 text-primary">
            <span class="text-dark">TRAVEL</span>ER
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
            <NuxtLink to="index.html" class="nav-item nav-link">Home</NuxtLink>
            <NuxtLink to="about.html" class="nav-item nav-link">About</NuxtLink>
            <NuxtLink to="service.html" class="nav-item nav-link"
              >Services</NuxtLink
            >
            <NuxtLink to="package.html" class="nav-item nav-link"
              >Tour Packages</NuxtLink
            >
            <div class="nav-item dropdown">
              <NuxtLink
                to="#"
                class="nav-link dropdown-toggle active"
                data-toggle="dropdown"
                >Pages</NuxtLink
              >
              <div class="dropdown-menu border-0 rounded-0 m-0">
                <NuxtLink to="blog.html" class="dropdown-item"
                  >Blog Grid</NuxtLink
                >
                <NuxtLink to="single.html" class="dropdown-item"
                  >Blog Detail</NuxtLink
                >
                <NuxtLink to="destination.html" class="dropdown-item"
                  >Destination</NuxtLink
                >
                <NuxtLink to="guide.html" class="dropdown-item active"
                  >Travel Guides</NuxtLink
                >
                <NuxtLink to="testimonial.html" class="dropdown-item"
                  >Testimonial</NuxtLink
                >
              </div>
            </div>
            <NuxtLink to="contact.html" class="nav-item nav-link"
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
        <h3 class="display-4 text-white text-uppercase">Guides</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" to="">Home</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">Guides</p>
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

  <!-- Team Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          Guides
        </h6>
        <h1>Our Travel Guides</h1>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-1.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-2.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-3.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-4.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-1.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-2.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-3.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
          <div class="team-item bg-white mb-4">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="/img/team-4.jpg" alt="" />
              <div class="team-social">
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-twitter"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-facebook-f"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-instagram"></i
                ></NuxtLink>
                <NuxtLink class="btn btn-outline-primary btn-square" to=""
                  ><i class="fab fa-linkedin-in"></i
                ></NuxtLink>
              </div>
            </div>
            <div class="text-center py-4">
              <h5 class="text-truncate">Guide Name</h5>
              <p class="m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->

  <!-- Footer Start -->
  <div
    class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
    style="margin-top: 90px"
  >
    <div class="row pt-5">
      <div class="col-lg-3 col-md-6 mb-5">
        <NuxtLink to="" class="navbar-brand">
          <h1 class="text-primary"><span class="text-white">TRAVEL</span>ER</h1>
        </NuxtLink>
        <p>
          Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore
          rebum lorem ipsum dolor. No sed vero lorem dolor dolor
        </p>
        <h6
          class="text-white text-uppercase mt-4 mb-3"
          style="letter-spacing: 5px"
        >
          Follow Us
        </h6>
        <div class="d-flex justify-content-start">
          <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="#"
            ><i class="fab fa-twitter"></i
          ></NuxtLink>
          <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="#"
            ><i class="fab fa-facebook-f"></i
          ></NuxtLink>
          <NuxtLink class="btn btn-outline-primary btn-square mr-2" to="#"
            ><i class="fab fa-linkedin-in"></i
          ></NuxtLink>
          <NuxtLink class="btn btn-outline-primary btn-square" to="#"
            ><i class="fab fa-instagram"></i
          ></NuxtLink>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px">
          Our Services
        </h5>
        <div class="d-flex flex-column justify-content-start">
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>About</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Destination</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Services</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Packages</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Guides</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Testimonial</NuxtLink
          >
          <NuxtLink class="text-white-50" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Blog</NuxtLink
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px">
          Usefull Links
        </h5>
        <div class="d-flex flex-column justify-content-start">
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>About</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Destination</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Services</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Packages</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Guides</NuxtLink
          >
          <NuxtLink class="text-white-50 mb-2" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Testimonial</NuxtLink
          >
          <NuxtLink class="text-white-50" to="#"
            ><i class="fa fa-angle-right mr-2"></i>Blog</NuxtLink
          >
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-5">
        <h5 class="text-white text-uppercase mb-4" style="letter-spacing: 5px">
          Contact Us
        </h5>
        <p>
          <i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
        </p>
        <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
        <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
        <h6
          class="text-white text-uppercase mt-4 mb-3"
          style="letter-spacing: 5px"
        >
          Newsletter
        </h6>
        <div class="w-100">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-light"
              style="padding: 25px"
              placeholder="Your Email"
            />
            <div class="input-group-append">
              <button class="btn btn-primary px-3">Sign Up</button>
            </div>
          </div>
        </div>
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
          Copyright &copy;
          <NuxtLink to="#">Domain. All Rights Reserved.</NuxtLink>
        </p>
      </div>
      <div class="col-lg-6 text-center text-md-right">
        <p class="m-0 text-white-50">
          Designed by <NuxtLink to="https://htmlcodex.com">HTML Codex</NuxtLink>
        </p>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <!-- Back to Top -->
  <NuxtLink to="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="fa fa-angle-double-up"></i
  ></NuxtLink>
</template>
