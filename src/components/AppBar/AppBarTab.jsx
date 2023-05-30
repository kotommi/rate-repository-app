import { Pressable, View, StyleSheet } from "react-native";
import Text from "../Text";
import { Link } from "react-router-native"

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
    }
})

const LinkTab = ({ title, linkTo }) => {
    return (
        <Link to={linkTo}>
            <View style={styles.container}>
                <Text color={"textWhite"}>{title}</Text>

            </View>
        </Link>
    )
}

const PressableTab = ({ title, onPress }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Text color={"textWhite"}>{title}</Text>
            </Pressable>
        </View>
    )
}

const AppBarTab = ({ title, linkTo, onPress }) => {
    console.log(linkTo);
    return linkTo ? <LinkTab title={title} linkTo={linkTo}></LinkTab> : <PressableTab title={title} onPress={onPress}></PressableTab>
}

export default AppBarTab;