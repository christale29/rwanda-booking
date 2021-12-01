import React from "react";
import "./home.css";
import Header from "../components/header"
import Footer from "../components/footer"
import HomeLayout from "../components/homelayout"
import "../components/homelayout.css";





const Home=()=>{
    return(
        <HomeLayout>
            <div className="home-bg">
                <h1>Rwanda Booking Tours</h1>
            
            <div className="card">
                <h1>Book With Us Now</h1>
                <p >Be genuinely welcomed by the community as a special visitor while
                 they proudly present to you aspects of their traditions and beliefs
                and taking part in their daily activities and most of all with them.
                   hot spring water and massage takes three hours VISIT AND NEVER REGRET</p>
            </div>
            <div className="button">
                <h1><a href="\tours">Book now!!</a></h1> 
            </div>
            </div>
        </HomeLayout>
    
    
    )
}
export default Home;