import axios from "axios";
import {
  useWindowDimensions,
  Image,
  FlatList,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
export function Profile() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const { width } = useWindowDimensions();
  async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setPosts(data);
  }
  return (
    <PagerView style={styles.container} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
      <View key={"3"} style={styles.container}>
        <Text>Hola</Text>
        <FlatList
          data={posts}
          numColumns={Math.round(width / 100)}
          stickyHeaderIndices={[0]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={{ flexDirection: "row", backgroundColor: "#ffff" }}>
              <MaterialCommunityIcons name="post" size={24} color="black" />
              <MaterialCommunityIcons name="video" size={24} color="black" />
              <MaterialCommunityIcons name="tag" size={24} color="black" />
            </View>
          )}
          renderItem={({ item }) => (
            <Image source={{ uri: item.url, width: 100, height: 100 }} />
          )}
        />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
