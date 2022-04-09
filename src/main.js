import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css"

import router from "./router/router";

//components
import Card from "primevue/card";
import Button from "primevue/button";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);

app.component("Card", Card);
app.component("Button", Button);
app.component("ScrollPanel", ScrollPanel);
app.component("ScrollTop", ScrollTop);

app.mount("#app");
