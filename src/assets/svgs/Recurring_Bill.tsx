import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { svgProps } from './SvgComponent';

const Recurring_Bill: React.FC<svgProps> = props => {
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
        fill="#7F3DFF"
        d="M36.25 31.25A1.25 1.25 0 0035 32.5a2.5 2.5 0 11-3.75-2.175 1.25 1.25 0 002.1 1.075l1.762-1.762a1.25 1.25 0 000-1.776L33.35 26.1a1.252 1.252 0 00-1.775 0 1.25 1.25 0 00-.162 1.512A5 5 0 1037.5 32.5a1.25 1.25 0 00-1.25-1.25z"></Path>
      <Path
        scaleX={scaleX}
        scaleY={scaleY}
        fill="#7F3DFF"
        d="M30.725 6.913a3.75 3.75 0 00-3.65-.163l-.375.188a1.25 1.25 0 01-1.025 0l-4.288-1.675a3.75 3.75 0 00-2.774 0l-4.288 1.712a1.25 1.25 0 01-1.025 0l-.375-.187A3.75 3.75 0 007.5 10.1v18.65A6.25 6.25 0 0013.75 35h11.725A7.225 7.225 0 0125 32.5v-.1a7.5 7.5 0 013.913-6.575 3.75 3.75 0 01.937-1.6l.15-.138c.237-.208.497-.388.775-.537.459-.233.961-.37 1.475-.4h.25V10.1a3.75 3.75 0 00-1.775-3.187zM22.5 26.25H15a1.25 1.25 0 010-2.5h7.5a1.25 1.25 0 010 2.5zm2.5-7.5H15a1.25 1.25 0 010-2.5h10a1.25 1.25 0 010 2.5z"></Path>
    </Svg>
  );
};

export default Recurring_Bill;
