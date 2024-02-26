import { useState } from "react";
import CurrentDateTime from "../../../utils/DateTime";
import {createUser} from "../../../services/adminHttp";
import Modal from "../../../features/Modal.jsx"

export default function CreateUser(){

    // State for UserData
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState({status:false, text:'',style:{}});
    const [userData, setuserdata] = useState({
        nID:'',
        name:'',
        isUser: false,
        isReviewer: false,
        isAdmin: false,
        domain:'',
        createdBy:'',
        timeStamp:''
    })

    
    
    
    // function to Submit User Info
    async function handleCreateUser(event){
        event.preventDefault();

        const x = CurrentDateTime()
        try{
            setIsOpen(true)
            const resData = await createUser({...userData, timeStamp: x});
            setError(prevData=>{
                return {
                    text:'Success: User Created Successfully!',
                    status:false,
                    style:{color:'green',fontSize:'14px',marginTop:'15px'}
                }
            })
        }catch(error){
            console.log(error)
            setError(prevData=>{
                return {
                    text:'Error: Failed to create User!',
                    status:true,
                    style:{color:'red',fontSize:'14px',marginTop:'15px'}
                }
            })
        }
        setIsOpen(false)
        
    }


    // function to handle userData change
    function handleUserData(identifier, value){
        setuserdata(prevData =>{
            return {
                ...prevData,
                [identifier]: value
            }
        })
    }


    // Reset Form
    const resetForm = () =>{
        if(confirm("Do you want to reset the form?") === true){
            setuserdata({
                nID:'',
                name:'',
                isUser: false,
                isReviewer: false,
                isAdmin: false,
                domain:'',
                createdBy:'',
                timeStamp:''
            });
            setError(prevData=>{
                return {
                    text:'',
                    status:false,
                    style:{}
                }
        })
    }}


// Valdate if nId exist

function handleValidateNID(event){
console.log("TEST")
}

    return (
        <>
       
        <div className="createUserContainer">
            <h2>Create User</h2>
            <hr />
            <form onSubmit={handleCreateUser}>
                <div className="AdminformNid">
                    <label htmlFor="nID">User n-ID :</label>
                    <input type="text" onChange={(event)=>handleUserData('nID',event.target.value)} defaultValue={userData.nID} required minLength={8} maxLength={8} onBlur={handleValidateNID}/>
                </div>
                <div className="AdminformName">
                    <label htmlFor="name">User Name :</label>
                    <input disabled defaultValue={userData.name } type="text" onChange={(event)=>handleUserData('name',event.target.value)}  required/>
                </div>

                <div className="AdminformRole">
                        <label>User Role :</label>
                            <label><input type="checkbox" id="user" name="user" onChange={(event)=>handleUserData('isUser',event.target.checked)} value={userData.isUser}/>User</label>
                            <label><input type="checkbox" id="reviewer" name="reviewer" onChange={(event)=>handleUserData('isReviewer',event.target.checked)} value={userData.isReviewer} />Reviewer</label>
                            <label><input type="checkbox" id="admin" name="admin" onChange={(event)=>handleUserData('isAdmin',event.target.checked)}  value={userData.isAdmin}/>Admin</label>
                        
                       
                </div>
                <div className="AdminformDomain">
                    <label htmlFor="role">Domain :</label>
                    <select name="domain" id="domain" onChange={(event)=>handleUserData('domain',event.target.value)} value={userData.domain} required>
                        <option value="" defaultValue={null}  hidden>Select</option>
                        <option value="Surety">Surety</option>
                        <option value="GCC">GCC</option>
                        <option value="Test">Test</option>
                    </select>
                </div>
                <div className="AdminformButton">
                    <button type="reset" onClick={resetForm}>Discard</button>
                    <button type="submit">Create</button>
                </div>
                <p style={error.style}>{error.text}</p>
            </form>
            
        </div>


        <Modal open={isOpen}>Creating User... </Modal>
        </>
    );
}