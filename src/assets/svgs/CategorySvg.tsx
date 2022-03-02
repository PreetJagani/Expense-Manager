import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {svgProps} from './SvgComponent';
import { Color_Blue_Dark } from "../../utils/ColourUtils";

const Restaurant: React.FC<svgProps> = props => {
  const base_width = 24;
  const base_height = 24;
  const scaleX = props.width / base_width;
  const scaleY = props.height / base_height;

  return (
    <Svg
      width={base_width * scaleX}
      height={base_height * scaleY}
      fill="none"
      rotation={90}
      viewBox={`0 0 ${base_width * scaleX} ${base_height * scaleY}`}>
      <Path
        scaleX={scaleX}
        scaleY={scaleY}
        fill={props.tintColor? props.tintColor : Color_Blue_Dark}
        d="M2,7.177V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V7.177a3,3,0,0,0-1.543-2.622L12.486.126a1,1,0,0,0-.972,0L3.543,4.555A3,3,0,0,0,2,7.177ZM12,5.5A1.5,1.5,0,1,1,10.5,7,1.5,1.5,0,0,1,12,5.5Z"
      />
    </Svg>
  );
};

export default Restaurant;
