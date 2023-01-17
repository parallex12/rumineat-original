import {
  DO_LOGIN,
  GET_ERRORS,
  DO_LOGOUT,
  GET_USER_DATA,
  DO_SIGNUP,
  GET_USER_DETAILS,
} from "../../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const register = (data, setLoading) => async (dispatch) => {
  const auth = getAuth();
  try {
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then(async (userCredential) => {
        const db = getFirestore();
        const user = userCredential.user;
        await setDoc(doc(db, "users", user?.uid), data)
          .then((res) => {
            alert("Welcome !!");
          })
          .catch((error) => {
            setLoading(false);
            const errorMessage = error.message;
            dispatch({ type: GET_ERRORS, payload: errorMessage });
            console.log("error" + errorMessage);
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage)
        dispatch({ type: GET_ERRORS, payload: errorMessage });
        let err = errorMessage.indexOf("/");
        let fErr = errorMessage.slice(err + 1, errorMessage.length - 2);
        if (fErr == "email-already-in-use") {
          alert("Email already in use");
        }
      });
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
    console.log(e.message)
  }
};
export const login = (data, setLoading) => async (dispatch) => {
  try {
    const auth = getAuth();
    const db = getFirestore();
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        dispatch({ type: GET_ERRORS, payload: errorMessage });
        alert("Email or password is incorrect !");
      });
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const SignOut = (data, setLoading) => async (dispatch) => {
  try {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const DeleteAccount = (setLoading) => async (dispatch) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    let id = user?.uid;
    const db = getFirestore();
   
    deleteUser(user)
      .then(async () => {
        await deleteDoc(doc(db, "users", id))
          .then((res) => {
            setLoading(false);
            alert("Cuenta borrada");
          })
          .catch((error) => {
            setLoading(false);
            dispatch({ type: GET_ERRORS, payload: e.message });
          });
      })
      .catch((error) => {
        setLoading(false);
        dispatch({ type: GET_ERRORS, payload: e.message });
      });
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const getUserDetails = (id, setLoading) => async (dispatch) => {
  try {
    const db = getFirestore();
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLoading(false);
      dispatch({ type: GET_USER_DETAILS, payload: docSnap.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false);
    }
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const updateAccountType =
  (id, setLoading, navigation) => async (dispatch) => {
    try {
      console.log(id);
      const db = getFirestore();
      const washingtonRef = doc(db, "users", id);
      await updateDoc(washingtonRef, {
        accountType: "old",
      })
        .then(async (res) => {
          const docRef = doc(db, "users", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setLoading(false);
            dispatch({ type: GET_USER_DETAILS, payload: docSnap.data() });
            navigation.navigate("Home");
          }
        })
        .catch((e) => {
          setLoading(false);
          dispatch({ type: GET_ERRORS, payload: e.message });
        });
    } catch (e) {
      setLoading(false);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  };
