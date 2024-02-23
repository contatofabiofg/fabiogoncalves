<script setup></script>

<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Header -->

    <img
      src="../assets/fabiogoncalves.png"
      alt="Main logo"
      class="w-[500px] max-w-[90vw] mt-[50px] lg:mt-[100px] mb-2 invert"
    />

    <div class="flex mb-[20px] lg:mb-[50px] invert">
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

    <h3 data-aos="fade-right" class="mt-8 text-[30px] lg:text-[40px]">
      { Projetos e Tecnologias }
    </h3>

    <section class="flex flex-col justify-center items-center">
      <h1 data-aos="fade-right" class="mt-[50px]">IBV APP</h1>
      <div class="iconArea" data-aos="fade-right">
        <img src="../assets/reactnative.png" alt="" class="icon" />
        <img src="../assets/firebase.png" alt="" class="icon" />
        <img src="../assets/styledcomponents.png" alt="" class="icon" />
      </div>
      <h3 data-aos="fade-right" class="text-center">
        Desenvolvido em React Native, o conteúdo do aplicativo é alimentado por
        um banco de dados do firebase. A gestão é feita em um painal
        administrativo à parte. Estilizado com Styled Components.
      </h3>
      <img
        data-aos="fade-right"
        src="../assets/ibvapp.png"
        alt=""
        class="w-[100vw] lg:w-[80vw]"
      />
      <h1 data-aos="fade-right" class="mt-[50px]">IBV ADMIN</h1>
      <div class="iconArea" data-aos="fade-right">
        <img src="../assets/reactnative.png" alt="" class="icon" />
        <img src="../assets/firebase.png" alt="" class="icon" />
        <img src="../assets/tailwind.png" alt="" class="icon" />
      </div>
      <h3 data-aos="fade-right" class="text-center">
        Ambiente de gestão do aplicativo IBV APP, desenvolvido em React. Acesso
        via autenticação; banco de dados: Firebase. Estilizado com TailwindCSS.
      </h3>
      <img
        data-aos="fade-right"
        src="../assets/ibvadmin.png"
        alt=""
        class="w-[100vw] lg:w-[80vw]"
      />

      <h1 data-aos="fade-right" class="mt-[50px]">SUPERCHORD</h1>
      <div class="iconArea" data-aos="fade-right">
        <img src="../assets/vite.png" alt="" class="icon" />
        <img src="../assets/vue2.png" alt="" class="icon" />
        <img src="../assets/tailwind.png" alt="" class="icon" />
      </div>
      <h3 data-aos="fade-right" class="text-center">
        Sistema desenvolvido para auxiliar o estudo musical e a criação/edição
        de cifras. Tecnologias utilizadas: VueJs, Firebase e TailwindCSS.
      </h3>
      <a
        class="darkbutton"
        data-aos="fade-right"
        href="https://superchord.vercel.app"
        target="_blank"
        >ACESSAR</a
      >
      <img
        data-aos="fade-right"
        src="../assets/superchordmookup.png"
        alt=""
        class="w-[100vw] lg:w-[80vw]"
      />

      <h1 data-aos="fade-right" class="mt-[50px]">CARD YOURSELF</h1>
      <div class="iconArea" data-aos="fade-right">
        <img src="../assets/vite.png" alt="" class="icon" />
        <img src="../assets/vue2.png" alt="" class="icon" />
        <img src="../assets/ionic.png" alt="" class="icon" />
      </div>
      <h3 data-aos="fade-right" class="text-center">
        Jogo estilo card-game multiplataforma (Web e Mobile).
      </h3>
      <a
        class="darkbutton"
        data-aos="fade-right"
        href="https://card-yourself.vercel.app"
        target="_blank"
        >ACESSAR</a
      >
      <img
        data-aos="fade-right"
        src="../assets/cardyourself.png"
        alt=""
        class="w-[100vw] lg:w-[80vw]"
      />
      <!-- <Card v-for="(item, index) in cards" :key="index" :card="item" /> -->
    </section>
  </div>
</template>
