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
import { AntDesign } from "@expo/vector-icons";
import { appTheme } from "../../constants/Theme";
import DiscriptionCard from "./Components/DiscriptionCard";
const TermsCondition = (props) => {
  return (
    <View style={styles.container}>
      {/* Header start here */}
      <View style={styles.Header}>
        <View style={styles.IconRow}>
          <TouchableOpacity onPress={() => props?.navigation.goBack()}>
            <AntDesign name="left" size={rf(18)} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderImageWrapper}>
          <Image
            source={require("../../assets/Photos/ColouredLogo.png")}
            resizeMode="contain"
            style={styles.headerImgLogo}
          />
        </View>
      </View>
      {/* Discription start here */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Wrapper}>
          <View style={styles.TitleRow}>
            <Text style={styles.TitleTxt}>Terms & Condition</Text>
          </View>
          <DiscriptionCard />
          <DiscriptionCard />
          <DiscriptionCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Header: {
    width: wp("90%"),
    height: hp("20%"),
  },
  HeaderImageWrapper: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
  },
  headerImgLogo: {
    width: "60%",
    height: "70%",
  },
  IconRow: {
    width: "100%",
    height: "40%",
    justifyContent: "flex-end",
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("5%"),
  },
  TitleRow: {
    width: wp("90%"),
    height: hp("8%"),
    justifyContent: "center",
  },
  TitleTxt: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TermsCondition);
