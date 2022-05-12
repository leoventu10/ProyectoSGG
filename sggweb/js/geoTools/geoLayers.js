function GeoLayers(){
    this.vectorGeoJson = null;
}

GeoLayers.prototype.ObtenerLayersBase = function(){
    var listaLayers = [];
    
    //Capas base para tener de fondo
    var lyrOSM = new ol.layer.Tile({
        title:'Open Street Map',
        visible: false,
        baseLayer:true,
        source: new ol.source.OSM()
    });
    listaLayers.push(lyrOSM);

    var lyrGoogleMap = new ol.layer.Tile({
        title:'Google Maps',
        visible: true,
        baseLayer:true,
        source: new ol.source.XYZ({
            url: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
        })
    });
    listaLayers.push(lyrGoogleMap);

        
    var lyrGoogleMapS = new ol.layer.Tile({
        title:'Google Maps Satelite',
        visible: false,
        baseLayer:true,
        source: new ol.source.XYZ({
            url: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
        })
    });
    listaLayers.push(lyrGoogleMapS);

    return new ol.layer.Group({
        title:'Capas Base',
        layers:listaLayers
    });
};


GeoLayers.prototype.ObtenerLayersSobrepuestos = function(){
    var listaLayers = [];
    
    //Capas vectoriales
	var polig = new ol.layer.Tile({
        title:'Poligonos',
        visible: true,
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/wms?',
            params: {
                VERSION: '1.1.1',
                FORMAT: 'image/png',
                TRANSPARENT: true,
                LAYERS: 'sgg:municipios_ruta'
            },
            fieldAliases: {'id': 'id', 'nombre': 'nombre', 'departamen': 'departamen', 'area_km': 'area_km', 'perimetro': 'perimetro', }
        })
    });
    listaLayers.push(polig);
    
    var lineas = new ol.layer.Tile({
        title:'Lineas',
        visible: true,
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/wms?',
            params: {
                VERSION: '1.1.1',
                FORMAT: 'image/png',
                TRANSPARENT: true,
                LAYERS: 'sgg:ruta_hoteles'
            }
        })
    });
    listaLayers.push(lineas);
    
    var puntos = new ol.layer.Tile({
        title:'Puntos',
        visible: true,
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/wms?',
            params: {
                VERSION: '1.1.1',
                FORMAT: 'image/png',
                TRANSPARENT: true,
                LAYERS: 'sgg:hoteles'
            }
        }),
    });
    listaLayers.push(puntos);

    return new ol.layer.Group({
        title:'Capas sobrepuestas',
        visible: false,
        layers: listaLayers
    });
}


//Capas geojson para obtener datos
GeoLayers.prototype.ObtenerLayersGeoJSON= function(){
    var lista = [];

    //MunicipiosRuta
    /*var formato = new ol.format.GeoJSON();
    var atributos = formato.readFeatures(municipios);
    var sourceMunicipios = new ol.source.Vector({
            attributions: ' ',
    });
    sourceMunicipios.addFeatures(atributos);

    var estilos = function (atributos){
        var valor = atributos.get("nombre");

        switch(valor.toString()) {
            case 'Citalá':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(105,192,226,1.0)'})
                })];
                break;

            case 'La Palma':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(221,142,107,1.0)'})
                })];
                break;

            case 'San Ignacio':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(52,204,14,1.0)'})
                })];
                break;

        }
    }

    var lyrGeojson = new ol.layer.Vector({
        title: 'MunicipiosRuta',
        source: new ol.source.Vector({
            url: function(extent){
                return 'http://localhost:8080/geoserver/sgg/ows?' +
                'service=WFS&' +
                'version=1.0.0&request=GetFeature&typeName=sgg%3Amunicipios_ruta&' +
                'outputFormat=application%2Fjson'
            },
            format: new ol.format.GeoJSON()
        }),
        style: estilos
    })
    lista.push(lyrGeojson);*/



var formato = new ol.format.GeoJSON();
    var atributos = formato.readFeatures(municipios);
    var sourceMunicipios = new ol.source.Vector({
            attributions: ' ',
    });
    sourceMunicipios.addFeatures(atributos);

    var estilos = function (atributos){
        var valor = atributos.get("nombre");

        switch(valor.toString()) {
            case 'Citalá':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(105,192,226,1.0)'})
                })];
                break;

            case 'La Palma':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(221,142,107,1.0)'})
                })];
                break;

            case 'San Ignacio':
                return [ new ol.style.Style({
                    stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),
                    fill: new ol.style.Fill({color: 'rgba(52,204,14,1.0)'})
                })];
                break;

        }
    }
    var lyrGeojson = new ol.layer.Vector({
        title: 'MunicipiosRuta',
        source: new ol.source.Vector({
            url: function(extent){
                return 'http://localhost:8080/geoserver/sgg/ows?' +
                'service=WFS&' +
                'version=1.0.0&request=GetFeature&typeName=sgg%3Amunicipios_ruta&' +
                'outputFormat=application%2Fjson'
            },
            format: new ol.format.GeoJSON()
        }),
        style: estilos
    })
    lista.push(lyrGeojson);











    return new ol.layer.Group({
        title:'Capas GeoJson',
        visible: true,
        layers: lista
    })
}
