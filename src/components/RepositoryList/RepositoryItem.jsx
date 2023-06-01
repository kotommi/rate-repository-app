import useRepository from "../../hooks/useRepository";
import Card from "./Card";

const RepositoryItem = ({ item, showGitHub }) => {
    const i = item.item;
    const a = useRepository(i.id);
    console.log(a);
    return (
        <Card item={i} showGitHub={showGitHub}></Card>
    );
};

export default RepositoryItem