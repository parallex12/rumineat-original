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

const StatisticCard = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props?.bgColor }]}>
      <View style={styles.Row1}>
        <Text style={styles.Font}>{props?.Num}</Text>
      </View>
      <View style={styles.Row2}>
        <Text style={styles.Font2}>{props?.place}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("6%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Row1: {
    width: "56%",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: wp("9%"),
  },
  Row2: {
    width: "44%",
    height: "100%",
    justifyContent: "center",
  },
  Font: {
    fontSize: rf(13),
    fontFamily: "PM",
  },
  Font2: {
    fontSize: rf(14),
    fontFamily: "PSB",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(StatisticCard);
