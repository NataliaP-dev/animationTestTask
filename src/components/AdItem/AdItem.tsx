import React from 'react';
import {Animated, Easing, Image, Pressable, Text, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {IBasketItem, mockItem} from '../../constants/general.constant';
import ParfumesImage from '../../assets/Parfumes.jpeg';
import {Styles} from './styles';

export const ItemTimerImage = ({size = 75}: {size?: number}) => (
  <CountdownCircleTimer
    isPlaying
    size={size}
    strokeWidth={2}
    duration={15}
    colors={['#b30289', '#800964', '#e31041', '#750202']}
    colorsTime={[7, 5, 2, 0]}>
    {() => (
      <Image
        source={ParfumesImage}
        style={{width: size - 2, height: size - 2, borderRadius: 100}}
      />
    )}
  </CountdownCircleTimer>
);

const ItemDescription = ({
  color,
  item,
}: {
  color: Animated.AnimatedInterpolation;
  item: IBasketItem;
}) => (
  <View style={Styles.itemDescription}>
    <Animated.Text style={{fontWeight: '700', color}} numberOfLines={1}>
      {item.price}
    </Animated.Text>
    <Animated.Text style={{fontWeight: '800', color}} numberOfLines={1}>
      {item.hastag}
    </Animated.Text>
    <Animated.Text style={{color}} numberOfLines={1}>
      {item.description}
    </Animated.Text>
  </View>
);

export const AdItem = ({onAdd}: {onAdd: () => void}) => {
  const opacityValue = new Animated.Value(1);
  const colorAnimation = new Animated.Value(0);

  const colorInterpolation = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 0, 0, 0.4)', 'rgb(255, 255, 255)'],
  });

  const textColorInterpolation = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
  });

  const handleAnimation = () => {
    onAdd();
    Animated.timing(colorAnimation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 750,
    }).start(() => {
      Animated.timing(colorAnimation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 750,
      }).start();
    });
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <Animated.View
      style={{...Styles.wrapper, backgroundColor: colorInterpolation}}>
      <ItemTimerImage />
      <ItemDescription color={textColorInterpolation} item={mockItem} />
      <Animated.View style={{opacity: opacityValue}}>
        <Pressable style={Styles.addButton} onPress={handleAnimation}>
          <Text style={{color: 'white', textAlign: 'center'}}>Add to card</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};
