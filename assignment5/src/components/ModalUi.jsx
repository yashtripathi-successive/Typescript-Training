"use client"
import { Box, IconButton, Modal, TextField, Typography } from "@mui/material";
import React from "react"
import CloseIcon from '@mui/icons-material/Close';


function ModalUi({isopen,handleclose,children}) {
    return ( 
        <Modal open={isopen} onClose={handleclose}>
             <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    textAlign:'center'
                }}
            >
                <Typography variant="h6" component="h2">MODAL</Typography>
                
                <IconButton onClick={handleclose}> 
                   <CloseIcon/>
                </IconButton>
                {children}
            </Box>
        </Modal>
     );
}

export default ModalUi;