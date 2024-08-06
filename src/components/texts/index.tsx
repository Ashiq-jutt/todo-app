import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {width} from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';
interface Props {
  children: string;
  color?: string;
  textStyles?: object;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  onPress?: () => void;
  center?: boolean;
  italic?: boolean;
  justify?: boolean;
  right?: boolean;
  left?: boolean;
  fontWeight?: string;
  letterSpacing?: number;
  lineHeight?: number;
  numberOfLines?: number;
  style?: ViewStyle;
  backgroundColor?: string;
}

export const CustomText = ({
  children,
  size = 3.3,
  letterSpacing = 0,
  lineHeight = width(5),
  center,
  justify,
  right,
  fontWeight,
  color = AppColors.black,
  onPress = undefined,
  textStyles = {},
  numberOfLines = 1,
  backgroundColor,
}: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      color: color,
      backgroundColor: backgroundColor,
      textAlign: center
        ? 'center'
        : right
        ? 'right'
        : justify
        ? 'justify'
        : 'left',
    },
  });
  return (
    <Pressable disabled={typeof onPress === 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    </Pressable>
  );
};
