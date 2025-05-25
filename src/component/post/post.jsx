
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post;
    const navigate = useNavigate()
    const handleShowDetailsBtn = () =>{
        navigate(`${id}`)
    }
    return (
        <div className=' border'>
            <h2>{title}</h2>
            <Link to={`${id}`}>See details</Link>
            <br />
            <button onClick={handleShowDetailsBtn}>Show More details</button>
        </div>
    );
};

export default Post;