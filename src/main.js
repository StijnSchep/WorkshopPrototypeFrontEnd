import FileUpload from 'vue-simple-upload/dist/FileUpload';
import fullCalendar from 'vue-fullcalendar';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import axios from 'axios';
import Vue from 'vue';
import VuejsDialog from "vuejs-dialog";
import ReadMore from 'vue-read-more';

// Imports for Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/nl';

// Imports for bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Routes from './routes';

import VueHelmet from 'vue-helmet'

// Data sources
//import dummyDAO from './data/dummy.DAO';
import sqlserverDAO from './data/sqlServer.DAO.js';
import reservationDAO from './data/reservation.DAO';

Vue.use(BootstrapVue);
Vue.use(ElementUI, {locale});
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(FileUpload)
Vue.use(VuejsDialog)
Vue.use(ReadMore);


Vue.component('full-calendar', fullCalendar)
Vue.config.productionTip = false

Vue.prototype.$dao = sqlserverDAO;
Vue.prototype.$reservationdao = reservationDAO;
Vue.prototype.$http = axios;
Vue.prototype.$url = "http://node.studyhost.nl:4787";

const router = new VueRouter({
    mode: 'history',
    routes: Routes

});

new Vue({
    render: h => h(App),
    router: router,
    components: {
        VueHelmet
    }
}).$mount('#app')
 