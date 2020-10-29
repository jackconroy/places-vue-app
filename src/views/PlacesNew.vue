<template>
  <div class="places-new">
    <h1>New Place</h1>
    <form v-on:submit.prevent="createPlace()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name: <input type="text" v-model="newplaceName" /> Address:
      <input type="text" v-model="newPlaceAddress" /> Image Url:
      <input type="text" v-model="newPlaceImage" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newPlaceName: "",
      newPlaceAddress: "",
      newPlaceImage: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createPlace: function() {
      var params = {
        name: this.newPlaceName,
        address: this.newPlaceAddress,
        image: this.newPlaceImage,
      };
      axios
        .post("/api/places", params)
        .then((response) => {
          console.log("places create", response);
          this.$router.push("/places");
        })
        .catch((error) => {
          console.log("places create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
