<script setup>

import Buscador from './components/Buscador.vue'

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <Buscador/>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
