function GeoMap(){
    this.map = null;
    this.mainBarCustom = null;
}

GeoMap.prototype.CrearMapa = function(target,layers,center,zoom,minZoom,maxZoom){
    var _target = target || 'map',
    _layers = layers || [],
    _center = center || [-89.2078, 14.3284],
    _zoom = zoom || 12,
    _minZoom = minZoom || 9,
    _maxZoom = maxZoom || 20;

    this.map = new ol.Map({
        target: _target,
        layers: _layers,
        view : new ol.View({
            center: ol.proj.fromLonLat(_center),
            minZoom:_minZoom,
            maxZoom:_maxZoom,
            zoom:_zoom
        }),
        interactions: ol.interaction.defaults({ altShiftDragRotate:false, pinchRotate:false,  })

    });

};

GeoMap.prototype.CrearLayerSwitcher = function(){
    var layerSwitcher = new ol.control.LayerSwitcher({
        mouseover: true,
        reordering: false,
        show_progress: true,

        oninfo: function (l) { alert(l.get("title")); },
    });
    this.map.addControl(layerSwitcher);

}

GeoMap.prototype.CrearPopUp = function(){
    // Select control
    var select = new ol.interaction.Select({
        hitTolerance: 5,
        multi: true,
        condition: ol.events.condition.singleClick
    });
    this.map.addInteraction(select);


    var popup = new ol.Overlay.PopupFeature({
        popupClass: 'default anim',
        select: select,
        canFix: true,
        template: {
            title: function(f) {
                return f.get('nombre') + '(' + f.get('id') + ')';
            },
            attributes: {'nombre': { title: 'Nombre' },
            'departamen': { title: 'Departamento' },
            'area_km': { title: 'Area' },
            'perimetro': { title: 'Perimetro' },

            }
        }
    });

    this.map.addOverlay (popup);

}
