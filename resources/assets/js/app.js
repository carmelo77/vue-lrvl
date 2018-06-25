
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//Aquí yo puedo importar librerías si quiero que se vean en todas las que describo en un Vue,component
//Como en la parte de abajo, esto para evitar importarla en cada archivo vue. Ahora, si hay librerías
//especificas para un archivo vue en particular, en ese caso si es preferible importarlo solo en
//ese archivo. Ya que no se necesitará en otro.

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
