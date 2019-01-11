<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/sports">View Sports</router-link>
    <br/>
    <br/>
    <img height="500" width="50%" margin="40" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Sports API Demo App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
