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
      <TouchableOpacity onPress={props?.onPress}>
        <AntDesign
          name="left"
          size={rf(18)}
          color={appTheme?.primaryBackroundLigh}
        />
      </TouchableOpacity>
      <View style={styles.TitleRow}>
        <Text style={styles.Title}>Account Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("15%"),
    flexDirection: "row",
    alignItems: "center",
  },
  TitleRow: {
    width: "100%",
    alignItems: "center",
  },
  Title: {
    fontFamily: "PSB",
    fontSize: rf(18),
    color: appTheme?.textLight,
    marginRight: wp("10%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Header);
