import React from "react";
import "./homelayout.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Home=({children})=>{
    return(
        <div className="home-container">
            <Header/>
             <div style={{minheight:"150vh"}}>{children}
            </div>
            <Footer/>
        </div>
    )
}
export default Home;