import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    avatarLogo: {
        width: 50,
        height: 50,
    },
    avatarContainer: {
        flexDirection: "row",
    },
    container: {
        flexDirection: "row",
        flexGrow: 1,
    },
    infoContainer: {
        flexGrow: 1,
    },
    bodyContainer: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
    },
})

const CardHeader = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatarLogo} source={{
                    uri: item.ownerAvatarUrl,
                }}>
                </Image>
            </View>
            <View>
                <Text fontWeight={"bold"}>{item.fullName}</Text>
                <Text>{item.description}</Text>
                <Text>{item.language}</Text>
            </View>
        </View>
    )
}

const CardBody = ({ item }) => {
    return (
        <View style={styles.infoContainer}>
            <View style={styles.bodyContainer}>
                <Text>Stars</Text>
                <Text>Forks</Text>
                <Text>Reviews</Text>
                <Text>Rating</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text> {item.stargazersCount > 1000 ? `${Number(item.stargazersCount / 1000).toFixed(1)}k` : item.stargazersCount}</Text>
                <Text>{item.forksCount > 1000 ? `${Number(item.forksCount / 1000).toFixed(1)}k` : item.forksCount}</Text>
                <Text>{item.reviewCount}</Text>
                <Text>{item.ratingAverage}</Text>
            </View>
        </View>
    );
};

const RepositoryItem = ({ props }) => {
    const item = props.item;
    return (
        <View>
            <CardHeader item={item}></CardHeader>
            <CardBody item={item}></CardBody>
        </View>
    );
};

export default RepositoryItem