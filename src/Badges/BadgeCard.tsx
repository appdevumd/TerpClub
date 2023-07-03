import { StyleSheet, Text, View, Image } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Badge, { BadgeProps } from "./Badge";

export type BadgeCardProps = {};

const Badges: BadgeProps[] = [
  {
    title: "First Steps",
    completed: true
  },
  {
    title: "Lab Explorer",
    completed: true
  },
  {
    title: "Tinkerer",
    completed: false
  },
  {
    title: "Midnight Gang",
    completed: false
  },
  {
    title: "I am Iron Man",
    completed: false
  },
  {
    title: "Unity Wizard",
    completed: false
  },
  {
    title: "What the Fork?",
    completed: true
  },
  {
    title: "Top Gun",
    completed: false
  },
  {
    title: "Ready Player One",
    completed: true
  }
];

const BadgesPerRow = 3;
function createBadges(badges: BadgeProps[]) {
  var rows: ReactNode[] = [];
  for (var i = 0; i < badges.length; i += BadgesPerRow) {
    var badgeRow: ReactNode[] = [];
    for (var j = i; j < Math.min(badges.length, i + BadgesPerRow); j++) {
      let props = Badges[j];
      badgeRow.push(<Badge {...props} />);
    }
    rows.push(<View style={styles.badgeRow}>{badgeRow}</View>);
  }

  return <React.Fragment>{rows}</React.Fragment>;
}

const BadgeCard: React.FC<BadgeCardProps> = ({}) => {
  return (
    <View style={styles.card}>
      <LinearGradient colors={["#a52256", "#4d1798"]} style={styles.gradient}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
              XR Club
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>Fall 2023</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://xr.umd.edu/images/XR_Club_Logo_with_Outer_Circle.png",
            }}
          />
        </View>
        <View>{createBadges(Badges)}</View>
      </LinearGradient>
    </View>
  );
};

export default BadgeCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    display: "flex",
    overflow: "hidden",
    color: "white",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gradient: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  icon: {
    width: 50,
    height: 50
  }
});
