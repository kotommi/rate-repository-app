import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import SearchBar from './SearchBar';
import { useDebounce } from "use-debounce";
import React from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  headerContainer: {
    flexDirection: "column",
    flexGrow: 1,
  },
  pickerContainer: {
    margin: 3,
    padding: 3,
  }

});


export const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const props = this.props;
    const { initialOrder, setOrder, setSearchParam, searchText } = props;

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


  render() {
    const repoNodes = this.props.repositories ? this.props.repositories.edges.map(e => e.node) : [];
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={repoNodes}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={.5}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(item) => {
          return (
            <RepositoryItem item={item} />
          )
        }}
      />
    );
  }
}

const RepositoryList = () => {

  const [order, setOrder] = useState("latest");
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 500);

  const { repositories, fetchMore } = useRepositories(order, debouncedText);

  const onEndReach = () => fetchMore();


  return <RepositoryListContainer repositories={repositories} initialOrder={order} setOrder={setOrder} searchText={text} setSearchParam={setText} onEndReach={onEndReach} />

};



export default RepositoryList;