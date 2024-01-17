// PetDetailsScreen.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PetDetailsProps {
  route: {
    params: {
      petName: string;
    };
  };
}

const PetDetailsScreen: React.FC<PetDetailsProps> = ({ route }) => {
  const { petName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.petName}>{petName}</Text>
      {/* Add more details here based on your requirements */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  petName: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PetDetailsScreen;
