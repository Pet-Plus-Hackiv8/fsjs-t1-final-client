import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import MarqueeText from "react-native-text-ticker";
import GoodDeals from "../component/ClinicComponent/GoodDeals";
import Card from "../component/PetsComponent/Card";
import Species from "../component/PetsComponent/Species";

const yScreen = Dimensions.get("window").height;
const xScreen = Dimensions.get("window").width;

export default function Pets() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topPet}>
          <View style={styles.topPetsTitle}>
            <Image style={{ width: 70, height: 50 }} source={{ uri: "https://i.ibb.co/3TCj30Y/ezgif-com-gif-maker-6.gif" }} />
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#2e5767" }}>My Pets</Text>
          </View>
        </View>
      </View>

      {/* Top Home End ================================================================================================================= */}

      <ScrollView style={styles.maxScroll}>
        <Species />
        <Card />
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: yScreen,
  },
  topPetsTitle: {
    left: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingBottom: 20,
    // backgroundColor: "red",s
    width: 355,
  },
  topPet: {
    top: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maxScroll: {
    marginBottom: 110,
  },
});
