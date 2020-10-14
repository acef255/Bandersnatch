<template>
    <div id="logoContainer">
      <a v-bind:href="'#' + 'home'" id="homeLink" 
         v-on:click="asignCurrentMenu(href)" >
        <img id="logoImg" :src="images.logo">
      </a>
    </div>
</template>

<script>

const images =
  {logo : require ('@/assets/logo.png')}

export default {
  name: "Logo",
  components: {
   
  },
  data: function() {
    return { 
      images : images , 
      href : {id: "" , name : ""}
    };
  },
  methods : {
      getCurrentMenu(){
        return this.$store.state.components.menu.currentMenu
      },
      asignCurrentMenu: function(menu) {
           this.$store.commit("changeCurrentMenu", {
           newCurrentMenu: menu,
           });
      }
  }
};
</script>

<style>
#logoContainer {display: grid; position: fixed; z-index: 1; top : 5% ; left: 2.5%;z-index: 2;}
#homeLink {width: 100%}
#logoImg {width: 120px;}
</style>