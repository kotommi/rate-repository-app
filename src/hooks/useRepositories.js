import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const { data, error, loading } = useQuery(GET_REPOSITORIES);

    const fetchRepositories = async () => {
        if (loading) {
            return;
        }
        setRepositories(data.repositories);
        if (error) console.log(error);
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;