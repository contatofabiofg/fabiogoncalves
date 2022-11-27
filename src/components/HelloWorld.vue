<script setup>
import { ref } from 'vue'

const opensuperchord = ref(true)
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img src="../assets/fabiogoncalves.png" alt="" class="w-60 my-6" />

    <h3 class="font-bold">Projects and Technologies</h3>

    <section>
      <div
        class="relative w-[90vw] p-4 m-3 mb-10 bg-white rounded-2xl drop-shadow flex flex-col items-center drop-shadow-2xl border border-slate-200"
        :class="[opensuperchord ? '' : 'h-32 overflow-hidden']"
      >
        <div
          class="flex justify-center items-center w-full text-center pb-2 mb-3 text-2xl font-bold border-b border-slate-300 cursor-pointer"
        >
          <h4 @click="opensuperchord = !opensuperchord" class="inline">
            Superchord
          </h4>
          <div class="flex items-center">
            <span>
              <img
                src="../assets/vite.png"
                alt=""
                class="w-5 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/vue2.png"
                alt=""
                class="w-5 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/tailwind.png"
                alt=""
                class="w-24 mx-2 opacity-50"
              />
            </span>
          </div>
        </div>

        <img
          src="../assets/superchord.png"
          alt=""
          class="w-[80%] lg:w-[50%] mb-3"
        />
        <p>
          System developed to assistant the instrumentists's studies/rehershal;
          In this it's possible to write chords and, in a simple touch, change
          the tonality, modify chords, to include basses by drag and drop, to
          print PDF and export/import in editable file. The chords concerning to
          the tonality's grade are ordered and displayed initially but, at
          expand the controll bar, it is possible to add chords that are out the
          grade.
        </p>
        <br />
        <p>Developed with Vite, Vue.js and TailWind.</p>
        <p>Another features available: DarkMode and Zoom. Platform: web.</p>

        <a
          class="my-6 py-2 px-4 border-2 border-slate-600 rounded cursor pointer"
          href="https://superchord.vercel.app/"
          target="_blank"
          >See on Vercel</a
        >
        <div class="flex flex-col lg:flex-row mt-5">
          <div>
            <img
              src="../assets/superchordexample2.png"
              alt=""
              class="w-[500px] mr-5 mb-5"
            />
          </div>
          <div class="w-full lg:w-fit flex justify-center">
            <img src="../assets/superchordexample.png" alt="" class="w-[50%]" />
          </div>
        </div>
        <img
          v-if="!opensuperchord"
          src="../assets/dissolve.png"
          alt=""
          class="w-full h-24 absolute bottom-0 opacity-95"
        />
      </div>
      <!-- Secret Friend -->
      <div
        class="relative w-[90vw] p-4 m-3 mb-10 bg-white rounded-2xl drop-shadow flex flex-col items-center drop-shadow-2xl border border-slate-200"
        :class="[opensuperchord ? '' : 'h-32 overflow-hidden']"
      >
        <div
          class="flex justify-center items-center w-full text-center pb-2 mb-3 text-2xl font-bold border-b border-slate-300 cursor-pointer"
        >
          <h4 @click="opensuperchord = !opensuperchord" class="inline">
            Secret Friend
          </h4>
          <div class="flex items-center">
            <span>
              <img
                src="../assets/vite.png"
                alt=""
                class="w-5 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/vue2.png"
                alt=""
                class="w-5 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/tailwind.png"
                alt=""
                class="w-24 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/firebase.png"
                alt=""
                class="w-20 mx-2 opacity-50"
              />
            </span>
          </div>
        </div>

        <img
          src="../assets/secretfriend.png"
          alt=""
          class="w-[80%] lg:w-[50%] mb-3"
        />
        <p>
          Secret Santa's system, devolped to raffle names, host in network and
          share the result by link. Uses Firebase for authentication and host;
          after raffle, is generated a password for each name and a text message
          the can be shared by whatsapp. In this message there is a link that,
          with the name and the pass, show "who you raffle".
        </p>
        <br />
        <p>Developed with Vite, Vue.js, TailWind and Firebase.</p>
        <p>
          Authentication: Email, Facebook or Gmail. Mobile First. Platform: web
        </p>

        <a
          class="my-6 py-2 px-4 border-2 border-slate-600 rounded cursor pointer"
          href="https://secret-friend-phi.vercel.app/"
          target="_blank"
          >See on Vercel</a
        >
        <div class="flex flex-col lg:flex-row mt-5">
          <div>
            <img
              src="../assets/secretfriendexample2.png"
              alt=""
              class="w-[500px] mr-5 mb-5"
            />
          </div>
          <div class="w-full lg:w-fit flex justify-center">
            <img
              src="../assets/secretfriendexample.png"
              alt=""
              class="w-[50%]"
            />
          </div>
        </div>
        <img
          v-if="!opensuperchord"
          src="../assets/dissolve.png"
          alt=""
          class="w-full h-24 absolute bottom-0 opacity-95"
        />
      </div>
      <!-- Happy Birthday -->
      <div
        class="relative w-[90vw] p-4 m-3 mb-10 bg-white rounded-2xl drop-shadow flex flex-col items-center drop-shadow-2xl border border-slate-200"
        :class="[opensuperchord ? '' : 'h-32 overflow-hidden']"
      >
        <div
          class="flex justify-center items-center w-full text-center pb-2 mb-3 text-2xl font-bold border-b border-slate-300 cursor-pointer"
        >
          <h4 @click="opensuperchord = !opensuperchord" class="inline">
            Happy Birthday
          </h4>
          <div class="flex items-center">
            <span>
              <img
                src="../assets/ionic.png"
                alt=""
                class="w-20 mx-2 opacity-50"
              />
            </span>

            <span>
              <img
                src="../assets/vue2.png"
                alt=""
                class="w-5 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/tailwind.png"
                alt=""
                class="w-24 mx-2 opacity-50"
              />
            </span>
            <span>
              <img
                src="../assets/firebase.png"
                alt=""
                class="w-20 mx-2 opacity-50"
              />
            </span>
          </div>
        </div>

        <img
          src="../assets/superchord.png"
          alt=""
          class="w-[80%] lg:w-[50%] mb-3"
        />
        <p>
          Hybrid mobile app designed to record birthdays; the app orders the
          list of names by date, pushes notifications each month reminding the
          birthdays, suggests gifts, tours, trips, etc. It is possible to choose
          a emoji for every person and the type of relationship.
        </p>
        <br />
        <p>Developed with Ionic Framework, Vue.js, TailWind and Firebase.</p>
        <p>
          Authentication: Email, Facebook or Gmail. Mobile First. Platform:
          Mobile.
        </p>

        <a
          class="my-6 py-2 px-4 border-2 border-slate-600 rounded cursor pointer"
          href="https://superchord.vercel.app/"
          target="_blank"
          >See on Vercel</a
        >
        <div class="flex flex-col lg:flex-row mt-5">
          <div>
            <img
              src="../assets/superchordexample2.png"
              alt=""
              class="w-[500px] mr-5 mb-5"
            />
          </div>
          <div class="w-full lg:w-fit flex justify-center">
            <img src="../assets/superchordexample.png" alt="" class="w-[50%]" />
          </div>
        </div>
        <img
          v-if="!opensuperchord"
          src="../assets/dissolve.png"
          alt=""
          class="w-full h-24 absolute bottom-0 opacity-95"
        />
      </div>
    </section>
  </div>
</template>
