<template>

    <TransitionRoot as="div" :show="contactOpen">
        <!-- drawer init and show -->

        <Dialog class=" z-50 " @close="closeDialog">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="overflow-y-hidden fixed inset-y-0 left-0 z-50 w-full bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-20 w-auto" src="/src/assets/portafolio.png" alt="" />
                    </a>

                </div>
                <div class="mt-6 flow-root">
                    <h5 id="drawer-label"
                        class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                        <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>Contact me
                    </h5>
                    <button type="button" @click="closeDialog"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span class="sr-only">Close Contact</span>
                    </button>
                    <form class="mb-6" action="https://formspree.io/f/xnqekrep" method="POST">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Your
                                email</label>
                            <input name="email" type="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required />
                        </div>
                        <div class="mb-6">
                            <label for="subject"
                                class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Subject</label>
                            <input name="asunto" type="text" id="subject"
                                class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="mb-6">
                            <label for="message"
                                class="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Your
                                message</label>
                            <textarea name="mensaje" id="message" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send
                            message</button>
                    </form>


                    <div class="inline-flex rounded-md shadow-sm gap-5 mb-5">

                        <a href="https://github.com/DaniDeveloper11" target="_blank"
                            class="text-white hover:border hover:bg-purple-800 rounded-full">
                            <mdigithub class="h-10 w-10"></mdigithub>
                        </a>
                        <a target="_blank"
                            href="https://wa.me/523314857062?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios."
                            class="text-white hover:border hover:bg-blue-800 rounded-full">
                            <mdiWhatsapp class="h-10 w-10"></mdiWhatsapp>
                        </a>
                        <a target="_blank"
                            href="https://www.linkedin.com/in/angel-daniel-montes-villarreal-28686a258/?trk=opento_sprofile_topcard"
                            class="text-white hover:border hover:bg-blue-600 rounded-full">
                            <mdiLinkedin class="h-10 w-10"></mdiLinkedin>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/dany110498/"
                            class="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 focus:outline-none rounded-full">
                            <mdiInstagram class="h-10 w-10"></mdiInstagram>
                        </a>
                    </div>
                    <div class="text-gray-100 flex pl-1">
                        <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 16">
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        <p class="mb-2 text-sm text-gray-100 ">
                            <a target="_blank" href="mailto:angel.montes0498@gmail.com"
                                class="hover:underline">angel.montes0498@gmail.com</a>
                        </p>
                    </div>

                </div>
                <div class="text-white flex pl-0">
                    <phone></phone>

                    <p class="text-sm text-gray-100 dark:text-gray-100">
                        <a href="tel:3314857062" class="hover:underline">+52 331-485-7062</a>
                    </p>
                </div>
            </DialogPanel>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import phone from '@/components/icons/phone.vue'
import { defineProps, defineEmits } from 'vue'
import mdigithub from '@/components/icons/github.vue'
import mdifacebook from '@/components/icons/facebook.vue'
import mdiLinkedin from '@/components/icons/link.vue'
import mdiInstagram from '@/components/icons/instagram.vue'
import mdiWhatsapp from '@/components/icons/WhatsApp.vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
// import { mdiWhatsapp } from '@mdi/js'
defineProps({
    contactOpen: Boolean
})
const emit = defineEmits(['update:contactOpen'])

const closeDialog = () => {
    emit('update:contactOpen', false)
}
</script>