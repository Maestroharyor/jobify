<template>
  <Header />
  <MobileHeader />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/headers/Header.vue";
import MobileHeader from "@/components/headers/MobileHeader.vue";
import Footer from "@/components/footers/Footer.vue";
export default {
  name: "app-Main",
  components: {
    Header,
    MobileHeader,
    Footer,
  },
};
</script>
<style>
header a.router-link-exact-active {
  color: #42b983;
}
</style>
