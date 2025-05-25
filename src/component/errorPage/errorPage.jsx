
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h2>Oppss! Something is wrong</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>not found</h2>
                    <Link to="/"><button>Go back</button></Link>
                    
                </div>
            }
        </div>
    );
};

export default ErrorPage;