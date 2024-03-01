import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon: FC<SvgProps> = ({color, width, height, fill, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M13.5 6.94a.999.999 0 00-.32-.74L7 .5.82 6.2a1 1 0 00-.32.74v5.56a1 1 0 001 1h11a1 1 0 001-1V6.94zM7 13.5v-4"
      stroke={color}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
