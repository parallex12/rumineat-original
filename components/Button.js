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
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { appTheme } from "../constants/Theme";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <Text style={styles.Font}>{props?.Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("50%"),
    height: hp("6%"),
    borderRadius: 8,
    backgroundColor: appTheme?.TextFieldBgColor,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("3%"),
  },
  Font: {
    fontSize: rf(16),
    fontFamily: "MB",
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Button);
