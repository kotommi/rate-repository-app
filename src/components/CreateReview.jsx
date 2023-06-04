import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useReview from '../hooks/useReview';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
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
        padding: 5,
        margin: 5,
        paddingVertical: 10
    },
    inputContainer: {
        padding: 5,
        margin: 5,
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
                <FormikTextInput style={styles.inputContainer} name="repoOwner" placeholder="Repository owner"></FormikTextInput>
                <FormikTextInput style={styles.inputContainer} name="repoName" placeholder="Repository name"></FormikTextInput>
                <FormikTextInput style={styles.inputContainer} name="rating" placeholder="Numerical rating 0-100"></FormikTextInput>
                <FormikTextInput style={styles.inputContainer} name="review" placeholder="Review content" multiline={true}></FormikTextInput>
                <Pressable onPress={onSubmit} style={styles.signButton}>
                    <Text color={"textWhite"} style={{ textAlign: "center" }}>Submit review</Text>
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

    const [createReview] = useReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { repoOwner, repoName, rating, review } = values;
        try {
            const data = await createReview({ ownerName: repoOwner, repositoryName: repoName, text: review, rating: Number(rating) })
            console.log(data);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    }
    return <CreateReviewContainer onSubmit={onSubmit} />
}

export default CreateReview;