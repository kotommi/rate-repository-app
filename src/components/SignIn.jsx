import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        maxWidth: 400,
        flexDirection: 'column',
        textAlign: "center",
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        gap: 10
    },
    signButton : {
        backgroundColor: theme.colors.primary,
        borderRadius: 5
    }
})

const SignIn = () => {

    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const SignInForm = ({ onSubmit }) => {
        return (
            <View style={styles.container}>
                <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
                <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}></FormikTextInput>
                <Pressable onPress={onSubmit} style={styles.signButton}>
                    <Text>Sign in</Text>
                </Pressable>
            </View>
        );
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}></SignInForm>}
        </Formik>
    )
};

export default SignIn;