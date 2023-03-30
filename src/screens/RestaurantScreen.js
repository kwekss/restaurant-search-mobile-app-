import { useEffect } from "react";
import { Dimensions, FlatList, Image, Text } from "react-native";
import { View } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 14);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) return <Text>loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: imageWidth, height: imageHeight }}
            />
          )}
        />
      )}
    </View>
  );
}
