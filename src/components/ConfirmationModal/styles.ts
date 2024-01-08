import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: GlobalStyle.lightGray.color,
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: GlobalStyle.veryLightGray.color,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: GlobalStyle.mediumGray.color,
    marginTop: 10,
  },
  buttonText: {
    color: GlobalStyle.darkGray.color,
    fontWeight: "bold",
  },
});
export default styles;
