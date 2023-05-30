import Head from "next/head";

import UsersComponent from "../../components/users";
import {useEffect} from "react";
import Const from "@/config/const";

const UsersPage = (props) => {

    return (
        <>
            <Head>
                <title>Users</title>
                <meta name="description" content=''/>
                <meta name="keywords" content='' />
            </Head>

            <UsersComponent serverData={props.data}/>
        </>
    );
};


export async function getServerSideProps() {

    // Make an API request to fetch data
    // const response = await axios.get('https://purple.api.server');
    // const data = response.data;

    return {
        props: {
            data: [{id: 1000000, serverUser: true}]
        }
    };
}


export default UsersPage



