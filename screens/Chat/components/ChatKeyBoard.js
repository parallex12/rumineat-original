import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { appTheme } from "../../../constants/Theme";

import { LinearGradient } from "expo-linear-gradient";
const ChatKeyBoard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign
          name="plus"
          size={rf(22)}
          color={appTheme?.primaryBackroundBlue}
        />
      </TouchableOpacity>
      <View style={styles.KeyBoardWrapper}>
        <TextInput style={styles.Field} placeholder="Type here...." />
        <View style={styles.FilterIconWrapper}>
          <TouchableOpacity style={styles.FilterIcon}>
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
              style={{ width: "40%", height: "40%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("8%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  KeyBoardWrapper: {
    width: "90%",
    height: "70%",
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackroundLightGrey,
    flexDirection: "row",
  },
  Field: {
    width: "85%",
    height: "100%",
    paddingHorizontal: 10,
    fontSize: rf(15),
    fontFamily: "PM",
    color: appTheme?.textGrey,
  },
  FilterIconWrapper: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  FilterIcon: {
    width: hp("4.2%"),
    height: hp("4.2%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ChatKeyBoard);
