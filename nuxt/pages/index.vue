<template>
  <!-- Carousel Start -->
  <div class="container-fluid p-0">
    <div id="header-carousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="w-100" src="/img/slider1.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h4 class="text-white text-uppercase mb-md-3">
                {{ $t("home.hero.title") }}
              </h4>
              <h1 class="display-3 text-white mb-md-4">
                {{ $t("home.hero.content") }}
              </h1>
              <NuxtLink
                :to="localePath('/packages')"
                class="btn btn-primary py-md-3 px-md-5 mt-2"
              >
                {{ $t("home.hero.button") }}r</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="w-100" src="/img/slider2.jpg" alt="Image" />
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <div class="p-3" style="max-width: 900px">
              <h4 class="text-white text-uppercase mb-md-3">
                {{ $t("home.hero.title") }}
              </h4>
              <h1 class="display-3 text-white mb-md-4">
                {{ $t("home.hero.content2") }}
              </h1>
              <NuxtLink
                :to="localePath('/packages')"
                class="btn btn-primary py-md-3 px-md-5 mt-2"
                >{{ $t("home.hero.button") }}</NuxtLink
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
              src="/img/about-3.jpg"
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6 pt-5 pb-lg-5">
          <div class="about-text bg-white p-4 p-lg-5 my-lg-5">
            <h6 class="text-primary" style="letter-spacing: 5px">
              {{ $t("home.about_us.title") }}
            </h6>
            <h1 class="mb-3">
              {{ $t("home.about_us.content") }}
            </h1>
            <p>
              {{ $t("home.about_us.text") }}
            </p>
            <div class="row mb-4">
              <div class="col-6">
                <img class="img-fluid" src="/img/about-4.jpg" alt="" />
              </div>
              <div class="col-6">
                <img class="img-fluid" src="/img/slider1.jpg" alt="" />
              </div>
            </div>
            <NuxtLink
              :to="localePath('/packages')"
              class="btn btn-primary py-md-3 px-md-5 mt-2"
              >{{ $t("home.about_us.button") }}</NuxtLink
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
              <h5 class="">{{ $t("home.about_us.card.title") }}</h5>
              <p class="m-0">
                {{ $t("home.about_us.card.content") }}
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
              <h5 class="">{{ $t("home.about_us.card1.title") }}</h5>
              <p class="m-0">{{ $t("home.about_us.card1.content") }}</p>
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
              <h5 class="">{{ $t("home.about_us.card2.title") }}</h5>
              <p class="m-0">{{ $t("home.about_us.card2.content") }}</p>
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
          {{ $t("home.turizm.title") }}
        </h6>
        <h1>{{ $t("home.turizm.content") }}</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="/img/Khiva-Itchan-Kala-3.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              :to="localePath('/packages')"
            >
              <h5 class="text-white">{{ $t("home.turizm.card.title") }}</h5>
              <span>{{ $t("home.turizm.card.price") }} UZS</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="/img/bukhara.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              :to="localePath('/packages')"
            >
              <h5 class="text-white">{{ $t("home.turizm.card1.title") }}</h5>
              <span>{{ $t("home.turizm.card1.price") }} UZS</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="destination-item position-relative overflow-hidden mb-2">
            <img class="img-fluid" src="/img/samarkand.jpg" alt="" />
            <NuxtLink
              class="destination-overlay text-white text-decoration-none"
              :to="localePath('/packages')"
            >
              <h5 class="text-white">{{ $t("home.turizm.card2.title") }}</h5>
              <span>{{ $t("home.turizm.card2.price") }} UZS</span>
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
          {{ $t("home.service.title") }}
        </h6>
        <h1>{{ $t("home.service.content") }}</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-route mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("home.service.card.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("home.service.card.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("home.service.card1.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("home.service.card1.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("home.service.card2.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("home.service.card2.content") }}
            </p> -->
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
          {{ $t("home.paketlar.title") }}
        </h6>
        <h1>{{ $t("home.paketlar.content") }}</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card.content") }}</NuxtLink
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
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card1.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card1.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card1.content") }}</NuxtLink
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
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card2.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card2.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card2.content") }}</NuxtLink
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
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card3.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card3.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card3.content") }}</NuxtLink
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
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card4.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card4.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card4.content") }}</NuxtLink
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
            <img class="img-fluid" src="/img/about-1.jpg" alt="" />
            <div class="p-4">
              <div class="d-flex justify-content-between mb-3">
                <small class="m-0"
                  ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                  >Thailand</small
                >
                <small class="m-0"
                  ><i class="fa fa-calendar-alt text-primary mr-2"></i>3
                  {{ $t("home.paketlar.card5.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("home.paketlar.card5.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("home.paketlar.card5.content") }}</NuxtLink
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
              {{ $t("home.taklif.title") }}
            </h6>
            <h1 class="text-white">
              <span class="text-primary">{{ $t("home.taklif.price") }}</span>
              {{ $t("home.taklif.chegirma") }}
            </h1>
          </div>
          <p class="text-white">
            {{ $t("home.taklif.content") }}
          </p>
          <!-- <ul class="list-inline text-white m-0">
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i
              >{{ $t("home.taklif.offer") }}
            </li>
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i
              >{{ $t("home.taklif.offer1") }}
            </li>
            <li class="py-2">
              <i class="fa fa-check text-primary mr-3"></i
              >{{ $t("home.taklif.offer2") }}
            </li>
          </ul> -->
        </div>
        <div class="col-lg-5">
          <div class="card border-0">
            <div class="card-header bg-primary text-center p-4">
              <h1 class="text-white m-0">{{ $t("home.taklif.helo.title") }}</h1>
            </div>
            <div class="card-body rounded-bottom bg-white p-5">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control p-4"
                    :placeholder="$t('home.taklif.helo.name')"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control p-4"
                    :placeholder="$t('home.taklif.helo.number')"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    class="form-control p-4"
                    :placeholder="$t('home.taklif.helo.massege')"
                    style="width: 100%"
                  ></textarea>
                </div>

                <div>
                  <button class="btn btn-primary btn-block py-3" type="submit">
                    {{ $t("home.taklif.helo.button") }}
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
<script setup>
import { useLocalePath } from "#imports";
const localePath = useLocalePath();

useHead({
  title: "Bosh sahifa",
});
</script>
