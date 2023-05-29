import createReducer from "@/config/create_reducer";
import Const from "@/config/const";

const defaultState = {
  loading: false,
  id: null,
  user: {}
};

export default createReducer(defaultState, {
  [Const.user.load]: (state, { id }) => ({
    ...state,
    id,
    loading: true
  }),
  [Const.user.success]: (state, { user, id }) => {
    if (state.id !== id) {
      return state;
    }
    return ({
      ...state,
      user,
      loading: false
    });
  }
});
