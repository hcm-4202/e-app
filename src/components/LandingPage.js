

import { Navigate } from "react-router"

export default function LandingPage(){
    
    if(!localStorage.access){

        return <Navigate to="/login"/>
    }
    return <div>
        <Navigate to="/home"/>
    </div>
}