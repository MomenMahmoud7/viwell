import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const HeartIcon: FC<SvgProps> = ({color, width, height, fill, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 14 12" fill="none" {...props}>
    <Path
      d="M7.004 11.383L1.53 6.424c-2.975-2.975 1.398-8.688 5.474-4.066 4.076-4.622 8.43 1.11 5.475 4.066l-5.475 4.959z"
      stroke={color}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HeartIcon;
