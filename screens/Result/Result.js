import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  ActivityIndicator,
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
import DiscoverCard from "../../components/DiscoverCard";
import BottomMenu from "../../components/BottomMenu";
import {
  getDecisions,
  getResult,
} from "../../state-management/actions/Features/Actions";
import { LinearGradient } from "expo-linear-gradient";
const Result = (props) => {
  let id = props?.route?.params?.id;
  const [loading, setLoading] = useState(true);
  const [finalResult, setFinalResult] = useState(null);
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    props?.getResult(id, setLoading);
  }, []);

  useEffect(() => {
    if (props?.get_result != null) {
      setDecisions(props?.get_result);
    }
  }, [props?.get_result]);

  useEffect(() => {
    if (props?.get_result != null) {
      let result = props?.get_places?.places?.filter((e) => {
        return e.id == props?.get_result?.result?.place_id;
      });
      setFinalResult(result[0]);
    }
  }, [props?.get_result]);


  const onMapOpen = () => {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });
    // latitude: JSON.parse(data?.location)?.latitude,
    // longitude: JSON.parse(data?.location)?.longitude,
    const latLng = `${40.7128},${-74.006}`;
    const label = "New York";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header navigation={props?.navigation} />
      <View style={styles.TitleRow}>
        <Text style={styles.Title}>Your Pick</Text>
      </View>
      {loading ? (
        <ActivityIndicator color="#222" size="large" />
      ) : (
        <View style={styles.CardRow}>
          {/* {decisions?.map((item, index) => {
          })} */}
          {finalResult != null && <DiscoverCard data={finalResult} />}
        </View>
      )}
      {/* Buttons Row start here */}
      <View style={styles.BtnRow}>
        <GlobalButton
          Title="Statistics"
          onPress={() => props?.navigation.navigate("Statistics")}
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
    alignItems: "center",
  },
  Title: {
    fontFamily: "PEB",
    fontSize: rf(20),
    color: appTheme?.textDark,
  },
  CardRow: {
    width: wp("100%"),
    height: hp("40%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("10%"),
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
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_decisions: state.main.get_decisions,
  get_result: state.main.get_result,
  get_places: state.main.get_places,
});
export default connect(mapStateToProps, { getDecisions, getResult })(Result);
