import React, { useState, useEffect } from "react";
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
  Share,
  RefreshControl,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Dashboardheader from "./components/Dashboardheader";
import { appTheme } from "../../constants/Theme";
import UsersCard from "./components/UsersCard";
import BottomMenu from "../../components/BottomMenu";
import { AntDesign } from "@expo/vector-icons";
import OnlineFriendCard from "./components/OnlineFriendCard";
import { dummyData } from "../../constants/CardData";
import * as Location from "expo-location";
import {
  createSession,
  addCurrentUserDetailsFromRuby,
  addCurrentSessionDetailsFromRuby,
} from "../../state-management/actions/Features/Actions";
import jwt_decode from "jwt-decode";

const Dashboard = (props) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentSession, setCurrentSession] = useState([]);
  const [currentSessionTokenDecode, setCurrentSessionTokenDecode] =
    useState(null);
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location != null && props?.current_session_token == null) {
      let data = {
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        range: 3,
        price_level: ["$$"],
      };
      props?.createSession(data, setLoading);
    }
  }, [location]);

  useEffect(() => {
    try {
      if (props?.current_session_token != null) {
        var decoded = jwt_decode(props?.current_session_token?.token);
        if (decoded) {
          setLoading(true);
          setCurrentSessionTokenDecode(decoded);
          props?.addCurrentUserDetailsFromRuby(decoded?.id, setLoading);
          props?.addCurrentSessionDetailsFromRuby(
            decoded?.session_id,
            setLoading
          );
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  }, [props?.current_session_token]);

  const onRefresh = () => {
    var decoded = jwt_decode(props?.current_session_token?.token);
    setRefreshing(true);
    setCurrentSessionTokenDecode(decoded);
    props?.addCurrentSessionDetailsFromRuby(decoded?.session_id, setRefreshing);
  };

  // console.log(currentSession?.access_code);
  useEffect(() => {
    if (props?.current_user != null) {
      setCurrentUser(props?.current_user);
    }
    if (props?.current_session != null) {
      setCurrentSession(props?.current_session);
    }
  }, [props?.current_user, props?.current_session]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey open this link to join this session!\nhttps://www.rumineat.com/join?session_id="${currentSession?.access_code}"`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onGoPress = () => {
    let data = {
      jwtDecode: currentSessionTokenDecode,
      sessionData: currentSession,
      token:props?.current_session_token?.token
    };
    props?.navigation.navigate("Guide1", {
      data: data,
    });
  };
  return (
    <View style={styles.container}>
      <Header navigation={props?.navigation} />
      <Dashboardheader onSharePress={onShare} />
      {loading ? (
        <ActivityIndicator size="large" color="#222" />
      ) : (
        <>
          <View style={styles.CardsWrapper}>
            <UsersCard
              Title="Users"
              Num={currentSession?.users?.length}
              Img
              IconImg={require("../../assets/Photos/DashboardIcon1.png")}
            />
            <UsersCard
              Title="Places"
              Num={currentSession?.places?.length}
              Img
              IconImg={require("../../assets/Photos/DashboardIcon1.png")}
            />
            <UsersCard Title="Price" Num={currentSession?.price_levels} />
            <UsersCard
              Title="Max Distance"
              Num={currentSession?.range}
              Img
              IconImg={require("../../assets/Photos/DashboardIcon3.png")}
            />
          </View>
          <View style={styles.OnlineCardsWrapper}>
            <View style={styles.OnlineCardsWrapperHeader}>
              <Text style={styles.OnlineCardsWrapperTitile}>
                Online Friends
              </Text>
              <TouchableOpacity style={styles.AddFriendBtn}>
                <Text style={styles.AddFriendBtnTxt}>Add Friends</Text>
                <AntDesign
                  name="plus"
                  size={rf(15)}
                  color={appTheme?.primaryBackroundLigh}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.Wrapper}>
                {currentSession?.users?.map((item, index) => {
                  return <OnlineFriendCard key={index} data={item} />;
                })}
              </View>
            </ScrollView>
          </View>
        </>
      )}
      <BottomMenu onGoPress={onGoPress} navigation={props?.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme?.primaryBackroundLightGrey,
    alignItems: "center",
  },
  CardsWrapper: {
    width: wp("95%"),
    height: hp("10%"),
    borderRadius: 100,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: hp("2%"),
  },
  OnlineCardsWrapper: {
    width: wp("100%"),
    height: hp("70%"),
    backgroundColor: appTheme?.primaryBackroundLigh,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  OnlineCardsWrapperHeader: {
    width: "90%",
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("20%"),
  },
  AddFriendBtn: {
    width: "38%",
    height: "43%",
    borderRadius: 6,
    backgroundColor: appTheme?.primaryBackroundBlue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: wp("3%"),
  },
  OnlineCardsWrapperTitile: {
    fontFamily: "PEB",
    fontSize: rf(18),
    color: appTheme?.textGrey,
  },
  AddFriendBtnTxt: {
    fontFamily: "PEB",
    fontSize: rf(12),
    color: appTheme?.primaryBackroundLigh,
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  current_session: state.main.current_session,
  current_user: state.main.current_user,
  current_session_token: state.main.current_session_token,
});
export default connect(mapStateToProps, {
  createSession,
  addCurrentUserDetailsFromRuby,
  addCurrentSessionDetailsFromRuby,
})(Dashboard);
