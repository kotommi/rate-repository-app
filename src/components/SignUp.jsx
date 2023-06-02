import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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

export const SignUpContainer = ({ onSubmit }) => {
    const initialValues = {
        username: "",
        password: "",
        passwordConfirm: "",
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required("Username is required").min(5, "Username must be at least 5 characters").max(30, "Username can't be longer than 30 characters"),
        password: yup.string().required("Password is required").min(5, "Password must be at least 5 characters").max(50, "Password can't be longer than 50 characters"),
        passwordConfirm: yup.string()
            .oneOf([yup.ref('password'), null], "Passwords don't match")
            .required('Password confirm is required')
    });

    const SignUpForm = ({ onSubmit }) => {
        return (
            <View style={styles.container}>
                <FormikTextInput name="username" placeholder="Username"></FormikTextInput>
                <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}></FormikTextInput>
                <FormikTextInput name="passwordConfirm" placeholder="Confirm password" secureTextEntry={true}></FormikTextInput>
                <Pressable onPress={onSubmit} style={styles.signButton}>
                    <Text color={"textWhite"}>Sign up</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}></SignUpForm>}
        </Formik>
    )


};

const SignUp = () => {
    const [createUser] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        console.log(values);
        const { username, password } = values;
        try {
            await createUser({ username, password });
            await signIn({username, password});
            
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <SignUpContainer onSubmit={onSubmit} />
        </>
    );
};

export default SignUp;