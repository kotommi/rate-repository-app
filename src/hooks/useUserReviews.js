import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";


const useUserReviews = () => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER, {
        fetchPolicy: "cache-and-network",
        variables: {
            includeReviews: true
        }
    })
    return { reviews: data ? data.me.reviews.edges.map(e => e.node) : undefined, loading, error }
}

export default useUserReviews;