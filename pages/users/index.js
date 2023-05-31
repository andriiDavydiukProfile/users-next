import Head from "next/head";

import UsersComponent from "../../components/users";
import {wrapper} from "@/store/store";
import Const from "@/config/const";

const UsersPage = () => {
    return (
        <>
            <Head>
                <title>Users</title>
                <meta name="description" content=''/>
                <meta name="keywords" content='' />
            </Head>

            <div>
                <UsersComponent/>
            </div>
        </>
    );
};


export const getServerSideProps = wrapper.getServerSideProps(store  => {
    const serverUsers =  [{ id:2 }, {id:22}, {id:222}, {id:2222}];
    store.dispatch({
        type: Const.users.success,
        users: serverUsers
    })
});

export default UsersPage



