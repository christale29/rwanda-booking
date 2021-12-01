import React from "react";
import"./footer.css"
import { InstagramOutlined } from '@ant-design/icons';
import {TwitterOutlined  } from '@ant-design/icons';
import { FacebookOutlined } from '@ant-design/icons';
const Footer=()=>{
    return(
        <div className="footer-container">
            <div className="footer-card">
                <div className="column1">
                    <h3>CONTACT US</h3>
                    <p>Tel:+250781783229</p>
                    <p>Email:christalebu@gmail.com</p>
                </div>
                <div className="column2">
                    <h3>ATTRACTION</h3>
                    <p>cultural tour</p>
                    <p>fishing</p>
                    <p>boat trip</p>
                    <p>game drives</p>
                </div>
                <div className="column3">
                    <h3>GET IN TOUCH</h3>
                     <p>Quickly communicate covalent 
                         markets for maintainable sources.
                         Collaboratively harness resource
                          sucking experiences,
                          whereas cost effective
                           meta-services.</p> 
                           <div className="footer-icon">
                           <a href=""><InstagramOutlined /></a>
                           <a href=""><TwitterOutlined /></a>
                           <a href=""><FacebookOutlined /></a>

                           </div>
                           
                </div>
               
                

          
               
             
                

            </div>
        </div>
    )
}
export default Footer;