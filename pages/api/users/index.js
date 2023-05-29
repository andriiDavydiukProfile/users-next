import {request} from "../../../config/api";


const handler = async (req, res) => {
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
    try {
        // call to Ruby API Server
        // const { data } = await request('https://purple/api/users');
        return res.status(200).send({ users: users });
    } catch (err) {
        return res.status(500).send({ data: null, error: `error` });
    }
};

export default handler;
