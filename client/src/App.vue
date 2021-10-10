<template>
  <div id="header">
    <img id="logo" alt="Vue logo" src="./assets/images.png">
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link :to="{ name : 'Jobs' }">JOBS</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link :to="{ name : 'Contact' }">CONTACT</router-link>
      <button id="login">LOGIN</button>
      <button id="register">REGISTER</button>
      <button class="icon" onclick="myFunction()"><Icon icon="ic:baseline-menu"/></button>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
	components: {
		Icon,
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
}

#header {
  width:1920px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  
}

#nav {
  padding: 30px;
  flex-direction: column;
  overflow: hidden;
}
.nav .icon {
  color: black;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 20px;
}
#nav button {
  height: 40px;
  width: 120px;
  margin-right: 10px;
  font-size: 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo {
  padding: 15px;
  width: 150px;
  height: 75px;
}


#login {
  background-color: #42b983;
  border:white;
  color: white;
}
#register {
  background-color: white;
  border-color:black;
  border-width: thin;
  color: black;
}
</style>
