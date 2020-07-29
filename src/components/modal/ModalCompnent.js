import React from "react";
import { Modal, View, Text } from "react-native";
import { Button, Icon } from "native-base";
import { styles } from "./ModalComponent.style";

const ModalComponent = ({isVisible, onClose, title}) => {
  debugger;
  return (
    <Modal animationTyle="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={[styles.header, styles.content]}>
            <Icon name="info" type="FontAwesome" />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={[styles.content]}>
            <Text>Body</Text>
          </View>
          <View style={[styles.content]}>
            <Button
              large
              rounded
              onPress={() => {
                onClose();
              }}
            >
              <Text>Close</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
