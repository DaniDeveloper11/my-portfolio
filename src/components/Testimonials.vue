<template>
    <div class="bg-white py-0 sm:py-0">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight text-gray-600">Testimonials</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">I have worked with exepcional people</p>
        </div>
        <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3 flex-column sm:flex">
            <div v-for="testimonial in testimonials" :key="testimonial.author.handle" class="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote class="text-gray-900">
                  <p>{{ `“${testimonial.body}”` }}</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                  <div>
                    <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                    <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import miguel from '@/assets/testimonials/1.jpg'
  import Kenet from '@/assets/testimonials/2.jpg'

  const testimonials = [
    {
      body: 'Daniel was into my team and i can say that him is so dedicated in all about his objetives',
      author: {
        name: 'Miguel Briseño',
        handle: 'Proyect Manager | Full stack Developer',
        imageUrl:
          miguel,
      },
    },
    {
      body: 'I have worked with daniel a few time but i saw that daniel is a great fronted developer and him will be a great full stack someday.',
      author: {
        name: 'Kenet Gaona',
        handle: 'Full stack Developer',
        imageUrl:
          Kenet,
      },
    },
    {
      body: 'Daniel has worked in some proyects with me and him is a great frotend develper.',
      author: {
        name: 'Leonardo Talavera',
        handle: 'Full stack Developer',
        imageUrl:
          'https://media.licdn.com/dms/image/D4D03AQHcSkUp_ZharA/profile-displayphoto-shrink_400_400/0/1684301830797?e=1724284800&v=beta&t=UFzJI2SfQC8vfOFAu_3Ajooc4tCIfT-8BvVBU6fLYgQ',
      },
    },
    // More testimonials...
  ]
  </script>