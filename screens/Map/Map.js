import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import Header from "../../components/Header";
import BottomMenu from "../../components/BottomMenu";
import { appTheme } from "../../constants/Theme";
import * as Animatable from "react-native-animatable";
import PartyComponent from "./components/PartyComponent";
import FilterComponent from "./components/FilterComponent";
import FoodComponent from "./components/FoodComponent";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Map = (props) => {
  const [activeOption, setActiveOption] = useState("food");
  const [sliderStatus, setSliderStatus] = useState("close");
  const [showFilterpPopup, setShowFilterpPopup] = useState(false);

  const AnimationRef = useRef(null);

  // useEffect(() => {
  //   if (AnimationRef && activeOption == "party") {
  //     AnimationRef.current.slideInLeft(500);
  //   } else if (AnimationRef && activeOption != "selecting") {
  //     AnimationRef.current.slideOutLeft(500);
  //     if (activeOption == "selecting") {
  //       console.log(activeOption);
  //       AnimationRef.current.slideInLeft(500);
  //     }
  //   }
  // }, [activeOption]);

  const onSelecting = async (type) => {
    if (sliderStatus == "close") {
      AnimationRef.current.slideOutLeft(500);
    } else {
      AnimationRef.current.slideInLeft(500);
    }
    if (sliderStatus == "open") {
      setActiveOption(type);
    }
    setSliderStatus(sliderStatus == "open" ? "close" : "open");
  };

  console.log(showFilterpPopup);
  console.log(activeOption);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.MapViewWrapper}
      />
      <Header style={{ position: "absolute" }} navigation={props?.navigation} />
      <View style={styles.SearchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          textInputProps={{
            placeholderTextColor: "#222",
            returnKeyType: "search",
          }}
          minLength={2}
          autoFocus={false}
          onPress={(data, details = null) => {
            let loc = {
              latitude: details?.geometry?.location?.lat,
              longitude: details?.geometry?.location?.lng,
            };
            reverseLocation(loc);
          }}
          // currentLocation
          enableHighAccuracyLocation
          query={{
            key: "AIzaSyA6surUeMftKcbcklIt-UO_lTaQBx7B0u0",
            language: "en",
          }}
          returnKeyType={"default"}
          fetchDetails={true}
          styles={{
            textInputContainer: styles.SearchField,
            textInput: {
              width: wp("50%"),
              height: hp("5%"),
              color: "#5d5d5d",
              fontSize: rf(14),
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
        />
      </View>
      <Animatable.View ref={AnimationRef} style={styles.animateContainer}>
        {activeOption != "filter" && (
          <>
            {activeOption == "food" ? (
              <>
                <FoodComponent
                  filterPop={activeOption}
                  showFilterpPopup={showFilterpPopup}
                  setShowFilterpPopup={setShowFilterpPopup}
                  onPress={() => onSelecting("food")}
                />
                <PartyComponent
                  filterPop={activeOption}
                  showFilterpPopup={showFilterpPopup}
                  setShowFilterpPopup={setShowFilterpPopup}
                  onPress={() => onSelecting("party")}
                />
              </>
            ) : (
              <>
                <PartyComponent
                  filterPop={activeOption}
                  showFilterpPopup={showFilterpPopup}
                  setShowFilterpPopup={setShowFilterpPopup}
                  onPress={() => onSelecting("party")}
                />
                <FoodComponent
                  filterPop={activeOption}
                  showFilterpPopup={showFilterpPopup}
                  setShowFilterpPopup={setShowFilterpPopup}
                  onPress={() => onSelecting("food")}
                />
              </>
            )}
          </>
        )}
      </Animatable.View>
      <BottomMenu navigation={props?.navigation} />
      <FilterComponent
        setActiveOption={setActiveOption}
        activeOption={activeOption}
        setShowFilterpPopup={setShowFilterpPopup}
        showFilterpPopup={showFilterpPopup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MapViewWrapper: {
    width: "100%",
    height: "100%",
  },
  Wrapper: {
    width: wp("100%"),
    height: hp("100%"),
    position: "absolute",
    alignItems: "center",
  },
  SearchBar: {
    width: "90%",
    minHeight: hp("5%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "absolute",
    marginTop: hp("1%"),
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    zIndex: 9999999999999999,
    top: hp("15%"),
    alignSelf: "center",
  },
  SearchField: {
    width: "100%",
    // minHeight: "100%",
  },
  SearchField: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    fontFamily: "PM",
    fontSize: rf(14),
  },
  animateContainer: {
    width: wp("112%"),
    height: hp("10%"),
    zIndex: 99999999999999,
    position: "absolute",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    top: hp("45%"),
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(Map);
