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
import Header from "./Components/Header";
import Sender from "./Components/Sender";
import Reciever from "./Components/Reciever";
import ChatKeyBoard from "./Components/ChatKeyBoard";

const GroupChat = (props) => {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Wrapper}>
            {/* Profile and Add Button Row start here */}
            <View style={styles.ProfileIconsRow}>
              <TouchableOpacity style={styles.AddIcon}>
                <AntDesign
                  name="plus"
                  size={rf(18)}
                  color={appTheme?.primaryBackroundLigh}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profile}>
                <Image
                  source={require("../../assets/Photos/ProfilePic.png")}
                  resizeMode="cover"
                  style={styles.profileImg}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profile}>
                <Image
                  source={require("../../assets/Photos/ProfilePic.png")}
                  resizeMode="cover"
                  style={styles.profileImg}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.profile}>
                <Image
                  source={require("../../assets/Photos/ProfilePic.png")}
                  resizeMode="cover"
                  style={styles.profileImg}
                />
              </TouchableOpacity>
            </View>
            {/* Profile and Add Button Row end here */}
            <Sender />
            <Reciever />
          </View>
        </ScrollView>
      </View>
      <ChatKeyBoard />
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
    height: hp("20%"),
    alignItems: "center",
    justifyContent: "center",
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
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("10%"),
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
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(GroupChat);
