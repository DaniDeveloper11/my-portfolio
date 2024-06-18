<!-- src/views/Summary.vue -->
<template>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Summary</h1>
      <embed src="@/assets/summary.pdf" type="application/pdf" class="w-full h-96" />
      <a :href="pdfUrl" download="summary.pdf" class="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Download PDF</a>
    </div>
  </template>
  
  <script setup>
  const pdfUrl = new URL('@/assets/summary.pdf', import.meta.url).href
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados si es necesario */
  </style>
  
  