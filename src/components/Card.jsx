import Text from "./Text";
import theme from "../theme";
import { StyleSheet, View, Image } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "column",
        maxWidth: 400,
        backgroundColor: "white",
        flexGrow: 0,
        padding: 5,
    },
    avatarLogo: {
        width: 50,
        height: 50,
    },
    languageBadge: {
        backgroundColor: theme.colors.primary,
        borderRadius: 2,
    },
    avatarContainer: {
        flexDirection: "row",
    },
    nameContainer: {
        flexDirection: "column",
        flexGrow: 0,
        alignItems: "flex-start"
    },
    headerContainer: {
        flexDirection: "row",
        flexGrow: 0,
    },
    infoContainer: {
        flexGrow: 0,
    },
    bodyContainer: {
        flexDirection: "row",
        flexGrow: 0,
        gap: 10,
        justifyContent: "space-between"
    },
})

const CardHeader = ({ item }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatarLogo} source={{
                    uri: item.ownerAvatarUrl,
                }}>
                </Image>
            </View>
            <View style={styles.nameContainer}>
                <Text fontWeight={"bold"}>{item.fullName}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.languageBadge} color={"textWhite"}>{item.language}</Text>
            </View>
        </View>
    )
}

const CardBody = ({ item }) => {
    return (
        <View style={styles.infoContainer}>
            <View style={styles.bodyContainer}>
                <Text fontWeight={"bold"}> {item.stargazersCount > 1000 ? `${Number(item.stargazersCount / 1000).toFixed(1)}k` : item.stargazersCount}</Text>
                <Text fontWeight={"bold"}>{item.forksCount > 1000 ? `${Number(item.forksCount / 1000).toFixed(1)}k` : item.forksCount}</Text>
                <Text fontWeight={"bold"}>{item.reviewCount}</Text>
                <Text fontWeight={"bold"}>{item.ratingAverage}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text>Stars</Text>
                <Text>Forks</Text>
                <Text>Reviews</Text>
                <Text>Rating</Text>
            </View>
        </View>
    );
};

const Card = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <CardHeader item={item}></CardHeader>
            <CardBody item={item}></CardBody>
        </View>
    );
};

export default Card;