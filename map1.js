var map;
    require(["esri/map", "dojo/domReady!"], function(Map) {
      map = new Map("mapOne", {
        center: [0, 20],
        zoom: 2,
        basemap: "national-geographic"
      });
    });