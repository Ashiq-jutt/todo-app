import { StyleSheet } from 'react-native';
import { height, width } from '../../utills/Dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
 container:{
  paddingHorizontal: width(4)},
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:AppColors.grey15,
    height:height(5),
    borderRadius:height(1),

  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  input: {
    flex: 1,
    fontSize: height(2.4),
    paddingVertical:height(.2),
    color:AppColors.black,
    backgroundColor:AppColors.grey15,
    width:width(79)
  
  },
  icon:{
    marginLeft:width(1),
  },
  micContainer:{
    backgroundColor:AppColors.green20,
    height:height(13),
    width:width(44),
    marginVertical:width(3),
    borderRadius:height(2),
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
});
export default styles;
