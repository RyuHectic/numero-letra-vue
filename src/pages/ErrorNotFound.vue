<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound'
})
</script>

<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="div-404">
        404
      </div>

      <div class="text-h2 div-not">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        label="Go Home"
        no-caps
        text-color="blue"
        to="/"
        unelevated
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .div-not {
    opacity: .4;
  }

  .div-404 {
    font-size: 30vh;
  }
</style>
