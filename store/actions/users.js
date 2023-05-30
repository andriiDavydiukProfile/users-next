import Const from "@/config/const";

export const fetchUsers =  (serverData) => (dispatch) => {
  if(serverData) {
    dispatch({type: Const.users.load});
    dispatch({
      type: Const.users.success,
      users: serverData
    })
  } else {
    dispatch({type: Const.users.load});
    fetch("api/users").then(res => res.json()).then(({users}) => dispatch({
      type: Const.users.success,
      users
    }));
  }
};
