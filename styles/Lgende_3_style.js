var size = 0;
var placement = 'point';
function categories_Lgende_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Association':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.02625,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/handshake-round-svgrepo-com (1).svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Institution':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [800, 800],
                  scale: 0.02875,
                  anchor: [400.0, 400.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/justice-round-svgrepo-com.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Service Ville':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [205, 205],
                  scale: 0.07317073170731707,
                  anchor: [102.5, 102.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/building-user-svgrepo-com (1).svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Lgende_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Type de structure");
    var labelFont = "5.2px \'Arial Black\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Nom de la structure") !== null) {
        labelText = String(feature.get("Nom de la structure"));
    }
    
    var style = categories_Lgende_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
