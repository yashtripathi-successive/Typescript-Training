"use client"
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react"
import * as Yup from"yup"


interface formikinterface{
    fullname:string;
    age:number;
    phonenumber:string;
    email:string;

}

function Page() {


    const validationSchema = Yup.object({
        fullname : Yup.string().matches(/^[a-zA-Z ]*$/,"fullname should be in text ").required("full name is required"),
        age : Yup.number().typeError("age should be numeric and positive").integer('age should be positive digit').required("age is required"),
        phonenumber : Yup.string().matches(/^[0-9]{10}$/,"phone number must be 10 digit only").required("phone number is required"),
        email : Yup.string().email("email must be in valid format").required("email is required")
    })


    const formik = useFormik<formikinterface>({
        initialValues:{
        fullname:'',
        age:0,
        phonenumber:'',
        email:''
        },
        validationSchema,
        validateOnBlur:true,
        validateOnChange:true,
        onSubmit:(values)=>console.log(values)
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
            <Typography variant="h6">Registration Form</Typography>
            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <TextField name="fullname" value={formik.values.fullname} label="full name" onChange={formik.handleChange}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                helperText={formik.touched.fullname && formik.errors.fullname}/>
                <TextField name="age" label="age" onChange={formik.handleChange} value={formik.values.age}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}/>
                <TextField name="phonenumber" value={formik.values.phonenumber} label="phone number" onChange={formik.handleChange}
                error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                helperText={formik.touched.phonenumber && formik.errors.phonenumber}/>
                <TextField name="email" label="email" onChange={formik.handleChange} value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}/>
                <Button type="submit" variant="contained"
                sx={{ mt: 2 }}>Submit</Button>
            </form>
        </Box>
     );
}

export default Page;