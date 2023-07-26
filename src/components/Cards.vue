<script setup>
import { ref } from "vue";




</script>

<template>
<div class="w-[375px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 sm:w-[780px] md:gap-x-[30px] md:w-[1440px] md:px-[192px]">

 <div class="w-[343px] mx-auto h-[120px] sm:relative sm:top-10 sm:h-[259px]  md:w-[350px] md:h-[322px] gradient ">
    <h2 class="subheader w-[286px] pt-[24px] sm:pt-[56px] md:w-[286px] text-white mx-auto my-auto">Check out our most popular courses!</h2>
    </div> 
    
    <div class="w-[343px] h-[259px] md:w-[350px] md:h-[322px] box mx-auto bg-white mt-[40px]">
    <img src="../../img/icon-animation.svg" class="ml-[28px] relative bottom-[20px]" alt="">
    <div class="pl-[28px] pt-[15px]">
    <h2 class="title">Animation</h2>
    <p class="pt-[16px] paragraph pb-[24px] sm:w-[286px] md:pt-[24px] md:w-[286px] md:pb-[24px] ">Learn the latest animation techniques to create stunning motion design and captivate your audience.</p>
    <span class="start">Get started.</span>
    </div>
    </div>


     <div class="w-[343px] h-[259px] md:w-[350px] md:h-[322px] box mx-auto bg-white mt-[40px]">
    <img src="../../img/icon-design.svg" class="ml-[28px] relative bottom-[20px]" alt="">
    <div class="pl-[28px] pt-[15px]">
    <h2 class="title">Design</h2>
    <p class="pt-[16px] paragraph pb-[24px] sm:w-[286px] md:pt-[24px] md:w-[286px] md:pb-[24px] ">Create beautiful, usable interfaces to help shape the future of how the web looks.</p>
    <span class="start">Get started.</span>
    </div>
    </div>


     <div class="w-[343px] h-[259px] md:w-[350px] md:h-[322px] box mx-auto bg-white mt-[40px]">
    <img src="../../img/icon-photography.svg" class="ml-[28px] relative bottom-[20px]" alt="">
    <div class="pl-[28px] pt-[15px]">
    <h2 class="title">Photography</h2>
    <p class="pt-[16px] paragraph pb-[24px] sm:w-[286px] md:pt-[24px] md:w-[286px] md:pb-[24px] ">Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.</p>
    <span class="start">Get started.</span>
    </div>
    </div>

    <div class="w-[343px] h-[259px] md:w-[350px] md:h-[322px] box mx-auto bg-white mt-[40px]">
    <img src="../../img/icon-photography.svg" class="ml-[28px] relative bottom-[20px]" alt="">
    <div class="pl-[28px] pt-[15px]">
    <h2 class="title">Crypto</h2>
    <p class="pt-[16px] paragraph pb-[24px] sm:w-[286px] md:pt-[24px] md:w-[286px] md:pb-[24px] ">All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.</p>
    <span class="start">Get started.</span>
    </div>
    </div>


    <div class="w-[343px] h-[259px] md:w-[350px] md:h-[322px] box mx-auto bg-white mt-[40px]">
    <img src="../../img/icon-photography.svg" class="ml-[28px] relative bottom-[20px]" alt="">
    <div class="pl-[28px] pt-[15px]">
    <h2 class="title">Buisiness</h2>
    <p class="pt-[16px] paragraph pb-[24px] sm:w-[286px] md:pt-[24px] md:w-[286px] md:pb-[24px] ">A step-by-step playbook to help you start, scale, and sustain your business without outside investment.</p>
    <span class="start">Get started.</span>
    </div>
    </div>

    
    
</div> 
</template>

<style scoped>
.gradient{
    border-radius: 10px;
background: var(--gradient-1, linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%));
}
.paragraph{
color: var(--83869-a, #83869A);
font-family: Plus Jakarta Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 26px; /* 162.5% */
}
.subheader{
  
font-family: Plus Jakarta Sans;
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: 32px; /* 133.333% */
}
.box{
  border-radius: 10px;
background: var(--ffffff, #FFF);
box-shadow: 0px 25px 50px 0px rgba(6, 22, 141, 0.04);
}
.title{
  color: var(--13183-f, #13183F);
font-family: Plus Jakarta Sans;
font-size: 20px;
font-style: normal;
font-weight: 800;
line-height: normal;
}
.start{
  color: var(--f-74780, #F74780);
font-family: Plus Jakarta Sans;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 155.556% */
}
 @media screen and (min-width: 1440px){
 .title{


font-family: Plus Jakarta Sans;
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: normal;
 }
 .paragraph{
  color: var(--83869-a, #83869A);
font-feature-settings: 'clig' off, 'liga' off;

/* Body M */
font-family: Plus Jakarta Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 28px; /* 155.556% */
 }
 .subheader{
  color: var(--ffffff, #FFF);
font-feature-settings: 'clig' off, 'liga' off;

/* Heading M */
font-family: Plus Jakarta Sans;
font-size: 32px;
font-style: normal;
font-weight: 800;
line-height: 40px; /* 125% */
 }
 }
</style>