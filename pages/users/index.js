import Head from "next/head";

import UsersComponent from "../../components/users";

const UsersPage = () => {

    return (
        <>
            <Head>
                <title>Users</title>
                <meta name="description" content=''/>
                <meta name="keywords" content='' />
            </Head>

            <UsersComponent/>
        </>
    );
};


export default UsersPage



