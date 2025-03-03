import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAuth } from "@/providers/AuthProvider";
import { supabase } from "@/src/lib/supabase";

const LoginPage = () => {
  const [email, setEmail] = useState("toni.n.stoyanov@icloud.com");
  const [password, setPassword] = useState("toni123456");
  const [loading, setLoading] = useState(false);

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error:", error.message);
    }

    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <Link href="/sign-up" asChild>
        <Text style={styles.text}>Register</Text>
      </Link>
      <TouchableOpacity onPress={signInWithEmail} disabled={loading}>
        <Text style={styles.text}>Sign in with email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

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
