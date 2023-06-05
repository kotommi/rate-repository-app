import { FlatList, Pressable } from "react-native";
import { ReviewItem } from "./Repository";
import { ItemSeparator } from "./RepositoryList";
import useUserReviews from "../hooks/useUserReviews";
import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "white",
        margin: 3,
        padding: 3,
    },
    buttonContainer: {
        margin: 3,
        padding: 3,
        flexDirection: "row",
        flexGrow: 1
    },
    repoButtonStyle: {
        backgroundColor: theme.colors.primary,
        padding: 3,
        margin: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.colors.primary
    },
    deleteButtonStyle: {
        backgroundColor: theme.colors.errorRed,
        padding: 3,
        margin: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: theme.colors.errorRed
    }
})

const ReviewCard = ({ review }) => {
    const navigate = useNavigate();

    return (
        <>
            <View style={styles.container}>
                <ReviewItem review={review} />
                <View style={styles.buttonContainer} >
                    <Pressable onPress={() => navigate(`/repository/${review.repository.id}`)}>
                        <Text color="textWhite" style={styles.repoButtonStyle}>View Repository</Text>
                    </Pressable>
                    <Pressable >
                        <Text color="textWhite" style={styles.deleteButtonStyle}>Delete review</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const MyReviews = () => {
    const { reviews } = useUserReviews();

    return (
        <>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewCard review={item} />}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={({ id }) => id}
            />
        </>
    )
};
export default MyReviews;