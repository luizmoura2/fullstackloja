<template>
   <div class="user-dropdown">
      <div class="user-button">
         <span class="d-none d-sm-block">
            {{ user.name }}
         </span>
         <div class="user-dropdown-img">
            <vue-gravatar :email="user.email" alt="User" />
         </div>
         <font-awesome-icon icon="angle-down" />
      </div>
      <div class="user-dropdown-content">
         <router-link to="/admin"><font-awesome-icon icon="cogs" /> Administração</router-link>
         <a href=""><font-awesome-icon icon="sign-out-alt" /> Sair</a>
      </div>

   </div>
</template>

<script>
   import { mapState } from 'vuex'
   
   export default {
      name: 'UserDropdown',
      computed: mapState(['user'])
   }
</script>

<style>
   .user-dropdown {
      position: relative;

      height: 100%;
   }
   .user-button {
      display: flex;
      align-items: center;      
      color: #fff;
      font-weight: 100;
      height: 100%;
      padding: 0px 20px;

   }
   .user-dropdown:hover {
      background-color: rgb(0, 0, 0, 0.3);
   }
   .user-dropdown-img {
      margin: 0px 10px;
   }
   .user-dropdown-img > img {
      max-height: 37px;
      border-radius: 5px;
   }
   .user-dropdown-content {
      position: absolute;
      right: 0px;
      background-color: #f9f9f9;
      min-width: 170px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
      padding: 10px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear
   }
   .user-dropdown:hover .user-dropdown-content {
      visibility: visible;
      opacity: 1;
      padding: 3px;
   }
   .user-dropdown-content a {
      text-decoration: none;
      color: #000;
      padding: 10px;
      
   }
   .user-dropdown-content a:hover {
      background-color: #dad5d5;
      color: #000;

   }
</style>