import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
const EditProfileField = (props) => {
  return (
    <View style={[styles.container, { width: props?.width }]}>
      <Text style={styles.Font}>{props?.Title}</Text>
      <View style={styles.FieldWrapper}>
        <TextInput
          style={styles.TextField}
          placeholder={props?.placeholder}
          onChangeText={props?.onChangeText}
          keyboardType={props?.keyboardType}
          placeholderTextColor={appTheme?.textLightGrey}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: wp("45%"),
    height: hp("9%"),
    justifyContent: "space-around",
    marginBottom: 5,
  },
  FieldWrapper: {
    width: "90%",
    height: "60%",
    borderRadius: 6,
    backgroundColor: appTheme?.TextFieldProfileBg,
  },
  TextField: {
    width: "100%",
    height: "100%",
    padding: 10,
    fontSize: rf(11),
    fontFamily: "PSB",
  },
  Font: {
    fontFamily: "PM",
    fontSize: rf(12),
    color: appTheme?.textDark,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(EditProfileField);
