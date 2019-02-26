import React from "react";
import { Cartesian3, Color, Transforms} from "cesium";
import { Viewer,  CustomDataSource, Entity } from "resium";
import exampleImg from '../../assets/example.png';

const center = Cartesian3.fromDegrees(139.767052, 35.681167, 100);

class Home extends React.Component {
  render() {
    return (
      <Viewer full>
        <CustomDataSource name="custom">
          <Entity
            name="added to custom data source"
            description="test"
            position={Cartesian3.fromDegrees(-74.0707383, 41.7117244, 100)}
            point={{ pixelSize: 10, color: Color.RED }}
          />
        </CustomDataSource>
        <CustomDataSource name="hidden" show={true}>
          <Entity
            name="added to custom data source but hidden"
            description="测试隐藏属性"
            position={Cartesian3.fromDegrees(-74.0707383, 39.7117244, 100)}
            point={{ pixelSize: 10, color: Color.YELLOW }}
          />
        </CustomDataSource>
        <Entity
          name="added to default data source"
          description="test"
          position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
          point={{ pixelSize: 10 }}
        />
      </Viewer>
    )
  }
}
export default Home;