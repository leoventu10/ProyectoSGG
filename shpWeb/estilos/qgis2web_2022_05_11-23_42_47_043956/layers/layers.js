var wms_layers = [];

var format_LIM_DEPARTAMENTAL_0 = new ol.format.GeoJSON();
var features_LIM_DEPARTAMENTAL_0 = format_LIM_DEPARTAMENTAL_0.readFeatures(json_LIM_DEPARTAMENTAL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_DEPARTAMENTAL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_DEPARTAMENTAL_0.addFeatures(features_LIM_DEPARTAMENTAL_0);
var lyr_LIM_DEPARTAMENTAL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_DEPARTAMENTAL_0, 
                style: style_LIM_DEPARTAMENTAL_0,
                interactive: true,
                title: '<img src="styles/legend/LIM_DEPARTAMENTAL_0.png" /> LIM_DEPARTAMENTAL'
            });
var format_LIM_MUNICIPAL_1 = new ol.format.GeoJSON();
var features_LIM_MUNICIPAL_1 = format_LIM_MUNICIPAL_1.readFeatures(json_LIM_MUNICIPAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_MUNICIPAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_MUNICIPAL_1.addFeatures(features_LIM_MUNICIPAL_1);
var lyr_LIM_MUNICIPAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIM_MUNICIPAL_1, 
                style: style_LIM_MUNICIPAL_1,
                interactive: true,
                title: '<img src="styles/legend/LIM_MUNICIPAL_1.png" /> LIM_MUNICIPAL'
            });
var format_municipios_ruta_2 = new ol.format.GeoJSON();
var features_municipios_ruta_2 = format_municipios_ruta_2.readFeatures(json_municipios_ruta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_ruta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_ruta_2.addFeatures(features_municipios_ruta_2);
var lyr_municipios_ruta_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipios_ruta_2, 
                style: style_municipios_ruta_2,
                interactive: true,
    title: 'municipios_ruta<br />\
    <img src="styles/legend/municipios_ruta_2_0.png" /> Citalá<br />\
    <img src="styles/legend/municipios_ruta_2_1.png" /> La Palma<br />\
    <img src="styles/legend/municipios_ruta_2_2.png" /> San Ignacio<br />'
        });
var format_concentracion_de_restaurantes_3 = new ol.format.GeoJSON();
var features_concentracion_de_restaurantes_3 = format_concentracion_de_restaurantes_3.readFeatures(json_concentracion_de_restaurantes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_concentracion_de_restaurantes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concentracion_de_restaurantes_3.addFeatures(features_concentracion_de_restaurantes_3);
var lyr_concentracion_de_restaurantes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_concentracion_de_restaurantes_3, 
                style: style_concentracion_de_restaurantes_3,
                interactive: true,
                title: '<img src="styles/legend/concentracion_de_restaurantes_3.png" /> concentracion_de_restaurantes'
            });
var format_concentracion_de_miradores_4 = new ol.format.GeoJSON();
var features_concentracion_de_miradores_4 = format_concentracion_de_miradores_4.readFeatures(json_concentracion_de_miradores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_concentracion_de_miradores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concentracion_de_miradores_4.addFeatures(features_concentracion_de_miradores_4);
var lyr_concentracion_de_miradores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_concentracion_de_miradores_4, 
                style: style_concentracion_de_miradores_4,
                interactive: true,
                title: '<img src="styles/legend/concentracion_de_miradores_4.png" /> concentracion_de_miradores'
            });
var format_concentracion_de_hoteles_5 = new ol.format.GeoJSON();
var features_concentracion_de_hoteles_5 = format_concentracion_de_hoteles_5.readFeatures(json_concentracion_de_hoteles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_concentracion_de_hoteles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concentracion_de_hoteles_5.addFeatures(features_concentracion_de_hoteles_5);
var lyr_concentracion_de_hoteles_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_concentracion_de_hoteles_5, 
                style: style_concentracion_de_hoteles_5,
                interactive: true,
                title: '<img src="styles/legend/concentracion_de_hoteles_5.png" /> concentracion_de_hoteles'
            });
var format_ruta_hoteles_6 = new ol.format.GeoJSON();
var features_ruta_hoteles_6 = format_ruta_hoteles_6.readFeatures(json_ruta_hoteles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ruta_hoteles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ruta_hoteles_6.addFeatures(features_ruta_hoteles_6);
var lyr_ruta_hoteles_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ruta_hoteles_6, 
                style: style_ruta_hoteles_6,
                interactive: true,
    title: 'ruta_hoteles<br />\
    <img src="styles/legend/ruta_hoteles_6_0.png" /> Citalá<br />\
    <img src="styles/legend/ruta_hoteles_6_1.png" /> La Palma<br />\
    <img src="styles/legend/ruta_hoteles_6_2.png" /> San Ignacio<br />'
        });
var format_hoteles_7 = new ol.format.GeoJSON();
var features_hoteles_7 = format_hoteles_7.readFeatures(json_hoteles_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hoteles_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hoteles_7.addFeatures(features_hoteles_7);
var lyr_hoteles_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hoteles_7, 
                style: style_hoteles_7,
                interactive: true,
                title: '<img src="styles/legend/hoteles_7.png" /> hoteles'
            });
var format_Restaurantes_8 = new ol.format.GeoJSON();
var features_Restaurantes_8 = format_Restaurantes_8.readFeatures(json_Restaurantes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurantes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurantes_8.addFeatures(features_Restaurantes_8);
var lyr_Restaurantes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restaurantes_8, 
                style: style_Restaurantes_8,
                interactive: true,
                title: '<img src="styles/legend/Restaurantes_8.png" /> Restaurantes'
            });
var format_Parques_9 = new ol.format.GeoJSON();
var features_Parques_9 = format_Parques_9.readFeatures(json_Parques_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parques_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parques_9.addFeatures(features_Parques_9);
var lyr_Parques_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parques_9, 
                style: style_Parques_9,
                interactive: true,
                title: '<img src="styles/legend/Parques_9.png" /> Parques'
            });
var format_miradores_10 = new ol.format.GeoJSON();
var features_miradores_10 = format_miradores_10.readFeatures(json_miradores_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_miradores_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_miradores_10.addFeatures(features_miradores_10);
var lyr_miradores_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_miradores_10, 
                style: style_miradores_10,
                interactive: true,
                title: '<img src="styles/legend/miradores_10.png" /> miradores'
            });

lyr_LIM_DEPARTAMENTAL_0.setVisible(true);lyr_LIM_MUNICIPAL_1.setVisible(true);lyr_municipios_ruta_2.setVisible(true);lyr_concentracion_de_restaurantes_3.setVisible(true);lyr_concentracion_de_miradores_4.setVisible(true);lyr_concentracion_de_hoteles_5.setVisible(true);lyr_ruta_hoteles_6.setVisible(true);lyr_hoteles_7.setVisible(true);lyr_Restaurantes_8.setVisible(true);lyr_Parques_9.setVisible(true);lyr_miradores_10.setVisible(true);
var layersList = [lyr_LIM_DEPARTAMENTAL_0,lyr_LIM_MUNICIPAL_1,lyr_municipios_ruta_2,lyr_concentracion_de_restaurantes_3,lyr_concentracion_de_miradores_4,lyr_concentracion_de_hoteles_5,lyr_ruta_hoteles_6,lyr_hoteles_7,lyr_Restaurantes_8,lyr_Parques_9,lyr_miradores_10];
lyr_LIM_DEPARTAMENTAL_0.set('fieldAliases', {'FCODE': 'FCODE', 'UID': 'UID', 'ASD': 'ASD', 'COD': 'COD', 'IC5': 'IC5', 'NA2': 'NA2', 'NA3': 'NA3', 'NAM': 'NAM', 'ACC': 'ACC', 'CCN': 'CCN', 'SDV': 'SDV', 'SDP': 'SDP', 'SRT': 'SRT', 'TXT': 'TXT', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_LIM_MUNICIPAL_1.set('fieldAliases', {'FCODE': 'FCODE', 'UID': 'UID', 'ASD': 'ASD', 'COD': 'COD', 'NA2': 'NA2', 'NA3': 'NA3', 'NAM': 'NAM', 'PPL': 'PPL', 'ACC': 'ACC', 'CCN': 'CCN', 'SDV': 'SDV', 'SDP': 'SDP', 'SRT': 'SRT', 'TXT': 'TXT', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_municipios_ruta_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'departamen': 'departamen', 'area_km': 'area_km', 'perimetro': 'perimetro', });
lyr_concentracion_de_restaurantes_3.set('fieldAliases', {'id': 'id', 'municipio': 'municipio', 'cant_rest': 'cant_rest', });
lyr_concentracion_de_miradores_4.set('fieldAliases', {'id': 'id', 'municipio': 'municipio', 'cant_mirad': 'cant_mirad', });
lyr_concentracion_de_hoteles_5.set('fieldAliases', {'id': 'id', 'municipio': 'municipio', 'cant_hotel': 'cant_hotel', });
lyr_ruta_hoteles_6.set('fieldAliases', {'id': 'id', 'municipio': 'municipio', 'departamen': 'departamen', 'hotel': 'hotel', });
lyr_hoteles_7.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'municipio': 'municipio', 'departamen': 'departamen', });
lyr_Restaurantes_8.set('fieldAliases', {'id': 'id', 'Restaurant': 'Restaurant', });
lyr_Parques_9.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Municipio': 'Municipio', });
lyr_miradores_10.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'municipio': 'municipio', 'departamen': 'departamen', });
lyr_LIM_DEPARTAMENTAL_0.set('fieldImages', {'FCODE': 'TextEdit', 'UID': 'TextEdit', 'ASD': 'Range', 'COD': 'Range', 'IC5': 'Range', 'NA2': 'TextEdit', 'NA3': 'TextEdit', 'NAM': 'TextEdit', 'ACC': 'Range', 'CCN': 'TextEdit', 'SDV': 'TextEdit', 'SDP': 'TextEdit', 'SRT': 'Range', 'TXT': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_LIM_MUNICIPAL_1.set('fieldImages', {'FCODE': 'TextEdit', 'UID': 'TextEdit', 'ASD': 'Range', 'COD': 'Range', 'NA2': 'TextEdit', 'NA3': 'TextEdit', 'NAM': 'TextEdit', 'PPL': 'TextEdit', 'ACC': 'Range', 'CCN': 'TextEdit', 'SDV': 'TextEdit', 'SDP': 'TextEdit', 'SRT': 'Range', 'TXT': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_municipios_ruta_2.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'departamen': 'TextEdit', 'area_km': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_concentracion_de_restaurantes_3.set('fieldImages', {'id': 'TextEdit', 'municipio': 'TextEdit', 'cant_rest': 'TextEdit', });
lyr_concentracion_de_miradores_4.set('fieldImages', {'id': 'TextEdit', 'municipio': 'TextEdit', 'cant_mirad': 'TextEdit', });
lyr_concentracion_de_hoteles_5.set('fieldImages', {'id': 'TextEdit', 'municipio': 'TextEdit', 'cant_hotel': 'TextEdit', });
lyr_ruta_hoteles_6.set('fieldImages', {'id': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', 'hotel': 'TextEdit', });
lyr_hoteles_7.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', });
lyr_Restaurantes_8.set('fieldImages', {'id': 'TextEdit', 'Restaurant': 'TextEdit', });
lyr_Parques_9.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Municipio': 'TextEdit', });
lyr_miradores_10.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', });
lyr_LIM_DEPARTAMENTAL_0.set('fieldLabels', {'FCODE': 'no label', 'UID': 'no label', 'ASD': 'no label', 'COD': 'no label', 'IC5': 'no label', 'NA2': 'no label', 'NA3': 'no label', 'NAM': 'no label', 'ACC': 'no label', 'CCN': 'no label', 'SDV': 'no label', 'SDP': 'no label', 'SRT': 'no label', 'TXT': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_LIM_MUNICIPAL_1.set('fieldLabels', {'FCODE': 'no label', 'UID': 'no label', 'ASD': 'no label', 'COD': 'no label', 'NA2': 'no label', 'NA3': 'no label', 'NAM': 'no label', 'PPL': 'no label', 'ACC': 'no label', 'CCN': 'no label', 'SDV': 'no label', 'SDP': 'no label', 'SRT': 'no label', 'TXT': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_municipios_ruta_2.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'departamen': 'no label', 'area_km': 'no label', 'perimetro': 'no label', });
lyr_concentracion_de_restaurantes_3.set('fieldLabels', {'id': 'no label', 'municipio': 'no label', 'cant_rest': 'no label', });
lyr_concentracion_de_miradores_4.set('fieldLabels', {'id': 'no label', 'municipio': 'no label', 'cant_mirad': 'no label', });
lyr_concentracion_de_hoteles_5.set('fieldLabels', {'id': 'no label', 'municipio': 'no label', 'cant_hotel': 'no label', });
lyr_ruta_hoteles_6.set('fieldLabels', {'id': 'no label', 'municipio': 'no label', 'departamen': 'no label', 'hotel': 'no label', });
lyr_hoteles_7.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'municipio': 'no label', 'departamen': 'no label', });
lyr_Restaurantes_8.set('fieldLabels', {'id': 'no label', 'Restaurant': 'no label', });
lyr_Parques_9.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Municipio': 'no label', });
lyr_miradores_10.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'municipio': 'no label', 'departamen': 'no label', });
lyr_miradores_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});