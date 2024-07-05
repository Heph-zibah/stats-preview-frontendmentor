<script setup>
</script>

<template>
<main class="bg-veryDarkBlue w-full h-full md:h-screen px-5 md:px-10 py-16 md:py-20 lg:py-[10%] font-inter">
  <section class="rounded-xl lg:flex lg:flex-row-reverse items-end bg-darkDesaturatedBlue max-w-3xl mx-auto ">
    <div class="relative h-full w-full">
      <img src="/src/assets/images/image-header-mobile.jpg" alt="image header" class="lg:hidden relative rounded-t-xl w-full">
      <img src="/src/assets/images/image-header-desktop.jpg" alt="image header" class="hidden relative lg:block h-full w-full rounded-r-xl">
      <div class="absolute inset-0 bg-purple-600 opacity-50 rounded-t-xl lg:rounded-r-xl"></div>
    </div>
    <div class=" py-5 md:py-10 lg:py-5 px-3 lg:px-10 text-center lg:text-start space-y-7 md:space-y-10 lg:space-y-5 rounded-b-xl lg:rounded-l-xl lg:pr-20">
      <div class="space-y-5">
        <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-2xl pr-10">Get <span class="text-softViolet">insights</span> that help your business grow.</h1>
        <p class="text-transparentWhite text-lg md:text-xl lg:text-sm px-4  md:px-10 lg:px-0">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      </div>
      <div class="flex flex-col md:flex-row items-center md:justify-center lg:justify-start gap-5 text-slightlyTransparentWhite">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <span class="text-2xl md:text-4xl lg:text-lg  text-white font-bold">10k+</span>
          <span class="text-sm lg:text-xs">COMPANIES</span>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-2">
          <span class="text-2xl md:text-4xl lg:text-lg text-white font-bold">314</span>
          <span class="text-sm lg:text-xs">TEMPLATES</span>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-2">
          <span class="text-2xl md:text-4xl lg:text-lg text-white font-bold">12M+</span>
          <span class="text-sm lg:text-xs">QUERIES</span>
        </div>
      </div>
    </div>
  </section>
</main>
</template>

<style scoped>

</style>
