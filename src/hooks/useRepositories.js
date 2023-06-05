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

    const { data, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        variables: {
            ...args[order],
            searchKeyword
        }
    });

    return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;