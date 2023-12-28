import {Header} from "../components/Header.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer.jsx";

const Home= ()=>{
    return(
        <><div className={'container'}>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
        </>
    )
}
export default Home;