import Card from "./Card";

const RepositoryItem = ({ props }) => {
    const item = props.item;
    return (
        <Card item={item}></Card>
    );
};

export default RepositoryItem