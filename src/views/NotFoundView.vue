<template>
  <div class="h-[calc(100vh-102px)] bg-gray-100 flex flex-col items-center justify-center gap-10">
    <img src="../assets/404.svg" class="w-[250px] h-auto" />
    <div class="text-center pb-6 max-w-[700px] px-5">
      <h1 class="text-4xl font-bold mb-2">Page Not Found</h1>
      <p class="mb-5">This page does not exist.</p>
        <router-link :to="{name: 'jobs'}" class="block px-10 py-2 rounded-full text-white w-fit text-lg mx-auto bg-green-500 hover:bg-green-600 transition ease-in-out duration-300">Find Jobs on Jobify</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "NotFoundView",
  components: {
    // HelloWorld,
  },
};
</script>
