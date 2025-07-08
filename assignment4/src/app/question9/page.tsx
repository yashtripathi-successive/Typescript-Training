"use client"
import { AppBar, Divider, Drawer, IconButton, Link, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


interface item{
  id:number;
  text:string;
  path:string;
}

interface props{
  children:import("react").ReactNode
}

function Page({children}:props) {

  const items:item[] = [
    {id:1,text:"question1",path:"/question1"},
    {id:2,text:"question2",path:"/question2"},
    {id:3,text:"question3",path:"/question3"},
    {id:4,text:"question4",path:"/question4"},
    {id:5,text:"question5",path:"/question5"},
    {id:6,text:"question6",path:"/question6"},
    {id:7,text:"question7",path:"/question7"},
    {id:8,text:"question8",path:"/question8"},
    {id:9,text:"question9",path:"/question9"},
    {id:10,text:"question10",path:"/question10"},
    {id:11,text:"question11",path:"/question11"},
    {id:12,text:"question12",path:"/question12"},
    {id:13,text:"question13",path:"/question13"},
    {id:14,text:"question14",path:"/question14"},
  ]

  const [open,setOpen] = useState<boolean>(false)
  function toggleAppearence(){
    setOpen(!open)
  }


  const drawer = (
    <Box >
      <Typography align="center">QUESTIONS</Typography>
      <List>
        {items.map((item)=>(
          <Link  key={item.id} href={item.path} >
          <ListItem>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
  
  
  return ( 

   <Box >
    <AppBar>
    <Toolbar>
      <IconButton   onClick={toggleAppearence}>
         {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
     
      <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, textAlign: 'center' }}> NextJs Practice Work
      </Typography>
     </Toolbar>
    </AppBar>


     <Drawer
        variant="temporary"
        open={open}
        onClose={()=>setOpen(false)} >
        {drawer}
      </Drawer>

    <Box  component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
          p: 3,
          ml: open ? 240 : 0,
          transition: "margin 0.3s",
        }}
      >
      {children}
    </Box>
   </Box>


   );
}

export default Page;