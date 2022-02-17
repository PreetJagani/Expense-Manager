import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {svgProps} from './SvgComponent';

const Restaurant: React.FC<svgProps> = props => {
  const base_width = 40;
  const base_height = 40;
  const scaleX = props.width / base_width;
  const scaleY = props.height / base_height;

  return (
    <Svg
      width={base_width * scaleX}
      height={base_height * scaleY}
      fill="none"
      viewBox={`0 0 ${base_width * scaleX} ${base_height * scaleY}`}>
      <Path
        scaleX={scaleX}
        scaleY={scaleY}
        fill="#FD3C4A"
        d="M27.5 5a6.25 6.25 0 00-6.25 6.25v2.5a6.25 6.25 0 005 6.125v2.85a3.75 3.75 0 00-2.5 3.525v5a3.75 3.75 0 007.5 0v-5a3.75 3.75 0 00-2.5-3.525v-2.85a6.25 6.25 0 005-6.125v-2.5A6.25 6.25 0 0027.5 5zM17.5 5a1.25 1.25 0 00-1.25 1.25v5a1.25 1.25 0 01-2.5 0v-5a1.25 1.25 0 00-2.5 0v5a1.25 1.25 0 01-2.5 0v-5a1.25 1.25 0 00-2.5 0v7.5a6.25 6.25 0 005 6.125v2.85a3.75 3.75 0 00-2.5 3.525v5a3.75 3.75 0 007.5 0v-5a3.75 3.75 0 00-2.5-3.525v-2.85a6.25 6.25 0 005-6.125v-7.5A1.25 1.25 0 0017.5 5z"
      />
    </Svg>
  );
};

export default Restaurant;
