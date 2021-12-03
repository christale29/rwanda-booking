import React from "react";
import HomeLayout from "../components/homelayout"

const Contactus=()=>{
    return(
        <HomeLayout>
            <div className="form-contact">
                <h1>MORE INFO:</h1>
                <label for="input">EMAIL:</label>
                <input type="text" style={{width:"40%",marginLeft:"10%",height:"8%",fontSize:"20%"}}/><br/><br/><br/>
                <label for="input" >PASSWORD:</label>
                <input type="text" style={{width:"40%",marginLeft:"6%",height:"6%"}}/><br></br><br/><br/>
                <label for="input">SEND MESSAGE:</label>
                <input type="text" style={{width:"30%",height:"15%",marginLeft:"4%"}}/><br></br>
                <button>submit</button>
            </div>
        
                
                
                    
            
                
            
        
        </HomeLayout>
    )
}
export default Contactus;