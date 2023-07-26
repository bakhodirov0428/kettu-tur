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
                <NuxtLink to="blog.html" class="dropdown-item active"
                  >Blog Grid</NuxtLink
                >
                <NuxtLink to="single.html" class="dropdown-item"
                  >Blog Detail</NuxtLink
                >
                <NuxtLink to="destination.html" class="dropdown-item"
                  >Destination</NuxtLink
                >
                <NuxtLink to="guide.html" class="dropdown-item"
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
        <h3 class="display-4 text-white text-uppercase">Blog</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" to="">Home</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">Blog</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->NuxtLink
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

  <!-- Blog Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <div class="row pb-3">
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div class="blog-item">
                <div class="position-relative">
                  <img class="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                  <div class="blog-date">
                    <h6 class="font-weight-bold mb-n1">01</h6>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class="bg-white p-4">
                  <div class="d-flex mb-2">
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Admin</NuxtLink
                    >
                    <span class="text-primary px-2">|</span>
                    <NuxtLink
                      class="text-primary text-uppercase text-decoration-none"
                      to=""
                      >Tours & Travel</NuxtLink
                    >
                  </div>
                  <NuxtLink class="h5 m-0 text-decoration-none" to=""
                    >Dolor justo sea kasd lorem clita justo diam amet</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-12">
              <nav aria-label="Page navigation">
                <ul
                  class="pagination pagination-lg justify-content-center bg-white mb-0"
                  style="padding: 30px"
                >
                  <li class="page-item disabled">
                    <NuxtLink class="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </NuxtLink>
                  </li>
                  <li class="page-item active">
                    <NuxtLink class="page-link" to="#">1</NuxtLink>
                  </li>
                  <li class="page-item">
                    <NuxtLink class="page-link" to="#">2</NuxtLink>
                  </li>
                  <li class="page-item">
                    <NuxtLink class="page-link" to="#">3</NuxtLink>
                  </li>
                  <li class="page-item">
                    <NuxtLink class="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mt-5 mt-lg-0">
          <!-- Author Bio -->
          <div class="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
            <img
              src="img/user.jpg"
              class="img-fluid mx-auto mb-3"
              style="width: 100px"
            />
            <h3 class="text-primary mb-3">John Doe</h3>
            <p>
              Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum
              sit no ut est ipsum erat kasd amet elitr
            </p>
            <div class="d-flex justify-content-center">
              <NuxtLink class="text-primary px-2" to="">
                <i class="fab fa-facebook-f"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-2" to="">
                <i class="fab fa-twitter"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-2" to="">
                <i class="fab fa-linkedin-in"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-2" to="">
                <i class="fab fa-instagram"></i>
              </NuxtLink>
              <NuxtLink class="text-primary px-2" to="">
                <i class="fab fa-youtube"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Search Form -->
          <div class="mb-5">
            <div class="bg-white" style="padding: 30px">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control p-4"
                  placeholder="Keyword"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text bg-primary border-primary text-white"
                    ><i class="fa fa-search"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Category List -->
          <div class="mb-5">
            <h4 class="text-uppercase mb-4" style="letter-spacing: 5px">
              Categories
            </h4>
            <div class="bg-white" style="padding: 30px">
              <ul class="list-inline m-0">
                <li
                  class="mb-3 d-flex justify-content-between align-items-center"
                >
                  <NuxtLink class="text-dark" to="#"
                    ><i class="fa fa-angle-right text-primary mr-2"></i>Web
                    Design</NuxtLink
                  >
                  <span class="badge badge-primary badge-pill">150</span>
                </li>
                <li
                  class="mb-3 d-flex justify-content-between align-items-center"
                >
                  <NuxtLink class="text-dark" to="#"
                    ><i class="fa fa-angle-right text-primary mr-2"></i>Web
                    Development</NuxtLink
                  >
                  <span class="badge badge-primary badge-pill">131</span>
                </li>
                <li
                  class="mb-3 d-flex justify-content-between align-items-center"
                >
                  <NuxtLink class="text-dark" to="#"
                    ><i class="fa fa-angle-right text-primary mr-2"></i>Online
                    Marketing</NuxtLink
                  >
                  <span class="badge badge-primary badge-pill">78</span>
                </li>
                <li
                  class="mb-3 d-flex justify-content-between align-items-center"
                >
                  <NuxtLink class="text-dark" to="#"
                    ><i class="fa fa-angle-right text-primary mr-2"></i>Keyword
                    Research</NuxtLink
                  >
                  <span class="badge badge-primary badge-pill">56</span>
                </li>
                <li class="d-flex justify-content-between align-items-center">
                  <NuxtLink class="text-dark" to="#"
                    ><i class="fa fa-angle-right text-primary mr-2"></i>Email
                    Marketing</NuxtLink
                  >
                  <span class="badge badge-primary badge-pill">98</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Recent Post -->
          <div class="mb-5">
            <h4 class="text-uppercase mb-4" style="letter-spacing: 5px">
              Recent Post
            </h4>
            <NuxtLink
              class="d-flex align-items-center text-decoration-none bg-white mb-3"
              to=""
            >
              <img class="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div class="pl-3">
                <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </NuxtLink>
            <NuxtLink
              class="d-flex align-items-center text-decoration-none bg-white mb-3"
              to=""
            >
              <img class="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div class="pl-3">
                <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </NuxtLink>
            <NuxtLink
              class="d-flex align-items-center text-decoration-none bg-white mb-3"
              to=""
            >
              <img class="img-fluid" src="img/blog-100x100.jpg" alt="" />
              <div class="pl-3">
                <h6 class="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </NuxtLink>
          </div>

          <!-- Tag Cloud -->
          <div class="mb-5">
            <h4 class="text-uppercase mb-4" style="letter-spacing: 5px">
              Tag Cloud
            </h4>
            <div class="d-flex flex-wrap m-n1">
              <NuxtLink to="" class="btn btn-light m-1">Design</NuxtLink>
              <NuxtLink to="" class="btn btn-light m-1">Development</NuxtLink>
              <NuxtLink to="" class="btn btn-light m-1">Marketing</NuxtLink>
              <NuxtLink to="" class="btn btn-light m-1">SEO</NuxtLink>
              <NuxtLink to="" class="btn btn-light m-1">Writing</NuxtLink>
              <NuxtLink to="" class="btn btn-light m-1">Consulting</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Blog End -->
</template>
