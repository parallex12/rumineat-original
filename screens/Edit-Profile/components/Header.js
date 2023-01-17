import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { appTheme } from "../../../constants/Theme";
const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.FirstRow}>
        <TouchableOpacity style={styles.profile} onPress={props?.onPress}>
          <Image
            source={require("../../../assets/Photos/ProfilePic.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Font1}>Michal Jackson</Text>
        </View>
        <View style={styles.Active}></View>
      </View>
      <View style={styles.SecondRow}>
        <Entypo
          name="dots-three-vertical"
          size={rf(18)}
          color={appTheme?.primaryBackroundLigh}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("8%"),
    flexDirection: "row",
  },
  FirstRow: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: hp("9%"),
    height: hp("9%"),
    borderRadius: 100,
    overflow: "hidden",
    left: 5,
  },
  TitleWrapper: {
    height: "60%",
    marginLeft: wp("4%"),
  },
  Font1: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLight,
  },
  Font2: {
    fontFamily: "PB",
    fontSize: rf(8),
    color: appTheme?.textLight,
  },
  SecondRow: {
    width: "10%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  Active: {
    width: hp("2%"),
    height: hp("2%"),
    borderRadius: 100,
    position: "absolute",
    backgroundColor: appTheme?.PopUpBarLineBg,
    bottom: 0,
    left: wp("14%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Header);
