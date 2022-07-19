<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTasks");
  },
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import "./theme.css";
</style>
