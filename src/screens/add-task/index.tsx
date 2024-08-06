import React, {useState, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {Task, addTask, editTask} from '../../store/task-slice/action';
import styles from './styles';
import Button from '../../components/button';
import AppColors from '../../utills/AppColors';
import {CommonStyles} from '../../utills/CommonStyles';
import Input from '../../components/input';
import {CustomText} from '../../components/texts';
import ScreenWrapper from '../../components/screen-wrapper';
const AddTask = props => {
  const dispatch = useDispatch();
  const task = props?.route?.params?.task;
  const [title, setTitle] = useState(task?.title || '');
  const [note, setNote] = useState(task?.note || '');
  const [priority, setPriority] = useState(task?.priority || 'high');

  const handleAddTask = () => {
    const newTask: Task = {
      id: task ? task?.id : Math.random(),
      title,
      note,
      priority,
    };
    dispatch(task ? editTask(newTask) : addTask(newTask));
    setTitle('');
    setNote('');

    task && props.navigation.goBack();
  };
  const HeaderComponent = useMemo(() => {
    return (
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <CustomText
              size={5}
              color={AppColors.white}
              fontWeight="700"
              textStyles={CommonStyles.marginTop_5}>
              {task ? 'Edit Task' : 'Add Task'}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  return (
    <ScreenWrapper
      transclucent
      scrollEnabled
      headerUnScrollable={() => HeaderComponent}
      barStyle="light-content"
      containerViewStyle={styles.container}>
      <CustomText>{'Title'}</CustomText>
      <Input
        containerStyles={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <CustomText>{'Note'}</CustomText>

      <Input
        containerStyles={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={setNote}
      />
      <CustomText>{'Priority'}</CustomText>
      <Picker
        style={styles.input}
        selectedValue={priority}
        onValueChange={value => setPriority(value)}>
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>
      <View style={CommonStyles.rowJustifySpaceBtw}>
        <Button
          title={task ? 'Save Task' : 'Add Task'}
          onPress={handleAddTask}
          disabled={!note || !title}
          size={5}
          letterSpacing={1}
          backgroundColor={
            !note || !title ? AppColors.gray : AppColors.primary20
          }
          containerStyle={{
            marginVertical: 15,
          }}
        />
        <Button
          title={'See Tasks'}
          size={5}
          letterSpacing={1}
          onPress={() => props.navigation.goBack()}
          containerStyle={{backgroundColor: AppColors.primary20}}
        />
      </View>
    </ScreenWrapper>
  );
};
export default AddTask;
