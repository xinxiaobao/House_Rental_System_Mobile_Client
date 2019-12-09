import Vue from 'nativescript-vue';

import Home from './components/Home';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

global.rootURL = "https://39cda204.ngrok.io";
global.username = "";
global.selectID = "";
global.selectEstate = "";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();