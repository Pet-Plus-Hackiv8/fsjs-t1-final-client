import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function List() {
  const navigation = useNavigation();

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#4B8CA1", marginLeft: 10 }}>Appointments</Text>
      {/* <ScrollView style={styles.eventMainView} showsHorizontalScrollIndicator={false}> */}
      <View style={styles.eventMainView}>
        <View style={{ gap: 20 }}>
          <TouchableOpacity style={{ maxHeight: 200, width: 390, alignItems: "center" }}>
            <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#e3e7fa", padding: 20, justifyContent: "space-between", borderRadius: 20, gap: 40, minWidth: 320 }}>
              <View>
                <Text style={styles.titleClinicDesc}>Tuesday</Text>
                <Text style={styles.titleClinic}>Dr. Amelia</Text>
              </View>
              <Text style={{ textAlign: "center", fontSize: 40, color: "#2e5767" }}> - </Text>
              <View>
                <Text style={styles.titleClinicDesc}>Avaiable</Text>
                <Text style={styles.titleClinic}>Session 2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ maxHeight: 200, alignItems: "center" }}>
            <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#e3e7fa", padding: 20, justifyContent: "space-between", borderRadius: 20, gap: 40, minWidth: 320 }}>
              <View>
                <Text style={styles.titleClinicDesc}>Tuesday</Text>
                <Text style={styles.titleClinic}>Dr. Boy</Text>
              </View>
              <Text style={{ textAlign: "center", fontSize: 40, color: "#2e5767" }}> - </Text>
              <View>
                <Text style={styles.titleClinicDesc}>Avaiable</Text>
                <Text style={styles.titleClinic}>Session 3</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ maxHeight: 200, width: 390, alignItems: "center" }}>
            <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#e3e7fa", padding: 20, justifyContent: "space-between", borderRadius: 20, gap: 40, minWidth: 320 }}>
              <View>
                <Text style={styles.titleClinicDesc}>Tuesday</Text>
                <Text style={styles.titleClinic}>Dr. Melissa</Text>
              </View>
              <Text style={{ textAlign: "center", fontSize: 40, color: "#2e5767" }}> - </Text>
              <View>
                <Text style={styles.titleClinicDesc}>On Leave</Text>
                <Text style={styles.titleClinic}>Session 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  eventMainView: {
    marginVertical: 10,
    // backgroundColor: "red",
    maxHeight: "50%",
    gap: 23,
  },
  titleClinic: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e5767",
    minWidth: 95,
    // backgroundColor: "red",
  },
  titleClinicDesc: {
    fontSize: 15,
    fontWeight: "500",
    color: "#2e5767",
  },
});
