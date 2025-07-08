"use client"
import React, { useState } from "react"

import { Box,Dialog,DialogTitle,DialogContent,
         DialogActions,Typography,TextField,Button } from "@mui/material";

function Page() {

  const [open,setOpen] = useState<boolean>(false)
  const [input,setInput] = useState<string>('')

  function openDialog(){
    setOpen(true)
  }

  function closeDialog(){
    setOpen(false)
  }
  
  function handleSubmit(){
    alert(`hey i am ${input}`)
    setInput('')
    setOpen(false)
  }
  return ( 
    <Box>
      <Button onClick={openDialog}> open dialog box</Button>

      <Dialog open={open} onClose={closeDialog} >
        <DialogTitle>Dialog box </DialogTitle>
        <DialogContent>
        <Typography>dialog box heading</Typography>
        <TextField label="enter name" name="name" onChange={(e)=>setInput(e.target.value)} required/>
        </DialogContent>
        <DialogActions>
        <Button onClick={closeDialog}>close</Button>
        <Button onClick={handleSubmit}>submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
   );
}

export default Page;