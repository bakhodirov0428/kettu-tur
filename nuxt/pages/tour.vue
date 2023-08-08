<template>
  <!-- Header Start -->
  <div class="container-fluid page-header">
    <div class="container">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style="min-height: 400px"
      >
        <h3 class="display-4 text-white text-uppercase">Dubai</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" :to="localePath('/')">{{
              $t("tour.link")
            }}</NuxtLink>
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">
            <NuxtLink class="text-white" :to="localePath('/packages')"
              >{{ $t("tour.title") }}s</NuxtLink
            >
          </p>
          <i class="fa fa-angle-double-right pt-1 px-3"></i>
          <p class="m-0 text-uppercase">Dubai</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Booking Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <div class="row mb-2">
            <NuxtLink
              data-fancybox="gallery"
              data-src="https://lipsum.app/id/2/1024x768"
            >
              <img
                src="https://lipsum.app/id/2/532x300"
                style="border-radius: 18px"
              />
            </NuxtLink>
          </div>
          <div class="row mb-2">
            <NuxtLink
              data-fancybox="gallery"
              class="m-2"
              data-src="https://lipsum.app/id/3/1024x768"
            >
              <img
                src="https://lipsum.app/id/3/250x150"
                style="border-radius: 18px"
              />
            </NuxtLink>

            <NuxtLink
              data-fancybox="gallery"
              class="m-2"
              data-src="https://lipsum.app/id/4/1024x768"
            >
              <img
                src="https://lipsum.app/id/4/250x150"
                style="border-radius: 18px"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card border-0 text-white">
            <div class="card-header p-4" style="background-color: #23418a">
              <h2 class="text-white">
                <span>Dubai</span>
              </h2>
              <p class="text-white" style="font-size: 20px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-credit-card"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
                  />
                  <path d="M3 10l18 0" />
                  <path d="M7 15l.01 0" />
                  <path d="M11 15l2 0" />
                </svg>

                <span>5 600 000 UZS</span>
              </p>
            </div>
            <div class="card-body rounded-bottom bg-white p-5">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control p-4"
                    :placeholder="$t('tour.name')"
                    required="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    placeholder="+998 (__) ___-____"
                    data-slots="_"
                    class="form-control p-4"
                    required="true"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control p-4"
                    :placeholder="$t('tour.amount')"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control p-4"
                    :value="$t('tour.tour_name')"
                    readonly
                  />
                </div>

                <div>
                  <button class="btn btn-primary btn-block py-3" type="submit">
                    {{ $t("tour.button") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Description -->

      <div class="row pt-5">
        <h3>{{ $t("tour.text") }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          neque a beatae minus quibusdam, cum, architecto consequuntur iste
          ratione vel aspernatur asperiores maxime atque animi fugiat magni
          tempore. Fugit adipisci unde repellendus mollitia consequuntur
          sapiente, vitae natus voluptatem voluptatibus dicta ut inventore
          nostrum perferendis aliquid nam molestiae accusamus assumenda?
          Explicabo numquam velit fuga architecto nulla enim quae eaque quisquam
          porro voluptas soluta rem omnis laudantium, aut doloremque. Nemo esse
          eos aliquid facilis repellat odit pariatur cupiditate, deleniti eaque
          perferendis expedita blanditiis ipsum assumenda tenetur quam
          reiciendis. Minus quia reiciendis, consequatur vel ipsam molestias nam
          cumque tenetur autem? Recusandae, beatae ipsam.
        </p>
      </div>

      <!-- Description end-->
    </div>
  </div>
  <!-- Booking End -->
</template>
<script setup>
import { useLocalePath } from "#imports";
const localePath = useLocalePath();

useHead({
  title: "Bosh sahifa",
});
</script>
