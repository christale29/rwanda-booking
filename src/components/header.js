import React, {useState} from "react";
import "./header.css";
import logo from "../asset/logo2.png";
import { Modal,Form,Input } from "antd";

const Header=()=>{
    const [visible,setVisible]=useState(false);

    const onFinish=(values)=>{
        console.log(values)
    }
    return (
        <>
        <Modal 
        visible={visible}
        width="40%"
        onCancel={()=>setVisible(false)}>
            <h1>signin form</h1>
            <Form onFinish={onFinish}>
                <Form.Item label="email"name="email"rules={[{required:true}]}>
                    <Input type="email"/>
                
                </Form.Item>
                <Form.Item label="password"name="password"rules={[{required:false}]}>
                    <Input type="email"/>
                
                </Form.Item>
                
                
            </Form>

        </Modal>
        <div className="container">
            <div className="logo">
                <img src={logo} />
            </div>
            <div classname="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Aboutus">About us</a></li>
                    <li><a href="/Contactus">Contact us</a></li>
                    <li><a href="/Tours">Tours</a></li>
                    <li><a href="#" onClick={()=>setVisible(true)}>signin</a></li>
                </ul>

            </div>
        </div>
        </>

    )
}
export default Header;