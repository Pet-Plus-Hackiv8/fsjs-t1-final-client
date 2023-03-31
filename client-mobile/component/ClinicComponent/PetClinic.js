import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function PetClinic() {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#4B8CA1", marginLeft: 10 }}>Pet Clinic</Text>
      <ScrollView horizontal={true} style={styles.eventMainView} showsHorizontalScrollIndicator={false}>
        <View>
          <View style={{ maxHeight: 200 }}>
            <Image style={{ width: 260, height: 200, resizeMode: "cover", marginHorizontal: 5 }} source={{ uri: "https://i.pinimg.com/736x/9d/6c/53/9d6c53ea68b751ff3413ab0ac0b6b0a6.jpg" }} />
            <Text style={styles.titleClinic}>Athena Pet Clinic</Text>
            <Text style={styles.titleClinicDesc}>Jl.Metro Pondok Indah | Kebayoran baru</Text>
          </View>
        </View>
        <View>
          <View style={{ maxHeight: 200 }}>
            <Image style={{ width: 260, height: 200, resizeMode: "cover", marginHorizontal: 5 }} source={{ uri: "https://i.pinimg.com/564x/12/0a/57/120a57c10d3d79beff84cf911f995fe7.jpg" }} />
            <Text style={styles.titleClinic}>Metro Pet</Text>
            <Text style={styles.titleClinicDesc}>Jl.Metro Alam IV | Kebayoran baru</Text>
          </View>
        </View>
        <View>
          <View style={{ maxHeight: 200 }}>
            <Image style={{ width: 260, height: 200, resizeMode: "cover", marginHorizontal: 5 }} source={{ uri: "https://i.pinimg.com/564x/ed/62/74/ed6274151e48269b4ffde0669fefac20.jpg" }} />
            <Text style={styles.titleClinic}>Alam Paw Clinic</Text>
            <Text style={styles.titleClinicDesc}>Jl.Alam Segar I | Kebayoran baru</Text>
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
    // backgroundColor: "red",
    height: 240,
    gap: 23,
  },
  titleClinic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e5767",
    marginLeft: 10,
  },
  titleClinicDesc: {
    fontSize: 10,
    fontWeight: "500",
    color: "#2e5767",
    marginLeft: 10,
  },
});
