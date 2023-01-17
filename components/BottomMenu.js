import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Switch,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const BottomMenu = (props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(129, 106, 236, 1)", "rgba(191, 112, 240, 1)"]}
        start={[0.5, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={styles.background}
      />
      <TouchableOpacity
        style={styles.Menu}
        onPress={() => props?.navigation.navigate("Map")}
      >
        <Image
          source={require("../assets/Photos/LocationImg.png")}
          resizeMode="contain"
          style={styles.Img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Menu}
        onPress={() => props?.navigation.navigate("Dashboard")}
      >
        <Image
          source={require("../assets/Photos/DashboardImg.png")}
          resizeMode="contain"
          style={styles.Img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Menu}
        onPress={() => props?.navigation.navigate("Guide1")}
      >
        <Image
          source={require("../assets/Photos/PartyImg.png")}
          resizeMode="contain"
          style={styles.Img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Menu}
        onPress={() => props?.navigation.navigate("ChatList")}
      >
        <Image
          source={require("../assets/Photos/ChatImg.png")}
          resizeMode="contain"
          style={styles.Img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Menu}
        onPress={props?.onGoPress}
      >
        <Image
          source={require("../assets/Photos/GoImg.png")}
          resizeMode="contain"
          style={[styles.Img, { width: "60%" }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("95%"),
    height: hp("8%"),
    position: "absolute",
    bottom: 0,
    marginBottom: hp("1%"),
    borderRadius: 100,
    flexDirection: "row",
    alignSelf: "center",
    bottom: hp("1.5%"),
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 100,
  },
  Menu: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "40%",
    height: "40%",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(BottomMenu);
