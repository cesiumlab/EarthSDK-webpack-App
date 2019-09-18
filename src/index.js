var earth;
var bgImagery;

function startup() {
    earth = new XE.Earth('earthContainer');

    earth.sceneTree.root = {
        "children": [
            {
                "czmObject": {
                    "name": "默认离线影像",
                    "xbsjType": "Imagery",
                    "xbsjImageryProvider": {
                        "createTileMapServiceImageryProvider": {
                            "url": XE.HTML.cesiumDir + 'Assets/Textures/NaturalEarthII',
                            "fileExtension": 'jpg',
                        },
                        "type": "createTileMapServiceImageryProvider"
                    }
                }
            },
        ]
    };

    // 以下仅为调试方便 only for Debug
    window.earth = earth;
}

// 1 XE.ready()会加载Cesium.js等其他资源，注意ready()返回一个Promise对象。
XE.ready().then(startup);      