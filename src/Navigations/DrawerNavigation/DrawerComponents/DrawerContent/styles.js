import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../Utils/unitConversion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8AE00'
  },
  userPicture: {
    width: vw(25),
    height: vw(25),
    borderRadius: vw(5),
  },
  name: {
    fontSize: vh(2),
    color: '#000',
    marginBottom: vh(5),
    marginTop:vh(2)
  },
  drawerButtonContainer:{
    alignItems:'flex-start'
  },
  drawerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:vh(5)
  },
  drawerIcon: {
    height: vw(4),
    width: vw(4),
    resizeMode: 'contain'
  },
  drawerLabel: {
    fontSize: vw(4),
    textTransform: 'uppercase',
    marginLeft:vw(4)
  },
});
export default styles;
