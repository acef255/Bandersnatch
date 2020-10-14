<template>
  <div id="fordelar">
    <div id=fordelarElementsContainer>
      <div  class="fordelarElements">{{elements[0].content}}</div>
      <img  class="fordelarElements" :src="elements[1].imgsrc">
      <div  id="fordelarElement3Container" class="fordelarElements">
        <div class=fordelarElement3children
          v-for="element in elements[2].children"
          v-bind:key="element.id">
            <div class="fordelarElement3children1"  >{{element.title}}</div >
            <div class="fordelarElement3children2">{{element.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FORDELAR",
  props: {  
  },
  data: function() {
    return { 
      elements : this.$store.state.views.fordelar.elements ,
    };
  },
};
</script>
<style scoped>
  #fordelar {width: 100%; height: 100vh;background-color:var(--app-color); color: var(--letter-color);
             display: grid; }
  #fordelarElementsContainer{width: 100%;display: grid;justify-items: center; align-content: center; margin-top:70px ;}
  .fordelarElements{margin: 10px ;width: 80%; text-align: center;}
  #fordelarElement3Container {  justify-items: center;display: grid;
                          grid-template-columns: 1fr 1fr 1fr 1fr; grid-auto-rows:auto; }
  .fordelarElement3children { width: 80%; text-align: center;
                        display: grid; grid-template-rows: 40px 1fr ; }
  .fordelarElement3children1 {font-size: 30px;font-weight: bolder;color: var(--highlight-color);}

 
 
</style>

