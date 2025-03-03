import { supabase } from "@/src/lib/supabase";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RegisterPage = () => {
  const [email, setEmail] = useState("nikolaev@icloud.com");
  const [password, setPassword] = useState("toni123456");
  const [loading, setLoading] = useState(false);

  const signUpWithEmail = async () => {
    setLoading(true);
    console.log(email, password);
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
