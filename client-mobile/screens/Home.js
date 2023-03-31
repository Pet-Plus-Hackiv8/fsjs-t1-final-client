import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Services from "../component/HomeComponent/Services";
import Event from "../component/HomeComponent/Event";
import GoodDeals from "../component/HomeComponent/GoodDeals";

const yScreen = Dimensions.get("window").height;

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topHome}>
          <View style={styles.profile}>
            <Image style={styles.profileImage} source={{ uri: "https://media.giphy.com/media/ZE6Aa9S2ViLVhqNqL2/giphy.gif" }} />
            <Text style={styles.profileName}>Zio Kandakha </Text>
          </View>
          <View style={styles.profileLocation}>
            <Text style={styles.profileName}>Kebayoran... </Text>
            <Ionicons name={"location-outline"} size={20} style={{ elevation: 5, shadowColor: "#000" }} />
          </View>
        </View>
      </View>

      {/* Top Home End ================================================================================================================= */}

      <ScrollView style={styles.maxScroll}>
        <Services />
        <Event />
        <GoodDeals />
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
  profile: {
    left: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingBottom: 20,
  },
  profileLocation: {
    right: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  topHome: {
    top: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maxScroll: {
    marginBottom: 110,
  },
  //  Main Home Content Style ============================================================================================================
});
