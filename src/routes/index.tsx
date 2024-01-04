import { NavigationContainer } from "@react-navigation/native";
import { SkillsProvider } from "../contexts/SkillsContext";
import StackRoutes from "./StackRoute";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <SkillsProvider>
        <StackRoutes />
      </SkillsProvider>
    </NavigationContainer>
  );
};
export default Routes;
