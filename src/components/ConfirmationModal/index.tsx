import React from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
import Button from "../Button";
import GlobalStyle from "../../styles/GlobalStyle";

interface ConfirmationModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isVisible,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={[styles.modalText, GlobalStyle.texto]}>
            Tem certeza que deseja excluir esta skill?
          </Text>
          <Button buttonStyle={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </Button>
          <Button buttonStyle={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmationModal;
