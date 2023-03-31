import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import MarqueeText from "react-native-text-ticker";
import GoodDeals from "../component/ClinicComponent/GoodDeals";
import PetClinic from "../component/ClinicComponent/PetClinic";

const yScreen = Dimensions.get("window").height;
const xScreen = Dimensions.get("window").width;

export default function Clinic() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topClinic}>
          <View style={styles.topSearch}>
            <Ionicons name="search" size={24} color="#BDBDBD" />
            <TextInput style={styles.searchBox} placeholder="Search" />
          </View>
        </View>
      </View>

      {/* Top Home End ================================================================================================================= */}

      <ScrollView style={styles.maxScroll}>
        <PetClinic />
        {/* <View>
          <Image style={{ width: 150, height: 90, alignSelf: "center", borderRadius: 500, marginBottom: 10 }} source={{ uri: "https://i.ibb.co/3TCj30Y/ezgif-com-gif-maker-6.gif" }} />
        </View> */}
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
  topSearch: {
    left: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingBottom: 20,
    // backgroundColor: "red",
  },
  searchBox: {
    height: 40,
    width: 310,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 20,
  },
  topClinic: {
    top: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //  Main Home Content Style ============================================================================================================
});
