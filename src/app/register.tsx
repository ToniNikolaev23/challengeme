import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "../lib/supabase";

const RegisterPage = () => {
  const [email, setEmail] = useState("toni.n.stoyanov@icloud.com");
  const [password, setPassword] = useState("toni123456");
  const [loading, setLoading] = useState(false);
  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Error:", error.message);
    }

    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TouchableOpacity onPress={signUpWithEmail} disabled={loading}>
        <Text style={styles.text}>Sign up with email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
