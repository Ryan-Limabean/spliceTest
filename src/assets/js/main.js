import $ from 'jquery';
import Vue from 'vue';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

import MenuCart from './components/MenuCart.vue';

var app = new Vue({
    'el': '#prod',
    components: {
        MenuCart
    }
   
})

      