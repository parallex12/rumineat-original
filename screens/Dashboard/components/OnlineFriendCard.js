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
import { Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
const OnlineFriendCard = (props) => {
  let createdAt = new Date(props?.data?.created_at);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.FirstRow}>
        <View style={styles.profile}>
          <SvgXml xml={props?.data?.avator_svg} width="100%" height="100%" />
        </View>
        <View style={styles.InfoWrapper}>
          <Text style={styles.InfoWrapperTxt1}>{props?.data?.username}</Text>
          <Text style={styles.InfoWrapperTxt2}>
            {createdAt?.getDay() +
              "-" +
              createdAt?.getMonth() +
              1 +
              "-" +
              createdAt?.getFullYear()}
          </Text>
        </View>
      </View>
      <View style={styles.SecondRow}>
        <View style={styles.ChatIcon}>
          <Ionicons
            name="ios-chatbubble-ellipses"
            size={24}
            color={appTheme?.textGrey}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("9%"),
    flexDirection: "row",
  },
  FirstRow: {
    width: "85%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: hp("5.5%"),
    height: hp("5.5%"),
    borderRadius: 100,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderWidth: 0.5,
    elevation: 7,
  },
  InfoWrapper: {
    height: "40%",
    left: 10,
  },
  InfoWrapperTxt1: {
    fontSize: rf(12),
    fontFamily: "PSB",
    color: appTheme?.textGrey,
  },
  InfoWrapperTxt2: {
    fontFamily: "PSB",
    fontSize: rf(8),
    color: appTheme?.textLightGrey,
  },
  SecondRow: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ChatIcon: {
    width: hp("4%"),
    height: hp("4%"),
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(OnlineFriendCard);
