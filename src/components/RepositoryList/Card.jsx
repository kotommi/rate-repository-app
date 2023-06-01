import Text from "../Text";
import theme from "../../theme";
import { StyleSheet, View, Image, Pressable, Linking } from "react-native";

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
        borderRadius: 3,
        padding: 3,
        paddingHorizontal: 6,
    },
    githubBadge: {
        backgroundColor: theme.colors.primary,
        borderRadius: 3,
        padding: 3,
        paddingHorizontal: 6,
        textAlign: "center"
    },
    avatarContainer: {
        flexDirection: "row",
        padding: 3
    },
    nameContainer: {
        flexDirection: "column",
        flexGrow: 0,
        alignItems: "flex-start",
    },
    headerContainer: {
        flexDirection: "row",
        flexGrow: 0,
    },
    infoContainer: {
        flexGrow: 0,
        flexDirection: "row"
    },
    bodyContainer: {
        flexDirection: "row",
        flexGrow: 0,
        gap: 10,
        justifyContent: "space-between"
    },
    countContainer: {
        paddingHorizontal: 15,
        flexGrow: 0,
        justifyContent: "center",
        alignItems: "center"
    }
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

const LabeledCount = ({ count, label }) => {
    return (
        <View style={styles.countContainer}>
            <Text fontWeight="bold">{countToString(count)}</Text>
            <Text color="textSecondary">{label}</Text>
        </View>
    );
};

const countToString = num => {
    return num > 1000 ? `${Number(num / 1000).toFixed(1)}k` : num
}

const CardBody = ({ item }) => {
    return (
        <View style={styles.infoContainer}>
            <LabeledCount count={item.stargazersCount} label={"Stars"} />
            <LabeledCount count={item.forksCount} label={"Forks"} />
            <LabeledCount count={item.reviewCount} label={"Reviews"} />
            <LabeledCount count={item.ratingAverage} label={"Rating"} />
        </View>
    );
};

const CardFooter = ({ item }) => {
    const onPress = () => {
        console.log("hubbed", item.url)
        Linking.openURL(item.url);
    }

    return (
        <View>
            <Pressable onPress={onPress}>
                <Text style={styles.githubBadge} color="textWhite">Github</Text>
            </Pressable>
        </View>
    )
}

const Card = ({ item, showGitHub }) => {
    return (
        <View style={styles.cardContainer} testID="repositoryItem">
            <CardHeader item={item}></CardHeader>
            <CardBody item={item}></CardBody>
            {showGitHub ? <CardFooter item={item} /> : null}
        </View>
    );
};

export default Card;