import React, { useState, useEffect } from "react";
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
import UsersCard from "../Dashboard/components/UsersCard";
import DiscoverCard from "../../components/DiscoverCard";
import CardsSwipe from "react-native-cards-swipe";
import {
  getPlaces,
  onSwipe,
} from "../../state-management/actions/Features/Actions";

const Discover = (props) => {
  let data = props?.route?.params?.data;
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    props?.getPlaces(data?.jwtDecode?.session_id, setLoading);
  }, []);

  useEffect(() => {
    if (props?.get_places != null) {
      setPlaces(props?.get_places?.places);
    }
  }, [props?.get_places]);

  const onSwipedRight = (val) => {
    let placeData = places[val];
    let id = data?.jwtDecode?.session_id;
    let random = Math.random() * (99999 - 1000) + 1000;
    let data2 = {
      duration_ms: random,
      place_id: placeData?.id,
      selected: true,
    };
    props?.onSwipe(id, data2, data?.token);
  };

  const onSwipedLeft = (val) => {
    let placeData = places[val];
    let random = Math.random() * (99999 - 1000) + 1000;
    let id = data?.jwtDecode?.session_id;
    let data2 = {
      duration_ms: random,
      place_id: placeData?.id,
      selected: false,
    };
    props?.onSwipe(id, data2, data?.token);
  };

  return (
    <View style={styles.container}>
      <Header navigation={props?.navigation} />
      <View style={styles.TitleRow}>
        <Text style={styles.Title}>Discover</Text>
      </View>
      <View style={styles.CardsWrapper}>
        <UsersCard
          Title="Users"
          Num={data?.sessionData?.users?.length}
          Img
          IconImg={require("../../assets/Photos/DashboardIcon1.png")}
        />
        <UsersCard
          Title="Places"
          Num={data?.sessionData?.places?.length}
          Img
          IconImg={require("../../assets/Photos/DashboardIcon1.png")}
        />
        <UsersCard Title="Price" Num={data?.sessionData?.price_levels} />
        <UsersCard
          Title="Max Distance"
          Num={data?.sessionData?.range}
          Img
          IconImg={require("../../assets/Photos/DashboardIcon3.png")}
        />
      </View>
      {loading ? (
        <ActivityIndicator color="#222" size="large" />
      ) : (
        <View style={styles.CardRow}>
          <CardsSwipe
            cards={places}
            cardContainerStyle={styles.cardContainer}
            renderCard={(card) => <DiscoverCard data={card} />}
            onNoMoreCards={() =>
              props?.navigation.navigate("Result", {
                id: data?.jwtDecode?.session_id,
              })
            }
            loop={false}
            onSwipedLeft={(val) => onSwipedLeft(val)}
            onSwipedRight={(val) => onSwipedRight(val)}
          />
        </View>
      )}
      <Text style={styles.SwipeTxt}>Swipe Right to dislike</Text>
      {/* <View style={styles.BtnRow}>
        <GlobalButton
          Title="Next"
          onPress={() => props?.navigation.navigate("Result")}
        />
      </View> */}
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
    paddingHorizontal: wp("5%"),
  },
  CardRow: {
    width: wp("100%"),
    height: hp("50%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_places: state.main.get_places,
});
export default connect(mapStateToProps, { getPlaces, onSwipe })(Discover);
