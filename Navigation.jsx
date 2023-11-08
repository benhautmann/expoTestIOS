import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as Icon from "@expo/vector-icons"
import FriendScreen from './screens/Friend Screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Friend" component={FriendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Navigation() {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => {
        // screenOptions erwartet eine Funktion, diese setzt für jeden Tab.Screen eine Option ein
        // hier wird mit route überprüft, welcher Tab aktiv ist und setzt mit focused ein outline oder normales icon
        return {
          tabBarIcon: ({ focused, size, color }) => {
            let icon;
            if (route.name === "Home") { icon = focused ? "home" : "home-outline"; }
            else if (route.name === "Settings") { icon = focused ? "settings" : "settings-outline"; }
            return (<Icon.Ionicons name={icon} size={size} color={color} />);
          },
          tabBarActiveTintColor: "orange",
          tabBarStyle: { backgroundColor: "aliceblue" }
        };
      }}>

        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            title: "Freunde"
          }} />

        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{
            title: "Einstellungen",
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}




