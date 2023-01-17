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
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../../constants/Theme";

const UsersCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Icon}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(129, 106, 236, 0.67)", "rgba(240, 117, 242, 1)"]}
          style={styles.background}
        />
        {props?.Img ? (
          <Image
            source={props?.IconImg}
            resizeMode="contain"
            style={{ width: "40%", height: "40%" }}
          />
        ) : (
          <Text style={styles.DollarTxt}>$</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.Font}>{props?.Title}</Text>
      <View style={styles.NumCircle}>
        <Text style={styles.NumCircleTxt}>{props?.Num}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("18%"),
    height: hp("8%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  Icon: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: 100,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
  Font: {
    fontSize: rf(10),
    fontFamily: "PSB",
    color: appTheme?.textGrey,
  },
  NumCircle: {
    width: hp("2%"),
    height: hp("2%"),
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    right: 14,
    top: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  NumCircleTxt: {
    fontSize: rf(hp("1.5%")),
    fontFamily: "MB",
    color: appTheme?.textDark,
  },
  DollarTxt: {
    fontSize: rf(18),
    fontFamily: "MB",
    color: appTheme?.primaryBackroundLigh,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(UsersCard);
