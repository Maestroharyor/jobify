/* eslint-disable */
<template lang="">
  <header id="mobile-header" class="flex md:hidden items-center justify-between py-2 px-3 md:px-8 bg-gray-50">
      <router-link to="/" class="hover:text-green-500 transition ease-in-out duration-300">
        <img src="../../assets/logo.png" class="w-[40px] h-auto" />
      </router-link>
      <div v-if="showNav" @click="hideMenu" class="fixed bg-black w-full h-full top-0 left-0 opacity-50 z-[10]"></div>
      <button v-if="showNav" @click="hideMenu" class="absolute right-[70px] sm:right-[220px] top-4 z-[30]"><unicon name="multiply" fill="limegreen"></unicon></button>
      <nav v-if="showNav" class="fixed z-[20] h-full bg-white top-0 left-0 shadow w-[calc(100%-60px)] sm:w-[calc(100%-200px)] flex flex-col gap-4 py-10 px-5">
      <router-link to="/" class="hover:text-green-500 transition ease-in-out duration-300">Home</router-link>
      <router-link :to="{name: 'about'}" class="hover:text-green-500 transition ease-in-out duration-300">About</router-link>
      <router-link :to="{name: 'jobs'}" class="hover:text-green-500 transition ease-in-out duration-300">Find Jobs</router-link>
        <div class="flex flex-col sm:flex-row gap-3 ">
            <router-link to="/login" class="px-6 py-2 rounded-full border border-[3px] border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out w-fit">Login</router-link>
            <router-link to="/register" class="px-6 py-2 rounded-full bg-green-500  text-white hover:bg-green-700 hover:text-white transition duration-300 ease-in-out w-fit">Register Now</router-link>
        </div>
      
    </nav>

        <button @click="showMenu"><unicon name="bars" fill="limegreen"></unicon></button>
  </header>
</template>
<script>
/* eslint-disable */
// import { menus } from "@/data/menu";
export default {
  name: "header-component",
  data() {
    return {
        showNav: false
    };
  },
  methods: {
      showMenu(){
          this.showNav = true
      },
      hideMenu(){
          this.showNav = false
      }
  },
  mounted() {
    //   console.log(menus)
  },
};
</script>
<style lang=""></style>
