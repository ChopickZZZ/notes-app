<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }"> Freelance </router-link>

    <ul class="navbar-menu">
      <li>
        <router-link :to="{ name: 'home' }">Все задачи</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'new' }">Создать</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>