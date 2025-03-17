<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div v-for="item in list" :key="item.id">
    {{ item.name }}-{{ item.value }}-{{ item.create_time }}
  </div>
  <HelloWorld msg="你好，Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import request from "@/utils/request";
export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  components: {
    HelloWorld,
  },
  mounted() {
    request({
      url: "/data",
      method: "get",
    }).then((res) => {
      this.list = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
