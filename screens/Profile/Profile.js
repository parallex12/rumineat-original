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
import { AntDesign } from "@expo/vector-icons";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { SignOut } from "../../state-management/actions/auth/FirebaseAuthActions";

const Profile = (props) => {
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
        <View style={styles.BackIconRow}>
          <TouchableOpacity onPress={() => props?.navigation.goBack()}>
            <AntDesign
              name="left"
              size={rf(18)}
              color={appTheme?.primaryBackroundLigh}
            />
          </TouchableOpacity>
        </View>
        <Header onPress={() => props?.navigation.navigate("EditProfile")} />
      </View>
      <View style={styles.ChatWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Wrapper}>
            <Cards
              Title="Events"
              Icon={require("../../assets/Photos/events.png")}
            />
            <Cards
              Title="Food Truck"
              Icon={require("../../assets/Photos/Food.png")}
            />
            <Cards
              Title="Artist"
              Icon={require("../../assets/Photos/Artist.png")}
            />
            <Cards
              Title="Notifications"
              Icon={require("../../assets/Photos/Bell.png")}
            />
            <Cards
              Title="Account Settings"
              Icon={require("../../assets/Photos/Settings.png")}
              onPress={() => props?.navigation.navigate("AccountSetting")}
            />
            <Cards
              Title="About app"
              Icon={require("../../assets/Photos/Info.png")}
              onPress={() => props?.navigation.navigate("TermsCondition")}
            />
            <Cards
              Title="Share App"
              Icon={require("../../assets/Photos/Share.png")}
            />
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => props?.SignOut()}
            >
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.CopyRightWrapper}>
            <Text style={styles.CopyRightTxt}>Copyright@examplee 2022</Text>
          </View>
        </ScrollView>
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
    height: hp("30%"),
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ChatWrapper: {
    width: wp("100%"),
    height: hp("80%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("5%"),
  },
  ProfileIconsRow: {
    width: wp("90%"),
    height: hp("10%"),
    flexDirection: "row",
    alignItems: "center",
  },
  AddIcon: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackroundBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: 100,
    overflow: "hidden",
    marginLeft: 8,
  },
  profileImg: {
    width: "100%",
    height: "100%",
  },
  BackIconRow: {
    width: wp("90%"),
    marginTop: hp("5%"),
    marginBottom: 10,
  },
  CopyRightWrapper: {
    width: wp("100%"),
    height: hp("8%"),
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: hp("2%"),
  },
  CopyRightTxt: {
    fontFamily: "PR",
    fontSize: rf(13),
    color: appTheme?.textGrey,
  },
  logoutBtn: {
    width: wp("40%"),
    height: hp("5%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("3%"),
    flexDirection: "row",
    backgroundColor: "#ff5252",
  },
  logoutBtnText: {
    fontSize: rf(14),
    color: "#fff",
    fontFamily: "PM",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { SignOut })(Profile);
