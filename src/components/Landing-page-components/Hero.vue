<script setup></script>

<template>
  <div
    class="mx-auto w-[351px] pt-[25px] md:pt-[112px] md:flex md:w-[870px] lg:w-[1215px] justify-between"
  >
    <div class="md:w-[387px] lg:w-[527px] lg:pt-[92px]">
      <span
        class="gradient text-[41px] font-bold leading-[44px] tracking-[-2px] md:text-[72px] md:leading-[82.5px]"
        >i build products</span
      >
      <h1
        class="w-[351px] md:w-[387px] lg:w-[527px] text-[41px] font-bold leading-[44px] tracking-[-2px] md:text-[72px] md:leading-[82.5px]"
      >
        that delight and inspire people
      </h1>

      <p
        class="text-[#666] font-[400] text-[17px] leading-[28.5px] pt-[28px] md:text-[22px] w-[304px] md:w-[438px]"
      >
        Hello! I’m Justin, a Product Manager based in Denver, Colorado.
      </p>
      <p class="font-bold text-[17px] leading-[17px] pt-[26px] md:text-[23px]">
        Download cv
      </p>
    </div>

    <div class="pt-[31px]">
      <img src="../../../img/jim.png" class="md:hidden" alt="" />
      <img
        src="../../../img/jimmd.png"
        class="md:block hidden lg:hidden"
        alt=""
      />
      <img
        src="../../../img/large.png"
        class="hidden w-[500px] lg:block"
        alt=""
      />
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
