import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderRadius: 8,
    backgroundColor: theme.COLORS.GRAY_200,
  },
  headerContainer: {
    marginTop: 30,
  },
  greetingText: {
    fontSize: theme.FONT_SIZE.MD,
    marginBottom: 8,
  },
  addSkillText: {
    fontSize: theme.FONT_SIZE.SM,
  },
  skillsContainer: {
    flex: 1,
  },
  skillItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: theme.COLORS.GRAY_200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_400,
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
    borderColor: theme.COLORS.GRAY_600,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  updateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  fixedText: {
    fontSize: theme.FONT_SIZE.SM,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 25,
    width: 30,
    fontSize: theme.FONT_SIZE.SM,
    backgroundColor: theme.COLORS.WHITE,
    color: theme.COLORS.GRAY_700,
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_700,
    borderRadius: 5,
    paddingLeft: 8,
    marginRight: 8,
  },
  iconButton: {
    marginLeft: 8,
  },
  adicionarSkillButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterInput: {
    flex: 1,
    borderWidth: 0,
    paddingHorizontal: 10,
    marginRight: 0,
    marginTop: 0,
  },
  containerFilter: {
    marginBottom: 10,
  },
});

export default styles;
