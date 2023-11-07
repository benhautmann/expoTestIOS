import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as Icon from "@expo/vector-icons"

const Tab1 = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab1.Navigator>

        <Tab1.Screen name="Home" component={HomeScreen}
          options={{
            title: "Freunde", tabBarIcon: ({ focused, size, color }) => {
              const icon = focused ? "home" : "home-outline";
              return <Icon.Ionicons name={icon} size={size} color={color} />
            }
          }} />

        <Tab1.Screen name="Settings" component={SettingsScreen}
          options={{
            title: "Einstellungen",
            tabBarIcon: ({ focused, size, color }) => {
              const icon = focused ? "settings" : "settings-outline";
              return <Icon.Ionicons name={icon} size={size} color={color} />
            }
          }} />

      </Tab1.Navigator>
    </NavigationContainer>
  );
}

