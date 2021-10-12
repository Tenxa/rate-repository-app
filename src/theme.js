import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBar: 'white',
  },
  backGroundColors: {
    appBar: '#24292e',
    main: '#e1e4e8',
    repositoryItem: 'white',
    languageText: '#0366d6'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  blueBtn: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 3.5,
    borderRadius: 3
  }
};

export default theme;