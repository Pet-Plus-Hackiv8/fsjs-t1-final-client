import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import Services from "../component/HomeComponent/Services";
import Event from "../component/HomeComponent/Event";
import GoodDeals from "../component/HomeComponent/GoodDeals";
import { useNavigation } from "@react-navigation/native";

const yScreen = Dimensions.get("window").height;

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topHome}>
          <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Profile")}>
            <Image style={styles.profileImage} source={{ uri: "https://media.giphy.com/media/ZE6Aa9S2ViLVhqNqL2/giphy.gif" }} />
            <Text style={styles.profileName}>Zio Kandakha </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("login")}>
            {/* <Image style={styles.profileImage} source={{ uri: "https://media.giphy.com/media/ZE6Aa9S2ViLVhqNqL2/giphy.gif" }} /> */}
            <Text style={styles.profileName}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileLocation} onPress={() => navigation.navigate("Chat")}>
            <Text style={styles.profileName}></Text>
            <Ionicons name={"chatbox-ellipses-outline"} size={25} style={{ elevation: 5, shadowColor: "#000", marginRight: 10 }} />
          </TouchableOpacity>
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
