import Const from "@/config/const";

export const fetchUsers =  () => (dispatch) => {
  dispatch({type: Const.users.load});
  fetch("api/users").then(res => res.json()).then(({users}) => dispatch({
    type: Const.users.success,
    users
  }));
};
