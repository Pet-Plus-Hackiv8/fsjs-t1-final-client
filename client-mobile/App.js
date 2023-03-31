import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Pets from "./screens/Pets";
import Clinic from "./screens/Clinic";

const Tab = createBottomTabNavigator();

export default function App() {
  const navOption = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      size = 30;
      color = focused ? "#00C2FF" : "#4B8CA1";
      let iconName;
      let iconSize = focused ? size + 13 : size;

      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Profile") {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === "Pets") {
        iconName = focused ? "paw" : "paw-outline";
      } else if (route.name === "Clinic") {
        iconName = focused ? "medkit" : "medkit-outline";
      }
      return (
        <View style={{ position: "absolute", paddingBottom: 32 }}>
          <Ionicons name={iconName} size={iconSize} color={color} style={{ elevation: 5, shadowColor: "#000" }} />
        </View>
      );
    },
    tabBarActiveTintColor: "#00C2FF",
    tabBarInactiveTintColor: "#4B8CA1",
    tabBarStyle: styles.tabBarStyle,
    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: "bold",
    },
    headerShown: false,
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={navOption}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Clinic" component={Clinic} />
            <Tab.Screen name="Pets" component={Pets} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBarStyle: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    bottom: 0,
    height: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    elevation: 10,
    shadowColor: "#000",
    // backgroundColor: "red",
  },
});
