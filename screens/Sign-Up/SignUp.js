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
import { register } from "../../state-management/actions/auth/FirebaseAuthActions";

const SignUp = (props) => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [securePass, setSecurePass] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if (name != null && phone != null && email != null && password != null) {
      if (password == confirmPassword) {
        setLoading(true);
        props?.register({ email, password }, setLoading);
      } else {
        alert("Password doesn't match");
      }
    } else {
      alert("Fill all the details");
    }
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
          <View style={styles.TitleWrapper}>
            <Text style={styles.Title}>Sign Up</Text>
          </View>
          <TextField placeholder="Name" onChangeText={(val) => setName(val)} />
          <TextField
            placeholder="Phone"
            secureTextEntry={false}
            onChangeText={(val) => setPhone(val)}
          />
          <TextField
            placeholder="Email"
            secureTextEntry={false}
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
          <TextField
            placeholder="Confirm Password"
            secureTextEntry={securePass}
            onChangeText={(val) => setConfirmPassword(val)}
            onClick={() => setSecurePass(!securePass)}
            Icon={
              <Ionicons
                name="eye"
                size={rf(20)}
                color={appTheme?.primaryBackroundLigh}
              />
            }
          />

          <View style={{ marginTop: hp("3%") }}>
            <Button
              Title={
                loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  "Sign Up"
                )
              }
              onPress={() => !loading && onSubmit()}
            />
          </View>
        </View>

        <View style={styles.DiscriptionWrapper}>
          <Text style={styles.DiscpTxt}>Don’t have an account ? </Text>
          <TouchableOpacity>
            <Text style={styles.DiscpTxt}>Sign in</Text>
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
    height: hp("60%"),
    alignItems: "center",
    justifyContent: "center",
  },
  TitleWrapper: {
    width: wp("90%"),
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
export default connect(mapStateToProps, { register })(SignUp);
