import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        border: "solid",
        flexDirection: "row",
        gap: 10,
    },
});

const onPress = () => {
    console.log("pressed");
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab title={"Repositories"} linkTo={"/"} onPress={onPress}></AppBarTab>
            <AppBarTab title={"Sign In"} linkTo={"/signin"} />
        </View>
    );
};

export default AppBar;