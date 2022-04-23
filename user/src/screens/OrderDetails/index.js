import { View, Text, Image, FlatList } from 'react-native'

import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem';

import styles from './styles';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

        <Text style={styles.menuTitle}>Your Orders</Text>
      </View>
    </View>
  )
}

const OrderDetails = () => {
  return (
    <FlatList ListHeaderComponent={OrderDetailsHeader} data={restaurants[0].dishes} renderItem={({ item }) => <BasketDishItem basketDish={item} />} />
  )
}

export default OrderDetails;