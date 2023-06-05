import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import SearchBar from './SearchBar';
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  headerContainer: {
    flexDirection: "row",
    flexGrow: 1,
  },
  pickerContainer: {
    margin: 3,
    padding: 3,
  }

});


export const ItemSeparator = () => <View style={styles.separator} />;



const RepoListHeader = ({ initialOrder, setOrder, setSearchParam, searchText }) => {


  return (
    <View style={styles.headerContainer}>
      <Picker
        style={styles.pickerContainer}
        selectedValue={initialOrder}
        // eslint-disable-next-line no-unused-vars
        onValueChange={(itemValue, _itemIndex) =>
          setOrder(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
      <SearchBar setSearchParam={setSearchParam} searchText={searchText} />
    </View>
  )
}

export const RepositoryListContainer = ({ repositories, initialOrder, setOrder, setSearchParam, searchText }) => {
  const repoNodes = repositories ? repositories.edges.map(e => e.node) : [];

  return (
    <FlatList
      ListHeaderComponent={() => <RepoListHeader setOrder={setOrder} initialOrder={initialOrder} searchText={searchText} setSearchParam={setSearchParam} />}
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
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 500);

  const { repositories } = useRepositories(order, debouncedText);


  return <RepositoryListContainer repositories={repositories} initialOrder={order} setOrder={setOrder} searchText={text} setSearchParam={setText} />

};



export default RepositoryList;