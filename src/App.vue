<template>
  <div class="bg-gray-900">
    <header class="fixed inset-x-0 top-0 z-50 bg-gray-900 items-center py-10">
      <nav class="flex items-center place-content-between px-6 py-0 lg:px-8 " aria-label="Global">
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">Front End
            Developer</h2>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-8 lg:w-3/5 lg:place-content-end ">
          <!-- <RouterLink v-for="item in navigation" :key="item.name" :to="item.to" class="text-md font-semibold leading-6 text-white">{{ item.name }}</RouterLink> -->
          <button type="text" v-on:click="contactOpen = true"
            class=" bg-transparent hover:bg-teal-600 outline text-md font-semibold leading-6 text-white m-0 p-1">Contact
            me</button>
          <a :href="pdfUrl" download="summary.pdf"
            class=" bg-transparent hover:bg-teal-600 outline text-md font-semibold leading-6 text-white m-0 p-1">Download
            Resume</a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-20 w-auto" src="./assets/portafolio.png " alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/25">
              <div class="space-y-2 py-6">
                <a v-on:click="contactOpen = true"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Contact
                  me</a>
                <a :href="pdfUrl" download="resume.pdf"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Download
                  Resume</a>

              </div>
              <!-- <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
              </div> -->
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>

  <RouterView />
  <DrawerContact v-bind:contactOpen="contactOpen" @update:contactOpen="updateContactOpen" />

</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink, RouterView } from 'vue-router'
// import FMenu from '@/components/FlayoutMenu.vue'
// import FMenu2 from '@/components/FlayoutMenu2.vue'
import DrawerContact from '@/components/ContactDrawer.vue'
const pdfUrl = new URL('@/assets/Daniel-Montes-resume.pdf', import.meta.url).href

const navigation = [
  // { name: 'Home', to:'/' },
  // { name: 'About', to: '/about' },
  // { name: 'Proyects', to:'/' },
  { name: 'Curriculum', to: '/CV' }
  // { name: 'Contacto', to:'/' },
]

const mobileMenuOpen = ref(false)
const contactOpen = ref(false)

const updateContactOpen = (value) => {
  contactOpen.value = value
}
</script>

<style scoped></style>
