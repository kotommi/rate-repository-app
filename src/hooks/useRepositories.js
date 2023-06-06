import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order = "latest", searchKeyword = "") => {

    const args = {
        "latest": {
            orderBy: "CREATED_AT",
            orderDirection: "DESC",
        },
        "oldest": {
            orderBy: "CREATED_AT",
            orderDirection: "ASC",
        },
        "highest": {
            orderBy: "RATING_AVERAGE",
            orderDirection: "DESC",
        },
        "lowest": {
            orderBy: "RATING_AVERAGE",
            orderDirection: "ASC",
        }
    };

    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            ...args[order],
            searchKeyword,
            first: 8,
        }
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) return;

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...args[order,
                searchKeyword],
                first: 8,
            }
        })
    }

    return { repositories: data ? data.repositories : undefined, fetchMore: handleFetchMore, loading, ...result };
};

export default useRepositories;