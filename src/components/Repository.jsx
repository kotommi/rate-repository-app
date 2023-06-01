import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import Card from "./RepositoryList/Card";
import { FlatList } from "react-native";
import { View } from "react-native";
import Text from "./Text";
import { useParams } from "react-router-native";

const RepositoryInfo = ({ repository }) => {
    // Repository's information implemented in the previous exercise
    return <Card item={repository} showGitHub={true}></Card>
};

const ReviewItem = ({ review }) => {
    // Single review item
    return (
        <View>
            <Text>{review.user.username}</Text>
        </View>
    )
};


const Repository = () => {
    const { id } = useParams();
    const repoResponse = useRepository(id);
    const reviewResponse = useReviews(id);

    const repo = repoResponse?.repository?.repository
    const reviews = reviewResponse?.repository?.repository?.reviews?.edges.map(e => e.node);

    console.log(reviews);
    console.log(repo);
    if (!repo || !reviews) return null;


    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repo} />}
        // ...
        />
    );

};

export default Repository