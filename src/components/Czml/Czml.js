import China from './China';
import * as d3 from 'd3';
import { Color } from 'cesium';

console.log('d3',d3);
let scale = d3.scaleLinear().domain([10, 350]).range([0, 1])
// 将GEO数据转化为czml格式数据
function geoTurnCzml(arr) {
  let czmlArr = [];
  let geoArr = arr;
  for (let i = 0; i < geoArr.length; i++) {
    let obj = {};
    obj.id = geoArr[i].properties.id;
    obj.name = geoArr[i].properties.name;
    let polygon = {};
    let positions = {};
    positions.cartographicDegrees = [];
    let coordinates = geoArr[i].geometry.coordinates[0];
    for (let i = 0; i < coordinates.length; i++) {
      positions.cartographicDegrees.push(...[...coordinates[i], 0]);
    }
    let randomColor = Color.fromRandom({
      minimumRed : 0.0,
      minimumGreen : 0.1,
      minimumBlue : 0.6,
      alpha : 1.0
    })
    let colorArr = [Math.floor(randomColor.red * 255),Math.floor(randomColor.green * 255),Math.floor(randomColor.blue * 255), 255]
    let material = {
      solidColor: {
        color: {
          rgba: colorArr,
        }
      }
    }
    let outlineColor = {
      rgba: [224,108,44,255],
    }
    polygon.positions = positions;
    polygon.material = material;
    polygon.fill = true;
    polygon.outline = false;
    polygon.outlineColor = outlineColor;
    // polygon.outlineWidth = 10;
    polygon.extrudedHeight = i * 2 * 10000.0,
    polygon.perPositionHeight = true,
    obj.polygon = polygon;
    czmlArr.push(obj);
  }
  return czmlArr;
}
const CHINACZML = geoTurnCzml(China);

export default [
  {
    id: "document",
    name: "CZML",
    version: "1.0",
    clock: {
      interval: "2019-02-25T11:00:00Z/2019-02-25T11:05:00Z",
      currentTime: "2019-02-25T11:00:00Z",
      multiplier: 4,
      range: "LOOP_STOP",
      step: "SYSTEM_CLOCK_MULTIPLIER"
    }
  },
  ...CHINACZML,
  {
    id: "point",
    availability: "2019-02-25T11:00:00Z/2019-02-25T11:05:00Z",
    position: {
      epoch: "2019-02-25T11:00:00Z",
      cartographicDegrees: [
        0, 123.43, 41.80, 150000,
        150, 116.40, 39.90, 150000,
        300,  121.47, 31.23, 150000,
      ]
    },
    point: {
      color: {
        rgba: [255, 255, 255, 255],
      },
      outlineColor: {
        rgba: [255, 0, 0, 255],
      },
      outlineWidth: 3,
      pixelSize: 15,
    },
  }, {
    id: "polyline",
    name: "polyline",
    polyline: {
      positions: {
        cartographicDegrees: [
          123.43, 41.80, 150000,
          116.40, 39.90, 150000,
          121.47, 31.23, 150000,
        ],
      },
      width: 2,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 255],
          }
        }
      },
      clampToGround: false,
      // zIndex: 10,
    }
  }
];