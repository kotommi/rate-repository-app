import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);

    const authStorage = useAuthStorage();

    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
        const { data } = await mutate({ variables: { credentials } });
        authStorage.setAccessToken(data.authenticate.accessToken);
        console.log(await authStorage.getAccessToken());
        return data;
    };

    return [signIn, result];
};

export default useSignIn;