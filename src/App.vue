<template>
  <div id="app">
    <Logo></Logo>
    <Menu></Menu>
    <HOME></HOME>
    <ButtonLeerMas/>
    <div id="viewContainer">
      <FORDELAR/>
      <REFERENSER/>
      <PRISER/>
      <KONTAKTAOSS/>
    </div>
  </div>
</template>

<script>
//import components
import Logo from "@/components/Logo.vue";
import Menu from "@/components/Menu.vue";
import ButtonLeerMas from  "@/components/ButtonLeerMas.vue";
//import views
import HOME from "@/views/HOME.vue";
import FORDELAR from "@/views/FORDELAR.vue";
import REFERENSER from "@/views/REFERENSER.vue";
import PRISER from "@/views/PRISER.vue";
import KONTAKTAOSS from "@/views/KONTAKTAOSS.vue"; 


export default {
  name: 'app',
  components: {
    Logo,
    Menu,
    HOME,
    ButtonLeerMas,
    FORDELAR,
    REFERENSER,
    PRISER,
    KONTAKTAOSS
  },
  data: () => ({
  }),

  methods : {
     
  }
}
</script>


<style>
:root{
    --app-color:rgb(29, 44, 49); 
    --letter-color:#f8f8f8;
    --main-color:rgb(22, 94, 104);
    --highlight-color:rgb(93, 185, 187);
}
*{scroll-behavior: smooth; font-family: sans-serif; margin: 0; padding: 0;}
#app {display: grid; width: 100%; height: 100vh; ;background-color: var(--app-color) ;  
                          justify-content: center;z-index: 0;overflow-x: hidden;}
#viewContainer {width: 100%;}
.translateViewContainer {transform : translateY(-100vh);transition-duration: 400ms;}
.overflowShow {overflow-y:scroll !important;}
.hideText { display: none;}
img {width: 100%;}

</style>
