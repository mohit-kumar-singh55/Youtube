import { useSession } from "next-auth/react";
import axios from 'axios';

// let accessToken;
const { data: session } = useSession();

const getYTData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true&key=AIzaSyDAaMnN9r2CSrbOO7fYzClMt3vjikCFw8U`
    const { data } = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
        },
    });

    return data.items;
};


export default async (req, res) => {
    // const { data: session } = useSession();

    if (!session) {
        return res.status(401).end();
    }

    accessToken = session.user.accessToken;

    const data = await getYTData();

    res.status(200).json(data);
}