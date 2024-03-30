<script setup></script>

<template>
 
    <div
      class="w-[351px] mx-auto my-[101px] md:flex md:w-[870px] md:my-[150px] lg:w-[1000px]"
    >
      <img
        src="../../img/buildblog.png"
        class="h-[250px] md:w-[332px] md:h-[319px] object-fill"
        alt=""
      />
      <div
        class="w-[351px] pl-[20px] bg-black h-[142px] md:pl-[70px] md:h-[319px] md:w-[538px]"
      >
        <p
          class="gradient font-[Inter] text-[15px] md:text-[14px] font-bold leading-[13px] tracking-[4px] uppercase md:leading-[14px] pt-[22px] pb-[12px] md:pt-[71px] md:pb-[18px]"
        >
          April 11, 2022
        </p>
        <h2
          class="text-[white] font-[Inter] text-[25px] font-bold leading-[40.2px] tracking-[0.9px] md:text-[40px] lmd:leading-[48px] md:tracking-[1px] pb-[5px] md:w-[383px] md:pb-[18px]"
        >
          Goodbye New York City
        </h2>
        <router-link to="/News">
          <div
            class="flex pl-[3px] pt-[3px] pr-[3px]  pb-[4px] rounded-md cursor-pointer relative  ipad:left-[0px] w-[190px] md:pl-0 "
          >
            <p class="text-white md:text-[1.3rem] hover:text-[18px] md:hover:text-[1.35rem] md:hover:pl-[10px] hover:scale-110  duration-300 transition-text text-base">View blog post    <i class="fa-solid fa-arrow-right"></i></p>
          
          </div></router-link>
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
