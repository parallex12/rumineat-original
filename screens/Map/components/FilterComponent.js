import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../../constants/Theme";
import { Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Slider from "@react-native-community/slider";

const FilterComponent = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props?.setShowFilterpPopup(!props?.showFilterpPopup);
      }}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(129, 106, 236, 1)", "rgba(191, 112, 240, 1)"]}
        start={[0.5, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={styles.background}
      />
      <Image
        source={require("../../../assets/Photos/FilterImg.png")}
        resizeMode="contain"
        style={{ width: "50%", height: "50%" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hp("4.5%"),
    height: hp("4.5%"),
    borderRadius: 100,
    position: "absolute",
    right: 10,
    top: hp("41%"),
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },

  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 100,
  },
  Layer: {
    position: "absolute",
    width: wp("100%"),
    height: hp("90%"),
  },
  PopView: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  CrossIconRow: {
    width: "95%",
    height: "5%",
    // backgroundColor: "red",
    justifyContent: "flex-end",
  },
  DistanceWrapper: {
    width: "100%",
    height: "40%",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: appTheme?.borderGreenColor,
    marginBottom: 10,
    paddingHorizontal: wp("5%"),
  },
  DistanceInner1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DistanceInner1Txt1: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
    marginBottom: 3,
  },
  DistanceInner1Txt2: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLightGrey2,
  },
  DistanceBarLine: {
    width: "100%",
    height: "8%",
    borderRadius: 100,
    backgroundColor: appTheme?.PopUpBarLineBg,
    marginBottom: 8,
  },
  DistanceBarLineInner1: {
    width: "50%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackroundBlue,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  Circle: {
    width: hp("2.5%"),
    height: hp("2.5%"),
    borderWidth: 0.5,
    borderRadius: 100,
    borderColor: appTheme?.primaryBackroundLigh,
  },
  DistanceInner1Txt3: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLightGrey2,
  },
  PriceRangeWrapper: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    marginBottom: 5,
  },
  PriceBtnsWrapper: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  PriceBtn: {
    width: "45%",
    height: "70%",
    borderRadius: 6,
    backgroundColor: appTheme?.PopUpBarLineBg,
    alignItems: "center",
    justifyContent: "center",
  },
  PriceRangeTxt: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
  },
  PriceBtnTxt: {
    fontFamily: "PSB",
    fontSize: rf(14),
    color: appTheme?.textLight,
  },
  Faltoo: {
    width: "100%",
    height: "30%",
    backgroundColor: "red",
  },
  ButtonsRowWrapper: {
    width: "90%",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Font: {
    fontSize: rf(18),
    fontFamily: "PEB",
    color: appTheme?.textGrey,
  },
  Btn: {
    width: "40%",
    height: "60%",
    borderRadius: 8,
    backgroundColor: appTheme?.borderPinkColor,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnTxt: {
    fontFamily: "PSB",
    fontSize: rf(13),
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(FilterComponent);
