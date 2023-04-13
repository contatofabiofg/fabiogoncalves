<script setup>
defineProps({
  card: Object,
})
</script>

<template>
  <div
    class="w-[90vw] lg:w-[30vw] p-4 m-3 mb-10 bg-white rounded flex flex-col items-center drop-shadow-md border border-slate-200"
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
          v-if="card.typescript"
          src="../assets/typescript.png"
          alt="Typescript logo"
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

    <img
      v-if="card.log == 'superchord'"
      src="../assets/superchord.png"
      alt="Logo"
      class="w-[80%] mb-3"
    />
    <img
      v-if="card.log == 'secretfriend'"
      src="../assets/secretfriend.png"
      alt="Logo"
      class="w-[80%] mb-3"
    />
    <img
      v-if="card.log == 'happybirthday'"
      src="../assets/happybirthday.png"
      alt="Logo"
      class="w-[80%] mb-3"
    />
    <img
      v-if="card.log == 'pokedex'"
      src="../assets/pokedex.png"
      alt="Logo"
      class="w-[80%] mb-3"
    />
    <img
      v-if="card.log == 'ecommerce'"
      src="../assets/ecommerce.png"
      alt="Logo"
      class="w-[80%] mb-3"
    />
    <p>
      {{ card.description }}
    </p>

    <div class="h-full flex flex-col items-center justify-end mt-5">
      <a
        class="my-6 py-2 px-4 border-2 border-slate-600 rounded cursor pointer"
        :href="card.link"
        target="_blank"
        >See on Vercel</a
      >

      <img
        v-if="card.logo == 'superchord'"
        src="../assets/superchordexample2.png"
        alt="img"
        class="h-[200px] mb-5"
      />
      <img
        v-if="card.logo == 'secretfriend'"
        src="../assets/secretfriendexample2.png"
        alt="img"
        class="h-[200px] mb-5"
      />
      <img
        v-if="card.logo == 'happybirthday'"
        src="../assets/happybirthdayexample.png"
        alt="img"
        class="h-[200px] mb-5"
      />
      <img
        v-if="card.logo == 'pokedex'"
        src="../assets/pokedexexample.png"
        alt="img"
        class="h-[200px] mb-5"
      />
      <img
        v-if="card.logo == 'ecommerce'"
        src="../assets/ecommerceexample.png"
        alt="img"
        class="h-[200px] mb-5"
      />
    </div>
  </div>
</template>
