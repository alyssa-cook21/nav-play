import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SymbolView } from 'expo-symbols';

import { DiscoverScreen, HomeScreen, ProfileScreen, SavedScreen } from '../screens/AppScreens';

const Tabs = createBottomTabNavigator();

// Bottom-tab navigator definition; shared screens are also used by DrawerNavigator.
export default function TabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#17334F',
        headerTitleStyle: { fontSize: 16, fontWeight: '700' },
        tabBarActiveTintColor: '#1769C2',
        tabBarInactiveTintColor: '#8291A3',
        tabBarStyle: { height: 62, paddingTop: 5, paddingBottom: 5, borderTopColor: '#E5ECF4' },
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <SymbolView name="house.fill" tintColor={color} size={20} /> }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ tabBarIcon: ({ color }) => <SymbolView name="safari.fill" tintColor={color} size={20} /> }}
      />
      <Tabs.Screen
        name="Saved"
        component={SavedScreen}
        options={{ tabBarIcon: ({ color }) => <SymbolView name="bookmark.fill" tintColor={color} size={20} /> }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <SymbolView name="person.crop.circle.fill" tintColor={color} size={20} /> }}
      />
    </Tabs.Navigator>
  );
}