import axios from "axios";
import { json, redirect } from "react-router-dom";

const URL = 'http://localhost:8000/';


// Create User
export const createUser = async(user) =>{
    try{
        const userResponse = await axios.post(URL+'user',user);
        return userResponse;
    }catch(error){
        console.log(error);
        throw error
    }
    
}

// Get Tasks
export const loadTask = async() =>{
    try{
        const response = await axios.get(URL+'task');
        return response;
    }
    catch(error){
        throw error;
    }
}

// Edit or Delete Task

export const editDelTask = async(method, task) => {
    const taskURL = `${URL}task/${task.id}`;

    if(method === 'DELETE'){
        try{
            const response = axios.delete(taskURL);
            return response;
        }catch(error){
            throw error
        }
    }
    if(method === 'PATCH'){
        try{
            const response = axios.patch(taskURL,task);
            return response;
        }catch(error){
            throw error
        }
    }
    if(method === 'POST'){
        try{
            const response = axios.post(`${URL}task/`,task);
            return response;
        }catch(error){
            throw error
        }
    }
    
}





// export async function createUser(user){
//     const userResponse = await fetch(URL ,
//      {
//        method:'POST',
//        body:  JSON.stringify(user),
//        headers: {
//         'Content-type':'application/json'
//        } 
//     })
//     const resData = await userResponse.json();

//     if(!userResponse.ok){
//         throw new Error("Error Fetching")
//     }
//     return resData;
// }




//WILL implement this functionality once I learn about query params

// export async function validateNID(nid){
//     const user = await fetch('http://localhost:8000/nID')
// }