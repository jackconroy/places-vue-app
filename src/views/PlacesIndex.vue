<template>
  <div class="places-index">
    <h1>{{ message }}</h1>
    <div v-for="place in places">
      <br />
      <h2>{{ place.name }}</h2>
      <p>{{ place.address }}</p>
      <img src="`${place.image}`" alt="" />
      <router-link v-bind:to="`/places/${place.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Check out our places!",
      places: [],
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/places").then((response) => {
      console.log("places index", response);
      this.places = response.data;
    });
  },
  methods: {},
};
</script>
