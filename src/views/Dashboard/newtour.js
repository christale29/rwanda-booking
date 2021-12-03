import React from "react";
import Dashlayout from "../../components/dashboardlayout";
import {Form,Input,DatePicker,Space,Upload,Button} from "antd";
import { UploadOutlined } from '@ant-design/icons';
const NewTourview=()=>{
    return(
        
     
        <Form>
            <Form.Item 
            name="title"
            label="Title" 
            rules={[{required:true}]}>
                <Input/>

            </Form.Item>
            
            <Form.Item 
            name="description"
            label="why" 
            rules={[{required:true}]}>
                <Input.TextArea/>
               

            </Form.Item> <Space>
            <Form.Item 
            name="dateScheduled"
            label="date schedule" 
            rules={[{required:true}]}>
                <DatePicker/>

            </Form.Item>
            <Form.Item 
            name="dueDate"
            label="due date" 
            rules={[{required:true}]}>
                <DatePicker/>

            </Form.Item></Space><br/>
            <Form.Item 
            name="image"
            label="image" 
            rules={[{required:true}]}>
                <Upload>
                    <Button icon ={<UploadOutlined/>}>Upload image</Button>

                    </Upload>

            </Form.Item>
            <button htmltype="submit"type="primary">Register tour</button>


        </Form>
        
    )
}

export default NewTourview;