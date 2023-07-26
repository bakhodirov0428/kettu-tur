<template>
  <!-- Carousel Start -->
  <div class="container-fluid p-0">
    <div id="header-carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="img/slider1.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h4 class="text-white text-uppercase mb-md-3">
                Ekskursiyalar & Sayohatlar
              </h4>
              <h1 class="display-3 text-white mb-md-4">
                Bu siz orzu qilgan qulayliklarga ega bo'lgan dam olish
                maskanidir
              </h1>
              <NuxtLink
                to="/packages"
                class="btn btn-primary py-md-3 px-md-5 mt-2"
                >Tur Paketlar</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="img/slider2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h4 class="text-white text-uppercase mb-md-3">
                Ekskursiyalar & Sayohatlar
              </h4>
              <h1 class="display-3 text-white mb-md-4">
                Biz bilan ajoyib joylarni kashf eting
              </h1>
              <NuxtLink
                to="/packages"
                class="btn btn-primary py-md-3 px-md-5 mt-2"
                >Tur Paketlar</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        class="carousel-control-prev"
        to="#header-carousel"
        data-slide="prev"
      >
        <div class="btn btn-dark" style="width: 45px; height: 45px">
          <span class="carousel-control-prev-icon mb-n2"></span>
        </div>
      </NuxtLink>
      <NuxtLink
        class="carousel-control-next"
        to="#header-carousel"
        data-slide="next"
      >
        <div class="btn btn-dark" style="width: 45px; height: 45px">
          <span class="carousel-control-next-icon mb-n2"></span>
        </div>
      </NuxtLink>
    </div>
  </div>
  <!-- Carousel End -->

  <!-- About Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-6" style="min-height: 500px">
          <div class="position-relative h-100">
            <img
              class="position-absolute w-100 h-100"
              src="img/about-3.jpg"
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 pt-5 pb-lg-5">
          <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
              Biz Haqimizda
            </h6>
            <h1 class="mb-3">
              Biz sizning byudjetingizda mos eng yaxshi tur paketlarini taqdim
              etamiz
            </h1>
            <p>
              KettuTur - sayyohlik agentligi. Ko'plab davlatlarda turli xil
              safar yo'llarini amalga oshiruvchi agentlik. Kettu Tur bu
              agentliklar ichida o'zining yuqori xizmat ko'rsatish hamda ko'plab
              ajoyib takliflari bilan ajralib turadi.
            </p>
            <div class="row mb-4">
              <div class="col-6">
                <img class="img-fluid" src="img/about-4.jpg" alt="" />
              </div>
              <div class="col-6">
                <img class="img-fluid" src="img/slider1.jpg" alt="" />
              </div>
            </div>
            <NuxtLink
              to="/packages"
              class="btn btn-primary py-md-3 px-md-5 mt-2"
              >Tur Paketlar</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Feature Start -->
  <div class="container-fluid pb-5">
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
              style="height: 100px; width: 100px"
            >
              <i class="fa fa-2x fa-money-check-alt text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Qulay Narxlar</h5>
              <p class="m-0">
                Sizning byudjetingizga mos keladigan turli xil paketlarni
                tavsiya qilamiz.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
              style="height: 100px; width: 100px"
            >
              <i class="fa fa-2x fa-award text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">Yaxshi Xizmatlar</h5>
              <p class="m-0">Biz sizga eng yaxshi xizmatlarni taklif etamiz</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex mb-4 mb-lg-0">
            <div
              class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
              style="height: 100px; width: 100px"
            >
              <i class="fa fa-2x fa-passport text-white"></i>
            </div>
            <div class="d-flex flex-column">
              <h5 class="">VISA</h5>
              <p class="m-0">Evropa davlatlariga VISA olishda yordam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature End -->

  <!-- Destination Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          Ichki turizm
        </h6>
        <h1>O'zbekiston bo'ylab sayohatlar</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="img/Khiva-Itchan-Kala-3.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              to="/packages"
            >
              <h5 class="text-white">Xivaga guruh sayohati</h5>
              <span>1 780 000 UZS</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="img/bukhara.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              to="/packages"
            >
              <h5 class="text-white">Buxoroga guruh sayohati</h5>
              <span>1 550 000 UZS</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="img/samarkand.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              to="/packages"
            >
              <h5 class="text-white">Samarqandga guruh sayohati</h5>
              <span>320 000 UZS</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Destination Start -->

  <!-- Service Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          Xizmatlarimiz
        </h6>
        <h1>Ekskursiya va Sayohat Xizmatlari</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-route mx-auto mb-4"></i>
            <h5 class="mb-2">Sayohat bo'yicha qo'llanma</h5>
            <p class="m-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
              Amet lorem est amet labore
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
            <h5 class="mb-2">Chipta bron qilish</h5>
            <p class="m-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
              Amet lorem est amet labore
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
            <h5 class="mb-2">Mehmonxona bron qilish</h5>
            <p class="m-0">
              Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
              Amet lorem est amet labore
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->

  <!-- Packages Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          Paketlar
        </h6>
        <h1>DUNYO BO'YLAB SAYOHATLAR</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  kun</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2 kishilik</small
                >
              </div>
              <NuxtLink class="h5 text-decoration-none" to="/tour"
                >Biz bilan dunyoning ajoyib joylarini kashf eting</NuxtLink
              >
              <div class="border-top mt-4 pt-4">
                <div class="d-flex justify-content-between">
                  <h6 class="m-0">
                    <i class="fa fa-star text-primary mr-2"></i>4.5
                    <small>(250)</small>
                  </h6>
                  <h5 class="m-0">$350</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Packages End -->

  <!-- Registration Start -->
  <div class="container-fluid bg-registration py-5" style="margin: 0px 0">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="mb-4">
            <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
              Mega Offer
            </h6>
            <h1 class="text-white">
              <span class="text-primary">30% OFF</span> For Honeymoon
            </h1>
          </div>
          <p class="text-white">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <ul class="list-inline text-white m-0">
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i>Labore eos amet dolor
              amet diam
            </li>
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i>Etsea et sit dolor
              amet ipsum
            </li>
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i>Diam dolor diam
              elitripsum vero.
            </li>
          </ul>
        </div>
        <div class="col-lg-5">
          <div class="card border-0">
            <div class="card-header bg-primary text-center p-4">
              <h1 class="text-white m-0">Yordam</h1>
            </div>
            <div class="card-body rounded-bottom bg-white p-5">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control p-4"
                    placeholder="Ismingiz"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control p-4"
                    placeholder="Telefon raqamingiz"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    class="form-control p-4"
                    placeholder="Xabaringizni yozing"
                    style="width: 100%"
                  ></textarea>
                </div>

                <div>
                  <button class="btn btn-primary btn-block py-3" type="submit">
                    Xabar Yuborish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Registration End -->
</template>
