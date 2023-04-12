<script setup>
import Card from './Card.vue'
import { cards } from './js/cards'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Header -->
    <img
      src="../assets/fabiogoncalves.png"
      alt="Main logo"
      class="w-60 mt-6 mb-2"
    />

    <div class="flex mb-3 opacity-70">
      <a href="https://wa.me/5522981135860" target="_blank">
        <img
          src="../assets/whatsapp.png"
          alt="Whatsapp button"
          class="w-6 mr-3"
        />
      </a>
      <a href="mailto:contatofabiofg@hotmail.com.br" target="_blank">
        <img src="../assets/email.png" alt="Email Button" class="w-6" />
      </a>
    </div>

    <h2 class="font-bold">Projects and Technologies</h2>
    <!-- Superchord -->
    <section class="flex flex-wrap justify-center">
      <Card v-for="(item, index) in cards" :key="index" :card="item" />
    </section>
  </div>
</template>
