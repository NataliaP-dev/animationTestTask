import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  itemDescription: {
    maxWidth: '50%',
  },
  addButton: {
    backgroundColor: '#b30289',
    width: 60,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
  },
});
