import React, {FC} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {images} from '../assets';
import {ADD_TO_CART} from '../redux/cartReducer';
import {useSelector} from '../redux/common';
import {useNavigation} from '@react-navigation/native';
import {APP_SCREEN} from '../navigation/ScreenTypes';
import {COLORS, categories, data} from '../constant';

interface HomeProps {}
export interface Product {
  id: number;
  name: string;
  price: number;
  like: boolean;
  img: any;
}

export const Home: FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [categoryIndex, setCategoryIndex] = React.useState<number>(0);
  const cart = useSelector(state => state.cart);
  const addToCart = (item: Product) => {
    dispatch(ADD_TO_CART(item));
  };

  const renderItem = ({item}: {item: Product}) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.base}>
          <View
            style={[
              styles.likeView,
              {
                backgroundColor: item.like ? COLORS.red1 : COLORS.gray1,
              },
            ]}>
            <Image
              source={item.like ? images.heartRed : images.heartBlack}
              style={styles.likeImg}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.productContainer}>
          <Image source={item.img} style={styles.productImg} />
        </View>

        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productInfo}>
          <Text style={styles.productPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.addProductButton}
            onPress={() => addToCart(item)}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.row}>
        <Text style={styles.title}>Welcome to</Text>
        <TouchableOpacity onPress={() => navigation.navigate(APP_SCREEN.CART)}>
          <Image source={images.cart} style={styles.cartImg} />
          {cart.items.length > 0 && (
            <View style={styles.dotCart}>
              <Text style={styles.count}>
                {cart.items.length > 99 ? '99+' : cart.items.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.shopName}>DESI SHOP</Text>
      {/* Search */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Image source={images.search} style={styles.searchImg} />
          <TextInput placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.sortButton}>
          <Image source={images.sort} style={styles.sortImg} />
        </TouchableOpacity>
      </View>
      {/* menu */}
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* list */}
      <FlatList
        columnWrapperStyle={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
const widthItem = Dimensions.get('window').width / 2 - 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },
  base: {alignItems: 'flex-end'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartImg: {height: 30, width: 30},
  sortImg: {height: 25, width: 25},
  searchImg: {height: 25, width: 25, marginRight: 10},
  dotCart: {
    position: 'absolute',
    height: 20,
    width: 20,
    backgroundColor: COLORS.red,
    borderRadius: 9999,
    left: 20,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: COLORS.white,
    fontSize: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.green,
    marginTop: 10,
    marginBottom: 18,
  },
  sortButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    borderRadius: 8,
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 45,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  list: {justifyContent: 'space-between'},
  listContainer: {
    marginTop: 10,
    paddingBottom: 50,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.gray2,
    width: widthItem,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  likeView: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeImg: {height: 18, width: 18},
  productContainer: {
    height: 100,
    alignItems: 'center',
  },
  productImg: {flex: 1, resizeMode: 'contain'},
  productName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    color: COLORS.black,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  productPrice: {fontSize: 18, fontWeight: 'bold', color: COLORS.black},
  addProductButton: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.green,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {fontSize: 20, color: COLORS.white, fontWeight: 'bold'},
});
