import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
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
    signButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    }
})

const CreateReviewContainer = ({ onSubmit }) => {

    const validationSchema = yup.object().shape({
        repoOwner: yup.string().required("Repository owner's name is required"),
        repoName: yup.string().required("Repository's name is required"),
        rating: yup.number().required("Rating number is required").min(0, "Rating can't be negative").max(100, "Max rating is 100"),
        review: yup.string().optional(),
    });

    const initialValues = {
        repoOwner: "",
        repoName: "",
        rating: "",
        review: "",
    };

    const CreateForm = ({ onSubmit }) => {
        return (
            <View style={styles.container}>
                <FormikTextInput name="repoOwner" placeholder="Repository owner"></FormikTextInput>
                <FormikTextInput name="repoName" placeholder="Repository name"></FormikTextInput>
                <FormikTextInput name="rating" placeholder="Numerical rating 0-100"></FormikTextInput>
                <FormikTextInput name="review" placeholder="Review content" multiline="true"></FormikTextInput>
                <Pressable onPress={onSubmit} style={styles.signButton}>
                    <Text color={"textWhite"}>Submit review</Text>
                </Pressable>
            </View>
        );
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <CreateForm onSubmit={handleSubmit}></CreateForm>}
        </Formik>
    )
}

const CreateReview = () => {
    const onSubmit = () => {
        console.log("asd");
    }
    return <CreateReviewContainer onSubmit={onSubmit} />
}

export default CreateReview;