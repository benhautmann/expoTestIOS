import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as Icon from "@expo/vector-icons"
import FriendScreen from './screens/Friend Screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "aliceblue" } }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Friend" component={FriendScreen} options={({ route }) => {
        return {
          title: `${route.params.friend.name.first} ${route.params.friend.name.last}`
        }
      }} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>

      {/* Hier wird für die beiden Screens allgemeines erstellt */}
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
          tabBarStyle: { backgroundColor: "aliceblue" },
          headerShown: false
        };
      }}>

        <Tab.Screen name="Home" component={HomeStack}
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




