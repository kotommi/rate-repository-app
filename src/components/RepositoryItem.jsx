import { View, Text } from "react-native";

const RepositoryItem = ({props}) => {
    console.log(props);
    const item = props.item;
    return (
        <View>
            <Text>Full name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem