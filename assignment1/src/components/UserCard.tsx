import React from "react";
import '@/app/generalstyle.css'

interface usercard {
    name:string;
    email:string;
    avatar:string;
}
function UserCard({name,email,avatar}:usercard) {
    return ( 

        <div className="page">
            <ul>
           <li>{name}</li>
           <li>{email}</li>
           <li>{avatar}</li>
           </ul>

        </div>
     );
}

export default UserCard;