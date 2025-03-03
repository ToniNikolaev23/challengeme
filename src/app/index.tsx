import { useAuth } from "@/providers/AuthProvider";
import { Link, Redirect } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const WelcomePage = () => {
  const { session, loading } = useAuth();
  console.log("SSSS", session);
  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  if (session) {
    return <Redirect href="/(app)" />;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Link href="/(auth)/sign-in" asChild>
        <Text>LOGIN</Text>
      </Link>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
});
