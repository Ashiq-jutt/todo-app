import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import ScreenNames from './routes';
import {AddTask, Home, Login, TaskList, Test} from '../screens';
import AppColors from '../utills/AppColors';
const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={false} backgroundColor={AppColors.black} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
          initialRouteName={ScreenNames.TEST}>
          <Stack.Screen name={ScreenNames.TASK_ADD} component={AddTask} />
          <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
          <Stack.Screen name={ScreenNames.TEST} component={Test} />
          <Stack.Screen name={ScreenNames.TASK_LIST} component={TaskList} />
          <Stack.Screen name={ScreenNames.HOME} component={Home} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.gray},
});
