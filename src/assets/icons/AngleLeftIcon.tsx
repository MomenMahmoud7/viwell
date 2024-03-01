import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const AngleLeftIcon: FC<SvgProps> = ({color, width, height, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 10 20" fill="none" {...props}>
    <Path
      d="M9.5.71L.715 9.498a.686.686 0 000 1L9.5 19.282"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AngleLeftIcon;
