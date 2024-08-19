<script setup>
import { onMounted, ref } from 'vue';
import DrawerContact from '@/components/ContactDrawer.vue'
import Proyects from '@/components/Proyects.vue'
import mdigithub from '@/components/icons/github.vue'
// import mdifacebook from '@/components/icons/facebook.vue'
import mdiLinkedin from '@/components/icons/link.vue'
import mdiInstagram from '@/components/icons/instagram.vue'
import footer2 from '@/components/Footer.vue'
import mdiWhatsApp from '@/components/icons/WhatsApp.vue';
import testim from '@/components/Testimonials.vue'
import ProgramsTab from '@/components/ProgramsTab.vue';


const contactOpen = ref(false)

const updateContactOpen = (value) => {
  contactOpen.value = value
}
</script>

<template>
  <DrawerContact v-bind:contactOpen="contactOpen" @update:contactOpen="updateContactOpen" />




  <div class="mx-auto max-w-7xl py-24 px-6 lg:px-8 sm:mt-32 ">
    <div
      class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-1 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/1.png"
        alt="Transistor" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/2.png"
        alt="Reform" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/3.png"
        alt="Tuple" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        src="/src/assets/tecnologies/4.png" alt="SavvyCal" width="158" height="48" />
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/src/assets/tecnologies/5.png" alt="Statamic" width="158" height="48" />
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/src/assets/tecnologies/6.png" alt="Statamic" width="158" height="48" />

    </div>
  </div>


  <!-- about me -->
  <div id="about" class="relative z-10  bg-gray-900 pb-20 sm:mt-20 sm:pb-24 xl:pb-0">
    <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
        <div class="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#d4a373] to-[#ffb703] opacity-25"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
    <div
      class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
      <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
        <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
          <img class="absolute inset-x sm:h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
            src="/src/assets/yo2.png" alt="" />
        </div>
      </div>
      <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
        <figure class="relative isolate pt-6 sm:pt-12">
          <svg viewBox="0 0 162 128" fill="none" aria-hidden="true"
            class="absolute left-0 top-0 -z-10 h-32 stroke-yellow-600/20">
            <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
              d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
          </svg>
          <blockquote class="text-xl font-semibold leading-8 text-[#fffae6] sm:text-2xl sm:leading-9">
            <p>I am a dedicated frontend developer with a passion for crafting interactive and efficient web
              experiences. With over a year of professional experience, I have a strong command of technologies such as
              Vue.js 3, Tailwind CSS, and Node.js. My expertise lies in developing modern, responsive user interfaces
              that not only meet technical specifications but also deliver an exceptional user experience.
            </p>
          </blockquote>
          <figcaption class="mt-8 text-base">
            <div class="font-semibold text-[#fffae6]">Angel Daniel Montes Villarreal</div>
            <div class="mt-1 text-[#fffae6]">Front-end Developer</div>
            <div class="mt-2 text-[#fffae6] flex items-center">
              <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              angel.montes0498@gmail.com
            </div>

          </figcaption>
        </figure>
      </div>
    </div>
  </div>


  <div class="mx-auto max-w-7xl px-6 lg:px-8 sm:mt-20 ">
    <div
      class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-1 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/7.png"
        alt="Transistor" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/8.png"
        alt="Reform" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/src/assets/tecnologies/9.png"
        alt="Tuple" width="158" height="48" />
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        src="/src/assets/tecnologies/10.png" alt="SavvyCal" width="158" height="48" />
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/src/assets/tecnologies/11.png" alt="Statamic" width="158" height="48" />
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/src/assets/tecnologies/12.png" alt="Statamic" width="158" height="48" />

    </div>
  </div>

  <ProgramsTab></ProgramsTab>
  <Proyects id="proyects"></Proyects>


  <div class=" bg-gray-900 py-6 w-full rounded-md shadow-sm mb-10">
    
    <div class="text-white mx-auto flex place-content-evenly ">
      <a target="_blank" href="https://github.com/DaniDeveloper11"
        class=" hover:border hover:bg-purple-800 rounded-full">
        <mdigithub class="h-10 w-10"></mdigithub>
      </a>
      <a target="_blank"
        href="https://wa.me/523314857062?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
        class=" hover:border hover:bg-green-500 rounded-full">
        <mdiWhatsApp class="h-10 w-10"></mdiWhatsApp>
      </a>
      <a target="_blank"
        href="https://www.linkedin.com/in/angel-daniel-montes-villarreal-28686a258/?trk=opento_sprofile_topcard"
        class=" hover:border hover:bg-blue-600 rounded-full">
        <mdiLinkedin class="h-10 w-10"></mdiLinkedin>
      </a>
      <a target="_blank" href="https://www.instagram.com/dany110498/"
        class=" hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 focus:outline-none rounded-full">
        <mdiInstagram class="h-10 w-10"></mdiInstagram>
      </a>
    </div>

  </div>

  <testim></testim>
  <footer2></footer2>

</template>
