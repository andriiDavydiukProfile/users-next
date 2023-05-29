import UserComponent from "../../../components/user";
import Head from "next/head";

const UserPage = () => {
    return (
        <>
            <Head>
                <title>User</title>
                <meta name="description" content=''/>
                <meta name="keywords" content='' />
            </Head>

            <UserComponent/>
    </>
    )
};

export default UserPage;