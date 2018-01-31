const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "YOUR API TOKEN HERE";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

// create a build options function
const buildOptions = (name) => {
  const newOptions = document.createElement("OPTION");
  newOptions.label = name;
  newOptions.value = name;
  newOptions.text = name;
  return newOptions;
}

fetch("/api")
.then(result => result.json())
.then(data => {
    // for 0, call our build selects function on each element in the attractions array, and put it in the appropriate place on our html doc
  const activities = data[0]
  const activitySelect = document.getElementById("activities-choices")
  const hotelSelect = document.getElementById("hotels-choices")
  const restaurantSelect = document.getElementById("restaurants-choices")
  activities.forEach(function(activity) {
    activitySelect.appendChild(buildOptions(activity.name))
  });
  const hotels = data[1]
  hotels.forEach(function(hotel) {
    hotelSelect.appendChild(buildOptions(hotel.name))
  })
  const restaurants = data[2]
  restaurants.forEach(function(restaurant) {
    restaurantSelect.appendChild(buildOptions(restaurant.name))
  })
})
.catch(function(err) {
  console.log("We have an error", err)
  // we might later show the user an error page saying that there was a problem loading your data
})


// client:  unbundled js - source files for whats being run on the front end - files for the front end app

// public: html, css, bundle (what were letting the browser have access to)

// server: backend, will be run on node
