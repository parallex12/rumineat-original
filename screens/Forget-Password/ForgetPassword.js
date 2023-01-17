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
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { appTheme } from "../../constants/Theme";
import TextField from "../../components/TextField";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
const ForgetPassword = (props) => {
  const [email, setEmail] = useState();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Photos/BgImg.png")}
        resizeMode="cover"
        style={styles.BgWrapper}
      >
        <View style={styles.Logo}>
          <Image
            source={require("../../assets/Photos/TitleLogo.png")}
            resizeMode="contain"
            style={{ width: "50%", height: "50%" }}
          />
        </View>
        <View style={styles.FirstRow}>
          <View style={styles.TitleWrapper}>
            <Text style={styles.Title}>Recover account</Text>
          </View>

          <TextField
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            Icon={
              <MaterialIcons
                name="mail-outline"
                size={rf(20)}
                color={appTheme?.primaryBackroundLigh}
              />
            }
          />

          <View style={{ marginTop: hp("3%") }}>
            <Button Title="Recover" />
            <Button Title="Back to login" />
          </View>
        </View>

        <View style={styles.LastRow}>
          <View style={styles.LastRowWrapper}>
            <TouchableOpacity>
              <Text style={styles.LastRowTxt}>Copyright@2022</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props?.navigation.navigate("PrivacyPolicy")}
            >
              <Text style={styles.LastRowTxt}>Privac Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  BgWrapper: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  Logo: {
    width: wp("90%"),
    height: hp("17%"),
    justifyContent: "center",
  },
  FirstRow: {
    width: wp("90%"),
    height: hp("60%"),
    alignItems: "center",
    justifyContent: "center",
  },
  TitleWrapper: {
    width: wp("90%"),
    alignItems: "center",
  },
  Title: {
    fontSize: rf(20),
    fontFamily: "MB",
    color: appTheme?.textLight,
    marginBottom: hp("5%"),
  },

  DiscriptionWrapper: {
    width: wp("90%"),
    height: hp("15%"),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  DiscpTxt: {
    fontFamily: "MB",
    fontSize: rf(13),
    color: appTheme?.textLight,
  },
  LastRow: {
    flex: 1,
    justifyContent: "flex-end",
  },
  LastRowWrapper: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp("2%"),
  },
  LastRowTxt: {
    fontSize: rf(10),
    fontFamily: "MB",
    color: appTheme?.textLight,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ForgetPassword);
