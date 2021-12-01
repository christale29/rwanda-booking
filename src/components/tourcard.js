import React,{useState} from "react";
import "./tourcard.css"
// import image from "../asset/kabu.jpg";
import { Drawer } from "antd";
import "antd/dist/antd.css"
import Singletours from "./singletours";


const Tourcard = ({data}) => {
     console.log(data.title)
     const[Drawervisible,setDrawervisible]=useState(false);
     const handleclickDrawerVisible=()=>{
         setDrawervisible(true);
     }
     const closeDrawervisible=()=>{
         setDrawervisible(false)
     }
    return (
        <>
          <Drawer title={data.title} placement="left" visible={Drawervisible}width={720} onClose={()=>closeDrawervisible()}>
            <Singletours tour={data}/>
        </Drawer>
        <div className=" tourcard-container">
            <div className="tourcard-container1">
                <div className="tourcard-container1a">
                    <img src={data.images}/>
                </div>
                <div className="tourcard-container1b">
                    <div className="Nyungwe">
                        <h1>{data.title}</h1>
                        <p>There's beautiful art, vibrant culture, delicious cuisine, everything you could want from a city break destination</p></div>
                    <div className="dates">
                    
                        <div className="dates1">
                            <h1> Date scheduled:</h1>
                            <h2> 20 August 2021 </h2>
                        </div>
                        <div className="dates2">
                            <h1> Due date scheduled </h1>
                            <h2> 25 August 2021 </h2>
                        </div>
                        </div>
                        <div className="places">    
                    <h2> Seats available: 20/30 </h2>
                    <a href="#" onClick={()=>handleclickDrawerVisible()}>Read more....</a>
                    </div>

                </div>
            </div>
        </div>
        </>


    )
}
export default Tourcard;