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

const Dashboard = (props) => {
  return (
    <View style={[styles.container, { ...props?.style }]}>
      <Image
        source={require("../assets/Photos/ColouredLogo.png")}
        resizeMode="contain"
        style={{ width: "50%", height: "60%" }}
      />
      <TouchableOpacity
        style={styles.Profile}
        onPress={() => props?.navigation.navigate("Profile")}
      >
        <Image
          source={require("../assets/Photos/ProfileLogo.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("13%"),
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
    paddingVertical: 5,
  },
  Profile: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: 100,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: "hidden",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Dashboard);
