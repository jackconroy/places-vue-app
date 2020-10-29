<template>
  <div class="places-edit">
    <h1>Edit Place</h1>
    <form v-on:submit.prevent="updatePlace(place)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name: <input type="text" v-model="place.name" /> address:
      <input type="text" v-model="place.address" /> image url:
      <input type="text" v-model="place.image" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      place: {},
      errors: [],
    };
  },
  created: function() {
    axios.get("/api/places/" + this.$route.params.id).then((response) => {
      console.log("places show", response);
      this.place = response.data;
    });
  },
  methods: {
    updatePlace: function(place) {
      var params = {
        name: place.name,
        address: place.address,
        image: place.image,
      };
      axios
        .patch("/api/places/" + place.id, params)
        .then((response) => {
          console.log("places update", response);
          this.$router.push("/places");
        })
        .catch((error) => {
          console.log("places update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
