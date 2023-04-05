import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { AuthContext } from "../auth";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const xScreen = Dimensions.get("window").width;
const yScreen = Dimensions.get("window").height;

export default function Profile() {
  const { setAccessToken, accessToken } = useContext(AuthContext);
  const navigation = useNavigation()
  return (
    <ScrollView style={{ paddingBottom: 40, backgroundColor: "white" }}>
      <ScrollView style={styles.container}>
        <View style={styles.marginContainer}>
          <View style={{ alignItems: "center", flex: 1, marginTop: 15 }}>
            <Image
              style={{
                height: yScreen / 2.8,
                width: xScreen - 40,
                borderRadius: 30,
              }}
              source={{
                uri: "https://i.pinimg.com/564x/cd/80/4b/cd804b46abaad65369e85b527307af4d.jpg",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
              Zio Kandakha
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Ionicons name={"at-outline"} size={25} />
              <Text style={{ fontSize: 15, fontWeight: "400" }}>
                maximumpride99
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#e3e7fa",
              padding: 8,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Ionicons
              name={"location-outline"}
              size={30}
              style={{ marginRight: 20 }}
            />
            <Text
              style={{ fontSize: 15, fontWeight: "400", alignSelf: "center" }}
            >
              Jakarta Selatan | Pondok Indah
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#e3e7fa",
              padding: 8,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <Ionicons
              name={"call-outline"}
              size={30}
              style={{ marginRight: 20 }}
            />
            <Text
              style={{ fontSize: 15, fontWeight: "400", alignSelf: "center" }}
            >
              +62 8218 8778 899
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setAccessToken("");
              AsyncStorage.removeItem("accessToken");
              navigation.navigate("login")
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "#e3e7fa",
                padding: 8,
                borderRadius: 10,
                elevation: 5,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "400", textAlign: "center" }}
              >
                Logout
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ bottom: 0, height: yScreen / 5, width: xScreen - 40 }}>
            {/* <MapView style={{ flex: 1 }} initialRegion={{ latitude: -6.1754, longitude: 106.8272, latitudeDelta: 0.05, longitudeDelta: 0.05 }}>
              <Marker coordinate={{ latitude: -6.1754, longitude: 106.8272 }} />
            </MapView> */}
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: yScreen,
  },
  marginContainer: {
    marginHorizontal: 20,
    gap: 20,
  },
});
