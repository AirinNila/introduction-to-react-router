
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';


const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation === "loading" ?
                <p>loading...</p> :
                 <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;