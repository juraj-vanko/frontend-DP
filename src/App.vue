<template>
  <div id="app" :class="{'theme-dark': dark}">
    <div class="nav">
      <router-link to="/">
        <img alt="Tagger logo" src="./assets/logo.svg" />
      </router-link>
      <router-link to="/oprojekte" :class="{'theme-dark': dark}">
        O projekte
      </router-link>
      <div class="nav__right">
        <button class="btn" @click="dark = !dark">
          <i class="fas fa-sun" v-if="dark"/>
          <i class="fas fa-moon" v-else/>
        </button>  
      </div>      
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data(){
    return {
      dark: false,
    }
  },
  methods: {
    ...mapActions({
        changeDarkTheme: 'home/changeDarkTheme',
    })
  },
  computed: {
  },
  watch: {
    dark: function() {
      localStorage.setItem("dark", JSON.stringify(this.dark));
      this.changeDarkTheme(this.dark)
    }
  },
  created() {
    this.dark = JSON.parse(localStorage.getItem("dark"));
    this.changeDarkTheme(this.dark)
  }
}
</script>


<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

$pink: #DD00AC;
$darkPink: #40263B;
$blue: #00C9F5;
$white: #fff;
$light: #dbe6ea;
$dark: #272640;
$angle: 8px;
$angle-o: 4px;

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  transition: all .5s ease-in-out;

  background-color: $light;

  &.theme-dark {
    color: #efefef;
    background-color: $dark;
  }
}
.btn {
  top: 0;
  left: 0;
  transition: all .15s linear 0s;
  position: relative;
  display: inline-block;
  padding: 10px 10px;
  background-color: $pink;
  border: 4px solid $darkPink;
  text-transform: uppercase;
  color: $white;
  font-family: arial;
  letter-spacing: 1px;  
  box-shadow: 6px 6px 0 $darkPink;
  text-decoration: none;
  font-size: 25px;
  line-height: 10px;

  img {
    width: 10px;
  }

  &:hover {
    top: 3px;
    left: 3px;
    box-shadow: 3px 3px 0 $darkPink;
    cursor: pointer;
    
    &::after {
      top: 1px;
      left: 2px;
    }
    
    &::before {
      bottom: 2px;
      right: 1px;
    }
  }
}

.nav {
  display: flex;
  width: 1180px;
  margin: 0 auto;  
  padding: 10px 20px;
  align-items: center;

  a {
    color: $dark;
    text-decoration: none;
    font-weight: 600;

    &.theme-dark {
      color: $light;
    }
  }

  a:not(:first-child) {    
    margin-left: 20px;
  }

  img {
    width: 50px;
  }

  &__right {
    margin-left: auto;
  }

}

@media screen and (max-width: 1220px) {
  .nav {
    width: auto;
  }
}
</style>
