import * as LoginAction from '../actions/ActionTypes';
import initialState from './InitialState';

export function AuthenticateReducer(state = initialState.Login, action) {
    switch (action.type) {
      case LoginAction.RESTORE_TOKEN:
        return {
          ...state,
          userToken: action.token,
          isLoading: false
        };
      case LoginAction.SIGN_IN:
        return {
          ...state,
          isSignOut: false,
          userToken: action.token
        };
      case LoginAction.SIGN_OUT:
        return {
          ...state,
          isSignOut: true,
          userToken: null
        };
      default:
        return state;
    }
}
