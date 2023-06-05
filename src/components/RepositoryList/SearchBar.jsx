import { StyleSheet, TextInput } from "react-native"

const styles = StyleSheet.create({
    container: {
        margin: 3,
        padding: 3,
    }
})

const SearchBar = ({ searchText, setSearchParam }) => {

    const onChangeText = (value) => {
        setSearchParam(value);
    }

    return (
        <TextInput style={styles.container} value={searchText} onChangeText={onChangeText} placeholder="Search" />
    )
}

export default SearchBar;