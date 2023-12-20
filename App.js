import { HomeScreen } from "./src/screens/home/screens/HomeScreen";
import { SettingsScreen } from "./src/screens/home/screens/SettingsScreen";
import { PizzaScreen } from "./src/screens/home/screens/PizzaScreen";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import CustomTabBarIcon from "./src/components/CustomTabBarIcon";

import { ModalScreen } from "./src/screens/home/screens/ModalScreen";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const HeaderLeft = () => {
  const navigation = useNavigation();
  return <Text onPress={() => navigation.goBack()}>BACK</Text>;
};

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // headerRight: HeaderRight,
          }
        }
      />
      <HomeStack.Screen
        options={{
          headerLeft: HeaderLeft,
          presentation: "containedModal",
        }}
        name="Pizza"
        component={PizzaScreen}
      />
      <HomeStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{
          presentation: "modal",
          headerTitle: "Sale",
          headerTransparent: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

const MyTabs = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon iconName="home" focused={!focused} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon iconName="settings" focused={!focused} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
