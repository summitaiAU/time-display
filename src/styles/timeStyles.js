import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background for high contrast
  },
  timeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff', // White text
    fontVariant: ['tabular-nums'], // Ensures numbers have the same width
    letterSpacing: 2, // Add spacing between characters
    fontFamily: 'System', // iOS system font
  },
});

export default styles;