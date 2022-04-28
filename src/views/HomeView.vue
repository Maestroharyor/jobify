<template>
  <div class="h-[calc(100vh-102px)] bg-gray-100 flex flex-col items-center justify-center gap-10">
    <img src="../assets/job-hunt.svg" class="w-[250px] h-auto" />
    <div class="text-center pb-6 max-w-[700px] px-5">
      <h1 class="text-4xl font-bold mb-2">Get Your Dream Job</h1>
      <p class="mb-5">Find millions of jobs online to find the next step in your career. With tools for job search, resumes, company reviews and more.</p>
        <router-link :to="{name: 'jobs'}" class="block px-10 py-2 rounded-full text-white w-fit text-lg mx-auto bg-green-500 hover:bg-green-600 transition ease-in-out duration-300">Find Jobs</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>
