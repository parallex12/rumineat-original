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
const Cards = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <View style={styles.FirstRow}>
        <View style={styles.IconImg}>
          <Image
            source={props?.Icon}
            resizeMode="contain"
            style={{ width: "45%", height: "45%" }}
          />
        </View>
        <Text style={styles.Title}>{props?.Title}</Text>
      </View>
      <View style={styles.SecondRow}>
        <TouchableOpacity>
          <AntDesign name="right" size={rf(18)} color={appTheme?.textGrey} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("6%"),
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: appTheme?.primaryBackroundLigh,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: hp("3%"),
  },
  FirstRow: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  IconImg: {
    width: "15%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontFamily: "PSB",
    fontSize: rf(14),
    color: appTheme?.textGrey,
  },
  SecondRow: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Cards);
