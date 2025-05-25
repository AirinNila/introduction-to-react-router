import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user)
    const {name, email, id} = user;
    return (
        <div className="border">
            <p>{name}</p>
            <p>Email: {email}</p>
            <Link to={`${id}`}>Show details</Link>
        </div>
    );
};

export default User;