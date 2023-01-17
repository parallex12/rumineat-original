import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../constants/Theme";
import { AntDesign } from "@expo/vector-icons";
import Header from "./components/Header";
import EditProfileField from "./components/EditProfileField";
import GlobalButton from "../../components/GlobalButton";

const EditProfile = (props) => {
  const [fisrtName, setFirstName] = useState();
  const [lasttName, setLasttName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  const [about, setAbout] = useState();

  return (
    <View style={styles.container}>
      {/* Header start here */}
      <View style={styles.HeaderWrapper}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(129, 106, 236, 1)", "rgba(191, 112, 240, 1)"]}
          start={[0.5, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          style={styles.background}
        />
        <View style={styles.BackIconRow}>
          <TouchableOpacity onPress={() => props?.navigation.goBack()}>
            <AntDesign
              name="left"
              size={rf(18)}
              color={appTheme?.primaryBackroundLigh}
            />
          </TouchableOpacity>
        </View>
        <Header />
      </View>
      <View style={styles.Wrapper}>
        <View style={styles.FullAndLastNameRow}>
          <EditProfileField
            Title="First Name"
            placeholder="Micheal Jackson"
            onChangeText={(val) => setFirstName(val)}
          />
          <EditProfileField
            Title="Last Name"
            placeholder="Micheal Jackson"
            onChangeText={(val) => setLasttName(val)}
          />
        </View>
        <View style={styles.Wrapper2}>
          <EditProfileField
            Title="Email"
            placeholder="example@gmail.com"
            width={wp("95%")}
            onChangeText={(val) => setEmail(val)}
          />
          <EditProfileField
            Title="Location"
            placeholder="New yor , usa "
            width={wp("95%")}
            onChangeText={(val) => setLocation(val)}
          />
          <EditProfileField
            Title="Phone"
            placeholder="+15865336"
            width={wp("95%")}
            keyboardType="number-pad"
            onChangeText={(val) => setPhone(val)}
          />
        </View>
        <View style={styles.AboutWrapper}>
          <Text style={styles.AboutTxt}>About</Text>
          <View style={styles.AboutField}>
            <TextInput
              style={styles.AboutTextField}
              placeholder="Lorem ipsum"
              placeholderTextColor={appTheme?.textLightGrey}
              multiline={true}
              onChangeText={(val) => setAbout(val)}
            />
          </View>
        </View>
        <View style={styles.ButtonRow}>
          <GlobalButton
            Title="Update"
            onPress={() => props?.navigation.navigate("Guide1")}
          />
        </View>
        <View style={styles.CopyRightRow}>
          <Text style={styles.CopyRightTxt}>Copyright@examplee 2022</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  HeaderWrapper: {
    width: wp("100%"),
    height: hp("30%"),
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  Wrapper: {
    width: wp("100%"),
    height: hp("80%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  Wrapper2: {
    width: wp("100%"),
    alignItems: "flex-end",
  },

  BackIconRow: {
    width: wp("90%"),
    marginTop: hp("5%"),
    marginBottom: 10,
  },
  FullAndLastNameRow: {
    width: wp("90%"),
    height: hp("12%"),
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  AboutWrapper: {
    width: wp("90%"),
    height: hp("16%"),
    justifyContent: "space-around",
  },
  AboutField: {
    width: "95%",
    height: "80%",
    borderRadius: 8,
    backgroundColor: appTheme?.TextFieldProfileBg,
  },
  AboutTextField: {
    width: "100%",
    padding: 5,
  },
  AboutTxt: {
    fontFamily: "PM",
    fontSize: rf(12),
    color: appTheme?.textDark,
  },
  ButtonRow: {
    width: wp("90%"),
    height: hp("15%"),
    alignItems: "center",
    justifyContent: "center",
  },
  CopyRightRow: {
    flex: 1,
    alignItems: "center",
  },
  CopyRightTxt: {
    fontFamily: "PR",
    fontSize: rf(13),
    color: appTheme?.textGrey,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(EditProfile);
