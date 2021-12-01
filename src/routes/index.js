import React from "react"
import {Routes,Route} from "react-router-dom" ;
import Home from "../views/home";
import Aboutus from "../views/aboutus";
import Contactus from "../views/contactus";
import Tourview from "../views/tour";
import Signin from "../views/signin";
// import Signup from "../views/signup";
import NewTourview from "../views/Dashboard/newtour"
import DashLayout from "../components/dashboardlayout"

import AllTour from "../views/Dashboard/allTours"

// import Singletours from "../components/singletours";
// import Singletour from "../views/singletour";


const Index=()=>{
    return(
        <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/tours" element={<Tourview/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        {/* <Route path="/newtour" element={<NewTourview/>}></Route> */}

        {/* <Route path="/singletours" element={<Singletours/>}></Route> */}
        {/* <Route path="/singletour" element={<Singletour/>}></Route> */}
       
        {/* <Route path="/signup" element={<Signup/>}></Route>  */}
        

        
    
    </Routes>
    <DashLayout>
        <Routes>
            <Route path="/dash/newtour" element={<NewTourview/>}></Route>
            <Route path="/dash/alltour" element={<AllTour/>}></Route>
        </Routes>
    </DashLayout>
    </>
    )
}
        
           
export default Index;