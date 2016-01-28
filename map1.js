var map;
    require(["esri/map", "dojo/domReady!"], function(Map) {
      map = new Map("mapOne", {
        center: [-100, 40],
        zoom: 3,
        basemap: "national-geographic"
      });
    });