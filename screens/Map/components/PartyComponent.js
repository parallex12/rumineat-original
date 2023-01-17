import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../../constants/Theme";
import { Entypo } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const PartyComponent = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { ...props?.style }]}
      onPress={props?.onPress}
    >
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(129, 106, 236, 1)", "rgba(191, 112, 240, 1)"]}
        start={[0.5, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={styles.background}
      />
      <Image
        source={require("../../../assets/Photos/PartyImg.png")}
        resizeMode="contain"
        style={{ width: "50%", height: "50%" }}
      />
      {props?.filterPop == "party" && props?.showFilterpPopup ? (
        <Modal transparent={true} animationType="slide">
          <View style={styles.Layer}>
            <View style={styles.PopView}>
              <View style={styles.CrossIconRow}>
                <TouchableOpacity
                  onPress={() =>
                    props?.setShowFilterpPopup(!props?.showFilterpPopup)
                  }
                >
                  <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
              </View>
              {/* Distance Row Start here */}
              <View style={styles.DistanceWrapper}>
                <View style={styles.DistanceInner1}>
                  <Text style={styles.DistanceInner1Txt1}>Distance</Text>
                  <Text style={styles.DistanceInner1Txt2}>5 Miles</Text>
                </View>
                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor={appTheme?.primaryBackroundBlue}
                  maximumTrackTintColor={appTheme?.PopUpBarLineBg}
                />
                <View style={styles.DistanceInner1}>
                  <Text style={styles.DistanceInner1Txt3}>1/4</Text>
                  <Text style={styles.DistanceInner1Txt3}>30</Text>
                </View>
                <View style={styles.PriceRangeWrapper}>
                  <Text style={styles.PriceRangeTxt}>Price Range</Text>
                  <View style={styles.PriceBtnsWrapper}>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>$$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>$$$</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* Price Range start here */}
              <View
                style={[
                  styles.DistanceWrapper,
                  { borderColor: appTheme?.borderPinkColor },
                ]}
              >
                <View style={styles.DistanceInner1}>
                  <Text style={styles.DistanceInner1Txt1}>Rating</Text>
                  <Text style={styles.DistanceInner1Txt2}>5.0</Text>
                </View>
                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={1}
                  minimumTrackTintColor={appTheme?.primaryBackroundBlue}
                  maximumTrackTintColor={appTheme?.PopUpBarLineBg}
                />
                <View style={styles.DistanceInner1}>
                  <Text style={styles.DistanceInner1Txt3}>0</Text>
                  <Text style={styles.DistanceInner1Txt3}>5</Text>
                </View>
                <View style={styles.PriceRangeWrapper}>
                  <Text style={styles.PriceRangeTxt}>Cuisine</Text>
                  <View style={styles.PriceBtnsWrapper}>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>Desert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PriceBtn}>
                      <Text style={styles.PriceBtnTxt}>Cafe</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* Food trucks Buttons start here */}
              <View style={styles.ButtonsRowWrapper}>
                <Text style={styles.Font}>Food Trucks</Text>
                <TouchableOpacity style={styles.Btn}>
                  <Text style={styles.BtnTxt}>Track</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ButtonsRowWrapper}>
                <Text style={styles.Font}>Ambiance</Text>
                <TouchableOpacity style={styles.Btn}>
                  <Text style={styles.BtnTxt}>Track</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ButtonsRowWrapper}>
                <Text style={styles.Font}>Crypto Accepted</Text>
                <TouchableOpacity style={styles.Btn}>
                  <Text style={styles.BtnTxt}>Track</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: hp("4.5%"),
    height: hp("4.5%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 100,
  },
  Layer: {
    flex: 1,
    position: "absolute",
  },
  PopView: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: hp("2%"),
  },
  CrossIconRow: {
    width: "95%",
    height: "5%",
    // backgroundColor: "red",
    justifyContent: "flex-end",
  },
  DistanceWrapper: {
    width: "100%",
    height: "30%",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: appTheme?.borderGreenColor,
  },
  DistanceInner1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DistanceInner1Txt1: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
    marginBottom: 3,
  },
  DistanceInner1Txt2: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLightGrey2,
  },
  DistanceBarLine: {
    width: "100%",
    height: "8%",
    borderRadius: 100,
    backgroundColor: appTheme?.PopUpBarLineBg,
    marginBottom: 8,
  },
  DistanceBarLineInner1: {
    width: "50%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: appTheme?.primaryBackroundBlue,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  Circle: {
    width: hp("2.5%"),
    height: hp("2.5%"),
    borderWidth: 0.5,
    borderRadius: 100,
    borderColor: appTheme?.primaryBackroundLigh,
  },
  DistanceInner1Txt3: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textLightGrey2,
  },
  PriceRangeWrapper: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  PriceBtnsWrapper: {
    width: "100%",
    height: "45%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  PriceBtn: {
    width: "30%",
    height: "70%",
    borderRadius: 6,
    backgroundColor: appTheme?.PopUpBarLineBg,
    alignItems: "center",
    justifyContent: "center",
  },
  PriceRangeTxt: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
  },
  PriceBtnTxt: {
    fontFamily: "PSB",
    fontSize: rf(14),
    color: appTheme?.textLight,
  },
  Faltoo: {
    width: "100%",
    height: "30%",
    backgroundColor: "red",
  },
  ButtonsRowWrapper: {
    width: "90%",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Font: {
    fontSize: rf(18),
    fontFamily: "PEB",
    color: appTheme?.textGrey,
  },
  Btn: {
    width: "40%",
    height: "60%",
    borderRadius: 8,
    backgroundColor: appTheme?.borderPinkColor,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnTxt: {
    fontFamily: "PSB",
    fontSize: rf(13),
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(PartyComponent);
