import React,{useState}from "react";
import Homelayout from "../components/homelayout"
import"../components/tourcard"
import Tourcard from "../components/tourcard";
import Alltoursdata from "../asset/constant/tours.json";

import Singletours  from "../components/singletours";
const Tourview=()=>{
    
    return(
        <>
      

        <Homelayout>
            <div className="tour-container">
                
                {
                    Alltoursdata.map((data)=>(<Tourcard data={data}/>))
                }
                

            </div>
        </Homelayout>
        </>
    )
   
}
export default Tourview;