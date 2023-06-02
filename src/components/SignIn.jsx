import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

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
    signButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
})

export const SignInContainer = ({ onSubmit }) => {
    const validationSchema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    });

    const initialValues = {
        username: "",
        password: "",
    };

    const SignInForm = ({ onSubmit }) => {
        return (
            <View style={styles.container}>
                <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
                <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}></FormikTextInput>
                <Pressable onPress={onSubmit} style={styles.signButton}>
                    <Text color={"textWhite"}>Sign in</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}></SignInForm>}
        </Formik>
    )
}

const SignIn = () => {

    const [signInFunc] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const data = await signInFunc({ username, password });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />
};

export default SignIn;