<template>
    <div id=menuContainer>
      <div id="menuContainerLinks">
        <a 
          v-for="menu in menus"
          v-bind:key="menu.id"
          v-bind:class="['menu', { active: getCurrentMenu() === menu},]"
          v-on:click="asignCurrentMenu(menu)"
          v-bind:href="'#' + menu.id"
          v-bind:id="'menu' + menu.id"
        >{{ menu.name }}
        </a>
      </div>
    </div>
</template>
<script>

export default {
  name: "Menu",
  components: {  
  },
  props : { 
  },
  data: function() {
    return { 
      home : {id: "home", name : "HOME"},
      menus : this.$store.state.components.menu.menus
    };
  },
  methods : {
      getCurrentMenu(){
        return this.$store.state.components.menu.currentMenu
      },
      asignCurrentMenu: function(menu) {
           this.$store.commit("changeCurrentMenu", {
           newCurrentMenu: menu
           });
           
          }
  }
};

</script>
<style>
#menuContainer { z-index: 1; width: 100%; position: fixed; top: 8%;
                display: grid; justify-content: center;}
#menuContainerLinks {width: 100%;display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; justify-content: center;}
.menu { all: unset; text-align: center; cursor: pointer;color: var(--letter-color);font-weight: 600;
        width: 100%; }
.menu:hover { color: var(--highlight-color) }
.menu.active { color: var(--highlight-color) }


</style>