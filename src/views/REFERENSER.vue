<template>
  <div id="referenser">
    <div id="referenserSection1">
      <div  class="imgContainer" v-for="image in images.imgSection1" v-bind:key="image.id">
        <img  :src="image.imgsrc">
      </div>
    </div>
    <div id="brands">
      <div  class="imgContainer" v-for="image in images.imgBrands" v-bind:key="image.id">
        <img   v-bind:id="['brand' + image.id]" :src="image.imgsrc">
      </div>
    </div>
    <div id="referenserSection2">
      <div  class="imgContainer" v-for="image in images.imgSection2" v-bind:key="image.id">
        <img  :src="image.imgsrc">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "REFERENSER",
  props: {
  },
  data: function() {
    return { 
      images : this.$store.state.views.referenser.images ,
    };
  },
};
</script>
<style >
  #referenser {width: 100%; height: 100vh;background-color:var(--letter-color); color: var(--letter-color); display: grid;
                grid-template-rows: 40vh 20vh 40vh ; justify-items: center; }
  #referenserSection1 {width: 100%; display:  grid; grid-template-columns: 1fr 1fr ;overflow: hidden;}
  #referenserSection2 {width: 100%;  display:  grid; grid-template-columns: 1fr 1fr 1fr ; overflow: hidden;}
  #brands {width: 80%;  display:  grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr ; overflow: hidden; justify-items: center; align-items: center;}
  
  .imgContainer { width: 100%;;display: grid; justify-items: center;}
  #brand1 , #brand2 , #brand3   {width: 50%;}
  #brand0  {width: 70%;}
  #brand4 {width: 90% ;}
</style>

