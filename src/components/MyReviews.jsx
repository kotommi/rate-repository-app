import { FlatList } from "react-native";
import { ReviewItem } from "./Repository";
import { ItemSeparator } from "./RepositoryList";
import useUserReviews from "../hooks/useUserReviews";

const MyReviews = () => {
    const { reviews } = useUserReviews();
    console.log(reviews);

    return (
        <>
            <FlatList
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={({ id }) => id}
            />
        </>
    )
};
export default MyReviews;