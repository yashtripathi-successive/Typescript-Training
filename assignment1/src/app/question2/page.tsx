import UserCard from "@/components/UserCard";
import React from "react";

 interface userinterface{
        name:string;
        email:string;
        avatar:string;
    }
function Page() {
   

    const users :userinterface[] = [
        {name:"yash",email:"yash@gmail.com",avatar:"https://s.magecdn.com/social/24w/tc-linkedin.png"},
        {name:"ram",email:"ram@gmail.com",avatar:"https://s.magecdn.com/social/24w/tc-linkedin.png"}
    ]
    return ( 
        
        <div>
            {users.map((ele,id)=>(
                <UserCard key={id} name={ele.name} email={ele.email} avatar={ele.avatar}/>
            ))}
        </div>
     );
}

export default Page;