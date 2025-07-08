"use client"
import React, { ChangeEvent, useState } from "react"
import { Box, Table,TableBody,TableHead,TableCell,TableContainer,
TablePagination,TableRow,TableSortLabel, Typography } from "@mui/material"


interface datainterface{
  id:number;
  name:string;
  age:number;
}



function Page() {

  const [page,setPage] = useState<number>(0)
  const [rowsPerPage,setRowsPerPage] = useState<number>(2)
  const [ageOrder,setAgeOrder] = useState<'asc'|'desc'>('asc')
  const [nameOrder,setNameOrder] = useState<'asc'|'desc'>('asc')
  const [orderBy,setOrderBy] = useState<'name'|'age'>('name')

  
  const data :datainterface[]= [
    {id:1,name:"yash",age:21},
    {id:2,name:"aryan",age:22},
    {id:3,name:"anany",age:23},
    {id:4,name:"sarthak",age:24},
    {id:5,name:"sid",age:25},
    {id:6,name:"abhijeet",age:26}

  ]

  const sortedData =  [...data].sort((a,b)=>{
        if(orderBy==='name'){
       
        if(nameOrder==='asc'){
            return a.name.localeCompare(b.name)
        }else{
            return b.name.localeCompare(a.name)
        }
       }
    
    else{
          if(ageOrder==='asc'){
            return a.age-b.age
          }else{
            return b.age-a.age
          }
        }
    })

  function handleSort(column:'name'|'age'){
    if(column==='name'){
      setOrderBy('name')
      setNameOrder(nameOrder==='asc'?'desc':'asc')

    }else{
      setOrderBy('age')
      setAgeOrder(ageOrder==='asc'?'desc':'asc')
    }
    
  }


  const paginatedData = sortedData.slice(
    rowsPerPage*page,page*rowsPerPage + rowsPerPage
  )


  
  return ( 
    <div>
    <Typography align="center">Table </Typography>
 
    <TableContainer>
      <Table>
        <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel 
            active onClick={()=>handleSort('name')}>
                    Name
            </TableSortLabel>

          </TableCell>


          <TableCell>
            <TableSortLabel
              active onClick={()=>handleSort('age')}>
                   Age
            </TableSortLabel>

          </TableCell>

        </TableRow>

        </TableHead>
        <TableBody>
          {paginatedData.map((item)=>(
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>



      <TablePagination
      
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={(_,newpage)=>setPage(newpage)}
      onRowsPerPageChange={(e:ChangeEvent<HTMLInputElement>)=>{
        setRowsPerPage(parseInt(e.target.value)) 
        setPage(0)}}
      />
    </TableContainer>
   
    </div>
   );
}

export default Page;