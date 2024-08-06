import { StyleSheet } from 'react-native';
import { height, width } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    width: width(100),
    paddingHorizontal: width(2),
    paddingTop:height(3)
  },
  forgetPassword:{
    marginLeft:width(31),
  marginVertical:height(3)
  }, 
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: width(5),
    borderBottomWidth: width(.7),
    borderBottomColor:AppColors.grey15,
    height:height(3.9),
    width:width(85)
  },
  icon: {
    paddingRight:width(3),

  },
  input: {
    flex: 1,
    fontSize: height(2.8),
    paddingVertical:height(.2),
    paddingLeft:width(2.5),
    color:AppColors.gray,
    width:width(84)
  
  },
  button:{
    width: width(80),
    height: height(5.6),
    borderRadius: 0,
    marginTop: height(6),
  },
  image:{
    height: height(20),
    width: width(50),
    resizeMode: 'contain',
  },
  textValidation:{marginTop:-18}
});
export default styles;
