<template>
  <div id="priser">
    <div id="priserBrackground">
      <div id="priserBrackground1"></div>
      <div id="priserBrackground2"></div>
    </div>
    <div id="priserElementsContainer">
      <div id="priserElement1">
        <div v-for="elementChildren in elements[0].children" v-bind:key="elementChildren.id" 
             v-bind:id="['priserTitle' + elementChildren.id]">
          <p>{{elementChildren.title}}</p>
        </div>
      </div>
      <div id="priserElement2">
        <div v-for="elementChildren in elements[1].children" v-bind:key="elementChildren.id"
             v-bind:class="['priserCard']"
             v-bind:id="['priserCard' + elementChildren.id]">
            <div v-bind:class="['priserCardTitle']">{{elementChildren.content.title}}</div>
            <div v-bind:class="['priserCardDescription']">{{elementChildren.content.description}}</div>
            <div v-bind:class="['priserCardPriceInfoContainer']">
                <div>{{elementChildren.content.price.qty}}</div>
                <div v-bind:class="['priserCardInfo']">{{elementChildren.content.price.info.text0}}</div>
                <div v-bind:class="['priserCardInfo']">{{elementChildren.content.price.info.text1}}</div>
                <div v-bind:class="['priserCardInfo']">{{elementChildren.content.price.info.text2}}</div>
                <div v-bind:class="['priserCardInfo']">{{elementChildren.content.price.info.text3}}</div>
            </div>
            <div v-bind:class="['priserCardButtonsContainer']">
                <div v-bind:class="['priserCardButton0']">{{elementChildren.content.buttons.option1}}</div>
                <div v-bind:class="['priserCardButton1']">{{elementChildren.content.buttons.option2}}</div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PRISER",
  props: {
  },
  data: function() {
    return { 
      elements : this.$store.state.views.priser.elements ,
    };
  },
};
</script>
<style>
  #priser {width: 100%; height: 100vh;}
  #priserBrackground {width: 100%;z-index: 0;}
    #priserBrackground1{width: 100%; height:70vh ;background-color: var(--app-color);}
    #priserBrackground2{width: 100%;height: 30vh ;background-color:var(--main-color);}
  #priserElementsContainer {width: 100%;height: 100vh ;z-index: 1; margin-top: -100vh;display: grid;
                             justify-items: center;align-content: center;}
  #priserElement1 {width: 100%;display: grid; justify-items: center; color: var(--letter-color);margin-bottom: 50px }
    #priserTitle0 {font-size: 150%;} 
    #priserTitle1 {font-size: 150%;color: var(--highlight-color);}
  #priserElement2 {width: 70%;display: grid; height: 300px; justify-items: center; color: var(--app-color);
                    grid-template-columns: 1fr 1fr 1fr;text-align: center;}
  .priserCard {width: 80%;display: grid;justify-items: center; border-radius:10px ;
              background-color:var(--letter-color); border-style: solid;border-color: black; border-width: 2px;}
  .priserCard:hover {width: 81%;height: 101% }
  .priserCardContent {width: 100%;display: grid;justify-items: center;}
  .priserCardTitle {width: 100%; margin-top: 20px;font-weight: 700;}
  .priserCardDescription{width: 80%;margin-top: 10px;display: grid;}
  .priserCardPriceInfoContainer {width: 100% ;font-style: italic; margin: 20px;border-style: dashed;border-color: black; border-width: 1px;display: grid;align-content: center;}
  .priserCardButtonsContainer {width:80%; display: grid;grid-template-columns: 1fr 1fr;justify-items: center; margin: 10px;}
  .priserCardButton0 {cursor:pointer;width:  80%;background-color: var(--letter-color);display: grid;align-items: center;border-radius: 5px;border-style: solid;border-color: black; border-width: 1px;}
  .priserCardButton1 {cursor:pointer;width: 80%;background-color: var(--highlight-color);display: grid;align-items: center;border-radius: 5px;}
  .priserCardButton0:hover {background-color: var(--highlight-color); border-color: var(--highlight-color)}
  .priserCardButton1:hover {background-color: var(--letter-color);border-style: solid;border-color: black; border-width: 1px;}
</style>

