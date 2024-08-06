import React, {useState, useMemo} from 'react';
import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import Icon from 'react-native-vector-icons/Fontisto';
import Menu from 'react-native-vector-icons/Entypo';
import Post from 'react-native-vector-icons/FontAwesome';
import AppColors from '../../utills/AppColors';
import ScreenWrapper from '../../components/screen-wrapper';
import {height, width} from '../../utills/Dimension';
import Input from '../../components/input';
import {CustomText} from '../../components/texts';
import {CommonStyles} from '../../utills/CommonStyles';
import PostCard from '../../components/post-card';

const Home = ({navigation}: NativeStackScreenProps<any>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenWrapper
      backgroundColor={AppColors.white}
      scrollEnabled
      barStyle="light-content"
      statusBarColor={AppColors.black}
      contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={20}
            color={AppColors.gray}
            style={{marginLeft: 4}}
          />
          <Input
            containerStyles={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder=""
            placeholderTextColor={AppColors.gray}
          />
        </View>
        <Menu
          name="menu"
          size={30}
          color={AppColors.gray}
          style={styles.icon}
        />
      </View>
      <View style={CommonStyles.rowJustifySpaceBtw}>
        <View
          style={[
            styles.micContainer,
            CommonStyles.alignJustifyCenterSpace,
            {backgroundColor: AppColors.yellow10},
          ]}>
          <Post
            name="send-o"
            size={40}
            color={AppColors.white}
            style={{marginLeft: 4}}
          />
          <CustomText
            textStyles={CommonStyles.marginTop_1}
            color={AppColors.white}
            letterSpacing={1}
            fontWeight="500">
            {'New Post'}
          </CustomText>
        </View>
        <View
          style={[styles.micContainer, CommonStyles.alignJustifyCenterSpace]}>
          <Icon
            name="mic"
            size={40}
            color={AppColors.white}
            style={{marginLeft: 4}}
          />
          <CustomText
            color={AppColors.white}
            textStyles={CommonStyles.marginTop_1}
            letterSpacing={1}
            fontWeight="500">
            {"What's Happenings?"}
          </CustomText>
        </View>
      </View>

      {[1, 3, 2, 3, 2, 3].map((item, index) => (
        <PostCard index={index} />
      ))}
    </ScreenWrapper>
  );
};

export default Home;
