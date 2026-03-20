import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from "react-native";

export default function CartScreen({ navigation }) {
  // State cho số lượng từng sản phẩm
  const [quantities, setQuantities] = useState({
    orangeJuice: 2,
    skimmedMilk: 2,
    aloeVera: 2,
  });

  // Giá sản phẩm
  const prices = {
    orangeJuice: 149,
    skimmedMilk: 129,
    aloeVera: 1249,
  };

  // Hàm tính tổng tiền
  const calculateTotal = () => {
    return (
      quantities.orangeJuice * prices.orangeJuice +
      quantities.skimmedMilk * prices.skimmedMilk +
      quantities.aloeVera * prices.aloeVera
    );
  };

  // Hàm xử lý tăng/giảm số lượng
  const updateQuantity = (product, type) => {
    setQuantities(prev => ({
      ...prev,
      [product]: type === 'increase' ? prev[product] + 1 : Math.max(1, prev[product] - 1)
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      
      {/* Header với nút back và title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/icon-arrow2.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
      
      <Text style={[styles.title, { paddingLeft: 25 }]}>
        Your Cart <Text style={styles.cartEmoji}>🛒</Text>
      </Text>

      {/* NỘI DUNG CÓ THỂ CUỘN */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Danh sách sản phẩm */}
        <View style={styles.productsList}>
          {/* Product 1 - Orange Juice */}
          <View style={styles.productItem}>
            <Image
              source={require("../assets/product01.png")}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={[styles.productName, { color: "gray" }]}>Lauren's</Text>
              <Text style={styles.productName}>Orange Juice</Text>
              <Text style={styles.productPrice}>₹ {prices.orangeJuice}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('orangeJuice', 'decrease')}
              >
                <Text style={styles.quantityBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities.orangeJuice}</Text>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('orangeJuice', 'increase')}
              >
                <Text style={styles.quantityBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Product 2 - Skimmed Milk */}
          <View style={styles.productItem}>
            <Image
              source={require("../assets/product02.png")}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={[styles.productName, { color: "gray" }]}>Baskin's</Text>
              <Text style={styles.productName}>Skimmed Milk</Text>
              <Text style={styles.productPrice}>₹ {prices.skimmedMilk}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('skimmedMilk', 'decrease')}
              >
                <Text style={styles.quantityBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities.skimmedMilk}</Text>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('skimmedMilk', 'increase')}
              >
                <Text style={styles.quantityBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Product 3 - Aloe Vera Lotion */}
          <View style={styles.productItem}>
            <Image
              source={require("../assets/product03.png")}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={[styles.productName, { color: "gray" }]}>Marley's</Text>
              <Text style={styles.productName}>Aloe Vera Lotion</Text>
              <Text style={styles.productPrice}>₹ {prices.aloeVera}</Text>
            </View>
            <View style={styles.quantityControl}>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('aloeVera', 'decrease')}
              >
                <Text style={styles.quantityBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantities.aloeVera}</Text>
              <TouchableOpacity 
                style={styles.quantityBtn}
                onPress={() => updateQuantity('aloeVera', 'increase')}
              >
                <Text style={styles.quantityBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Total và Checkout */}
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.price}>₹ {calculateTotal().toLocaleString()}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={styles.checkoutText}>Proceed to checkout</Text>
          </TouchableOpacity>
        </View>

        {/* TẠO KHOẢNG TRỐNG ĐỂ NỘI DUNG KHÔNG BỊ CHE BỞI BOTTOM NAV */}
        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Bottom Navigation - CỐ ĐỊNH */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/icon-home.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Image
            source={require("../assets/icon-bell.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Scan")}>
          <Image
            source={require("../assets/icon-scan-nav.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Image
            source={require("../assets/icon-history.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image
            source={require("../assets/icon-cart.png")}
            style={[styles.navIcon, styles.activeNavIcon]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  statusBar: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backBtn: {
    width: 45,
    height: 45,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  backIcon: {
    width: 11,
    height: 19,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  cartEmoji: {
    fontSize: 28,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  productsList: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#FFF",
    resizeMode: "contain",
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 12,
    fontWeight: "450",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F08A5D",
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    marginTop: "auto"
  },
  quantityBtn: {
    width: 10,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityBtnText: {
    color: "#F08A5D",
    fontSize: 16,
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityText: {
    fontSize: 15,
    fontWeight: "400",
    marginHorizontal: 15,
    minWidth: 25,
    textAlign: "center",
  },
  footer: {
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    paddingLeft: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "#F08A5D",
    paddingRight: 8,
  },
  checkoutBtn: {
    backgroundColor: "#F08A5D",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
    tintColor: "#999",
  },
  activeNavIcon: {
    tintColor: "#F08A5D",
  },
});