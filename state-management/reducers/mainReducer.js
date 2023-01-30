import {
  DO_LOGIN,
  DO_LOGOUT,
  DO_SIGNUP,
  GET_ALL_MATCHES,
  GET_USER_DETAILS,
  GET_MY_MATCHES,
  GET_MY_GROUPS,
  GET_MESSAGES,
  CURRENT_SESSION,
  CURRENT_USER,
  CURRENT_SESSION_TOKEN,
  GET_PLACES,
  GET_DECISIONS,
  GET_SESSION_STARTDATA,
  GET_RESULT,
} from "../types/types";
const initialState = {
  login_details: null,
  logout: null,
  signup_details: null,
  get_user_details: null,
  get_all_matches: null,
  get_my_matches: null,
  get_my_groups: null,
  current_session: null,
  current_session_token: null,
  current_user: null,
  get_places: null,
  get_decisions: null,
  get_session_startdata: null,
  get_result:null
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        login_details: action.payload,
      };
    case GET_RESULT:
      return {
        ...state,
        get_result: action.payload,
      };
    case GET_SESSION_STARTDATA:
      return {
        ...state,
        get_session_startdata: action.payload,
      };
    case CURRENT_SESSION:
      return {
        ...state,
        current_session: action.payload,
      };
    case GET_DECISIONS:
      return {
        ...state,
        get_decisions: action.payload,
      };
    case GET_PLACES:
      return {
        ...state,
        get_places: action.payload,
      };
    case CURRENT_SESSION_TOKEN:
      return {
        ...state,
        current_session_token: action.payload,
      };
    case CURRENT_USER:
      return {
        ...state,
        current_user: action.payload,
      };
    case DO_LOGOUT:
      return {
        ...state,
        logout: action.payload,
      };
    case DO_SIGNUP:
      return {
        ...state,
        signup_details: action.payload,
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        get_user_details: action.payload,
      };
    case GET_ALL_MATCHES:
      return {
        ...state,
        get_all_matches: action.payload,
      };
    case GET_MY_MATCHES:
      return {
        ...state,
        get_my_matches: action.payload,
      };
    case GET_MY_GROUPS:
      return {
        ...state,
        get_my_groups: action.payload,
      };
    case GET_MESSAGES:
      return {
        ...state,
        get_messages: action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
