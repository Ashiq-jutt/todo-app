import {StyleSheet} from 'react-native';
import { height, width } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: AppColors.white,
    borderRadius: height(2),
    padding: width(5),
    alignItems: 'center',
    shadowColor: '#00000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  button: {
    borderRadius: height(2),
    padding: width(1),
    width:width(30),
    elevation: 2,
    margin: height(2),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height(4),
  },
  
 
});
export default styles;
