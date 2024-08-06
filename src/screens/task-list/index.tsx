import React, {useState, useMemo} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenNames} from '../../routes';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/task-slice';
import Button from '../../components/button';
import AppColors from '../../utills/AppColors';
import TaskCard from '../../components/task-card';
import DeleteModal from '../../components/delete-modal';
import {deleteTask, Task} from '../../store/task-slice/action';
import ScreenWrapper from '../../components/screen-wrapper';
import {CustomText} from '../../components/texts';
import {CommonStyles} from '../../utills/CommonStyles';

const TaskList = ({navigation}: NativeStackScreenProps<any>) => {
  const dispatch = useDispatch();
  const taskData = useSelector((state: RootState) => state.tasks.tasks);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<number>(-1);
  const handleDelete = () => {
    dispatch(deleteTask(deleteId));
    setDeleteModalVisible(false);
  };

  const handleTaskDelete = (taskId: number) => {
    setDeleteId(taskId);
    setDeleteModalVisible(true);
  };
  const HeaderComponent = useMemo(() => {
    return (
      <View style={styles.header}>
        <CustomText
          size={5}
          fontWeight="700"
          color={AppColors.white}
          textStyles={CommonStyles.marginTop_2}>
          TASK LIST
        </CustomText>
      </View>
    );
  }, []);
  const renderTask = ({item, index}: {item: Task; index: number}) => {
    return (
      <TaskCard
        index={index}
        item={item}
        deleteItem={() => handleTaskDelete(item.id)}
        editItem={() => navigation.navigate(ScreenNames.TASK_ADD, {task: item})}
      />
    );
  };
  return (
    <ScreenWrapper
      backgroundColor={AppColors.white}
      scrollEnabled
      headerUnScrollable={() => HeaderComponent}
      barStyle="light-content">
      <View style={styles.container}>
        <Button
          title="Add Task"
          size={5}
          backgroundColor={AppColors.green80}
          onPress={() => navigation.navigate(ScreenNames.TASK_ADD)}
        />
        <FlatList
          data={taskData}
          renderItem={renderTask}
          showsVerticalScrollIndicator={false}
        />
        <DeleteModal
          visible={deleteModalVisible}
          onClose={() => setDeleteModalVisible(false)}
          onDelete={handleDelete}
        />
      </View>
    </ScreenWrapper>
  );
};

export default TaskList;
