// DogScreen.tsx
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { PetStackNavigatorParamList } from "../router/petStackNavigator"; // Make sure to import the correct type
import Constants from "expo-constants";

type DogScreenRouteProp = RouteProp<PetStackNavigatorParamList, "DogScreen">;
type DogScreenNavigationProp = StackNavigationProp<
  PetStackNavigatorParamList,
  "DogScreen"
>;

type Props = {
  route: DogScreenRouteProp;
  navigation: DogScreenNavigationProp;
};

interface Dog {
  id: number;
  name: string;
  description: string;
}

const DogScreen: React.FC<Props> = ({ navigation }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    axios
      .get("https://api.thedogapi.com/v1/breeds?limit=20")
      .then((response) => setDogs(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDogPress = (dogName: string) => {
    navigation.navigate("PetDetails", { petName: dogName });
  };

  const renderItem = ({ item }: { item: Dog }) => (
    <TouchableOpacity onPress={() => handleDogPress(item.name)}>
      <View style={styles.petNameContainer}>
        <Text style={styles.petName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <FlatList
        data={dogs}
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

export default DogScreen;
