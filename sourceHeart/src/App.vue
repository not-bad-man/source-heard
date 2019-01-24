<template>
  <div id="app">
    <div class="menu" :class="{mouseover:isShow}" @mouseenter="isShow=true" @mouseleave="leave">
      <ul v-show="isShow">
        <router-link to="/show" tag="li">show</router-link>
        <router-link to="/stage" tag="li">stage</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    leave() {
      setTimeout(() => {
        this.isShow = false;
      }, 400);
    }
  },
  created () {

  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  height: 100vh;
  width: 100vw;
  /* background: radial-gradient(
    ellipse 600px 180px,
    rgb(205, 237, 241) 0,
    rgb(129, 206, 230) 40%,
    rgb(151, 213, 241) 100%
  ); */
}
.menu {
  position: fixed;
  top: 30px;
  left: 0;
  width: 10px;
  height: 40px;
  background: rgba(96, 199, 28, 0.4);
  border-radius: 2px;
  z-index: 9999;
  transition: all 0.5s ease-in-out 0s;
}
.menu.mouseover {
  width: 100px;
  height: 150px;
}
.menu ul > li {
  width: 100%;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(212, 162, 162);
}
.menu ul > li:hover {
  cursor: pointer;
  color: rgb(62, 136, 197);
  background: linear-gradient(to right, rgb(204, 195, 69), rgb(151, 213, 241));
}
</style>
