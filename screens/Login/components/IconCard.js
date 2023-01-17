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
import { appTheme } from "../../../constants/Theme";

const IconCard = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      {props?.Img ? (
        <Image
          source={props?.LogoImg}
          resizeMode="contain"
          style={{ width: "60%", height: "60%" }}
        />
      ) : (
        <Text style={styles.Txt}>R</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hp("6%"),
    height: hp("6%"),
    borderRadius: 100,
    backgroundColor: appTheme?.TextFieldBgColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp("3%"),
  },
  Txt: {
    fontSize: rf(30),
    fontFamily: "MB",
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(IconCard);
