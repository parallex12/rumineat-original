import {
  DO_LOGIN,
  GET_ERRORS,
  DO_LOGOUT,
  GET_USER_DATA,
  DO_SIGNUP,
  GET_USER_DETAILS,
  GET_ALL_MATCHES,
  GET_MY_GROUPS,
  GET_MESSAGES,
  CURRENT_SESSION,
  CURRENT_USER,
  CURRENT_SESSION_TOKEN,
  GET_PLACES,
  GET_DECISIONS,
} from "../../types/types";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot } from "firebase/firestore";
import axios from "axios";

export const createSession = (data) => async (dispatch) => {
  try {
    axios
      .post("/sessions", data)
      .then((res) => {
        dispatch({
          type: CURRENT_SESSION_TOKEN,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const addCurrentUserDetailsFromRuby =
  (id, setLoading) => async (dispatch) => {
    try {
      axios
        .get(`/users/${id}`)
        .then((res) => {
          dispatch({
            type: CURRENT_USER,
            payload: res.data,
          });
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(false);
        });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  };

export const addCurrentSessionDetailsFromRuby =
  (id, setLoading) => async (dispatch) => {
    try {
      axios
        .get(`/sessions/${id}`)
        .then((res) => {
          dispatch({
            type: CURRENT_SESSION,
            payload: res.data,
          });
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(false);
        });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  };

export const getPlaces = (id, setLoading) => async (dispatch) => {
  try {
    axios
      .get(`/sessions/${id}/places`)
      .then((res) => {
        dispatch({
          type: GET_PLACES,
          payload: res.data,
        });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  } catch (e) {
    console.log(e.message);
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const onSwipe = (id, data, token) => async (dispatch) => {
  try {
    console.log(data);
    console.log(token);
    axios
      .post(`/sessions/${id}/decisions`, data, {
        headers: `Authorization: Bearer Token ${token}`,
      })
      .then((res) => {
        console.log("success");
      })
      .catch((e) => {
        console.log(e.message);
      });
  } catch (e) {
    console.log(e.message);

    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const getDecisions = (id, setLoading) => async (dispatch) => {
  try {
    axios
    .get(`/sessions/${id}/decisions`)
    .then((res) => {
      dispatch({
        type: GET_DECISIONS,
        payload: res.data,
      });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  } catch (e) {
    console.log(e.message);
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};
