import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function PetMedicalRecord() {
  const navigation = useNavigation();

  const scheduleData = [
    {
      id: "1",
      title: "Veterinary",
    },
    {
      id: "2",
      title: "Grooming",
    },
    {
      id: "3",
      title: "Consult",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("detailMedicalRecords")}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={scheduleData} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  item: {
    backgroundColor: "#e3e7fa",
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    minWidth: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 70,
  },
  time: {
    fontSize: 16,
    color: "#333",
  },
});
