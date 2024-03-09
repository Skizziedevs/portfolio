<script setup>
import { ref } from "vue";

let openit = ref(false);
let closeit = ref(true);
</script>

<template>
  <div
    class="flex justify-between w-[360px] md:w-[870px] ld:w-[1100px] xlg:w-[1600px] pt-[43px] lg:w-[1100px] ipad:w-[600px] mx-auto"
  >
    <a href="/"
      ><img class="w-[175.50px] h-[37.20px] xlg:w-[205.50px] xlg:h-[50.20px]" src="../../img/logo.png"
    /></a>
    <div></div>
    <ul
      class="md:flex space-x-[43.3px] xlg:text-[23px] xlg:space-x-[70px] md:relative md:left-[96px] lg:left-[190px] hidden"
    >
    <router-link to="/Projects"><li class="hover:bg-gray-300 rounded-md p-[3px]">Projects</li></router-link>
    <router-link to="/Blogs"><li class="hover:bg-gray-300 rounded-md p-[3px]">Blogs</li></router-link>
    <router-link to="/"> <li class="hover:bg-gray-300 rounded-md p-[3px]">Resume</li></router-link>
    <router-link to="#"><li class="hover:bg-gray-300 rounded-md p-[3px]">Contact</li></router-link>
    </ul>
    <div @click="closeit = !closeit" class="pr-[14px] pt-[10px]">
      <button
        id="menu-btn"
        class="block hamburger md:hidden focus:outline-none"
        :class="{ open: openit }"
        @click="openit = !openit"
      >
        <span class="hamburger-top bg-black"></span>
        <span class="hamburger-middle bg-black"></span>
        <span class="hamburger-bottom bg-black"></span>
      </button>
    </div>
  </div>
  <div class="md:hidden">
    <div
      id="menu"
      class="absolute rounded-3xl flex-col items-center flex self-end z-10 w-[90%] py-8 mt-16 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      :class="{ invisible: closeit }"
    >
      <a href="/Projects" class="hover:bg-gray-300 rounded-md p-[3px]">Projects</a>
      <div class="w-[60%] mx-[20%] h-[1px] bg-gray-600"></div>
      <a href="/Blogs" class="hover:bg-gray-300 rounded-md p-[3px]">Blogs</a>
      <div class="w-[60%] mx-[20%] h-[1px] bg-gray-600"></div>
      <a href="/" class="hover:bg-gray-300 rounded-md p-[3px]">Resume</a>
      <div class="w-[60%] mx-[20%] h-[1px] bg-gray-600"></div>
      <a href="#" class="hover:bg-gray-300 rounded-md p-[3px]">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}
.invisible {
  display: none;
}
.visible {
  display: block;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>
