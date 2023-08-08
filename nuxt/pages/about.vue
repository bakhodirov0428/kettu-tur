<template>
  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <!-- <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">About</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" href="/index">Home</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">About</p>
        </div>
      </div> -->
    </div>
  </div>
  <!-- Header End -->

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
              {{ $t("about.about_us.title") }}
            </h6>
            <h1 class="mb-3">
              {{ $t("about.about_us.content") }}
            </h1>
            <p>
              {{ $t("about.about_us.text") }}
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
              >{{ $t("about.about_us.button") }}</NuxtLink
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
              <h5 class="">{{ $t("about.about_us.card.title") }}</h5>
              <p class="m-0">
                {{ $t("about.about_us.card.content") }}
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
              <h5 class="">{{ $t("about.about_us.card1.title") }}</h5>
              <p class="m-0">{{ $t("about.about_us.card1.content") }}</p>
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
              <h5 class="">{{ $t("about.about_us.card2.title") }}</h5>
              <p class="m-0">{{ $t("about.about_us.card2.content") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature End -->

  <!-- Registration Start -->
  <div class="container-fluid bg-registration py-5">
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="mb-4">
            <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
              {{ $t("about.taklif.title") }}
            </h6>
            <h1 class="text-white">
              <span class="text-primary">{{ $t("about.taklif.price") }}</span>
              {{ $t("about.taklif.chegirma") }}
            </h1>
          </div>
          <p class="text-white">
            {{ $t("about.taklif.content") }}
          </p>
          <!-- <ul class="list-inline text-white m-0">
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
          </ul> -->
        </div>
        <div class="col-lg-5">
          <div class="card border-0">
            <div class="card-header bg-primary text-center p-4">
              <h1 class="text-white m-0">
                {{ $t("about.taklif.helo.title") }}
              </h1>
            </div>
            <div class="card-body rounded-bottom bg-white p-5">
              <form>
                <div class="form-group">
                  <!-- <input type="text" class="form-control p-4" placeholder="Your name" required="required" /> -->
                </div>
                <div class="form-group">
                  <!-- <input type="number" class="form-control p-4" placeholder="Your phone" required="required" /> -->
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
                    {{ $t("about.taklif.helo.button") }}
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
</script>
