<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
</script>

<template>
  <div class="bg-black py-10 w-full">
    <div
      class="w-[315px] pb-[40px] pl-[6px] md:w-[890px] xlg:w-[1400px] ld:w-[1000px] ipad:flex ipad:w-[700px] ipad:relative ipad:top-[40px] lg:w-[1215px] md:flex justify-around ipad:mx-auto"
    >
      <div
        class="w-[351px] ipad:w-[700px] pl-[23px] ipad:pl-[60px] md:pl-[25px]lg:pl-[100px] sm:ml-[60px] mid:ml-[120px] ipad:ml-[0px] pb-[80px]"
      >
        <h2 class="gradient text-[25px] font-bold pb-[17px] tracking-[3px]">
          BLOGS
        </h2>
        <h1 class="text-white pb-[29px] text-5xl font-bold">Latest Blog</h1>
        <div
          class="flex pl-[5px] pt-[4px]  pb-[4px] rounded-md cursor-pointer relative  ipad:left-[4px] w-[140px] md:pl-0 0"
        >
          <p class="text-white p-[2px] pr-[8px] pl-[4px] hover:text-[18px] hover:scale-110  duration-300 transition-transform text-base">View all   <i class="fa-solid fa-arrow-right"></i></p>
         
        </div>
      </div>
      <div
        class="border-b-2 pb-[75px] ipad:w-[600px] ipad:relative ipad:bottom-[55px] md:right-[55px] lg:right-[0px] ipad:pl-[3px] ipad:pb-[60px] pl-[23px] mr-[6px] border-gray-300 w-[97vw] md:w-[500px] lg:w-[692px]"
      >
        <div class="sm:ml-[60px]  mid:ml-[120px] ipad:ml-[0px] ipad:mt-[30px] ipad:relative ipad:top-[26.5px]">
          <p class="text-gray-300 pb-[23px] ipad:pb-[26px]">April 11, 2022 .5 minutes</p>
          <h2
            class="text-white text-lg ipad:text-2xl font-bold leading-[30px] md:leading-[37px] pb-[18px] ipad:pb-[22px]"
          >
            Goodbye New York City
          </h2>
          <div
            class="flex pl-[3px] pt-[7px] pr-[3px]  pb-[4px] rounded-md cursor-pointer relative  ipad:left-[0px] w-[180px] md:pl-0 "
          >
            <p class="text-white p-[2px] pr-[8px] pl-[4px] hover:text-[18px] hover:scale-110  duration-300 transition-transform text-base">Read the article    <i class="fa-solid fa-arrow-right"></i></p>
          
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
