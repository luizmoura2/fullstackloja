<template>
  <aside class="menu" v-show="isMenuVisible"> Menu </aside>
</template>

<script>

import { mapState } from 'vuex';
   export default {
      name: 'Menu',
      computed: mapState(['isMenuVisible'])
   
   }
</script>

<style>
   .menu {
      grid-area: menu;
      background: linear-gradient(to right, #192024, #272a2c);
      color:#b3c1c8;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
   }
</style>