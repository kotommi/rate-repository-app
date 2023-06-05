import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


export const ItemSeparator = () => <View style={styles.separator} />;



const OrderPicker = ({initialOrder, setOrder}) => {
  return (
    <View>
      <Picker
        selectedValue={initialOrder}
        // eslint-disable-next-line no-unused-vars
        onValueChange={(itemValue, _itemIndex) =>
          setOrder(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  )
}

export const RepositoryListContainer = ({ repositories, initialOrder, setOrder }) => {
  const repoNodes = repositories ? repositories.edges.map(e => e.node) : [];

  return (
    <FlatList
      ListHeaderComponent={() => <OrderPicker setOrder={setOrder} initialOrder={initialOrder}/>}
      data={repoNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => {
        return (
          <RepositoryItem item={item} />
        )
      }}
    />
  );
}

const RepositoryList = () => {

  const [order, setOrder] = useState("latest");
  const { repositories } = useRepositories(order);


  return <RepositoryListContainer repositories={repositories} initialOrder={order} setOrder={setOrder}/>

};



export default RepositoryList;