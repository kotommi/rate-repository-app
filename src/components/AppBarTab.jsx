import { Pressable } from "react-native";
import Text from "./Text";


const AppBarTab = ({ title, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Text color={"textWhite"}>{title}</Text>
        </Pressable>
    );
}

export default AppBarTab;