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
          class="gradient font-[Inter] text-[13px] font-bold leading-[13px] tracking-[4px] uppercase md:leading-[14px] pt-[22px] pb-[16px] md:pt-[71px] md:pb-[14px]"
        >
          April 11, 2022
        </p>
        <h2
          class="text-[white] font-[Inter] text-[25px] font-bold leading-[31.2px] tracking-[0.5px] md:text-[40px] lmd:leading-[48px] md:tracking-[1px] pb-[12.5px] md:w-[383px] md:pb-[28px]"
        >
          Goodbye New York City
        </h2>
        <router-link to="/News">
        <div
          class="flex rounded-md cursor-pointer hover:bg-gray-700 p-[3px] w-[146px] ipad:w-[156px] ld:w-[160px]"
        >
          <p
            class="link text-white ld:text-[18.5px] ipad:text-[18px] pr-[10px]"
          >
            View Blog Post
          </p>
          <img
            src="../../img/ic.png"
            class="w-[22px] h-[22px] mt-[2.1px] ipad:mt-[3px] ld:mt-[3px]"
            alt=""
          />
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
