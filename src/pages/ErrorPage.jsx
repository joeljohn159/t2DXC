import { useRouteError } from "react-router-dom"

export default function ErrorPage(error){
    const errorData = useRouteError();
   console.log(errorData)
    return <>
        <h1>{errorData.status}</h1> 
        <p>{errorData.data.message}</p>
    </>
}

