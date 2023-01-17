import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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

const Guide2 = (props) => {
  const [loading, setLoading] = useState(false);
  let data = props?.route?.params?.data;
  return (
    <View style={styles.container}>
      <Header navigation={props?.navigation} />
      <View style={styles.TitleRow}>
        <Text style={styles.Title}>Guide</Text>
      </View>
      <View
        style={[
          styles.ImageWrapper,
          { alignItems: loading ? "center" : "flex-start" },
        ]}
      >
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
          source={require("../../assets/Photos/Swipe2.png")}
          resizeMode="contain"
          style={styles.Img}
        />
      </View>
      <Text style={styles.SwipeTxt}>Swipe Right to dislike</Text>
      <View style={styles.BtnRow}>
        <GlobalButton
          Title="Next"
          onPress={() => props?.navigation.navigate("Discover",{data:data})}
        />
      </View>
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
  ImageWrapper: {
    width: wp("100%"),
    height: hp("60%"),
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "85%",
    height: "100%",
  },
  BtnRow: {
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  SwipeTxt: {
    fontFamily: "PSB",
    fontSize: rf(16),
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Guide2);
