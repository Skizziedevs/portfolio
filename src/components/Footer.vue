<script setup>
</script>

<template>
  <div
    class="w-[100vw] h-[120px ] bg-dblue py-[36px] px-[10px] flex justify-between mx-auto sm:px-[40px] mt-[16px] md:px-[165px]"
  >
    <img src="../../img/logo-light.svg" class="w-[89px] mt-2 h-[34px]" alt="" />

    <button class="button gradient rounded-[38px] px-[24px] py-[11px] hover:bg-purple-300">
      Get Started
    </button>
  </div>
</template>

<style scoped>
.button {
  color: white;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
}
.gradient {
  background: var(
    --gradient-2,
    linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)
  );
}

.button:hover {
  border-radius: 28px;
  background: var(
    --gradient-2-hover,
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    linear-gradient(180deg, #4851ff 0%, #f02aa6 100%)
  );
}
</style>