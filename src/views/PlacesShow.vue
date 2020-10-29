<template>
  <div class="places-show">
    <h2>{{ place.name }}</h2>
    <img v-bind:src="place.image" v-bind:alt="place.name" />
    <p>Name: {{ place.name }}</p>
    <p>Address: {{ place.address }}</p>
    <br />
    <router-link v-bind:to="`/places/${place.id}/edit`">Edit place</router-link
    ><br /><br /><button v-on:click="destroyPlace(place)">Destroy Place</button
    ><br /><br />
    <router-link to="/places">Back to all places</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      place: {},
    };
  },
  created: function() {
    axios.get("/api/places/" + this.$route.params.id).then((response) => {
      console.log("places show", response);
      this.place = response.data;
    });
  },
  methods: {
    destroyPlace: function(place) {
      axios.delete("/api/places/" + place.id).then((response) => {
        console.log("places destroy", response);
        this.$router.push("/places");
      });
    },
  },
};
</script>
