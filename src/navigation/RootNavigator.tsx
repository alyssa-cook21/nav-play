import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

type NavigationMode = 'tabs' | 'drawer';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1769C2',
    background: '#F3F7FC',
    card: '#FFFFFF',
    text: '#142B45',
    border: '#E5ECF4',
  },
};

export default function RootNavigator() {
  const [mode, setMode] = useState<NavigationMode>('tabs');

  return (
    <SafeAreaShell>
      <NavigationContainer theme={navigationTheme}>
        <View style={styles.modeBar}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>N</Text>
            </View>
            <Text style={styles.brandName}>DMD</Text>
          </View>
          <View style={styles.segment}>
            {(['tabs', 'drawer'] as const).map((option) => {
              const selected = mode === option;
              return (
                <Pressable
                  key={option}
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  onPress={() => setMode(option)}
                  style={[styles.segmentOption, selected && styles.segmentOptionSelected]}>
                  <Text style={[styles.segmentText, selected && styles.segmentTextSelected]}>
                    {option === 'tabs' ? 'Tabs' : 'Drawer'}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
        {mode === 'tabs' ? <TabNavigator key="tabs" /> : <DrawerNavigator key="drawer" />}
      </NavigationContainer>
      <StatusBar style="dark" />
    </SafeAreaShell>
  );
}

function SafeAreaShell({ children }: { children: React.ReactNode }) {
  return <View style={styles.shell}>{children}</View>;
}

const styles = StyleSheet.create({
  shell: { flex: 1, backgroundColor: '#F3F7FC' },
  modeBar: {
    height: 62,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5ECF4',
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  brandMark: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1769C2',
  },
  brandMarkText: { color: '#FFFFFF', fontSize: 17, fontWeight: '800' },
  brandName: { color: '#17334F', fontSize: 11, fontWeight: '800', letterSpacing: 1.1 },
  segment: {
    flexDirection: 'row',
    padding: 3,
    borderRadius: 10,
    backgroundColor: '#EFF4FA',
  },
  segmentOption: { paddingVertical: 7, paddingHorizontal: 12, borderRadius: 8 },
  segmentOptionSelected: { backgroundColor: '#FFFFFF', elevation: 1 },
  segmentText: { color: '#6C7E92', fontSize: 12, fontWeight: '600' },
  segmentTextSelected: { color: '#1769C2' },
});