import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 20,
    fontSize: 20,
  },
  inputViewText: {
    height: 40,
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  inputName: {
    padding: 10,
  },
  buttonView: {
    margin: 10,
    backgroundColor: '#4CAF50',
  },
  errorMassage: {
    fontWeight: '500',
    color: 'red',
    marginLeft: '30%',
    width: '60%',
    paddingLeft: 20,
  },
});
