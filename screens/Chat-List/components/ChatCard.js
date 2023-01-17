import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { appTheme } from "../../../constants/Theme";
const ChatCard = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <View style={styles.FirstRow}>
        <View style={styles.profile}>
          <Image
            source={require("../../../assets/Photos/ProfilePic.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
          <View style={styles.Active}></View>
        </View>
        <View style={styles.NameRow}>
          <Text style={styles.Font1}>John Doe</Text>
          <Text style={styles.Font2}>That’s Amazing broo</Text>
        </View>
      </View>
      <View style={styles.SecondRow}>
        <Text style={styles.Font2}>09:15 PM</Text>
        <View style={styles.MsgCount}>
          <Text style={styles.MsgCountTxt}>8</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("10%"),
    borderBottomWidth: 1,
    borderColor: appTheme?.PopUpBarLineBg,
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  FirstRow: {
    width: "85%",
    height: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: "16%",
    height: "75%",
    borderRadius: 6,
    overflow: "hidden",
  },
  Active: {
    width: hp("1%"),
    height: hp("1%"),
    borderRadius: 100,
    backgroundColor: "#6AEC8E",
    position: "absolute",
    bottom: 1,
    right: 1,
  },
  NameRow: {
    height: "80%",
    left: 10,
  },
  Font1: {
    fontSize: rf(15),
    fontFamily: "PB",
    color: appTheme?.textGrey,
    marginTop: 5,
  },
  Font2: {
    fontSize: rf(9),
    fontFamily: "PSB",
    color: appTheme?.textLightGrey2,
  },
  SecondRow: {
    width: "15%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  MsgCount: {
    width: hp("3%"),
    height: hp("3%"),
    borderRadius: 100,
    backgroundColor: "#816AEC",
    alignItems: "center",
    justifyContent: "center",
  },
  MsgCountTxt: {
    fontFamily: "PSB",
    fontSize: rf(hp("1.5%")),
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ChatCard);
