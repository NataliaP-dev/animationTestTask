/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useImperativeHandle, useRef} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {AdItem, ItemTimerImage} from '../../components/AdItem/AdItem';
import BgImage from '../../assets/bg.jpeg';

import styles from './HomePage.styles';
import HomePageStyles from './HomePage.styles';

const AddToBasket = React.forwardRef((props, ref: any) => {
  useImperativeHandle(ref, () => ({
    showAddToBasket: showAdded,
  }));

  const positionAnimation = new Animated.Value(-50);
  const opacityAnimation = new Animated.Value(0);

  const showAdded = () => {
    Animated.timing(positionAnimation, {
      useNativeDriver: false,
      toValue: 0,
      duration: 750,
    }).start(() => {
      Animated.timing(positionAnimation, {
        useNativeDriver: false,
        toValue: -50,
        duration: 750,
      }).start();
    });
    Animated.timing(opacityAnimation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 750,
    }).start(() => {
      Animated.timing(opacityAnimation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 750,
      }).start();
    });
  };

  return (
    <Animated.View
      style={{
        ...HomePageStyles.addToBasketContainer,
        bottom: positionAnimation,
        opacity: opacityAnimation,
      }}>
      <ItemTimerImage size={35} />
    </Animated.View>
  );
});

const HomePage = () => {
  const {height} = Dimensions.get('window');
  const addRef = useRef(null);

  return (
    <SafeAreaView style={{...styles.wrapper}}>
      <ImageBackground
        source={BgImage}
        resizeMode="cover"
        style={{...HomePageStyles.bgContainer, height: height}}>
        <AdItem
          onAdd={() => addRef?.current && addRef.current.showAddToBasket()}
        />
      </ImageBackground>
      <AddToBasket ref={addRef} />
    </SafeAreaView>
  );
};
export default HomePage;
