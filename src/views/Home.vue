<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <div>
      Name: <input type="text" v-model="newPlaceName" /><br />
      Address: <input type="text" v-model="newPlaceAddress" /><br />
      Image Url: <input type="text" v-model="newPlaceImage" /><br />
      <button v-on:click="createPlace()">Add Place</button>
    </div>
    <div v-for="place in places">
      <br />
      <h2>{{ place.name }}</h2>
      <p>{{ place.address }}</p>
      <img :src="place.image" alt="" /><br />
      <button v-on:click="showPlace(place)">Details!</button>
    </div>
    <dialog id="place-details">
      <form method="dialog">
        <h2>Details</h2>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        Name <input type="text" v-model="currentPlace.name" /><br />
        Address <input type="text" v-model="currentPlace.address" /><br />
        Image Url <input type="text" v-model="currentPlace.image" /><br />
        <button v-on:click="updatePlace(currentPlace)">Update Place!</button>
        <button v-on:click="destroyPlace(currentPlace)">Destroy Place!</button
        ><br />
        <button>Close!</button>
      </form>
    </dialog>
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
      currentPlace: {},
      newPlaceName: "",
      newPlaceAddress: "",
      newPlaceImage: "",
      errors: [],
    };
  },
  created: function() {
    this.indexPlaces();
  },
  methods: {
    submit: function() {
      var params = {
        title: this.newTitle,
      };
      axios
        .post("/api/places", params)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyPlace: function(place) {
      axios.delete(`api/places/${place.id}`).then((response) => {
        console.log("Success", response.data);
        var index = this.places.indexOf(place);
        this.places.splice(index, 1);
      });
    },
    updatePlace: function(place) {
      var params = {
        name: place.name,
        address: place.address,
        image: place.image,
      };
      axios
        .patch(`/api/places/${place.id}`, params)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    showPlace: function(place) {
      console.log(place.title);
      this.currentPlace = place;
      document.querySelector("#place-details").showModal();
    },
    indexPlaces: function() {
      axios.get("api/places").then((response) => {
        console.log(response.data);
        this.places = response.data;
      });
    },
    createPlace: function() {
      var params = {
        name: this.newPlaceName,
        address: this.newPlaceAddress,
        image: this.newPlaceImage,
      };
      axios.post("api/places", params).then((response) => {
        console.log("Success", response.data);
        this.places.push(response.data);
      });
    },
  },
};
</script>
