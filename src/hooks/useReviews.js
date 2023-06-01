import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
    const { loading, error, data } = useQuery(GET_REVIEWS, {
        fetchPolicy: "cache-and-network",
        variables: {
            id
        }
    })
    return { repository: data ? data : undefined, loading, error };
}

export default useReviews;