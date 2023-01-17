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
import { appTheme } from "../../../constants/Theme";

const Dashboardheader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Join The Journey</Text>
      <TouchableOpacity style={styles.Icon} onPress={props?.onSharePress}>
        <Image
          source={require("../../../assets/Photos/QRPic.png")}
          resizeMode="contain"
          style={{ width: "60%", height: "60%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("12%"),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
  },
  font: {
    fontFamily: "PEB",
    fontSize: rf(20),
    color: appTheme?.textGrey,
  },
  Icon: {
    width: hp("4.5%"),
    height: hp("4.5%"),
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackround,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Dashboardheader);
