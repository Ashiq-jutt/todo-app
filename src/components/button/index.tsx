import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {CustomText} from '../texts';
import AppColors from '../../utills/AppColors';
import {height, width} from '../../utills/Dimension';

interface Props {
  backgroundColor?: string;
  onPress: () => any;
  color?: string;
  textColor?: string;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  isLoading?: boolean;
  title: string;
  loaderColor?: string;
  activeOpacity?: number;
  size?: number;
  letterSpacing?: number;
  fontWeight?: string;
}
const Button = ({
  backgroundColor = AppColors.primary20,
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.red,
  activeOpacity = 0.7,
  containerStyle = {},
  color = AppColors.white,
  fontWeight = '400',
  size = 3.8,
  letterSpacing = 3,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        containerStyle,
        {backgroundColor: backgroundColor},
      ]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" />
      ) : (
        <CustomText
          fontWeight={fontWeight}
          color={color}
          letterSpacing={letterSpacing}
          size={size}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(2),
    height: height(5),
    width: width(40),
    alignSelf: 'center',
  },
});
