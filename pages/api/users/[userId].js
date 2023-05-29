
const handler = async (req, res) => {
    const { userId } = req.query;
    try {
        // call to Ruby API Server
        // const { data } = await request('https://purple/api/user/id');
        return res.status(200).send({ user: { id: userId, name: "User with name" + userId} });
    } catch (err) {
        return res.status(500).send({ data: null, error: `error` });
    }
};

export default handler;
