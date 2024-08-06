import React, {useState, useMemo, useEffect} from 'react';
import {Alert, View, FlatList, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenNames} from '../../routes';
import styles from './styles';
import Button from '../../components/button';
import AppColors from '../../utills/AppColors';
import ScreenWrapper from '../../components/screen-wrapper';
import {CustomText} from '../../components/texts';
import firestore from '@react-native-firebase/firestore';
import {CommonStyles} from '../../utills/CommonStyles';
import Input from '../../components/input';
import TaskCard from '../../components/task-card';
import UserCard from '../../components/user-card';
import {height} from '../../utills/Dimension';
const Test = ({navigation}: NativeStackScreenProps<any>) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [id, setId] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState([]);
  console.log('🚀 ~ file: index.tsx:18 ~ Test ~ data:', data);
  async function addData() {
    setLoading(true);
    if (name || age || gender != '') {
      firestore()
        .collection('users')
        .add({
          name: name,
          age: age,
          gender: gender,
        })
        .then(() => {
          setAge('');
          setName('');
          setGender('');
          Alert.alert('User added!');
        });
      await fetchData();
    } else {
      Alert.alert('something went wrong');
    }
    setLoading(false);
  }
  async function upDateUser() {
    setLoading(true);
    if (name || age || gender != '') {
      firestore()
        .collection('users')
        .doc(id)
        .update({
          name: name,
          age: age,
          gender: gender,
        })
        .then(() => {
          setAge('');
          setName('');
          setGender('');
          setId('');
          Alert.alert('User update!');
        });
      await fetchData();
    } else {
      Alert.alert('something went wrong');
    }
    setLoading(false);
  }
  async function editUser(item: any) {
    setName(item?.name);
    setAge(item?.age);
    setGender(item?.gender);
    setId(item?.id);
    // Alert.alert(JSON.stringify('id: ' + item?.id));
  }
  async function deleteUser(item: any) {
    firestore()
      .collection('users')
      .doc(item?.id)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
    await fetchData();
  }
  async function fetchData() {
    firestore()
      .collection('users')
      // .where('age', '>', 24)
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        let arr: any[] = [];
        querySnapshot.forEach(documentSnapshot => {
          arr.push({...documentSnapshot.data(), id: documentSnapshot.id});
        });
        setData(arr);
      });
  }
  useEffect(() => {
    fetchData();
  }, [loading]);

  const HeaderComponent = useMemo(() => {
    return (
      <View style={styles.header}>
        <CustomText
          size={5}
          fontWeight="700"
          color={AppColors.white}
          textStyles={CommonStyles.marginTop_2}>
          TEST
        </CustomText>
      </View>
    );
  }, []);
  const renderTask = ({item}: {item: any}) => {
    return (
      <UserCard
        item={item}
        editItem={() => editUser(item)}
        deleteItem={() => deleteUser(item)}
      />
    );
  };
  return (
    <ScreenWrapper
      backgroundColor={AppColors.white}
      // scrollEnabled
      headerUnScrollable={() => HeaderComponent}
      barStyle="light-content">
      <View style={styles.container}>
        <Input
          containerStyles={styles.input}
          placeholder={'Enter Name'}
          value={name}
          onChangeText={str => setName}
        />
        <Input
          containerStyles={styles.input}
          placeholder={'Enter age'}
          value={age}
          onChangeText={str => setAge}
        />
        <Input
          containerStyles={styles.input}
          placeholder={'Enter gender'}
          value={gender}
          onChangeText={str => setGender}
        />
        <Button
          title={id ? 'Edit User' : 'Add User'}
          size={5}
          backgroundColor={AppColors.green80}
          onPress={id ? upDateUser : addData}
          isLoading={loading}
        />
        {data && (
          <FlatList
            contentContainerStyle={{flexGrow: 1, paddingBottom: height(27)}}
            data={data}
            renderItem={renderTask}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Test;
