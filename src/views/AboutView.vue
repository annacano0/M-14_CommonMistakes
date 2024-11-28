<script setup>
import { useRouter } from 'vue-router';
const router= useRouter();

const goToHome = () =>{
    router.push("/home")
}
</script>

<template>
  <h1>About</h1>
  <button @click="goToHome">Ves a home</button>
</template>
