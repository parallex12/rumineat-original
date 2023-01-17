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
      <View style={styles.FirstRow}>
        <TouchableOpacity onPress={props?.onPress}>
          <AntDesign
            name="left"
            size={rf(16)}
            color={appTheme?.primaryBackroundLigh}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profile}>
          <Image
            source={require("../../../assets/Photos/ProfilePic.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Font1}>Group Name</Text>
          <Text style={styles.Font2}>Online</Text>
        </View>
      </View>
      <View style={styles.SecondRow}>
        <Entypo
          name="dots-three-vertical"
          size={rf(18)}
          color={appTheme?.primaryBackroundLigh}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("8%"),
    flexDirection: "row",
  },
  FirstRow: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: 100,
    overflow: "hidden",
    left: 5,
  },
  TitleWrapper: {
    height: "60%",
    marginLeft: wp("4%"),
    justifyContent: "center",
  },
  Font1: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLight,
  },
  Font2: {
    fontFamily: "PB",
    fontSize: rf(8),
    color: appTheme?.textLight,
  },
  SecondRow: {
    width: "10%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Header);
