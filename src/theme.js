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
  },
  itemContainer: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
  },
  formView: {
    padding: 10,
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  formItems: {
    margin: 5,
    padding: 10,
    borderColor: '#e1e4e8',
    borderRadius: 3,
    borderWidth: 1
  },
  formError: {
    margin: 5,
    padding: 10,
    borderColor: '#d73a4a',
    borderRadius: 3,
    borderWidth: 1
  },
  formPressable: {
    margin: 5,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0366d6',
    borderColor: '#0366d6',
    borderRadius: 3,
    borderWidth: 1
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  }
};

export default theme;