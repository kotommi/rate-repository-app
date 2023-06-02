import { useMutation } from "@apollo/client"
import { SIGN_UP } from "../graphql/mutations"

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP);

    const createUser = async ({ password, username }) => {
        const data = await mutate({ variables: { user: { password, username } } });
        console.log(data);
        return data;
    }
    return [createUser, result];
};

export default useSignUp;