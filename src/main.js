/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Unicon from 'vue-unicons';
import { uniBars, uniMultiply } from 'vue-unicons/dist/icons';
import "./assets/tailwind.css";

Unicon.add([uniBars, uniMultiply])

createApp(App).use(Unicon).use(router).mount('#app')

// createApp(App).use(router).mount("#app");