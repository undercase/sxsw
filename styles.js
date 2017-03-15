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
  upload: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    color: '#1fda9a',
    fontFamily: 'quicksand',
    fontSize: 80,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#1fda9a',
    alignItems: 'center',
    minWidth: 330,
    padding: 15,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'opensans_light',
    fontSize: 25
  },
  heart: {
    color: '#1fda9a',
    fontSize: 20,
    marginTop: 20
  },
  red: {
    color: '#db3340'
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
  setlist: {
    width: 412,
    height: 300
  },
  header: {
    color: '#1fda9a',
    fontFamily: 'quicksand',
    fontSize: 35,
    margin: 15,
    textAlign: 'center'
  },
  info: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 13
  },
  song: {
    marginTop: 10,
    marginBottom: 10
  },
  number: {
    color: '#1fda9a',
    fontFamily: 'quicksand',
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default styles;
