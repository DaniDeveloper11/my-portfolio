<template>

    
  <main>
    <div id="default-carousel" class="relative w-full pt-16 " data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-96  overflow-hidden lg:h-dvh">
        <!-- Item 1 -->
        <div class="bg-white hidden duration-500 ease-in-out" data-carousel-item>
          <div class="mx-auto max-w-7xl px-6 py-5 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-5">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div class="flex">
                <div
                  class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span v-on:click="contactOpen = true" class="font-semibold text-teal-600">Contact me</span>
                  <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                  <a v-on:click="contactOpen = true" class="flex items-center gap-x-1 cursor-pointer">
                    <span class="absolute inset-0" aria-hidden="true" />
                    Make it
                    <ChevronRightIcon class="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <h1 class="mt-5 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Web Aplicationes
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
              </p>
              <div class="mt-10 flex items-center gap-x-6">
                <a href="#"
                  class="rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-6  00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  View Proyects</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">About me <span
                    aria-hidden="true">→</span></a>
              </div>
            </div>
            <div class="hidden sm:block sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width="316" height="684" rx="36" />
                  </clipPath>
                </defs>
                <path fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
                <path fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
                <foreignObject width="316" height="684" transform="translate(24 24)"
                  clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
                  <img src="@/assets/screenShotFirefly.png" alt="" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
        <!-- Item 2 -->
        <div class="bg-white hidden duration-700 ease-in-out" data-carousel-item>
          <div class="h-full inline-block">
            <img src="../assets/screenShotOakland.png"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="hidden sm:block absolute bottom-10 left-5 bg-white border-4 border-emerald-600 p-4">
              <div class="bg-transparent border-8 p-8 border-emerald-500">
                <h1 class="mt-5 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">OAKLAND.net</h1>
                <p class="mt-6 text-md leading-8 text-gray-600"> </p>
              </div>
            </div>

          </div>

        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out bg-lionred" data-carousel-item>
          <img src="../assets/screenShotLions.png"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          <div class="hidden sm:block absolute bottom-10 left-5 bg-gray-700 border-4 border-lionred p-4">
            <div class="bg-transparent border-8 p-8 border-lionred">
              <h1 class="mt-5 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-5xl">OAKLAND.net</h1>
              <p class="mt-6 text-md leading-8 text-white"> </p>
            </div>
          </div>
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out bg-blue-700" data-carousel-item>
          <img src="../assets/screenShotAzul.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          <div class="hidden sm:block absolute bottom-10 left-5 bg-gray-700 border-4 border-blue-700 p-4">
            <div class="bg-transparent border-8 p-8 border-blue-700">
              <h1 class="mt-5 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-5xl">My latest proyect </h1>
              <p class="mt-6 text-md leading-8 text-white"></p>
            </div>
          </div>
        </div>
        <!-- Item 5 -->

      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
          data-carousel-slide-to="3"></button>
      </div>
      <!-- Slider controls -->
      <button type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>


    </div>

  </main>
</template>

<script setup>
import { onMounted } from 'vue';

import { initCarousels } from 'flowbite';
onMounted(() => {
    initCarousels();
  });
</script>
