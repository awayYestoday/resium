import React from "react";
import { hot } from "react-hot-loader";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Cartesian3, Color, Transforms} from "cesium";
// import { Viewer,  Cesium3DTileset, CameraFlyTo} from "resium";
// import exampleImg from './assets/example.png';

// const center = Cartesian3.fromDegrees(139.767052, 35.681167, 100);
const App = () => {
  return (
    <Viewer full>
      <CameraFlyTo duration={5} destination={center}/>
    </Viewer>
  );
};
export default hot(module)(App);
