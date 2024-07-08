import {  useContext } from "react";
import { userContext } from "../store/userContext";
import {  Navigate} from "react-router-dom";

export default function ProtectedRoute({children}){

    const userCtxt = useContext(userContext);
    const SDR = JSON.parse(sessionStorage.getItem('SDR'))
    if(SDR){
            if(userCtxt.SDR.role === 'admin' || SDR.role === 'admin'){
                return children
            }
        }
    else{
            alert("Not authorized")
            return <Navigate to='/' replace/>
        }
        
    
    
}