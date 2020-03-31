import Vue from 'vue';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
export default () => {
  if (process.client) {
    Vue.prototype.$L = L;
  }
};
