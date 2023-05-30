import Head from "next/head";

import UsersComponent from "../../components/users";

const UsersPage = (props) => {

    return (
        <>
            <Head>
                <title>Users</title>
                <meta name="description" content=''/>
                <meta name="keywords" content='' />
            </Head>

            <UsersComponent/>
            <p>This data from the SSR: <b>{props.data}</b></p>
        </>
    );
};


export async function getServerSideProps() {

    // Make an API request to fetch data
    // const response = await axios.get('https://purple.api.server');
    // const data = response.data;

    return {
        props: {
            data: "data"
        }
    };
}


export default UsersPage



