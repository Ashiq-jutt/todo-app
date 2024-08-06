import { StyleSheet } from 'react-native';
import { height, width } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    padding: width(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: height(1),
    paddingHorizontal: width(2),
    backgroundColor:AppColors.white
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppColors.primary20,
    width: width(100),
    paddingHorizontal: width(6),
    paddingVertical:width(5)
  },
  headerRight:{
    flexDirection:'row'
  },
});
export default styles;
