
import { useLoaderData } from 'react-router-dom';

const UserDtails = () => {
    const user = useLoaderData()
    const {name, website} = user;
    return (
        <div>
            <h2>Details of user: {name}</h2>
            <h2>Websilte: {website}</h2>
        </div>
    );
};

export default UserDtails;