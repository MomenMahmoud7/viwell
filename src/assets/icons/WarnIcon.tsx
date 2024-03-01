import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const WarnIcon: FC<SvgProps> = ({color, width, height, ...props}) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.854.44A1.5 1.5 0 014.914 0h4.172a1.5 1.5 0 011.06.44l3.415 3.414A1.5 1.5 0 0114 4.914v4.172a1.5 1.5 0 01-.44 1.06l-3.414 3.415a1.5 1.5 0 01-1.06.439H4.914a1.5 1.5 0 01-1.06-.44L.439 10.147A1.5 1.5 0 010 9.086V4.914c0-.398.158-.78.44-1.06L3.853.439zM7 3.124a.75.75 0 01.75.75v3.25a.75.75 0 01-1.5 0v-3.25a.75.75 0 01.75-.75zm1 6.75a1 1 0 11-2 0 1 1 0 012 0z"
      fill={color}
    />
  </Svg>
);

export default WarnIcon;
