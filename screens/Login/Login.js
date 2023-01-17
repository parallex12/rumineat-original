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
import IconCard from "./components/IconCard";
import { login } from "../../state-management/actions/auth/FirebaseAuthActions"
const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [securePass, setSecurePass] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    setLoading(true);
    props?.login({ email, password }, setLoading);
  };

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
          <Text style={styles.Title}>Sign in to you account</Text>
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
          <TextField
            placeholder="Password"
            secureTextEntry={securePass}
            onChangeText={(val) => setPassword(val)}
            onClick={() => setSecurePass(!securePass)}
            Icon={
              <Ionicons
                name="eye"
                size={rf(20)}
                color={appTheme?.primaryBackroundLigh}
              />
            }
          />
          <View style={styles.ForgotWrapper}>
            <TouchableOpacity
              onPress={() => props?.navigation.navigate("ForgetPassword")}
            >
              <Text style={styles.ForgotTxt}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <Button
            Title={
              loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                "Login"
              )
            }
            onPress={() => !loading && onLogin()}
          />
        </View>
        <View style={styles.OrWrapper}>
          <Text style={styles.OrTxt}>OR</Text>
        </View>
        <View style={styles.IconsWrapper}>
          <IconCard Img LogoImg={require("../../assets/Photos/FbImg.png")} />
          <IconCard
            Img
            LogoImg={require("../../assets/Photos/GoogleImg.png")}
          />
          <IconCard />
        </View>
        <View style={styles.DiscriptionWrapper}>
          <Text style={styles.DiscpTxt}>Don’t have an account ? </Text>
          <TouchableOpacity
            onPress={() => props?.navigation.navigate("SignUp")}
          >
            <Text style={styles.DiscpTxt}>Sign Up</Text>
          </TouchableOpacity>
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
    height: hp("48%"),
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: rf(20),
    fontFamily: "MB",
    color: appTheme?.textLight,
    marginBottom: hp("5%"),
  },
  ForgotWrapper: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: hp("5%"),
  },
  ForgotTxt: {
    fontSize: rf(13),
    fontFamily: "MB",
    color: appTheme?.textLight,
  },
  OrWrapper: {
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("3%"),
  },
  OrTxt: {
    fontFamily: "MB",
    fontSize: rf(17),
    color: appTheme?.textLight,
  },
  IconsWrapper: {
    width: wp("90%"),
    height: hp("10%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  DiscriptionWrapper: {
    width: wp("90%"),
    height: hp("12%"),
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
export default connect(mapStateToProps, { login })(Login);
