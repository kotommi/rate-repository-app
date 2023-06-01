import { Pressable } from "react-native";
import Card from "./Card";
import { useNavigate } from "react-router-native";

const RepositoryItem = ({ item }) => {
    const i = item.item;

    const navigate = useNavigate()
    const onPress = () => {
        navigate(`/repository/${i.id}`)
    }
    return (
        <Pressable onPress={onPress}>
            <Card item={i} ></Card>
        </Pressable>
    );
};

export default RepositoryItem