<script setup></script>

<template>
  <div class="w-[315px] ld:w-[1000px] mt-[70px] xlg:w-[1500px] md:w-[870px] ipad:w-[600px] lg:w-[1250px] mx-auto">
    <div
      class="md:flex justify-around md:pt-[165px] md:pb-[86px] xlg:w-[1450px]  lg:w-[1240px]"
    >
      <h2
        class="font-[Inter] text-[22px] ipad:text-[28px] font-bold tracking-[4px] leading-[22px] gradient pt-[50px] md:relative md:bottom-9"
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

    <div class="pt-[51px] ipad:pl-[50px]  md:hidden">
      <img class="ipad:w-[480px] ipad:ml-[9px] ipad:h-[410px] " src="../../../img/jimmy.png" />
      <div class="flex">
        <img
          class="w-[167.50px] ipad:w-[250px] ipad:h-[240px] ld:h-[140px] p-[10px] h-[150px]"
          src="../../../img/jim3.png"
        />
        <img
          class="w-[167.50px] ipad:w-[250px] ipad:h-[240px]  p-[10px] h-[150px]"
          src="../../../img/jim4.png"
        />
      </div>
      <img class="ipad:w-[480px] ipad:ml-[9px] ipad:h-[415px] " src="../../../img/teach.png" />
    </div>

    <div class="hidden md:flex xlg:pl-[45px]">
      <img
        class="w-[359.53px] mr-[16px] h-[344.81px] lg:w-[507px] lg:h-[506px]"
        src="../../../img/teach.png"
      />
      <img
        class="w-[359.31px] h-[344.31px] lg:w-[507px] lg:h-[506px]"
        src="../../../img/jimmy.png"
      />
      <div class="flex-col pl-[15px]">
        <img
          class="w-[239.55px] h-[178.93px] lg:w-[338px] lg:h-[247px]"
          src="../../../img/jim3.png"
        />
        <img
          class="w-[245.55px] mt-[16.2px] h-[148.48px] lg:w-[338px] lg:h-[247px]"
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
