

const User = ({user}) => {
    console.log(user)
    const {name, email} = user;
    return (
        <div>
            <p>{name}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;