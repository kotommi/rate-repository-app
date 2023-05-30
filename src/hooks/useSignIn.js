import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const navigate =useNavigate();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        const credentials = { username, password };
        
        const { data } = await mutate({ variables: { credentials } });
        authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        console.log(await authStorage.getAccessToken());
        navigate("/");
        return data;
    };

    return [signIn, result];
};

export default useSignIn;