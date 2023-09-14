import Home from './Home.vue'
import { createApp } from 'vue';

frappe.provide('frappe_vue');


frappe_vue.TestVue = class TestVue {
    constructor({ wrapper, page }) {
        this.$wrapper = wrapper;
        let $container = $('<div>');
        $container.appendTo(this.$wrapper);
        this.page = page;
        $('.page-head').remove();
        let app = createApp(Home);
        let $vm = app.mount($container.get(0))
    }
}
