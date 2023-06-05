import { useQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { DELETE_REVIEW } from "../graphql/mutations";


const useUserReviews = () => {
    const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: "cache-and-network",
        variables: {
            includeReviews: true
        }
    })

    const [mutate] = useMutation(DELETE_REVIEW);

    const deleteReview = async (id) => {
        await mutate({ variables: { deleteReviewId: id } });
        refetch();
    }
    const reviews = { reviews: data ? data.me.reviews.edges.map(e => e.node) : undefined, loading, error };
    return [reviews, deleteReview, refetch];
}

export default useUserReviews;