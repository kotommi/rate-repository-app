import { Pressable } from "react-native";
import Text from "./Text";
import {Link} from "react-router-native"


const AppBarTab = ({ title, linkTo, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <Link to={linkTo}>
            <Text color={"textWhite"}>{title}</Text>
            </Link>
        </Pressable>
    );
}

export default AppBarTab;