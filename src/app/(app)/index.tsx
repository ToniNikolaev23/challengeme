import { supabase } from "@/src/lib/supabase";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const HomePage = () => {
  const logout = async () => {
    supabase.auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
});
