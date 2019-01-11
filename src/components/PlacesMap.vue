<template>
    <div>
        <h1 class="heading">
            Places for {{ sportName }}
        </h1>

        <gmap-map
        :center="center"
        :zoom="9"
        style="width:100%;  height: 400px;"
        >
        <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center=m.position"
        ></gmap-marker>
    </gmap-map>
    <p>List of Places</p>
    <hr/>
    <ul v-for="place in sportPlaces" v-bind:key="place.properties.uuid">
        <li>{{place.properties.name}}</li>
    </ul>
    <hr class="bottom-margin"/>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PlacesMap',
  data () {
    return {
      id: 0,
      sportName: '',
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      sportPlaces: [],
      msg: 'Welcome to Sports API Demo App'
    }
  },

  created () {
    this.id = this.$route.params.id
    if (this.$route.query.sportName) {
      this.sportName = this.$route.query.sportName
    }

    axios.get(`https://sportplaces.api.decathlon.com/api/v1/places?origin=-73.582,45.511&radius=99&sports=${this.id}`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.sportPlaces = response.data.data.features
        if (this.sportPlaces) {
          this.sportPlaces.forEach(place => {
            const sportPlaceMarker = {
              lng: parseFloat(place.geometry.coordinates[0]),
              lat: parseFloat(place.geometry.coordinates[1])
            }
            this.markers.push({ position: sportPlaceMarker })
          })
        }
      })
      .catch(e => {
        console.log('error')
      })
  },

  mounted () {
    const marker = {
      lat: 45.508,
      lng: -73.587
    }
    this.markers.push({ position: marker })
  }
}
</script>

<style>
.heading {
    color: #42a9f4;
    font-size: 40px
}
h1{
  font-weight: 700;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
    color:#42a9f4;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 10px;
    font-style: italic
}
hr {
    width: 40%;
}

.bottom-margin {
    margin-bottom: 50px
}
</style>
