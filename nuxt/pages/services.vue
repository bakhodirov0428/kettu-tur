<template>
  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">
          {{ $t("service.title") }}
        </h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" :to="localePath('/')">{{
              $t("service.link")
            }}</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">{{ $t("service.title") }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Service Start -->
  <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          {{ $t("service.title") }}
        </h6>
        <h1>{{ $t("service.content") }}</h1>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-route mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card1.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card1.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card2.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card2.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-route mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card1.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card1.content") }}
            </p> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="service-item bg-white text-center mb-2 py-5 px-4">
            <i class="fa fa-2x fa-hotel mx-auto mb-4"></i>
            <h5 class="mb-2">{{ $t("service.card2.title") }}</h5>
            <!-- <p class="m-0">
              {{ $t("service.card2.content") }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->
</template>
<script setup>
import { useLocalePath } from "#imports";
const localePath = useLocalePath();

useHead({
  title: "Bosh sahifa",
});
</script>
