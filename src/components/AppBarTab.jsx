import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    }
})

const AppBarTab = ({ title, linkTo, onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Link to={linkTo}>
                    <Text color={"textWhite"}>{title}</Text>
                </Link>
            </Pressable>
        </View>
    );
}

export default AppBarTab;