import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        const credentials = { username, password };
        console.log(credentials);
        mutate({ variables: { credentials } });
    };

    return [signIn, result];
};

export default useSignIn;