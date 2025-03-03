import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import { useAuth } from "@/providers/AuthProvider";

export default function TabLayout() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
