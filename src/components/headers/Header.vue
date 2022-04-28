/* eslint-disable */
<template lang="">
  <header id="desktop-header" class="hidden md:flex items-center justify-between py-2 px-3 md:px-8 bg-gray-50">
      <router-link to="/" class="hover:text-green-500 transition ease-in-out duration-300">
        <img src="../../assets/logo.png" class="w-[40px] h-auto" />
      </router-link>
      

    <nav class="flex gap-5 text-md">
      <!-- <router-link :to="menu.link" :v-for="menu in menus">
        {{ menu.title }}
      </router-link> -->
      <router-link to="/" class="hover:text-green-500 transition ease-in-out duration-300">Home</router-link>
      <router-link :to="{name: 'about'}" class="hover:text-green-500 transition ease-in-out duration-300">About</router-link>
      <router-link :to="{name: 'jobs'}" class="hover:text-green-500 transition ease-in-out duration-300">Find Jobs</router-link>
    </nav>
      <div className="flex items-center gap-5">
        <router-link to="/login" class="hover:text-green-500 transition ease-in-out duration-300">Login</router-link>
        <router-link to="/register" class="px-6 py-2 rounded-full border border-[3px] border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">Register Now</router-link>
      </div>
  </header>
</template>
<script>
/* eslint-disable */
// import { menus } from "@/data/menu";
export default {
  name: "header-component",
  data() {
    return {};
  },
  mounted() {
    //   console.log(menus)
  },
};
</script>
<style lang=""></style>
