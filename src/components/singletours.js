import React from "react";
import "./singletours.css"

const Singletours=({tour})=>{
    return(
        <div className="singletours-container">
            <h1>{tour?.title}</h1>
            <img src={tour.images[0]} style={{marginTop:"50px"}}></img>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h1><strong>available seat:</strong>{tour?.seats}</h1>
            <h2><srong>phone:{tour.user.phone}</srong></h2>

            <div className="gallery">
            <h2>Gallery</h2>
                {
                    tour.images.map((images)=>(
                        <img src={images}></img>
                    ))
                }
            </div>
            <button>Book Now!</button>
        </div>
    )
}
export default Singletours;