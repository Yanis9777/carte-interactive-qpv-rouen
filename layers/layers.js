var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile-a.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });

var lyr_OpenFreeMap_1 = new ol.layer.Group({
    title: 'OpenFreeMap',
    type: '',
    combine: true,
});
olms.apply(lyr_OpenFreeMap_1, 'https://tiles.openfreemap.org/styles/liberty');

var format_QPV_2 = new ol.format.GeoJSON();
var features_QPV_2 = format_QPV_2.readFeatures(json_QPV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QPV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QPV_2.addFeatures(features_QPV_2);
var lyr_QPV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QPV_2, 
                style: style_QPV_2,
                popuplayertitle: 'QPV',
                interactive: true,
                title: '<img src="styles/legend/QPV_2.png" /> QPV'
            });
var format_Lgende_3 = new ol.format.GeoJSON();
var features_Lgende_3 = format_Lgende_3.readFeatures(json_Lgende_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgende_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgende_3.addFeatures(features_Lgende_3);
var lyr_Lgende_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgende_3, 
                style: style_Lgende_3,
                popuplayertitle: 'Légende',
                interactive: true,
    title: 'Légende<br />\
    <img src="styles/legend/Lgende_3_0.png" /> Association<br />\
    <img src="styles/legend/Lgende_3_1.png" /> Institution<br />\
    <img src="styles/legend/Lgende_3_2.png" /> Service Ville<br />' });
var format_stade_4 = new ol.format.GeoJSON();
var features_stade_4 = format_stade_4.readFeatures(json_stade_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stade_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stade_4.addFeatures(features_stade_4);
var lyr_stade_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stade_4, 
                style: style_stade_4,
                popuplayertitle: 'stade',
                interactive: true,
                title: '<img src="styles/legend/stade_4.png" /> stade'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> '
            });
var group_thmatique = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'thématique'});

lyr_OSMHumanitarian_0.setVisible(true);lyr_OpenFreeMap_1.setVisible(true);lyr_QPV_2.setVisible(true);lyr_Lgende_3.setVisible(true);lyr_stade_4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_OSMHumanitarian_0,lyr_OpenFreeMap_1,lyr_QPV_2,lyr_Lgende_3,lyr_stade_4,lyr__5];
lyr_QPV_2.set('fieldAliases', {'FID_1': 'FID_1', 'IDENTIFIAN': 'IDENTIFIAN', 'LIBELLE': 'LIBELLE', 'COMMUNE_AG': 'COMMUNE_AG', });
lyr_Lgende_3.set('fieldAliases', {'Nom de la structure': 'Nom de la structure', 'Type de structure': 'Type de structure', 'Adresse de la structure.': 'Adresse de la structure.', 'domaine d\'intervention ?': 'domaine d\'intervention ?', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_stade_4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'id': 'id', });
lyr_QPV_2.set('fieldImages', {'FID_1': 'TextEdit', 'IDENTIFIAN': 'TextEdit', 'LIBELLE': 'TextEdit', 'COMMUNE_AG': 'TextEdit', });
lyr_Lgende_3.set('fieldImages', {'Nom de la structure': 'TextEdit', 'Type de structure': 'TextEdit', 'Adresse de la structure.': 'TextEdit', 'domaine d\'intervention ?': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_stade_4.set('fieldImages', {'id': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', });
lyr_QPV_2.set('fieldLabels', {'FID_1': 'no label', 'IDENTIFIAN': 'no label', 'LIBELLE': 'no label', 'COMMUNE_AG': 'no label', });
lyr_Lgende_3.set('fieldLabels', {'Nom de la structure': 'no label', 'Type de structure': 'no label', 'Adresse de la structure.': 'no label', 'domaine d\'intervention ?': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_stade_4.set('fieldLabels', {'id': 'no label', });
lyr__5.set('fieldLabels', {'id': 'no label', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});