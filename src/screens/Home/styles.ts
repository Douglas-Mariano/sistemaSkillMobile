import { StyleSheet } from "react-native";
import GlobalStyle from "../../styles/GlobalStyle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderRadius: 8,
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
    backgroundColor: GlobalStyle.primaryPurple.color,
    color: GlobalStyle.darkGray.color,
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    width: "100%",
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
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyle.lightGray.color,
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
    borderColor: GlobalStyle.mediumGray.color,
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
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 25,
    width: 40,
    fontSize: 14,
    borderWidth: 1,
    borderColor: GlobalStyle.darkGray.color,
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
    marginBottom: 10,
  },
  filterInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sortButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  sortButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  sizeSelected: {
    fontSize: 16,
    color: "blue",
  },
  size: {
    fontSize: 16,
    color: "black",
  },
});

export default styles;
