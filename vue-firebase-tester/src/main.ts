import "./assets/main.css";
import Vue, { createApp } from 'vue';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";

const app = createApp(App);
app.component("b-form-group", BootstrapVue.BFormGroup);
app.component("b-form-input", BootstrapVue.BFormInput);
app.mount("#app");
