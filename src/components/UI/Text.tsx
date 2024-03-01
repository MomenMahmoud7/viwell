import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import React, {FC, useMemo} from 'react';
import theme from '../../styles/theme';
import unit from '../../styles/unit';

type TextPropsType = {
  size?: 'tiny' | 'small' | 'normal' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'heading' | 'white' | 'error';
  fontWeight?: 'normal' | 'bold';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
} & TextProps;

const Text: FC<TextPropsType> = ({
  children,
  style,
  size = 'normal',
  color = 'default',
  fontWeight = 'normal',
  textAlign,
  ...props
}) => {
  const sizeStyle = useMemo(() => styles[size], [size]);
  const colorStyle = useMemo(() => styles[color], [color]);

  return (
    <RNText
      {...props}
      style={[sizeStyle, colorStyle, {fontWeight, textAlign}, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  tiny: {
    fontSize: 10 * unit,
    lineHeight: 14 * unit,
  },
  small: {
    fontSize: 14 * unit,
    lineHeight: 18 * unit,
  },
  normal: {
    fontSize: 16 * unit,
    lineHeight: 20 * unit,
  },
  medium: {
    fontSize: 18 * unit,
    lineHeight: 22 * unit,
  },
  large: {
    fontSize: 28 * unit,
    lineHeight: 32 * unit,
  },
  default: {
    color: theme.text_primary,
  },
  primary: {
    color: theme.primary,
  },
  heading: {
    color: theme.text_secondary,
  },
  white: {
    color: theme.white,
  },
  error: {
    color: theme.danger,
  },
});

export default Text;
