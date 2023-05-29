import createReducer from "@/config/create_reducer";
import Const from "@/config/const";

const defaultState = {
  loading: false,
  collection: []
};

export default createReducer(defaultState, {
  [Const.users.load]: (state) => ({
    ...state,
    loading: true
  }),
  [Const.users.success]: (state, { users }) => ({
    collection: users,
    loading: false
  })
});
