import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  table: {
    flexDirection: "column",
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // textRed: {
  //   paddingTop: 0,
  //   color: 'red',
  //   margin: 0,
  //   fontSize: 36,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  text: {
    color: 'green',
    // margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});
export default styles;
