import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
interface CartProps {}
export const Cart: FC<CartProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart Screen</Text>
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
