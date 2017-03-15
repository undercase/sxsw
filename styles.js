import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
});

export default styles;
