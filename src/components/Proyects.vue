<template>
    <div class="bg-white py-10 sm:py-0">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Real Proyects </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">I have worked in software web aplication as fronted and backend developer also I have developed websites to some enteprises..</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <img :src="post.imageUrl" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
              <div  class="flex gap-2 mt-2">
                <a v-for="tecno in post.tenologies" :key="tecno.name" 
                :class="tecno.name == 'Vue.js' ? 'bg-green-200' : tecno.name == 'Pinia'? 'bg-yellow-300' : tecno.name == 'Nest' ? 'bg-red-500': tecno.name == 'TailwindCss' ? 'bg-sky-300': tecno.name == 'PHP'
                  ? 'bg-purple-500' : tecno.name == 'Vuetify' ? 'bg-lime-400' : tecno.name == 'Javascript' ? 'bg-yellow-200' : tecno.name == 'vueRouter' ? 'bg-green-300': 'bg-gray-200'  
                " 
                class="z-10 rounded-full px-3 py-1.5 font-medium" >{{ tecno.name }}</a>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <!-- <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" /> -->
                 <github ></github>
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a :href="post.author.href" target="_blank">
                      <span class="absolute inset-0" />
                      {{ post.author.name }}
                    </a>
                  </p>
                  <p class="text-gray-600">{{ post.author.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import agaveAzul from '../assets/agaveAzul.png';
import softcarmelweb  from '../assets/softcarmelweb.png'
import lions from '../assets/lions.png'
import oak from '../assets/oak.png'
import thiss from '../assets/this.png'
import Github from './icons/github.vue';
  const posts = [
    {
      id: 1,
      title: 'AZULERP',
      href: 'https://amazing-capybara-41930d.netlify.app/',
      description:
        'AzulERP is a web aplication to manage all of revenue and expenditure of a tequilera, and it doesnt stop there, also has grafics about intern data..',
      imageUrl:
        agaveAzul,
      date: 'June 1, 2024',
      datetime: '2020-03-16',
      category: { title: 'Web Aplication', href: '#' },
      author: {
        name: 'DaniDeveloper11',
        role: 'Back-end | Front-end',
        href: 'https://github.com/DaniDeveloper11/azulERP-Front.git',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tenologies: [
        {name:'Vue.js'},
        {name:'Pinia'},
        {name:'Nest'},
        {name:'TailwindCss'},
      ]
    },

    {
      id: 2,
      title: 'Lions Protection',
      href: 'https://lionsprotection.com.mx/login',
      description:
        'Lions Proteccion is a web aplication that was developed to have a overview see about a car insurance company',
      imageUrl:
        lions,
      date: 'december 2023',
      datetime: '2020-03-16',
      category: { title: 'Web Aplication', href: '#' },
      author: {
        name: 'DaniDeveloper11',
        role: 'Back-end | Front-end',
        href: 'https://github.com/Talavera281/lionsprotection',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tenologies: [
        {name:'Vue.js'},
        {name:'Vuex'},
        {name:'PHP'},
        {name:'Vuetify'},
      ]
    },
    {
      id: 3,
      title: 'Softcarmel.com',
      href: 'https://softcarmel.com/',
      description:
        'Softcarmel is a website about a software consulting company, their services are develop aplicationes and websites and Im part of it ',
      imageUrl:
        softcarmelweb,
      date: 'May 15 2023',
      datetime: '2020-03-16',
      category: { title: 'Web Site', href: '#' },
      author: {
        name: 'DaniDeveloper11',
        role: 'Front-end',
        href: 'https://softcarmel.com/',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tenologies: [
        {name:'Vue.js'},
        {name:'TailwindCss'},
        {name:'vueRouter'},
        {name:'Javascript'}
      ]
    },
    {
      id: 4,
      title: 'Oackland.net',
      href: 'https://www.oakland-net.com/',
      description:
        'Okland.net is a website about one of the most commercial companies in Mexico. The site provides comprehensive information about the companys products and services, showcasing their extensive portfolio and market reach. It also features the latest news, updates, and insights into the companys operations, innovations, and contributions to the industry. ',
      imageUrl:
        oak,
      date: 'december 2023',
      datetime: '2020-03-16',
      category: { title: 'Web Site', href: '#' },
      author: {
        name: 'DaniDeveloper11',
        role: 'Front-end',
        href: 'https://www.oakland-net.com/',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      tenologies: [
        {name:'Vue.js'},
        {name:'Vuetify'},
        {name:'vueRouter'},
        {name:'Javascript'}
      ]
    },



    // More posts...
  ]
  </script>