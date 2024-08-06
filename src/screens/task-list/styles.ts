import { StyleSheet } from 'react-native';
import { height, width } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    padding: width(5),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.primary20,
    width: width(100),
    paddingHorizontal: width(6),
    paddingVertical:width(2)
  },
 
});
export default styles;
