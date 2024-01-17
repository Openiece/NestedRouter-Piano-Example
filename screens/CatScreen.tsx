// CatScreen.tsx
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import { PetStackNavigatorParamList } from "../router/petStackNavigator"; 
import Constants from 'expo-constants';

type CatScreenRouteProp = RouteProp<PetStackNavigatorParamList, "CatScreen">;
type CatScreenNavigationProp = StackNavigationProp<PetStackNavigatorParamList, "CatScreen">;

type Props = {
  route: CatScreenRouteProp;
  navigation: CatScreenNavigationProp;
};

interface Cat {
  id: number;
  name: string;
  description: string;
}

const CatScreen: React.FC<Props> = ({ navigation }) => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds?limit=20")
      .then((response) => setCats(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCatPress = (catName: string) => {
    navigation.navigate("PetDetails", { petName: catName });
  };

  const renderItem = ({ item }: { item: Cat }) => (
    <TouchableOpacity onPress={() => handleCatPress(item.name)}>
      <View style={styles.petNameContainer}>
        <Text style={styles.petName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop:Constants.statusBarHeight }}>
      <FlatList
        data={cats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  petNameContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5,
    width: 250,
  },
});

export default CatScreen;
