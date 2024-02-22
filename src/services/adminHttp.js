export async function createUser(user){
    const userResponse = await fetch('http://localhost:8000/user' ,
     {
       method:'POST',
       body:  JSON.stringify(user),
       headers: {
        'Content-type':'application/json'
       } 
    })
    const resData = await userResponse.json();

    if(!userResponse.ok){
        throw new Error("Error Fetching")
    }
    return resData;
}


//WILL implement this functionality once I learn about query params

// export async function validateNID(nid){
//     const user = await fetch('http://localhost:8000/nID')
// }