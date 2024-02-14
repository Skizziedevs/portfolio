<script setup></script>

<template>
  <div class="w-[100%] px-[10px] bg-black">
    <div
      class="mx-auto w-[351px] md:w-[870px] pt-[60px] md:pt-[150px] pb-[80px]"
    >
      <h1
        class="w-[239px] md:w-[550px] text-[white] font-[Inter] text-[38px] leading-[43px] tracking-[0.5px] md:text-[57px] font-bold md:leading-[59.4px] md:tracking-[2.5px]"
      >
        Want to make awesome products?
      </h1>
      <h1
        class="gradient text-[white] font-[Inter] pt-[8px] text-[35px] leading-[43px] tracking-[0.5px] md:text-[57px] font-bold md:leading-[59.4px] md:tracking-[1.2px]"
      >
        Let's get in touch
      </h1>
    </div>
    <div class="mx-auto w-[351px] md:w-[870px] md:flex">
      <div>
        <img src="../../img/footerlogo.png" class="pb-[12px]" alt="" />
        <p
          class="text-[#5C5C5C] font-[Inter] text-[15px] font-bold leading-[36px]"
        >
          justintsn10@gmail.com
        </p>
      </div>
      <div class="h-[65px] mt-[84px] flex md:hidden">
        <ul class="flex-col space-y-[28px]">
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Blog
          </li>
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Linkedin
          </li>
        </ul>
        <ul class="flex-col pl-[156px] space-y-[28px] md:flex-row">
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Projects
          </li>
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Resume
          </li>
        </ul>
      </div>
      <div class="w-[405px] pl-[116px] hidden md:block">
        <ul class="flex justify-between">
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Blog
          </li>
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Projects
          </li>
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Linkedin
          </li>
        </ul>
        <ul class="pt-[40px]">
          <li
            class="text-[rgb(255,255,255)] font-[Inter] text-[16px] font-[400] leading-[16px]"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
    <div class="w-[351px] md:w-[870px] mx-auto">
      <p
        class="text-[#8A95AD] text-start font-[Inter] text-[13px] font-[400] leading-[21px] mt-[169px] pb-[30px] w-[870px] mx-auto"
      >
        Justin Hinh | Product Manager
      </p>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  font-family: Inter;

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
