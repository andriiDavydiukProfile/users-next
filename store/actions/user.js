import Const from "@/config/const";

export const fetchUser = (id) => (dispatch) => {
    dispatch({ type: Const.user.load, id });
    fetch(`/api/users/${ id }`).then(res => res.json()).then(({ user }) => dispatch({
        type: Const.user.success,
        user,
        id
    }));
};
