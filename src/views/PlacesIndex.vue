<template>
  <div class="places-index">
    <h1>{{ message }}</h1>
    Search by name: <input v-model="nameFilter" list="names" />
    <datalist id="names">
      <option v-for="place in places">{{ place.name }}</option>
    </datalist>
    <!-- <div v-for="place in places">
        <br />
        <h2>{{ place.name }}</h2>
        <p>{{ place.address }}</p>
        <img src="`${place.image}`" alt="" />
        <router-link v-bind:to="`/places/${place.id}`"
          >More details</router-link
        >
      </div> -->
  </div>
  <!-- </div> -->
</template>

<style></style>

<script>
import Vue2Filters from "vue2-filters";
import axios from "axios";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      nameFilter: "",
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
