<script setup></script>

<template>
  <div
    class="w-[315px] ld:w-[1000px] mt-[50px] xlg:w-[1500px] md:w-[870px] ipad:w-[600px] lg:w-[1250px] mx-auto"
  >
    <div
      class="md:flex justify-around ipad:pl-[28px] md:pt-[115px] md:pb-[86px] xlg:w-[1450px] lg:w-[1240px]"
    >
      <h2
        class="font-[Inter] text-[22px] ipad:text-[28px] font-bold tracking-[4px] leading-[22px] gradient pt-[43px] md:relative md:bottom-9"
      >
        PRODUCT MANAGER
      </h2>
      <h1 class="sub pt-[10px] md:hidden pb-[34px]">That's me!</h1>
      <p
        class="text-[#666] font-[Inter] text-[19px] font-[400] leading-[36px] md:text-[22px] md:leading-[40px] pb-[34px] md:w-[401px] lg:w-[611px]"
      >
        Over the past 7 years, I've worked with a diverse range of clients, from
        startups to Fortune 10 companies. I love creating products that delight
        users and help businesses grow.
      </p>
    </div>

    <div class="pt-[35px] ipad:pl-[50px] md:hidden">
      <div class="ipad:w-[480px] ipad:ml-[9px] ipad:h-[410px]  overflow-hidden">
        <img 
        class="w-full h-full object-cover"
        src="../../../img/jimmy.png" />
      </div>

      <div class="flex">
        <img
          class="w-[167.50px] ipad:w-[250px] relative right-[3px] ipad:h-[240px] ld:h-[140px] my-[3px] p-[10px] h-[150px]"
          src="../../../img/jim3.png"
        />
        <img
          class="w-[167.50px] ipad:w-[250px] relative right-[4px] ipad:h-[240px] my-[3px] p-[10px] h-[150px]"
          src="../../../img/jim4.png"
        />
      </div>
      <div class="ipad:w-[480px] ipad:ml-[9px] overflow-hidden" >
        <img  class="w-full h-full object-cover" src="../../../img/teach.png" />
      </div>
      
    </div>

    <div class="hidden md:flex md:pl-[45px]">
      <div class="w-[325.53px] mr-[16px] h-[344.81px] lg:w-[507px] lg:h-[506px] overflow-hidden">
        <img
        class="w-full h-full object-cover"
        src="../../../img/teach.png"
      />
      </div>
      <div class="w-[325.53px] mr-[16px] h-[344.81px] lg:w-[507px] lg:h-[506px] overflow-hidden">
        <img
        class="w-full h-full object-cover"
        src="../../../img/jimmy.png"
      />
      </div>
      
     
      <div class="flex-col ">
        <img
          class="md:w-[175.55px] md:h-[160px] lg:w-[338px] lg:h-[247px]"
          src="../../../img/jim3.png"
        />
        <img
          class="w-[175.55px] mt-[22.2px] md:h-[160px] ld:mt-[25px] lg:mt-[10px] lg:w-[338px] lg:h-[247px]"
          src="../../../img/jim4.png"
        />
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
