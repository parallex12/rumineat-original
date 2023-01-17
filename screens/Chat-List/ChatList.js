import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { appTheme } from "../../constants/Theme";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import ChatCard from "./components/ChatCard";
import BottomMenu from "../../components/BottomMenu";
const ChatList = (props) => {
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
        <View style={styles.IconsWrapper}>
          <TouchableOpacity style={styles.NotificationIcon}>
            <MaterialCommunityIcons
              name="bell"
              size={rf(20)}
              color={appTheme?.primaryBackroundLigh}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="md-search-sharp"
              size={rf(20)}
              color={appTheme?.primaryBackroundLigh}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleRow}>
          <Text style={styles.Title}>Messages</Text>
        </View>
      </View>
      {/* Chat Cards Wrapper start here */}
      <View style={styles.ChatCardsWrapper}>
        <ScrollView>
          <View style={styles.WrapperCards}>
            <ChatCard onPress={() => props?.navigation.navigate("Chat")} />
            <ChatCard onPress={() => props?.navigation.navigate("Chat")} />
            <ChatCard onPress={() => props?.navigation.navigate("GroupChat")} />
            <ChatCard onPress={() => props?.navigation.navigate("Chat")} />
            <ChatCard />
            <ChatCard />
          </View>
        </ScrollView>
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
  HeaderWrapper: {
    width: wp("100%"),
    height: hp("25%"),
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  ChatCardsWrapper: {
    width: wp("100%"),
    height: hp("85%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  IconsWrapper: {
    width: "90%",
    height: "30%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  NotificationIcon: {
    right: 10,
  },
  TitleRow: {
    width: "90%",
    height: "20%",
    justifyContent: "center",
  },
  Title: {
    fontSize: rf(22),
    fontFamily: "PB",
    color: appTheme?.primaryBackroundLigh,
  },
  WrapperCards: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("12%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(ChatList);
