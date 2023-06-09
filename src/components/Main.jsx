import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";
import Repository from "./Repository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";
import MyReviews from "./MyReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },

});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/repository/:id" element={<Repository showGitHub={true} />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviews />} />
      </Routes>
    </View>
  );
};

export default Main;