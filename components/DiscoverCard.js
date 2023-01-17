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
import { appTheme } from "../constants/Theme";
import { Entypo } from "@expo/vector-icons";

const DiscoverCard = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <View style={styles.Img}>
        {loading && (
          <ActivityIndicator
            style={{ position: "absolute" }}
            size="large"
            color="#222"
          />
        )}
        <Image
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          onLoadEnd={() => setLoading(false)}
          source={{ uri: props?.data?.image_url }}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.DetailWrapper}>
        <View style={styles.DetailWrapperInner1}>
          <Text style={styles.Font1}>{props?.data?.name}</Text>
          <Text style={styles.Font2}>{props?.data?.vicinity}</Text>
        </View>
        <View style={styles.DetailWrapperInner2}>
          <View style={styles.StarIconsRow}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <Entypo
                  name="star"
                  size={rf(14)}
                  color={props?.data?.rating >= index + 1 ? "#e9d700" : "grey"}
                  key={index}
                />
              );
            })}
          </View>
          <Text style={styles.Font3}>5 Miles away</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("40%"),
    borderRadius: 10,
    backgroundColor: appTheme?.primaryBackroundLigh,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    alignItems: "center",
    justifyContent: "space-around",
  },
  Img: {
    width: "90%",
    height: "65%",
    borderRadius: 10,
    overflow: "hidden",
    top: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  DetailWrapper: {
    width: "90%",
    height: "23%",
  },
  Font1: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textGrey,
  },
  Font2: {
    fontFamily: "PSB",
    fontSize: rf(10),
    color: appTheme?.textLightGrey,
    top: -3,
  },
  DetailWrapperInner1: {
    flex: 0.6,
    justifyContent: "center",
  },
  DetailWrapperInner2: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  StarIconsRow: {
    flexDirection: "row",
  },
  Font3: {
    fontFamily: "PM",
    fontSize: rf(13),
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(DiscoverCard);
