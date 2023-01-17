import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../constants/Theme";
import Header from "./components/Header";
import Cards from "./components/Cards";

const AccountSetting = (props) => {
  return (
    <View style={styles.container}>
      {/* Header start here */}
      <View style={styles.HeaderWrapper}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(129, 106, 236, 1)", "rgba(191, 112, 240, 1)"]}
          start={[0.5, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={styles.background}
        />
        <Header onPress={() => props?.navigation.goBack()} />
      </View>
      <View style={styles.ChatWrapper}>
        <View style={styles.CardsWrapper}>
          <Cards
            Title="Change Password"
            Icon={require("../../assets/Photos/events.png")}
          />
          <Cards
            Title="Link Accounts"
            Icon={require("../../assets/Photos/events.png")}
          />
        </View>
        <View style={styles.ButtonRow}>
          <View style={styles.InnerButtonRow}>
            <TouchableOpacity style={styles.DeletBtn}>
              <Text style={styles.DeletBtnTxt}>Delet Account</Text>
            </TouchableOpacity>
            <Text style={styles.CopyRightTxt}>Copyright@examplee 2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  HeaderWrapper: {
    width: wp("100%"),
    height: hp("25%"),
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ChatWrapper: {
    width: wp("100%"),
    height: hp("85%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  CardsWrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginTop: hp("3%"),
  },
  ButtonRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: hp("3%"),
  },
  InnerButtonRow: {
    width: wp("90%"),
    height: hp("12%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  DeletBtn: {
    width: "50%",
    height: "50%",
    borderRadius: 10,
    backgroundColor: appTheme?.DeletBtnBg,
    alignItems: "center",
    justifyContent: "center",
  },
  DeletBtnTxt: {
    fontFamily: "PSB",
    fontSize: rf(14),
    color: appTheme?.textLight,
  },
  CopyRightTxt: {
    fontFamily: "PR",
    fontSize: rf(13),
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(AccountSetting);
