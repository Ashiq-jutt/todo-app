import React from 'react';
import {View} from 'react-native';
import Button from '../button';
import {CustomText} from '../texts';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Modal from 'react-native-modal';
interface DeleteModalProps {
  visible: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal = ({visible, onClose, onDelete}: DeleteModalProps) => {
  return (
    <Modal
      isVisible={visible}
      animationIn={'fadeIn'}
      animationOut={'bounceOutLeft'}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <CustomText size={4} color={AppColors.black}>
            Are you sure you want to delete this task?
          </CustomText>

          <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              size={4.5}
              onPress={onDelete}
              backgroundColor={AppColors.red80}
              containerStyle={{...styles.button}}
            />
            <Button
              title="Cancel"
              size={4.5}
              onPress={onClose}
              backgroundColor={AppColors.gray}
              containerStyle={{...styles.button}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
