import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {

return(

<View style={styles.container}>

{/* BACK BUTTON */}

<TouchableOpacity
style={styles.backBtn}
onPress={()=> navigation.navigate("Home")}
>

<Image
source={require("../assets/Arrow1.png")}
style={styles.backIcon}
/>

</TouchableOpacity>



{/* SCAN FRAME */}

<Image
source={require("../assets/scan-frame.png")}
style={styles.frame}
/>



{/* PRODUCT IMAGE */}

<Image
source={require("../assets/juice.png")}
style={styles.product}
/>
<Image
  source={require("../assets/m.png")}
  style={styles.overlay}
/>



{/* BOTTOM CARD - 1 IMAGE */}

<Image
source={require("../assets/bottom-card.png")}
style={styles.bottomCard}
/>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#D7C6B2",
justifyContent:"center",
alignItems:"center"
},

backBtn:{
position:"absolute",
top:60,
left:20,
width:45,
height:44,
backgroundColor:"#fff",
borderRadius:12,
justifyContent:"center",
alignItems:"center",
shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:10,
elevation:5,
marginLeft:10  ,
 zIndex: 1 
},

backIcon:{
width:11,
height:19,
 zIndex: 1
},

frame:{
position:"absolute",
width:280,
height:500,
resizeMode:"contain",
 zIndex: 1
},

product:{
width:"100%",
height:"100%",

},
overlay:{
  position:"absolute",
  width:280,        // bằng frame
  height:270,       // = 1/2 frame (frame cao 500)
  bottom:175,         // dính đáy frame
  opacity:1,
  zIndex:2,
  borderBottomLeftRadius: 35,
  borderBottomRightRadius: 35
},  
bottomCard:{
    
position:"absolute",
bottom:5,
width:375,
height:238,
resizeMode:"contain"
}

});