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
const Sender = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ChatCard}>
        <Text style={styles.ChatTxt}>
          OKay bro that looks nice! will try it ASAp!
        </Text>
      </View>
      <Text style={styles.Time}>09:15 PM</Text>
      <View style={styles.profileIcon}>
        <Image
          source={require("../../../assets/Photos/ProfilePic.png")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("13%"),
    justifyContent: "space-evenly",
  },
  ChatCard: {
    width: "70%",
    height: "60%",
    borderRadius: 16,
    backgroundColor: appTheme?.senderCardBg,
    borderBottomLeftRadius: 0,
    padding: 12,
  },
  Time: {
    fontFamily: "PSB",
    fontSize: rf(10),
    color: appTheme?.textLightGrey2,
  },
  ChatTxt: {
    fontFamily: "PSB",
    fontSize: rf(12),
    color: appTheme?.textGrey,
  },
  profileIcon: {
    width: hp("2%"),
    height: hp("2%"),
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
    top: 3,
    left: 4,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Sender);