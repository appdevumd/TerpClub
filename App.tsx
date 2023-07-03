import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Map } from "./src/Map/Map";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clubs from "./src/Clubs/Clubs";
import Profile from "./src/Profile/Profile";

const TabNavigator = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  let isDark = scheme === "dark"
  const themeStyle = isDark ? styles.dark : styles.light
  const navigationTheme = isDark ? DarkTheme : DefaultTheme

  return (
    <View style={[styles.container, themeStyle]}>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style="auto" />
        <TabNavigator.Navigator>
          <TabNavigator.Screen name="Clubs" component={Clubs} />
          <TabNavigator.Screen name="Map" component={Map} />
          <TabNavigator.Screen name="Profile" component={Profile} />
        </TabNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#000",
  },
});
