var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PETAKECAMATANPROGO_1 = new ol.format.GeoJSON();
var features_PETAKECAMATANPROGO_1 = format_PETAKECAMATANPROGO_1.readFeatures(json_PETAKECAMATANPROGO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAKECAMATANPROGO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAKECAMATANPROGO_1.addFeatures(features_PETAKECAMATANPROGO_1);
var lyr_PETAKECAMATANPROGO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAKECAMATANPROGO_1, 
                style: style_PETAKECAMATANPROGO_1,
                popuplayertitle: 'PETA KECAMATAN PROGO',
                interactive: true,
    title: 'PETA KECAMATAN PROGO<br />\
    <img src="styles/legend/PETAKECAMATANPROGO_1_0.png" /> SANGAT RENDAH<br />\
    <img src="styles/legend/PETAKECAMATANPROGO_1_1.png" /> RENDAH<br />\
    <img src="styles/legend/PETAKECAMATANPROGO_1_2.png" /> SEDANG<br />\
    <img src="styles/legend/PETAKECAMATANPROGO_1_3.png" /> TINGGI<br />\
    <img src="styles/legend/PETAKECAMATANPROGO_1_4.png" /> SANGAT TINGGI<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PETAKECAMATANPROGO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PETAKECAMATANPROGO_1];
lyr_PETAKECAMATANPROGO_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'Distribusi': 'Distribusi', 'Distribu_1': 'Distribu_1', 'Distribu_2': 'Distribu_2', 'JOIN_Luas': 'JOIN_Luas', 'JOIN_Kepad': 'JOIN_Kepad', 'JOIN_Distr': 'JOIN_Distr', });
lyr_PETAKECAMATANPROGO_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Distribusi': 'TextEdit', 'Distribu_1': 'TextEdit', 'Distribu_2': 'TextEdit', 'JOIN_Luas': 'TextEdit', 'JOIN_Kepad': 'TextEdit', 'JOIN_Distr': 'TextEdit', });
lyr_PETAKECAMATANPROGO_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Distribusi': 'inline label - always visible', 'Distribu_1': 'inline label - always visible', 'Distribu_2': 'inline label - always visible', 'JOIN_Luas': 'inline label - always visible', 'JOIN_Kepad': 'inline label - always visible', 'JOIN_Distr': 'inline label - always visible', });
lyr_PETAKECAMATANPROGO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});