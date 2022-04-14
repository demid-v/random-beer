<template>
  <div id="app"><Profile /><Beer /></div>
</template>

<script>
import Profile from "./components/Profile.vue";
import Beer from "./components/Beer.vue";

export default {
  name: "App",
  components: { Profile, Beer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
}

.info > div:not {
  margin-bottom: 0.6em;
}
</style>
