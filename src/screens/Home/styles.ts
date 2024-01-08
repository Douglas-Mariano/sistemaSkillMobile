import { StyleSheet } from "react-native";
import GlobalStyle from "../../globalStyles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.color5.color,
    margin: 15,
  },
  greetingContainer: {
    marginBottom: 16,
  },
  greetingText: {
    fontSize: 16,
    marginBottom: 8,
  },
  addSkillText: {
    fontSize: 14,
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: GlobalStyle.color3.color,
    color: GlobalStyle.color5.color,
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  skillsContainer: {
    flex: 1,
  },
  skillItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyle.color1.color,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    width: 150,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  lista: {
    borderColor: GlobalStyle.color1.color,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
});

export default styles;
