<template lang="">
    <div class="bg-gray-100 h-[calc(100vh-102px)] p-5 md:p-10">
        <form class="max-w-[600px] mx-auto rounded-t-lg bg-white py-10 px-10" @submit="submitForm">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2 text-left">
                    <label class="block text-sm">FULL NAME:</label>
                   <input class="block text-xl px-3 py-1 border-b" v-model="name" /> 
                </div>
                <div class="flex flex-col gap-2 text-left">
                    <label class="block text-sm">EMAIL ADDRESS:</label>
                   <input class="block text-xl px-3 py-1 border-b"  type="email" v-model="email" /> 
                </div>
                <div class="flex flex-col gap-2 text-left">
                    <label class="block text-sm">PASSWORD:</label>
                   <input class="block text-xl px-3 py-1 border-b" type="password" v-model="password" /> 
                </div>
                <div class="flex flex-col gap-2 text-left">
                    <label class="block text-sm">JOB POSITION:</label>
                    <select class="bg-white block text-xl px-3 py-1 border-b cursor-pointer" v-model="job">
                        <option value="frontend">Frontend Web Developer</option>
                        <option value="backend">Backend Web Developer</option>
                        <option value="mobileapp">Mobile App Developer</option>
                        <option value="blockchain">Blockchain Developer</option>
                    </select>
                </div>
                <div class="flex my-2 gap-2 text-left">
                    <input type="checkbox" v-model="terms"  />
                    <label class="text-sm">ACCEPT TERMS AND CONDITIONS</label>
                </div>

                <div class="mt-2 flex align-center justify-center">
                    <input type="submit" value="Join Jobify" class="bg-blue-700 hover:bg-blue-800 cursor-pointer px-6 py-2 rounded-full text-white transition duration-300 ease-in-out block w-full text-lg" />
                </div>


            </div>
            
        </form>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "", 
      password: "",
      job: "",
      terms: true,
      skillsSingle: "",
      skillsList: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "Enter" && this.skillsSingle) {
        if (!this.skillsList.includes(this.skillsSingle)) {
          this.skillsList.push(this.skillsSingle);
        }

        this.skillsSingle = "";
      }
    },
    deleteSkill(e) {
      //   console.log(e.target.textContent)
      const newSkillsList = this.skillsList.filter(
        (skill) => skill !== e.target.textContent
      );
      //   console.log(newSkillsList)
      this.skillsList = newSkillsList;
    },
    submitForm(e){
        e.preventDefault();
    }
  },
  updated() {
    // console.log(this.skillsSingle);
  },
};
</script>
<style lang="">
</style>