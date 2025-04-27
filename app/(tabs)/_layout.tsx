import React from "react";
import { Tabs } from "expo-router";

const Tabslayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerTitle: "HOME",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#eda1be" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: true,
          headerTitle: "CREATE",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#eda1be" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitle: "PROFİL",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#eda1be" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;