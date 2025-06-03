mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  center: listing.geoLocation.coordinates,
  zoom: 10,
});

const marker1 = new mapboxgl.Marker({ color: "Red" })
  .setLngLat(listing.geoLocation.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h4>${listing.title}</h4><p>Exact location provided after booking!</p>`
      )
      .setMaxWidth("300px")
      .addTo(map)
  )
  .addTo(map);
