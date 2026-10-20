import { createDrawerNavigator } from '@react-navigation/drawer';

import { DiscoverScreen, HomeScreen, ProfileScreen, SavedScreen } from '../screens/AppScreens';

const Drawer = createDrawerNavigator();

// Drawer navigator definition; shares destinations with the bottom-tab version.
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFFFFF' },
        headerTintColor: '#17334F',
        headerTitleStyle: { fontSize: 16, fontWeight: '700' },
        drawerActiveTintColor: '#1769C2',
        drawerInactiveTintColor: '#53677D',
        drawerActiveBackgroundColor: '#EAF3FD',
        drawerLabelStyle: { fontSize: 14, fontWeight: '600' },
        drawerItemStyle: { borderRadius: 8 },
        drawerContentStyle: { backgroundColor: '#FFFFFF' },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Discover" component={DiscoverScreen} />
      <Drawer.Screen name="Saved" component={SavedScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}