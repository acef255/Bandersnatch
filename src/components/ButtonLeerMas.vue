<template>
    <div id="buttonLeerMasContainer">
        <p >Läs mer</p>
        <a id="buttonLeerMas" v-on:click="scrollTo()" v-bind:href=" '#' + href.id" ></a>
    </div>
</template>

<script>

export default {
  name: "ButtonLeerMas",
  components: {
   
  },
  data: function() {
    return { 
      menus : this.$store.state.components.menu.menus,
      href : {id: "" , name : ""} ,
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
      },
      scrollTo()  {
        if (this.getCurrentMenu().id == "" ) {
          this.href = this.menus[0];
          this.asignCurrentMenu(this.href)
        }
        else if (this.getCurrentMenu().id == this.menus[0].id) {
          this.href = this.menus[1];
          this.asignCurrentMenu(this.href)
        }
        else if (this.getCurrentMenu().id == this.menus[1].id) {
          this.href = this.menus[2];
          this.asignCurrentMenu(this.href)
        }
        else if (this.getCurrentMenu().id == this.menus[2].id) {
          this.href = this.menus[3];
          this.asignCurrentMenu(this.href)
        }
        else if (this.getCurrentMenu().id == this.menus[3].id) {
          this.href = this.menus[4];
          this.asignCurrentMenu(this.href)
        }
        else if (this.getCurrentMenu().id == this.menus[4].id) {
          this.href = this.menus[4];
          this.asignCurrentMenu(this.href)
        }

      }
  }
};
</script>

<style>
#buttonLeerMasContainer {width: 100% ;position: absolute; bottom: 45px; color: var(--highlight-color);
                        display: grid; justify-items: center;z-index: 1; }
#buttonLeerMasContainer p {padding: 10px;}
#buttonLeerMas { text-align: center; width: 0; height: 0; 
                 border-left: 20px solid transparent;
                 border-right: 20px solid transparent;
                 border-top: 20px solid var(--highlight-color);}               
#buttonLeerMas:hover { border-top: 20px solid var(--letter-color);}
</style>