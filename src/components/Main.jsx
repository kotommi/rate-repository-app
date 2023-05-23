import {StyleSheet, View} from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: '#e1e4e8'
    },
    
  });

  const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Text>Rate repository application</Text>
            <RepositoryList />
        </View>
    );
  };

  export default Main;