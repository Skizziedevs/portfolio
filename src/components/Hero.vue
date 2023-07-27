


<script setup>

</script>

<template>
<main>
    <div class="w-[343px] pt-[38px] mx-auto"><h1 class="text-dblue text-[40px] font-[700] md:w-[487px]">Maximize skill,
minimize budget</h1>
<p class="pb-[24px] text-lgray pt-[26px] paragraph">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
 <button class="text-white  gradient px-[37px] rounded-[31px] py-[15px] text-[16px] font-[700] leading-[26px] hover:bg-lpink">Get Started</button>
 </div>
    <!-- Hero image -->
    <div id="img-main"></div>
  </main>
</template>

<style scoped>
main {
  padding: 1.375rem 1rem 0 1rem;
}

main h1 {
  
  font-size: 40px;
  font-weight: 800;
}

main p {

  padding: 1.625rem 0 1.5rem 0;
  line-height: 1.625rem;
}


.gradient{
    border-radius: 28px;
background: var(--gradient-1, linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%));

}
.gradient:hover{

background: var(--gradient-1-hover, linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%));
}




main #img-main {
  background-image: url(../../img/image-hero-mobile@2x.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 0;
  padding-top: 92.05%;
}

@media screen and (min-width: 768px){
    main {
    overflow: hidden;
    padding: 6.1875rem 350px 11.625rem 2.5rem;
    position: relative;
  }
  
  main #img-main {
    background-image: url(../../img/image-hero-tablet@2x.png);
    height: 640px;
    position: absolute;
    right: -270px;
    top: -130px;
    width: 640px;
    z-index: -1;
  }
}

@media screen and (min-width: 1240px){
   main {
    padding: 11.125rem 680px 14.125rem 4.3125rem;
  }
  
  main h1 {
    font-size: 56px;
  }
  
  main p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 1.875rem 0 2.5rem 0;
  }
  
  main #btn-main {
    font-size: 1.125rem;
    padding: 0.875rem 2rem;
  }
  
  main #img-main {
    background-image: url(../../img/image-hero-desktop@2x.png);
    height: 937px;
    right: -358px;
    top: -146px;
    width: 992px;
  }
  
}
</style>