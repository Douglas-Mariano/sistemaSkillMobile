import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SkillsProvider } from "../../contexts/SkillsContext";
import Login from "../../screens/Login";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <SkillsProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Login"
          component={Login}
        />
      </Tab.Navigator>
    </SkillsProvider>
  );
};
export default TabRoutes;
