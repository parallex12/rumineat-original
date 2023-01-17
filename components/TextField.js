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

const TextField = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Field}
        placeholder={props?.placeholder}
        secureTextEntry={props?.secureTextEntry}
        placeholderTextColor={appTheme?.primaryBackroundLigh}
        onChangeText={props?.onChangeText}
      />
      <TouchableOpacity style={styles.Icon} onPress={props?.onClick}>
        {props?.Icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("6%"),
    borderRadius: 8,
    backgroundColor: appTheme?.TextFieldBgColor,
    flexDirection: "row",
    marginBottom: hp("2%"),
  },
  Field: {
    width: "85%",
    height: "100%",
    paddingHorizontal: 10,
    fontFamily: "MM",
    fontSize: rf(14),
    color:'#fff'
  },
  Icon: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TextField);
