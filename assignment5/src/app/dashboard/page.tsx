"use client"
import React from "react"
import withAuth from "../question14/page";

function Page() {
    return ( 

        <div>
            <p>dashboard page</p>
        </div>
     );
}

export default withAuth(Page);