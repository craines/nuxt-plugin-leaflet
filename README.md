# nuxt-plugin-leaflet

> leaflet no srr for nuxt

## Install

```shell
$ npm i nuxt-plugin-leaflet
```

##Usage

Add plugin in nuxt-config.js

```js
plugins: [
    {src: '~node_modules/nuxt-plugin-leaflet', ssr: false},
  ]
```

##Example

```vue
<template>
  <div id="map" style="width: 600px; height: 600px;"></div>
</template>

<script>
  export default {
    name: "LeaFlet",
    methods: {
        initMap() {
          const map = this.$L.map('map').setView([51.505, -0.09], 13);
          this.$L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          this.$L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        }
    },
    mounted() {
        this.initMap();
    }
  }
</script>

<style scoped>

</style>

```
