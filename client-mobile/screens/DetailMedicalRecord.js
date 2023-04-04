import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function DetailMedicalRecord() {
  const notesData = [
    {
      id: "1",
      title: "Note 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum felis ut sem aliquet eleifend. Nam quis velit eget neque venenatis convallis.",
    },
    {
      id: "2",
      title: "Note 2",
      description: "Vivamus congue purus libero, vel pretium ipsum tincidunt sed. Maecenas a nisl et lacus pellentesque hendrerit vel eu quam. Sed posuere tristique nisl vitae bibendum.",
    },
    {
      id: "3",
      title: "Note 3",
      description: "Praesent tincidunt semper lorem ac pulvinar. Nullam consectetur turpis ac ligula eleifend, a volutpat nulla sollicitudin. Fusce ut turpis tincidunt, gravida enim quis, convallis nisi.",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={notesData} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  item: {
    backgroundColor: "#e3e7fa",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
