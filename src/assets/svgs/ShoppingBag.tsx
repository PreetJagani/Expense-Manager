import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {svgProps} from './SvgComponent';

const ShoppingBag: React.FC<svgProps> = props => {
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
        fill="#FCAC12"
        d="M31.25 25H8.225l1 5a6.25 6.25 0 006.125 5h9.3a6.25 6.25 0 006.125-5l1-5h-.525zm-12.5 6.25a1.25 1.25 0 01-2.5 0v-2.5a1.25 1.25 0 012.5 0v2.5zm5 0a1.25 1.25 0 01-2.5 0v-2.5a1.25 1.25 0 012.5 0v2.5zM31.25 12.5h-2.5v-1.25A6.25 6.25 0 0022.5 5h-5a6.25 6.25 0 00-6.25 6.25v1.25h-2.5A3.75 3.75 0 005 16.25v2.5a3.75 3.75 0 003.75 3.75h22.5A3.75 3.75 0 0035 18.75v-2.5a3.75 3.75 0 00-3.75-3.75zm-17.5-1.25A3.75 3.75 0 0117.5 7.5h5a3.75 3.75 0 013.75 3.75v1.25h-12.5v-1.25z"
      />
    </Svg>
  );
};

export default ShoppingBag;
