import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

const yScreen = Dimensions.get("window").height;

export default function Card() {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#4B8CA1", marginLeft: 10 }}>Pet Clinic</Text>
      <ScrollView style={styles.eventMainView} showsHorizontalScrollIndicator={false}>
        <View style={{ marginVertical: 5 }}>
          <View style={{ maxHeight: 200, display: "flex", flexDirection: "row" }}>
            <View style={{ backgroundColor: "#e3e7fa", borderRadius: 20, minHeight: 160, minWidth: 160, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 145, height: 145, resizeMode: "cover", borderRadius: 20 }} source={{ uri: "https://i.pinimg.com/564x/82/cc/0f/82cc0f2dae02b896a895ffe2533e2c38.jpg" }} />
            </View>
            <View style={{ alignSelf: "center", justifyContent: "center", backgroundColor: "#e3e7fa", height: 130, width: 200, borderBottomEndRadius: 20, borderTopEndRadius: 20 }}>
              <Text style={styles.titlePets}>Randy</Text>
              <Text style={styles.titlePetsDesc}>British Short Hair</Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <View style={{ maxHeight: 200, display: "flex", flexDirection: "row" }}>
            <View style={{ backgroundColor: "#e3e7fa", borderRadius: 20, minHeight: 160, minWidth: 160, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 145, height: 145, resizeMode: "cover", borderRadius: 20 }} source={{ uri: "https://i.pinimg.com/564x/3a/db/7e/3adb7eab0da04f7289ff4f469c3c96c3.jpg" }} />
            </View>
            <View style={{ alignSelf: "center", justifyContent: "center", backgroundColor: "#e3e7fa", height: 130, width: 200, borderBottomEndRadius: 20, borderTopEndRadius: 20 }}>
              <Text style={styles.titlePets}>Mail</Text>
              <Text style={styles.titlePetsDesc}>Muggle</Text>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 5 }}>
          <View style={{ maxHeight: 200, display: "flex", flexDirection: "row", elevation: 10 }}>
            <View style={{ backgroundColor: "#e3e7fa", borderRadius: 20, minHeight: 160, minWidth: 160, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 145, height: 145, resizeMode: "cover", borderRadius: 20 }} source={{ uri: "https://i.pinimg.com/564x/4a/bb/8d/4abb8d32d097e7fd2e1643039e06a60a.jpg" }} />
            </View>
            <View style={{ alignSelf: "center", justifyContent: "center", backgroundColor: "#e3e7fa", height: 130, width: 200, borderBottomEndRadius: 20, borderTopEndRadius: 20 }}>
              <Text style={styles.titlePets}>Zio</Text>
              <Text style={styles.titlePetsDesc}>Super Paw</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  eventMainView: {
    marginVertical: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    // backgroundColor: "red",
    gap: 23,
  },
  titlePets: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2e5767",
    marginLeft: 10,
    // backgroundColor: "red",
    justifyContent: "center",
  },
  titlePetsDesc: {
    fontSize: 15,
    fontWeight: "400",
    color: "#2e5767",
    marginLeft: 10,
  },
});
