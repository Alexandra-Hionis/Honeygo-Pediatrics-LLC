window.addEventListener(
  "load",
  function () {
    new Accessibility();
  },
  false
);
var options = {
  icon: {
    position: {
      bottom: { size: 50, units: "px" },
      right: { size: 0, units: "px" },
      type: "fixed",
    },
  },
};
new Accessibility(options);
// Navbar drop down functionality and mobile toggle button

// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const dropItem = document.querySelector(".dropdwn-menu-item");
const dropdwnmenu = document.querySelector(".dropdwn-menu");
const dropItemMobile = document.querySelector(".dropdwn-menu-item-mobile");
const dropdwnmenuMobile = document.querySelector(".dropdwn-menu-mobile");

// dropdown mobile
dropItemMobile.addEventListener("click", () => {
  dropdwnmenuMobile.classList.toggle("hidden");
});

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// dropdown
dropItem.addEventListener("click", () => {
  dropdwnmenu.classList.toggle("hidden");
});

// Mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWhpb25pcyIsImEiOiJja3V5cnduYWIzMzNzMnZwZzlna3I4NHFoIn0.097YyIciDtzvJXul-rVwYw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map);

var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker2 = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map2);

var map3 = new mapboxgl.Map({
  container: "map3",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-76.47251, 39.37124], // starting position [lng, lat]
  zoom: 14,
});

const marker3 = new mapboxgl.Marker()
  .setLngLat([-76.47251, 39.37124])
  .addTo(map3);
