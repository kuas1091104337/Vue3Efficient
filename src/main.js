import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import GlobalHead from "./components/GHead.vue";
import SvgIcon from "./components/SvgIcon/index.vue";
import router from "./router";
import "virtual:svg-icons-register";

const app = createApp(App);
app.component("GlobalHead", GlobalHead);
app.component("SvgIcon", SvgIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
