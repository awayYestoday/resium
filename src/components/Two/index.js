import React from "react";
import { Cartesian3, Color, Transforms} from "cesium";
import { Viewer,  Cesium3DTileset, CameraFlyTo} from "resium";
import exampleImg from '../../assets/example.png';

const center = Cartesian3.fromDegrees(139.767052, 35.681167, 100);

class Two extends React.Component {
  render() {
    return (
      <Viewer full>
        <CameraFlyTo duration={5} destination={center}/>
      </Viewer>
    )
  }
}
export default Two;