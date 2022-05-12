function CargarMapa(){
    var map = new GeoMap();
    var layers = new GeoLayers();
   
    map.CrearMapa('map',[layers.ObtenerLayersBase(), layers.ObtenerLayersSobrepuestos(), layers.ObtenerLayersGeoJSON()],null,null,null,null);
    map.CrearLayerSwitcher();
    map.CrearPopUp();
}