var spec1 = "vegalite_files/malaysia_map.vg.json";
var spec2 = "vegalite_files/poverty.vg.json";
var spec3 = "vegalite_files/pyramid_penang.vg.json";
var spec4 = "vegalite_files/pyramid_kl.vg.json";
var spec5 = "vegalite_files/pyramid_johor.vg.json";
var spec6 = "vegalite_files/bump.vg.json";
var spec7 = "vegalite_files/heatmap.vg.json";
vegaEmbed('#choropleth_map', spec1, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#poverty_graph', spec2, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#pyramid_penang', spec3, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#pyramid_kl', spec4, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#pyramid_johor', spec5, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#bump', spec6, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#heat', spec7, { actions: false }).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);