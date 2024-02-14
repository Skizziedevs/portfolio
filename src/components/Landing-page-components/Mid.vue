<script setup></script>

<template>
  <div class="bg-black px-4 py-10 w-full">
    <div
      class="w-[315px] pb-[110px] md:w-[890px] lg:w-[1215px] md:flex justify-around mx-auto"
    >
      <div class="w-[351px] pb-[80px]">
        <h2 class="gradient text-[25px] font-bold pb-[17px] tracking-[3px]">
          BLOGS
        </h2>
        <h1 class="text-white pb-[29px] text-5xl font-bold">Latest Blog</h1>
        <div class="flex pl-[49px] md:pl-0">
          <p class="text-white pr-[19px]">View all</p>
          <img src="../../../img/ic.png" alt="" />
        </div>
      </div>
      <div
        class="border-b-2 border-gray-300 w-[351px] md:w-[500px] lg:w-[692px]"
      >
        <p class="text-gray-300 pb-[23px]">April 11, 2022 .5 minutes</p>
        <h2
          class="text-white text-lg md:text-2xl font-bold leading-[30px] md:leading-[37px] pb-[32px]"
        >
          Goodbye New York City
        </h2>
        <div class="flex pl-[49px] md:pl-0 pb-[24px]">
          <p class="text-white pr-[19px]">Read the article</p>
          <img src="../../../img/ic.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(
    108deg,
    #b16cea 8%,
    #ff5e69 40%,
    #ff8a56 77%,
    #ffa84b 91%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
