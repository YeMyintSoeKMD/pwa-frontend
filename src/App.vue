<template>
  <div>
    <Navbar />
    <div class="mt-20"></div>
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';


</script>

<style scoped></style>