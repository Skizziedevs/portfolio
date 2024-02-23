<script setup></script>

<template>
  <div class="bg-black py-10 w-full">
    <div
      class="w-[315px] pb-[70px] pl-[6px] md:w-[890px] xlg:w-[1400px] ld:w-[1000px] ipad:flex ipad:w-[700px] ipad:relative ipad:top-[40px] lg:w-[1215px] md:flex justify-around ipad:mx-auto"
    >
      <div class="w-[351px] ipad:w-[700px] sm:ml-[100px] ipad:ml-[0px] pb-[80px]">
        <h2 class="gradient text-[25px] font-bold pb-[17px] tracking-[3px]">
          BLOGS
        </h2>
        <h1 class="text-white pb-[29px] text-5xl font-bold">Latest Blog</h1>
        <div
          class="flex pl-[5px] pt-[4px] ld:left-[51px] pb-[4px] rounded-md cursor-pointer relative left-[51px] ipad:left-[4px] w-[100px] md:pl-0 hover:bg-gray-700"
        >
          <p class="text-white p-[2px] pr-[8px] pl-[4px]">View all</p>
          <img
            src="../../../img/ic.png"
            class="w-[22px] h-[22px] mt-[1.7px]"
            alt=""
          />
        </div>
      </div>
      <div
        class="border-b-2 pb-[90px] pl-[6px] mr-[6px] border-gray-300 w-[93vw] md:w-[500px] lg:w-[692px]"
      >
        <div class="sm:ml-[100px] ipad:ml-[0px]">
          <p class="text-gray-300 pb-[23px]">April 11, 2022 .5 minutes</p>
          <h2
            class="text-white text-lg md:text-2xl font-bold leading-[30px] md:leading-[37px] pb-[32px]"
          >
            Goodbye New York City
          </h2>
          <div
            class="flex pl-[3px] pt-[4px] pr-[3px] ld:left-[51px] pb-[4px] rounded-md cursor-pointer relative left-[51px] ipad:left-[0px] w-[150px] md:pl-0 hover:bg-gray-700"
          >
            <p class="text-white p-[2px] pr-[8px] pl-[4px]">Read the article</p>
            <img
              src="../../../img/ic.png"
              class="w-[22px] h-[22px] mt-[2.1px]"
              alt=""
            />
          </div>
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
