import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* NỘI DUNG CÓ THỂ CUỘN */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>Hello 👋</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>

          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
        </View>

        {/* YOUR INSIGHTS */}
        <Text style={styles.section}>Your Insights</Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Scan")}
          >
            <Image
              source={require("../assets/icon-scan.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSub}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image
              source={require("../assets/icon-warning.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSub}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={ () => navigation.navigate("Success")}>
            <Image
              source={require("../assets/icon-success.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSub}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Cart")}
          >
            <Image
              source={require("../assets/icon-calendar.png")}
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSub}>History   26</Text>
          </TouchableOpacity>
        </View>

        {/* EXPLORE MORE */}
        <View style={styles.exploreHeader}>
          <Text style={styles.section}>Explore More</Text>
          <Image
            source={require("../assets/icon-arrow.png")}
            style={styles.arrow}
          />
        </View>

        {/* PRODUCTS - HORIZONTAL SCROLL */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <View style={styles.products}>
            <Image
              source={require("../assets/product1.png")}
              style={styles.product}
            />
            <Image
              source={require("../assets/product2.png")}
              style={styles.product}
            />
            <Image
              source={require("../assets/product3.png")}
              style={styles.product}
            />
          </View>
        </ScrollView>

        {/* TẠO KHOẢNG TRỐNG ĐỂ NỘI DUNG KHÔNG BỊ CHE BỞI BOTTOM NAV */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* BOTTOM MENU - CỐ ĐỊNH */}
      <View style={styles.bottomNav}>
        <Image
          source={require("../assets/icon-home.png")}
          style={styles.navIcon}
        />
        <Image
          source={require("../assets/icon-bell.png")}
          style={styles.navIcon}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
        <Image
          source={require("../assets/icon-scan-nav.png")}
          style={styles.navIcon}
        />
        </TouchableOpacity>
        <Image
          source={require("../assets/icon-history.png")}
          style={styles.navIcon}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image
            source={require("../assets/icon-cart.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    paddingTop: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hello: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    color: "black",
  },
  avatar: {
    width: 48,
    height: 46,
    borderRadius: 10,
  },
  section: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "600",
  },
  grid: {
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    shadowColor: "#808080",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  icon: {
    width: 27,
    height: 26,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: "600",
  },
  cardSub: {
    fontSize: 12,
    color: "gray",
  },
  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  arrow: {
    marginRight: 3,
    width: 29,
    height: 15,
  },
  horizontalScroll: {
    marginTop: 15,
  },
  products: {
    flexDirection: "row",
    gap: 25,
  },
  product: {
    width: 127,
    height: 125,
    borderRadius: 12,
  },
  bottomPadding: {
    height: 100,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    height: 90,
    paddingBottom: 25,
    paddingTop: 15,
  },
  navIcon: {
    width: 22,
    height: 23,
  },
});