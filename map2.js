 var dojoConfig = { parseOnLoad: true };
 
 var map2,
        webmapId = "51413ccffe7d477196ebd4f0691a6ac3";
    
    require([
      "esri/map",
      "esri/arcgis/utils",
      "esri/dijit/Legend",
      "dojo/domReady!"
      ], function (Map, arcgisUtils, Legend) {
        arcgisUtils.createMap(webmapId, "mapTwo").then(function (response) {
        map = response.map;

        var legend = new Legend({
            map: map,
            layerInfos:(arcgisUtils.getLegendLayers(response))
        }, "legendDiv");
        
        legend.startup();
    });
    });