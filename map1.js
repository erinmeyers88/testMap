var map;
    require(["esri/map", "dojo/domReady!"], function(Map) {
      map = new Map("mapOne", {
        center: [-50, 40],
        zoom: 3,
        basemap: "gray"
      });
    });