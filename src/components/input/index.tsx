import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {width} from '../../utills/Dimension';
import {TextInput} from 'react-native';
import AppColors from '../../utills/AppColors';
import {View} from 'react-native-animatable';
interface Props {
  containerStyles?: object;
  value: string;
  onChangeText: (val: string | number) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  error?: string;
}
function Input({
  onChangeText = kk => {},
  containerStyles = {},
  secureTextEntry = false,
  value,
  error,
  placeholder = 'enter value',
  placeholderTextColor = AppColors.black90,
}: Props) {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[styles.container, containerStyles]}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text>{error}</Text>}
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  container: {
    width: width(90),
    backgroundColor: AppColors.white,
  },
});
