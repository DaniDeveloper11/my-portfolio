<template>

<div class="mx-auto sm:mx-32">

    <div class="border-b border-gray-200 pb-5 sm:pb-0 my-32">
      <h3 class="text-2xl font-bold leading-6 text-gray-900">My Projects</h3>
      <div class="mt-3 sm:mt-4">
        <div class="sm:hidden">
          <label for="current-tab" class="sr-only">Select a tab</label>
          <select v-model="selectedTab" id="current-tab" name="current-tab" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            <option v-for="tab in tabs" :key="tab.name" :value="tab.name">{{ tab.name }}</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              @click="selectedTab = tab.name"
              :class="[selectedTab === tab.name ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']"
              class="cursor-pointer"
              >{{ tab.name }}</a
            >
          </nav>
        </div>
      </div>
  
      <!-- Tab Content -->
      <div class="mt-10">
        <div v-if="selectedTab === 'Project 1'">
          <!-- Content for Project 1 -->
          <!-- <p>Details about Project 1</p> -->
            <Tab v-bind:post="posts[2]"></Tab>

        </div>
        <div v-if="selectedTab === 'Project 2'">
          <!-- Content for Project 2 -->
          <Tab v-bind:post="posts[1]"></Tab>

        </div>
        <div v-if="selectedTab === 'Project 3'">
          <!-- Content for Project 3 -->
          <Tab v-bind:post="posts[0]"></Tab>
        </div>
        <div v-if="selectedTab === 'Project 4'">
          <!-- Content for Project 3 -->
          <Tab v-bind:post="posts[3]"></Tab>
        </div>
        <!-- Add more projects as needed -->
      </div>
    </div>

</div>

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Tab from '@/components/TabP.vue'
//   import image
import programa from '@/assets/Programas/1.png'
import programa2 from '@/assets/Programas/2.png'
import programa3 from '@/assets/Programas/3.png'
import programa4 from '@/assets/Programas/4.png'



import Github from './icons/github.vue';


  const selectedTab = ref('Project 1');
  
  const tabs = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },

    // Add more projects as needed
  ];
  const posts = [
  {
    id: 1,
    title: 'Drywapp',
    href: '#',
    description:
    '"Drywapp was developed to manage multiple drywall construction projects and contractors. It also includes a calculator to select the type of material to be used in the construction before starting."',
    imageUrl:
      programa,
    date: 'May 15 2024',
    datetime: '2020-03-16',
    category: { title: 'Web Aplication', href: '#' },
    author: {
      name: 'DaniDeveloper11',
      role: 'Frontend',
      href: '#',
      imageUrl:
        Github,
    },
  },
  {
    id: 2,
    title: 'Todo app',
    href: 'https://danideveloper11.github.io/TodoApp/',
    description:
      '"A Todo App that was created to practice about CRUD (Create, Read, Update, Delete) method, it save information into local storage "',
    imageUrl:
      programa2,
    date: 'May 15 2024',
    datetime: '2020-03-16',
    category: { title: 'Web Aplication', href: '#' },
    author: {
      name: 'DaniDeveloper11',
      role: 'Frontend',
      href: 'https://github.com/DaniDeveloper11/TodoApp.git',
      imageUrl:
        Github,
    },
  },
  {
    id: 3,
    title: 'Login and Blog website',
    href: 'https://github.com/DaniDeveloper11/blogLaravel.git',
    description:
      '"Blog page with a login"',
    imageUrl:
      programa3,
    date: 'May 15 2024',
    datetime: '2020-03-16',
    category: { title: 'Web Aplication', href: '#' },
    author: {
      name: 'DaniDeveloper11',
      role: 'Frontend',
      href: 'https://github.com/DaniDeveloper11/blogLaravel.git',
      imageUrl:
        Github,
    },
  },
  {
    id: 4,
    title: 'Landing Page to a Hospital',
    href: 'https://miguelbriseno.github.io/hospitalsanjose.github.io/',
    description:
      '"A landing Page to a Hospital about eyes care"',
    imageUrl:
      programa4,
    date: 'May 15 2024',
    datetime: '2020-03-16',
    category: { title: 'Landing Page', href: '#' },
    author: {
      name: 'DaniDeveloper11',
      role: 'Frontend',
      href: 'https://github.com/MiguelBriseno/landing-page-hs.git',
      imageUrl:
        Github,
    },
  },
  // More posts...
]
  </script>
  