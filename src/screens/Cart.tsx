import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../assets';
import {useSelector} from '../redux/common';
import {COLORS} from '../constant';
import {useDispatch} from 'react-redux';
import {incrementQuantity, decrementQuantity, Item} from '../redux/cartReducer';
interface CartProps {}
const calculatorPrice = (arr: Item[]) => {
  let sum = 0;
  arr.map(e => {
    sum = sum + e.price * e.quantity;
  });
  return sum.toFixed(2);
};
export const Cart: FC<CartProps> = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const _incrementQuantity = (item: any) => {
    dispatch(incrementQuantity(item));
  };
  const _decrementQuantity = (item: any) => {
    dispatch(decrementQuantity(item));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.leftArrow} style={styles.backButton} />
        </TouchableOpacity>

        <Text style={styles.cart}>CART</Text>
        {cart.items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={item.img} style={styles.productImg} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>

              <View style={styles.botInfo}>
                <Text style={styles.quantity}>Quantity</Text>
                <View style={styles.base}>
                  <TouchableOpacity onPress={() => _decrementQuantity(item)}>
                    <Image source={images.minus} style={styles.minusImg} />
                  </TouchableOpacity>
                  <Text style={styles.count}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => _incrementQuantity(item)}>
                    <Image source={images.plus} style={styles.plusImg} />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.total}>
                Total: ${item.quantity * item.price}
              </Text>
            </View>
          </View>
        ))}
        {cart.items.length > 0 ? (
          <View style={styles.billing}>
            <Text style={styles.bill}>Billing:</Text>
            <Text style={styles.totalBill}>${calculatorPrice(cart.items)}</Text>
          </View>
        ) : (
          <Text style={styles.emptyProduct}>No products in cart</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  backButton: {height: 30, width: 30, marginLeft: 10},
  cart: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.black,
    letterSpacing: 8,
    marginBottom: 20,
  },
  price: {
    color: COLORS.gray3,
    marginVertical: 5,
  },
  item: {
    flexDirection: 'row',
    minHeight: 150,
    width: '100%',
  },
  productImg: {height: 150, width: 150, resizeMode: 'contain'},
  info: {flex: 1, padding: 20},
  name: {fontSize: 18, fontWeight: '500', color: COLORS.black},
  botInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantity: {fontSize: 16, fontWeight: '500', color: COLORS.black},
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  minusImg: {height: 20, width: 20},
  count: {fontSize: 21, marginHorizontal: 10, color: COLORS.black},
  plusImg: {height: 16, width: 18},
  total: {fontSize: 16, fontWeight: '500', color: COLORS.black},
  bill: {marginLeft: 20, fontSize: 20, fontWeight: '700', color: COLORS.black},
  totalBill: {
    marginLeft: 130,
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  billing: {flexDirection: 'row', marginTop: 20, marginBottom: 50},
  emptyProduct: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
});
