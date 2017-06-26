import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headers: {
    textAlign: 'center',
    fontWeight: '500',
    paddingTop: 70,
    paddingBottom: 30,
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
    paddingLeft: 10,
    fontWeight: '500',
    fontSize: 15,
  },
  buttonView: {
    margin: 10,
    backgroundColor: '#4CAF50',
  },
  errorMassage: {
    fontWeight: '500',
    color: 'red',
    marginLeft: '30%',
    width: '50%',
    paddingTop: 20,
  },
});
