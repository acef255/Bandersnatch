<template>
  <div id="home">
    <div id="homeElementsContainer">
      <div v-bind:class="['homeElements']">
        <img id="logoImg1" :src="images[0].logo">
      </div>
      <div v-bind:class="['homeElements']">
        <p id="logoTitle">DIGIT<span>ALLT</span></p>
      </div>
      <div 
          v-for="(element) in elements"
          v-bind:key="element.id"
          v-bind:id="['homeElements' + element.id]"
          v-bind:class="['homeElements']"  
        >{{ element.content }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
   
  },
  data: function() {
    return { 
      elements : this.$store.state.views.home.elements ,
      images : this.$store.state.views.home.images
    };
  },
  methods : {
 
  }
};

</script>
<style scoped>

#home { width: 100%; height: 100vh; 
        display: grid; justify-items: center;align-content: center;}
#homeElementsContainer {width: 90%;display: grid;justify-content: center;}
.homeElements {display: grid;width:100% ;margin-top: 10px;color: var(--letter-color);justify-content: center;}
#logoImg1 {width: 100%;}
#logoTitle {font-size: 350% ; font-weight: 300; color: var(--highlight-color);}
#logoTitle span {font-weight: 700;}

#homeElements0{font-size: 220%; font-weight:300;text-align: center;}
#homeElements1{font-size: 120%; text-align: center;}
#homeElements2{font-size: 120%; text-align: center;}


</style>
