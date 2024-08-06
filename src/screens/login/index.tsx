import React, {useState, useMemo, FC} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import AppColors from '../../utills/AppColors';
import ScreenWrapper from '../../components/screen-wrapper';
import {CustomText} from '../../components/texts';
import {height, width} from '../../utills/Dimension';
import Input from '../../components/input';
import {authSchema} from '../../utills/Validations';
import {ScreenNames} from '../../routes';
interface Props {
  navigation: NativeStackScreenProps<any>;
}
const Login: FC<Props> = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleSubmit = () => {
    authSchema
      .validate({email, password}, {abortEarly: false})
      .then(() => {
        console.log('Validation successful');
        setPasswordError('');
        setEmailError('');
        setEmail('');
        setPassword('');
      })
      .catch(err => {
        console.log('Validation error: ', err.errors);
        console.log('Validation error: ', err.errors.length);
        if (err.errors.length > 1) {
          setPasswordError(err.errors[1]);
          setEmailError(err.errors[0]);
        } else if (
          err.errors[0] === 'Email is required' ||
          'Email format is invalid'
        ) {
          setEmailError(err.errors[0]);
          setPasswordError('');
        } else {
          setPasswordError(err.errors[0]);
          setEmailError('');
        }
      });
  };
  const HeaderComponent = useMemo(() => {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Ionicon
            name="chevron-back-sharp"
            size={24}
            color={AppColors.black}
          />
          <CustomText size={5} fontWeight="700" color={AppColors.black}>
            {' Back'}
          </CustomText>
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <ScreenWrapper
      backgroundColor={AppColors.white}
      scrollEnabled
      headerUnScrollable={() => HeaderComponent}
      barStyle="dark-content"
      statusBarColor={AppColors.white}
      contentContainerStyle={{paddingHorizontal: width(7)}}>
      <View style={{marginLeft: -30}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-gestion-risques-cybersecurite-analyse-rapports-cybersecurite-gestion-attenuation-risques-strategie-protection-identification-menaces-numeriques_335657-874.jpg',
          }}
        />
      </View>
      <CustomText
        color={AppColors.black70}
        textStyles={{paddingTop: height(1), marginTop: height(4)}}
        size={7}
        fontWeight="600">
        {'Proceed with your'}
      </CustomText>
      <CustomText
        textStyles={{paddingTop: height(3), marginTop: height(1.5)}}
        color={AppColors.black}
        fontWeight="bold"
        size={10}>
        {'Login'}
      </CustomText>
      <CustomText textStyles={{marginTop: height(10)}} size={4.5}>
        {'Username'}
      </CustomText>
      <View style={styles.inputContainer}>
        <Input
          containerStyles={styles.input}
          onChangeText={() => setEmail}
          value={email}
          placeholder="email"
          placeholderTextColor="#A9A9A9"
        />
        <Icon name="user-o" size={18} color="#A9A9A9" style={styles.icon} />
      </View>
      {emailError && (
        <CustomText textStyles={styles.textValidation} color={AppColors.red}>
          {emailError}
        </CustomText>
      )}

      <CustomText textStyles={{marginTop: height(2)}} size={4.5}>
        {'Password'}
      </CustomText>
      <View style={styles.inputContainer}>
        <Input
          containerStyles={styles.input}
          onChangeText={() => setPassword}
          value={password}
          placeholder="password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
        />
        <Icon name="lock" size={18} color="#A9A9A9" style={styles.icon} />
      </View>
      {passwordError && (
        <CustomText textStyles={styles.textValidation} color={AppColors.red}>
          {passwordError}
        </CustomText>
      )}
      <Button
        onPress={() => handleSubmit()}
        title="Login"
        letterSpacing={1}
        size={5}
        fontWeight="bold"
        backgroundColor={AppColors.red80}
        containerStyle={styles.button}
      />
      <CustomText
        textStyles={styles.forgetPassword}
        size={4}
        color={AppColors.gray}>
        {'Forgot Password?'}
      </CustomText>
    </ScreenWrapper>
  );
};

export default Login;
