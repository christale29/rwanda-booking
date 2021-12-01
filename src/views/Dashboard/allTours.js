import React from "react";
import allAvailbletours from "../../asset/constant/tours.json";
import {EditOutlined,EyeOutlined,DeleteOutlined} from "@ant-design/icons"
import {Table,Space} from "antd";

import AllinfoUser from "../../asset/constant/users.json"

const Column=[
    {
        title:"Title",
        dataIndex:"title",
        Key:"title",
    },
    {
        title:"dateScheduled",
        dataIndex:"dateScheduled",
        key:"dateScheduled",
    },
    {
        title:"seats",
        dataIndex:"seats",
        key:"seats",
    },
    {
        title:"price(rwf)",
        dataIndex:"price",
        key:"price",
    },
    {
       title:"Action",
       dataIndex:"action",
       render: (text,record)=>(
           <Space size="middle">
               <a><EditOutlined/></a>
               <a><EyeOutlined/></a>
               <a><DeleteOutlined/></a>
           </Space>
       ) 
    },
];
     const Columntwo=[
         {
            title:"firstname",
            dataIndex:"firstname",
            Key:"firstname",
         },
         {
            title:"lastname",
            dataIndex:"lastname",
            Key:"lastname",
         },
         {
            title:"phone-number",
            dataIndex:"phone-number",
            Key:"phone-number",
         },
         {
            title:"email",
            dataIndex:"email",
            Key:"email",
         },
         {
                title:"address",
                dataIndex:"address",
                Key:"address",
             
         },
         {
            title:"Action",
            dataIndex:"action",
            render: (text,record)=>(
                <Space size="middle">
                    <a style={{color:"green"}}>accept</a>
                    <a style={{color:"red"}}>declined</a>
                    
                </Space>
            ) 
         },
     ]
const AllTour=()=>{
    
    return(
        <>
       
         <Table columns={Column} dataSource={allAvailbletours}/>
         <Table columns={Columntwo} dataSource={AllinfoUser}/>
         </>
    )
   
}
export default  AllTour;