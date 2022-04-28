<template lang="">
<div class="bg-gray-100 py-16">
  <h1 class="text-center text-4xl font-bold mb-9">Latest Job Offers</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8  max-w-[1200px] mx-auto mb-10 px-5">
    <div v-for="(job, index) in jobs" :key="index" to="/" class="flex flex-col gap-8 justify-between border rounded-lg px-5 py-6 bg-white hover:shadow-2xl transition ease-in-out duration-300">
    <div class="flex gap-3">
      <div class="bg-green-500 text-lg font-bold rounded text-white flex items-center justify-center py-2.5 px-4"><p>{{job.company[0].toUpperCase()}}</p></div>
      <div><p class="text-lg font-medium">{{job.company}}</p>
      <p class="text-sm text-gray-400">{{job.location}}</p></div>
      
    </div>
    <div>
      <p class="text-2xl font-bold">{{job.title}}</p>
      <p class="text-gray-600 text-md mb-3">{{job.type}}</p>
      <p class="text-gray-500 text-lg">{{job.description}}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-2xl font-bold">{{job.salary}}<span class="text-sm font-normal text-gray-600">/month</span></p>
      <router-link :to="{name: 'jobdetails', params: {slug: job.slug}}" class="inline-block bg-blue-50 px-4 py-2 rounded text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition duration-300 ease-in-out">Apply Now</router-link>
    </div>
      
    </div>
     
  </div>
   <div class="flex items-center justify-center">
    <button class="bg-green-500 px-7 py-3 rounded text-white font-bold hover:bg-green-900 hover:text-white transition duration-300 ease-in-out text-lg">Load More</button>
  </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      jobs: [
        {slug: "senior-ui-designer-behance", company: "Behance", location: "Remote", title: "Senior UI Designer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "3000"},
        {slug: "senior-ui-designer-behance", company: "Behance", location: "Remote", title: "Senior UX Designer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "3000"},
        {slug: "senior-ui-designer-daily-mail", company: "Daily Mail", location: "North East, USA", title: "Senior Sales Manager",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "5000"},
        {slug: "digital-marketer-etsy", company: "Etsy", location: "Remote", title: "Digital Marketer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "2500"},
        {slug: "app-developer-apple", company: "Apple", location: "New York, USA", title: "App Developer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "7500"},
        {slug: "ux-engineer-discord", company: "Discord", location: "Freelance", title: "UX Engineer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "4200"},
        {slug: "data-clarification-drivers-ed", company: "DriversEd", location: "Sydney, Austrailia", title: "Data Clarification",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "4500"},
        {slug: "ui-engineer-patch", company: "Patch", location: "Freelance", title: "UI Engineer",  type: "Full Time", description: "Ipsum ea in duis sint nostrud nostrud est cupidatat veniam.", salary: "2500"},
      ]
    }
  },
  mounted(){
    // console.log(this.jobs)
  }
}
</script>
<style lang="">
  
</style>