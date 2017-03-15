import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff'
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scan: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  logo: {
    color: '#1fda9a',
    fontFamily: 'quicksand',
    fontSize: 80,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#1fda9a',
    alignItems: 'center',
    minWidth: 320,
    padding: 15,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'opensans_light',
    fontSize: 25
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  actions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 412
  },
  previewImage: {
    flex: 1
  }
});

export default styles;
