import Vue from 'vue';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
export default () => {
  window.onNuxtReady( () => {
    Vue.prototype.$L = L;
    console.log("Montado Client side");
  });
};
