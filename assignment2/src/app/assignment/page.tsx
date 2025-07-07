"use client"
import React, { useState } from "react"
import '@/app/tictactoe.css'



function Page() {

    const [board,setBoard] = useState<string[]>(Array(9).fill(""))
    const [player,setPlayer] = useState('X')
    const [winner,setWinner] = useState('')

    const matchingPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,3,8],[2,4,6]]
    function checkWinner(board:string[]):string | void{
        for(let [a,b,c] of matchingPatterns){
            if(board[a] && board[a]===board[b] && board[a]===board[c]){
             return (board[a])
            }
            
        }
    }
    function handleClick(id:number):void{

        if(board[id]) return;

        const newboard = [...board]
        newboard[id]=player 
        
        const winnerFound = checkWinner(newboard)
        if(winnerFound){
            setWinner(winnerFound)
            
            setTimeout(()=>{
             setBoard(Array(9).fill(""))
             setWinner('')
             return;
            },[1000])
        }
        setBoard(newboard)
        setPlayer((prev)=>prev==='X'?'O':'X')


    }



    function handleReset():void{
        setBoard(Array(9).fill(""))
        setWinner('')
        setPlayer('X')

    }
    return ( 
        
        <div className="container">
        {winner && <h1>winner is : {winner}</h1>}
        <div className="sub-container">
            <div className="rows" onClick={()=>handleClick(0)}>{board[0]}</div>
            <div className="rows" onClick={()=>handleClick(1)}>{board[1]}</div>
            <div className="rows" onClick={()=>handleClick(2)}>{board[2]}</div>
        </div>

        <div className="sub-container">
            <div className="rows" onClick={()=>handleClick(3)}>{board[3]}</div>
            <div className="rows" onClick={()=>handleClick(4)}>{board[4]}</div>
            <div className="rows" onClick={()=>handleClick(5)}>{board[5]}</div>
        </div>


        <div className="sub-container">
            <div className="rows" onClick={()=>handleClick(6)}>{board[6]}</div>
            <div className="rows" onClick={()=>handleClick(7)}>{board[7]}</div>
            <div className="rows" onClick={()=>handleClick(8)}>{board[8]}</div>
        </div>

        <button onClick={handleReset}> reset match</button>

        </div>
     );
}

export default Page;