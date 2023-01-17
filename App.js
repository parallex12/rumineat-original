import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { AppNavigator } from "./routes/AppNavigator";
import { Provider } from "react-redux";
import store from "./state-management/store";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebaseConfig.js";
import { useFonts } from "expo-font";
import { UnAuthNavigator } from "./routes/UnAuthNavigator";
import axios from "axios";
export default function App() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const db = getFirestore(app);
      const storage = getStorage(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setStatus(true);
        } else {
          setStatus(false);
        }
      });
    }
  }, []);
  axios.defaults.baseURL = "https://rumineat-api.herokuapp.com";
  const [fontsLoaded] = useFonts({
    MB: require("./assets/Fonts/Montserrat-Bold.ttf"),
    MM: require("./assets/Fonts/Montserrat-Medium.ttf"),
    PEB: require("./assets/Fonts/Poppins-ExtraBold.ttf"),
    PSB: require("./assets/Fonts/Poppins-SemiBold.ttf"),
    PM: require("./assets/Fonts/Poppins-Medium.ttf"),
    PB: require("./assets/Fonts/Poppins-Bold.ttf"),
    PR: require("./assets/Fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {status ? <AppNavigator /> : <UnAuthNavigator />}
    </Provider>
  );
}
