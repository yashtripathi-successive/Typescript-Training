"use client"
import React from "react"
import * as Yup from "yup"
import { useFormik, withFormik } from "formik"
import { Button, TextField, Typography } from "@mui/material"
import {Box} from "@mui/material"




interface forminterface{
    fullname:string;
    age:number;
    email:string;
    password:string;
}

function Page() {

    const validationSchema = Yup.object({
        fullname:Yup.string().matches(/^[a-zA-Z ]*$/,"name should be text only").required("name is required"),
        age:Yup.number().typeError("age cant be string").required("age is required"),
        email: Yup.string().email("email is invalid").required("email is required"),
        password:Yup.string().matches(/^[0-9]{10}$/,"password is invalid").min(10).required("password is required")

    })


        const formik = useFormik<forminterface>({
            initialValues:{
              fullname:'',
              age:0,
              email:'',
              password:''
            },
            validationSchema,
            validateOnBlur:true,
            validateOnChange:true,
            onSubmit:(values:forminterface)=>console.log(values)
        })
    
        


    return (  
        <Box sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}>
         <Typography variant="h6"> Registration Form</Typography>
            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
           
            <TextField name="fullname" value={formik.values.fullname}
            label="enter fullname" onChange={formik.handleChange} 
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={formik.touched.fullname && formik.errors.fullname}/>
             
            <TextField name="age" value={formik.values.age} label="enter age" onChange={formik.handleChange}
             error= {formik.touched.age && Boolean(formik.errors.age)}
             helperText={formik.errors.age}/>
              
            <TextField name="email" label="enter email" value={formik.values.email} onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email}/>
            
            <TextField name="password" value={formik.values.password} onChange={formik.handleChange} label="enter password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}/>
            <Button type="submit"  variant="contained"
            sx={{ mt: 2 }}>Submit</Button>
            </form>
        </Box>
    );
}

export default Page;