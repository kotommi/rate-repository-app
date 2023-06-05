import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import Card from "./RepositoryList/Card";
import { FlatList, StyleSheet } from "react-native";
import { View } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";
import theme from "../theme";
import { format } from "date-fns";
import { ItemSeparator } from "./RepositoryList";

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        padding: 5,
        flexDirection: "row",
        flexGrow: 0,
    },
    textContainer: {
        flexDirection: "column",
        padding: 5
    },
    scoreContainer: {
        padding: 3,
    },
    circleText: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: theme.colors.primary,
        width: 30,
        height: 30,
        borderRadius: 15,
        textAlign: "center"
    }
})

const RepositoryInfo = ({ repository }) => {
    // Repository's information implemented in the previous exercise
    return (
        <>
            <Card item={repository} showGitHub={true}></Card>
            <ItemSeparator></ItemSeparator>
        </>
    )
};

const ReviewItem = ({ review }) => {
    // Single review item
    const dateString = format(new Date(review.createdAt), "dd.MM.yyyy")
    return (
        <View style={styles.cardContainer}>
            <View style={styles.scoreContainer}>
                <Text style={styles.circleText} >{review.rating}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text fontWeight={"bold"}>{review.user.username}</Text>
                <Text>{dateString}</Text>
                <Text numberOfLines={3}>{review.text}</Text>
            </View>
        </View>
    )
};


const Repository = () => {
    const { id } = useParams();
    const repoResponse = useRepository(id);
    const reviewResponse = useReviews(id);

    const repo = repoResponse?.repository?.repository
    const reviews = reviewResponse?.repository?.repository?.reviews?.edges.map(e => e.node);

    if (!repo || !reviews) return null;

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repo} />}
        // ...
        />
    );

};

export default Repository