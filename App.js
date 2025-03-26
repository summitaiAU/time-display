import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TimeDisplay from './src/components/TimeDisplay';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TimeDisplay />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;