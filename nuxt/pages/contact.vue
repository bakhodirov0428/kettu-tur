<template>
  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">
          {{ $t("aloqa.title") }}
        </h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" :to="localePath('/')">{{
              $t("aloqa.link")
            }}</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">{{ $t("aloqa.title") }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Contact Start -->
  <div class="container-fluid py-5">
    <div class="container py-5">
      <div class="text-center mb-3 pb-3">
        <h6 class="text-primary text-uppercase" style="letter-spacing: 5px">
          {{ $t("aloqa.title") }}
        </h6>
        <h1>{{ $t("aloqa.text") }}</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="contact-form bg-white" style="padding: 30px">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" novalidate="true">
              <div class="form-row">
                <div class="control-group col-sm-6">
                  <input
                    type="text"
                    class="form-control p-4"
                    id="name"
                    :placeholder="$t('aloqa.name')"
                    required="true"
                    data-validation-required-message="Please enter your name"
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group col-sm-6">
                  <input
                    type="number"
                    class="form-control p-4"
                    id="email"
                    :placeholder="$t('aloqa.number')"
                    required="true"
                    data-validation-required-message="Please enter your phone number"
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <input
                  type="text"
                  class="form-control p-4"
                  id="subject"
                  :placeholder="$t('aloqa.subject')"
                  required="true"
                  data-validation-required-message="Please enter a subject"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <textarea
                  class="form-control py-3 px-4"
                  rows="5"
                  id="message"
                  :placeholder="$t('aloqa.message')"
                  required="true"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
              <div class="text-center">
                <button
                  class="btn btn-primary py-3 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  {{ $t("aloqa.button") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact End -->
</template>
<script setup>
import { useLocalePath } from "#imports";
const localePath = useLocalePath();

useHead({
  title: "Bosh sahifa",
});
</script>
