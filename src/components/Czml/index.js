import React from 'react';
import moment from 'moment';
import { Cartesian3, Color, Transforms, cartesian, IonImageryProvider} from 'cesium';
import { Viewer, CzmlDataSource, CameraFlyTo, Entity, LabelCollection, Label, ImageryLayer} from 'resium';
import City from './City';
import CZML from './Czml';

class Czml extends React.Component {

  renderEntity = () => {
    return(
      <div>
        {
          City.map((val)=>{
            return (
              <Entity
                name={val.name}
                description={val.name}
                key={val.name}
                position={Cartesian3.fromDegrees(...[...val.position, 0])}
                point={{pixelSize: 10}} />
            )
          })
        }  
      </div>
    )
  };
  renderLabel = () => {
    return(
      <LabelCollection>
        {
          City.map((val, index)=>{
            return (
              <Label 
                position={Cartesian3.fromDegrees(...[...val.position, 0])}
                // fillColor={{rgba: [255, 255, 255, 255]}}
                // horizontalOrigin="LEFT"
                // style="FILL"
                font="12pt Lucida Console"
                text={val.name}
                key={index}
                />
            )
          })
        }
      </LabelCollection>
    )
  }
  render() {
    return (
      <Viewer full>
        <CameraFlyTo destination={Cartesian3.fromDegrees(110, 30, 9000000)} />
        <CzmlDataSource data={CZML} />
        {this.renderEntity()}
        {this.renderLabel()}
        <ImageryLayer alpha={1} imageryProvider={new IonImageryProvider({ assetId: 3812 })} />
      </Viewer>
    )
  }
}
export default Czml;