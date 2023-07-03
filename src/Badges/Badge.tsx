import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

export type BadgeProps = {
    title: string,
    completed: boolean
}

const Badge: React.FC<BadgeProps> = ({title, completed }) => {
  let badgeStyle = { opacity: completed ? 1 : 0.2 }
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.badge} colors={["#333333", "#111111"]} >
        <Image style={[styles.image, badgeStyle]} source={require("../../assets/badge.png")} />
      </LinearGradient>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    color: "white",
    alignItems: "center",
    width: 100
  },
  badge: {
    borderRadius: 9999,
    overflow: "hidden",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    display: "flex"
  },
  text: {
    color: "white",
    textAlign: "center"
  },
  image: {
    height: 50,
    width: 50
  }
});
