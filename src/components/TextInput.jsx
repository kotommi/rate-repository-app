import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal:15,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5,
    },
    errorStyle: {
        borderTopColor: theme.colors.errorRed,
        borderBottomColor: theme.colors.errorRed,
        borderLeftColor: theme.colors.errorRed,
        borderRightColor: theme.colors.errorRed,
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container, error ? styles.errorStyle : null];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;