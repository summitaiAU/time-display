# Time Display App

A minimalist iOS app built with React Native that displays the current time in large, easy-to-read numbers.

## Features

- Large, clear display of current time (hours, minutes, seconds)
- Updates every second
- Clean, minimalist interface optimized for iOS devices
- Responsive design for various iOS device sizes

## Requirements

- Node.js >= 16
- Xcode (for iOS development)
- CocoaPods
- React Native CLI

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/time-display.git
   cd time-display
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install iOS dependencies:
   ```
   cd ios
   pod install
   cd ..
   ```

## Running the App

To run the app on an iOS simulator:

```
npx react-native run-ios
```

To run on a specific iOS simulator:

```
npx react-native run-ios --simulator="iPhone 14 Pro"
```

## Project Structure

```
TimeDisplay/
├── ios/                     # iOS-specific code
├── src/
│   ├── components/          # React components
│   │   └── TimeDisplay.js   # The time display component
│   └── styles/              # Styling
│       └── timeStyles.js    # Styles for the time display
├── App.js                   # Main app component
├── app.json                 # App configuration
└── ...                      # Other configuration files
```

## Customization

To customize the appearance of the time display, edit the styles in `src/styles/timeStyles.js`.

## License

MIT