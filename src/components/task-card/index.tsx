import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomText} from '../texts';
import AppColors from '../../utills/AppColors';
import {CommonStyles} from '../../utills/CommonStyles';
import {height, width} from '../../utills/Dimension';
import {Task} from '../../store/task-slice/action';
import Button from '../button';

interface Props {
  item: Task;
  editItem: () => void;
  deleteItem: () => void;
  index: number;
}
const TaskCard = ({item, index, editItem, deleteItem}: Props) => {
  return (
    <View key={item.id} style={[styles.cardItem, CommonStyles.shadow]}>
      <View style={styles.textData}>
        <View style={styles.textHeader}>
          <CustomText color={AppColors.green80}>{'Title'}</CustomText>
          <CustomText numberOfLines={3} color={AppColors.black50}>
            {item.title}
          </CustomText>
        </View>
        <View style={styles.textHeader}>
          <CustomText color={AppColors.green80}>{'Note'}</CustomText>
          <CustomText numberOfLines={3} color={AppColors.black50}>
            {item.note}
          </CustomText>
        </View>

        <View style={styles.textHeader2}>
          <CustomText color={AppColors.green80}>{'Priority'}</CustomText>
          <CustomText color={AppColors.black50}>{item.priority}</CustomText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={deleteItem}
          title="Delete"
          backgroundColor={AppColors.red80}
          containerStyle={styles.buttons}
        />
        <Button
          onPress={editItem}
          title="Edit"
          backgroundColor={AppColors.green}
          containerStyle={styles.buttons}
        />
      </View>
    </View>
  );
};

export default TaskCard;
const styles = StyleSheet.create({
  cardItem: {
    marginVertical: height(1),
    borderRadius: height(2),
  },
  textData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(1),
  },
  textHeader: {
    flex: 2,
    paddingHorizontal: width(3),
    marginTop: height(1),
    // alignItems: 'center',
  },
  textHeader2: {
    flex: 1,
    paddingHorizontal: width(1),
    marginTop: height(1),
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: height(1),
  },
  buttons: {
    width: width(20),
    height: height(3.7),
    borderRadius: height(0.5),
  },
});
