import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories, refetch } = useRepositories();
  const repoNodes = repositories ? repositories.edges.map(e => e.node) : [];
  if (!repositories || repositories.length === 0) refetch();
  return (
    <FlatList
      data={repoNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => {
        return (
          <RepositoryItem props={item} />
        )
      }}
    />
  );
};

export default RepositoryList;