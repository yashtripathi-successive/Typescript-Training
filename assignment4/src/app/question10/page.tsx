'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, TextField, Button, Typography,FormControl,RadioGroup,FormLabel,FormControlLabel,Radio, FormHelperText} from '@mui/material';



interface formdatainterface{
  username:string;
  password:string;
  gender:string;
}

interface errorinterface{
  username?:string;
  password?:string;
  gender?:string;
}

export default function FormPage() {
  const [formdata,setFormdata] = useState<formdatainterface>({
    username:'',
    password:'',
    gender:''
  })


  const[error,setErrors] = useState<errorinterface>({})

  function validate(){
    const tempError:errorinterface = {}
    if(!formdata.username ){
      tempError.username="name is required"
    }
    else if (formdata.username.length<=3){
      tempError.username="name must be more than 3 characters"
    }

    if(!formdata.password ){
      tempError.password="password is required"
    }
    else if (formdata.password.length<=3){
      tempError.password="password must be more than 3 characters"
    }

    if (!formdata.gender) {
    tempError.gender = "Please select gender"; 
    } 

    setErrors(tempError)

    return Object.keys(tempError).length===0
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target
    setFormdata((prev)=>({
      ...prev,[name]:value
    }))

    setErrors((prev)=>({
        ...prev,[name]:''
      }
    ))
  }

  

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(validate()){
    console.log(formdata)
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} 
    sx={{
        maxWidth: 400,
        mx: 'auto',             
        mt: 5,                   
        p: 4,                   
        boxShadow: 3,            
        borderRadius: 2,        
        backgroundColor: '#f9f9f9',
      }} >
      <Typography variant="h5" gutterBottom textAlign="center">Registration Form</Typography>
        
        <TextField label="enter name" name='username' value={formdata.username} onChange={handleChange}  fullWidth
        margin="normal" required error={Boolean(error.username)}
            helperText={error.username}/>
        <TextField label="enter password" name="password" value={formdata.password} onChange={handleChange}   fullWidth
        margin="normal" required error={Boolean(error.password)}
            helperText={error.password}/>
        <FormControl component="fieldset" margin="normal" fullWidth error={Boolean(error.gender)}
            >
          <FormLabel>gender</FormLabel>
          <RadioGroup name="gender" value={formdata.gender} onChange={handleChange}>
            <FormControlLabel label="male" value="male" control={<Radio/>}/>
            <FormControlLabel label="female" value="female" control={<Radio/>}/>
          </RadioGroup>
           {error.gender && <FormHelperText>{error.gender}</FormHelperText>}
        </FormControl>
        <Button type="submit" 
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}>submit</Button>
     
    </Box>
  );
}
