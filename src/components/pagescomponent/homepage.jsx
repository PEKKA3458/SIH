import "../../styles.css";
import Header from "../reusablecomponents/header";
// import Navbar from "../reusablecomponents/navbar";
// import Banner from "../reusablecomponents/banner";
// import Vision from "../reusablecomponents/vision";
// import Features from "../reusablecomponents/features";
// import Resources from "../reusablecomponents/resource";
// import AboutUs from "../reusablecomponents/header";
// import Footer from "../reusablecomponents/footer";

import landingimg from "../../images/landingimg.jpg"

const HomePage=()=>{
    return(
        <>
        <div className="landing">
        <Header/>
        <img src={landingimg} alt="" className="landingimg"/>
        </div>
        {/* <Navbar/>
        <div>
        <Banner/>
        </div>
        <Vision/>
        <Features/>
        <Resources/>
        <AboutUs/>
        <Footer/> */}
        </>
    )};

    export default HomePage;