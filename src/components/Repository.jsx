import useRepository from "../hooks/useRepository";
import Card from "./RepositoryList/Card";
import { useParams } from "react-router-native";

const Repository = () => {
    const { id } = useParams();
    const response = useRepository(id);
    const repo = response?.repository
    console.log(repo);

    return repo ? <Card item={repo.repository} showGitHub={true}></Card> : null;
    
};

export default Repository