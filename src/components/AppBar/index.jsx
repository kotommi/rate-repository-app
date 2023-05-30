import { View, StyleSheet, ScrollView } from 'react-native';
import Text from '../Text';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME_SIGNED } from '../../graphql/queries';
import { useAuthStorage } from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        border: "solid",
        flexDirection: "row",
    },
    tabStyle: {
        margin: 10
    }
});


const AppBar = () => {
    const { loading, error, data } = useQuery(ME_SIGNED);
    console.log(data);
    const userName = data?.me?.username;
    console.log(userName);


    const ac = useApolloClient();
    const store = useAuthStorage();

    const handleSignOut = async () => {
        console.log("asd");
        await store.removeAccessToken();
        ac.resetStore();
        console.log("removed auth");
    }



    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollView}>
                <AppBarTab title={"Repositories"} linkTo={"/"} ></AppBarTab>
                {!userName ?
                    <AppBarTab title={"Sign In"} linkTo={"/signin"} style={styles.tabStyle} /> :
                    <AppBarTab title={"Sign out"} onPress={handleSignOut} style={styles.tabStyle} />
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;