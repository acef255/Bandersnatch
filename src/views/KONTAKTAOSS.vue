<template>
  <div id="kontaktaoss">
    <div id="kontaktaossImg"><img :src="images[0].img"></div>
    <div id="kontaktaossInfo">
        <div class="item">Kungsgatan 15, Stockholm</div>
        <div class="item">122 33</div>
        <div class="item">+46 722 034 216</div>
        <div class="item"><button id="button1">Maila oss!</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KONTAKTAOSS",
  props: {
  },
  data: function() {
    return { 
      images : this.$store.state.views.kontaktaoss.images ,
    };
  },
};
</script>
<style>
  #kontaktaoss {width: 100%; height: 100vh;background-color:var(--app-color); color: var(--letter-color);
                 display: grid; align-items: center;}
   #kontaktaossImg img {width: 100%;height: 100vh;}
   #kontaktaossInfo {width: 100%;height: 100%; margin-top: -400px;font-size: 150%; text-align: right; margin-left: -100px;z-index: 1;}
   #kontaktaossInfo button {all:unset;width: 200px;height: 50px; text-align: center;background-color: var(--highlight-color);color:var(--letter-color);;
                           }
   #button1:hover {color: black;background-color: var(--letter-color);}
   .item{margin: 5px;}
</style>
