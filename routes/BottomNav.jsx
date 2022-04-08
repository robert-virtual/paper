import { BottomNavigation } from "react-native-paper";
import { useState } from "react";
import { Home, Profile } from "../pages";

export function BottomNav() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      icon: "home",
    },
    {
      key: "profile",
      title: "Profile",
      icon: "account",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
