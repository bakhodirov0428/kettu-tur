<template>
  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">
          {{ $t("packages.title") }}
        </h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" :href="localePath('/')">{{
              $t("packages.link")
            }}</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3">
            {{ $t("packages.title") }}</i
          >
          <p class="m-0 text-uppercase"></p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Packages Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          {{ $t("packages.title") }}
        </h6>
        <h1>{{ $t("packages.content") }}</h1>
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
                  {{ $t("packages.card.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("packages.card.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card.content") }}</NuxtLink
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
                  {{ $t("packages.card1.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("packages.card1.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card1.content") }}</NuxtLink
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
                  {{ $t("packages.card2.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("packages.card2.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card2.content") }}</NuxtLink
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
                  {{ $t("packages.card3.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("packages.card3.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card3.content") }}</NuxtLink
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
                  {{ $t("packages.card4.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("packages.card4.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card4.content") }}</NuxtLink
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
                  {{ $t("packages.card5.day") }}</small
                >
                <small class="m-0"
                  ><i class="fa fa-user text-primary mr-2"></i>2
                  {{ $t("paketlar.card5.person") }}</small
                >
              </div>
              <NuxtLink
                class="h5 text-decoration-none"
                :to="localePath('/tour')"
                >{{ $t("packages.card5.content") }}</NuxtLink
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
</template>
<script setup>
import { useLocalePath } from "#imports";
const localePath = useLocalePath();

useHead({
  title: "Bosh sahifa",
});
</script>
