<script setup>
defineProps({
  card: Object,
})
</script>

<template>
  <div
    class="duration-200 hover:scale-[102%] w-[90vw] lg:w-[30vw] p-4 m-3 mb-10 bg-white rounded flex flex-col items-center drop-shadow-md border border-slate-200"
  >
    <div
      class="flex justify-center items-center w-full text-center pb-2 mb-3 text-2xl font-bold border-b border-slate-300"
    >
      <h3 class="inline">{{ card.title }}</h3>
      <div class="flex items-center">
        <img
          v-if="card.vite"
          src="../assets/vite.png"
          alt="Vite Logo"
          class="w-5 mx-2 opacity-50"
        />
        <img
          v-if="card.quasar"
          src="../assets/quasar.png"
          alt="Quasar Logo"
          class="w-5 mx-2 opacity-50"
        />

        <img
          v-if="card.vue"
          src="../assets/vue2.png"
          alt="Vue logo"
          class="w-5 mx-2 opacity-50"
        />

        <img
          v-if="card.tailwind"
          src="../assets/tailwind.png"
          alt="Tailwind Logo"
          class="w-5 mx-2 opacity-50"
        />
        <img
          v-if="card.firebase"
          src="../assets/firebase.png"
          alt="Firebase Logo"
          class="w-5 mx-2 opacity-50"
        />
        <img
          v-if="card.ionic"
          src="../assets/ionic.png"
          alt="Ionic Logo"
          class="w-5 mx-2 opacity-50"
        />
      </div>
    </div>

    <img :src="card.logo" alt="Logo" class="w-[80%] mb-3" />
    <p>
      {{ card.description }}
    </p>

    <a
      class="my-6 py-2 px-4 border-2 border-slate-600 rounded cursor pointer"
      :href="card.link"
      target="_blank"
      >See on Vercel</a
    >
    <div class="flex flex-col lg:flex-row mt-5">
      <div>
        <img :src="card.img" alt="img" class="h-[200px] mr-5 mb-5" />
      </div>
    </div>
  </div>
</template>
