// This component displays the Decathlon Sports list
// Fetches the sports data from Decathlon Sports API
// (https://sports-decathlon.herokuapp.com/)
<template>
  <div>
    <p class="accessible-sports">Decathlon is making <b>{{sports.length}} sports</b> more accesible for you!!</p>
    <p class="list-of-sports-heading"><i>Here's the list of all the sports</i></p>
    <p class="sport"><i>(Click on the sport to see the map of places to practice it)</i></p>

    <div class="sports-list">
      <!-- Displays the sports list by looping over the sports array -->
      <div class="sports-item" v-for="sport in sports" v-bind:key="sport.id">
        <router-link :to="{ name: 'PlacesMap', params: { id: sport.id }, query: { sportName: sport.attributes.name } }" class="link">{{sport.attributes.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sport',
  data () {
    return {
      sports: [],
      errors: []
    }
  },

  created () {
    axios.get(`https://sports-decathlon.herokuapp.com/`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.sports = response.data.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
.list-of-sports-heading {
  text-align: center;
}

.accessible-sports {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  color: #42a9f4;
}

.sports-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.sports-item {
  margin: 50px;
  background-color: #42a9f4;
  min-width: 150px;
  color: white;
  height: 23px;
  padding: 12px
}

.link {
  color: white;
}

.sport-name {
  max-width: 150px;
  text-align: center;
}

.sport {
    font-size: 14px;
    color: #000
}

</style>
