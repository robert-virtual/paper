import { Text, StyleSheet, View } from "react-native";
import { Button, Menu } from "react-native-paper";
import { useState } from "react";
export function Home() {
  const [visible, setVisible] = useState(false);
  function toggleMenu() {
    setVisible(!visible);
  }
  async function fetchAnything() {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    setTimeout(() => {
      setUser(res.json());
      setLoading(false);
    }, 3000);
  }
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Menu
        onDismiss={toggleMenu}
        anchor={<Button onPress={toggleMenu}>Show menu</Button>}
        visible={visible}
      >
        <Menu.Item title="Post" icon={"plus"} />
      </Menu>
      <Button mode="contained" loading={loading} onPress={fetchAnything}>
        Hola
      </Button>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
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
