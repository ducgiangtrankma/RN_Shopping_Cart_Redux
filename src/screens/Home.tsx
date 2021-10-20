import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {APP_SCREEN} from '../navigation/ScreenTypes';
import {useDispatch} from 'react-redux';
import {useSelector} from '../redux/common';
import {ADD_TO_CART} from '../redux/cartReducer';
interface HomeProps {}
export const Home: FC<HomeProps> = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log('Cart reducer', cart.items.length);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(APP_SCREEN.CART)}>
        <Text>Go to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          dispatch(ADD_TO_CART({id: 1, name: 'Test', price: 10000}))
        }>
        <Text>Test Redux</Text>
      </TouchableOpacity>
      <Text>Cart item: {cart.items.length}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
