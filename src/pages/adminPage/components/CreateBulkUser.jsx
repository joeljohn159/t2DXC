import { Fragment, useState } from 'react';
import classes from './createBulkUser.module.css';
import uniqueID from '../../../utils/uniqueID.js';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createBulkUser} from '../../../services/adminHttp.js';
import Modal from '../../../features/Modal.jsx';
import {motion, AnimatePresence} from 'framer-motion'


export default function CreateBulkUser(){

    const [bulkUsers, setBulkUsers] = useState([]);
    const [editID, setEditID] = useState(null);
    const [editableData, setEditableData] = useState();

    const { mutate ,isPending , isError , error} = useMutation({
        mutationFn : createBulkUser
    })

    const handleAddUser = (event) =>{
        event.preventDefault();

        const idUtil = uniqueID();

        const formData = {
            id : idUtil, 
            nid : event.target[0].value,
            name :event.target[1].value,
            isUser : event.target[2].checked,
            isAdmin : event.target[4].checked,
            isReviewer : event.target[3].checked,
            domain: event.target[5].value
        }
        setBulkUsers([...bulkUsers, formData])
        event.target.reset();
    }

    function handleEdit(item){
        setEditID(item.id);
        setEditableData(item);
    }

    function handleCancel(){
        setEditID(null)
    }

    const handleDelete = (id) => {
        const newData = bulkUsers.filter((item) => item.id != id);
        setBulkUsers(newData);
    }

    function handleChange(e){
        if(e.target.name === 'isUser' || e.target.name === 'isAdmin' || e.target.name === 'isReviewer' ){
            setEditableData({...editableData, [e.target.name]: e.target.checked})
        }else{
            setEditableData({...editableData, [e.target.name]: e.target.value})
        }
        
    }

    function handleSave(event){
        event.preventDefault();

        const formData = {
            ...editableData,
            id:editID
        }

        const saveIndex = bulkUsers.findIndex((item) => item.id === editID);
        let test = [...bulkUsers]
        test[saveIndex] = formData;
        setBulkUsers(test);
        setEditID(null)


    }

    const handleCreateAllUser = () =>
    {
        if(bulkUsers.length === 0 ){
            alert("Please add Users!!!")
            return
        }
        mutate(bulkUsers);
    }
    return (
    <>
    {isPending === true && <Modal open={isPending}>Creating Bulk Users.</Modal> }
    
        <div className={classes.createBulkUserContainer}>
            <p >Create Bulk User</p><hr />
            <form>
                <div className={classes.createTable}>
                
                <table >
                    <thead>
                        <tr>
                            <th>nID</th>
                            <th>Name</th>
                            <th>Is User</th>
                            <th>Is Reviewer</th>
                            <th>Is Admin</th>
                            <th>Domain</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                        
                            {bulkUsers.map((item)=>{
                                return < Fragment key={item.id}>
                                    
                                    {editID !== item.id ?
                                    <AnimatePresence>
                                    <motion.tr 
                                        initial={{y:10,opacity:0}}
                                        animate= {{y:0, opacity:1}}   
                                        exit={{y:-10, opacity:0}}  
                                        transition={{type:'spring'}}  
                                         
                                    >
                                            <td>{item.nid}</td>
                                            <td>{item.name}</td>
                                            <td>{item.isUser ? 'Yes' : 'No'}</td>
                                            <td>{item.isReviewer ? 'Yes' : 'No'}</td>
                                            <td>{item.isAdmin ? 'Yes' : 'No'}</td>
                                            <td>{item.domain}</td>
                                            <td className={classes.tableButtons}> <button type='button' onClick={() => handleEdit(item)}>Edit</button>
                                                <button type='button' onClick={()=>handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </motion.tr> </AnimatePresence>:
                                <tr key={item.id}>
                                <td>
                                <input 
                                        style={{width:'100%', marginRight:'2px'}} 
                                        type="text" 
                                        name="nid" 
                                        placeholder='Enter NID'
                                        required
                                        defaultValue={item.nid}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                <input 
                                    style={{width:'100%', marginRight:'2px'}} 
                                    type="text" 
                                    name='name'
                                    placeholder='Enter name'
                                    required
                                    defaultValue={item.name}
                                    onChange={handleChange}
                                />
                                </td>
                                <td>
                                    <input 
                                        style={{width:'3rem', marginRight:'2px'}} 
                                        type="checkbox" 
                                        name='isUser' 
                                        id='isUser' 
                                        defaultChecked = {item.isUser}
                                        onChange={handleChange}
                                    />

                                </td>
                                <td>
                                    <input 
                                        style={{width:'3rem', marginRight:'2px'}} 
                                        type="checkbox" 
                                        name='isReviewer' 
                                        id='isReviewer' 
                                        defaultChecked = {item.isReviewer} 
                                        onChange={handleChange}
                                    />

                                </td>
                                <td>
                                    <input 
                                        style={{width:'6rem', marginRight:'2px'}} 
                                        type="checkbox" 
                                        name='isAdmin' 
                                        id='isAdmin' 
                                        defaultChecked = {item.isAdmin} 
                                        onChange={handleChange}
                                    />

                                </td>
                                <td>
                                    <select name="domain" id="domain" required defaultValue={item.domain} onChange={handleChange} >
                                        <option hidden value="">Select Domain</option>
                                        <option value="Surety">Surety</option>
                                        <option value="GCC">GCC</option>
                                        <option value="ExPrs">ExPrs</option>
                                    </select>
                                </td>
                                <td className={classes.tableButtons}> <button type='button' onClick={handleSave} >Save</button>
                                    <button type='button' onClick={handleCancel}>Cancel</button>
                                </td>
                            </tr>   }
                               
                                </ Fragment> 
                            })}
                            
                            

                            
                    </tbody>
                    
                </table>    
               
                </div>
                </form>
            <div style={{width:'100%', overflow:'hidden', display:'flex', justifyContent:'center' }}>
                <div style={{width:'80%'}}>
                <h2 style={{fontSize:'15px', marginTop:'10px'}}>Add User</h2>
            <form style={{display:'flex', flexDirection:'row', overflow:'hidden' , justifyContent:'space-around', border:'1px solid #000', borderRadius:'5px' }} onSubmit={handleAddUser}>
                <input 
                    style={{width:'7rem', marginRight:'2px'}} 
                    type="text" 
                    name="nid" 
                    placeholder='Enter NID'
                    required
                />
                <input 
                    style={{width:'7rem', marginRight:'2px'}} 
                    type="text" 
                    name='name'
                    placeholder='Enter name'
                    required
                />
                <div style={{display:'flex', flexDirection:'column', fontSize:'13px', marginTop:'10px'}}>
                    <input 
                        style={{width:'3rem', marginRight:'2px'}} 
                        type="checkbox" 
                        name='isUser' 
                        id='isUser'  
                    />
                    <span>is User</span>
                </div>
                <div style={{display:'flex', flexDirection:'column', fontSize:'13px', marginTop:'10px'}}>
                <input 
                    style={{width:'6rem', marginRight:'2px'}} 
                    type="checkbox" 
                    name='isReviewer' 
                    id='isReviewer' 
                    
                />
                <span>is Reviewer</span>
                </div>
                
                <div style={{display:'flex', flexDirection:'column', fontSize:'13px', marginTop:'10px'}}>
                <input 
                    style={{width:'4rem', marginRight:'2px'}} 
                    type="checkbox" 
                    name='isAdmin' 
                    id='isAdmin' 
                    
                /> 
                <span>is Admin</span>
                </div>
                  
                  <select name="domain" id="domain" required >
                    <option hidden value="">Select Domain</option>
                    <option value="Surety">Surety</option>
                    <option value="GCC">GCC</option>
                    <option value="ExPrs">ExPrs</option>
                  </select>
                <button style={{cursor:'pointer'}}>Add</button>
            </form>
                </div>
            
            </div>
            <div style={{marginTop:'20px', fontSize:'13px'}}>
                <div style={{marginBottom:'20px'}}><button onClick={handleCreateAllUser} style={{padding:'4px',cursor:'pointer'}}>CREATE USER</button></div>
                  {isError === true ? <div style={{color:'red', marginBottom:'10px'}}>{error.info?.message || 'Error creating users. Kindly try again Later!'}</div> : undefined}  
            <Link  to="/admin/createUser">Go Back to Create a User</Link>


            </div>

            
            
        </div>

       
    </>);
}