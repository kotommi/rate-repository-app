import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
    const { loading, error, data, fetchMore, ...result } = useQuery(GET_REVIEWS, {
        fetchPolicy: "cache-and-network",
        variables: {
            id,
            first: 4,
        }
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) return;
        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                first: 4,
                id,
            }
        });
    }

    return { repository: data ? data : undefined, loading, error, fetchMore: handleFetchMore, ...result };
}

export default useReviews;