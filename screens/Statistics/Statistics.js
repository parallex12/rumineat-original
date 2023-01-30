import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { appTheme } from "../../constants/Theme";
import GlobalButton from "../../components/GlobalButton";
import BottomMenu from "../../components/BottomMenu";

import { LinearGradient } from "expo-linear-gradient";
import StatisticCard from "./components/StatisticCard";

const Statistics = (props) => {
  const onMapOpen = () => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    // latitude: JSON.parse(data?.location)?.latitude,
    // longitude: JSON.parse(data?.location)?.longitude,
    const latLng = `${props?.get_result?.result?.place?.latitude},${props?.get_result?.result?.place?.longitude}`;
    const label = props?.get_result?.result?.place?.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  console.log(props?.get_result?.result?.place?.latitude)

  return (
    <View style={styles.container}>
      <Header navigation={props?.navigation} />
      <View style={styles.TitleRow}>
        <Text style={styles.Title}>Statistics</Text>
      </View>

      <View style={styles.CardRow}>
        <View style={styles.TableCard}>
          <View style={styles.TableHeader}>
            <View style={styles.Row1}>
              <Text style={styles.Font}>Rating</Text>
            </View>
            <View style={styles.Row2}>
              <Text style={styles.Font}>Place</Text>
            </View>
          </View>
          {props?.get_result?.extra?.map((item, index) => {
            return (
              <StatisticCard
                place={item?.name}
                Num={item?.rating}
                key={index}
                bgColor={appTheme?.primaryBackroundLigh}
              />
            );
          })}
        </View>
      </View>
      {/* Buttons Row start here */}
      <View style={styles.BtnRow}>
        <GlobalButton
          Title="Back to result"
          onPress={() => props?.navigation.goBack()}
        />
        <TouchableOpacity style={styles.GoNowBtn} onPress={onMapOpen}>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(129, 106, 236, 0.67)", "rgba(240, 117, 242, 1)"]}
            style={styles.background}
          />
          <Text style={styles.BtnTxt}>Go Now</Text>
        </TouchableOpacity>
      </View>
      <BottomMenu navigation={props?.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  TitleRow: {
    width: wp("90%"),
    height: hp("10%"),
    justifyContent: "center",
  },
  Title: {
    fontFamily: "PEB",
    fontSize: rf(20),
    color: appTheme?.textGrey,
  },
  CardRow: {
    width: wp("100%"),
    height: hp("50%"),
    alignItems: "center",
    justifyContent: "center",
  },
  BtnRow: {
    width: wp("100%"),
    height: hp("16%"),
    alignItems: "center",
    justifyContent: "space-around",
  },
  GoNowBtn: {
    width: wp("70%"),
    height: hp("6%"),
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  BtnTxt: {
    fontSize: rf(16),
    fontFamily: "MB",
    color: appTheme?.textLight,
  },
  TableCard: {
    width: wp("90%"),
    minHeight: hp("5%"),
    borderRadius: 10,
    backgroundColor: appTheme?.primaryBackroundLightGrey,
  },
  TableHeader: {
    width: "100%",
    height: "18%",
    flexDirection: "row",
  },
  Row1: {
    width: "30%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  Row2: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Font: {
    fontSize: rf(16),
    fontFamily: "PEB",
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_result: state.main.get_result,
});
export default connect(mapStateToProps)(Statistics);
