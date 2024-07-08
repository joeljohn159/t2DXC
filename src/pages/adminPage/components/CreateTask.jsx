import { useState } from 'react';
import '../AdminPage.css';
import TaskModal from '../../../features/TaskModal';
import { json , redirect, useLoaderData   } from 'react-router-dom';
import {useSubmit} from 'react-router-dom'
import { editDelTask, loadTask } from '../../../services/adminHttp';
import { useQuery } from '@tanstack/react-query';
import { queryClient } from '../../../services/queryClient';

import {motion ,AnimatePresence} from 'framer-motion';


export default function CreateTask(){
    
    const [openTaskModal, setOpenTaskModal] = useState(false);
    const [testTask , setTestTask] = useState(null);
    const [method, setmethod] = useState();
    const submit = useSubmit();
    

    function handleTaskCreateModal(){
        setmethod('post');
        setTestTask();
        setOpenTaskModal(true)
    }

    function handleCloseModal(){
        setOpenTaskModal(false)
    }

    function handleEditTask(taskList){
        setmethod('patch')
        setOpenTaskModal(true)
        setTestTask(taskList);
    }
    function handleDeleteTask(task){
        const deleteorNot = confirm("You wanna delete the task?")
        if(deleteorNot){
            submit(task,{method:'delete'} , action='admin/createTask')
        }else{
            return  
        }
    }
    
    const {data , isPending ,   isError , error} = useQuery({
            queryKey:['tasks'],
            queryFn : loadTask,
            staleTime: 10 * 1000, // 10Sec
    });
    
        const test = useLoaderData() // here the loader DATA is same 
        const TASKS = data;

    return (
        <>
        {openTaskModal && <TaskModal formData={testTask} method={method} closeModal={handleCloseModal}/>}
        <div className="createTaskContainer">
            <h2>Create Task</h2>
            <hr />

            <div className="createTaskTableContainer">
                <div className="interTaskContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>SOP</th>
                                <th>Description</th>
                                <th>Time</th>
                                <th>SLA</th>
                                <th>Recurrence</th>
                                <th>Attachment needed?</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <AnimatePresence> {TASKS.map((task) => {
                           return ( <motion.tr 
                           initial={{y:10,opacity:0}}
                           animate={{y:0,opacity:1}}
                           exit={{y:10,opacity:0}}
                           key={task.id}>
                                <td>{task.taskName}</td>
                                <td><a href={task.taskSOPLink} target="_blank">Link</a></td>
                                <td style={{width:'200px'}}>{task.taskDescription}</td>
                                <td>{task.taskTime}</td>
                                <td>{task.taskSLA}</td>
                                <td style={{textAlign:'center'}}>{task.taskReccuring}</td>
                                <td style={{textAlign:'center'}}><input  type="input" disabled defaultValue={task.taskAtt ? true : false}/></td>
                                <td style={{display:'flex',justifyContent:'space-around'}}>
                                    <button style={{cursor:'pointer'}} onClick={() => handleEditTask(task)}>Edit</button>
                                    <button style={{cursor:'pointer'}} onClick={()=>handleDeleteTask(task)}>Delete</button></td>
                            </motion.tr>);
                            })}
                            </AnimatePresence>
                        </tbody>
                    </table>

                </div>

                
            </div>
            <div className="createTaskAddTask"><button className='createTaskAddButton' onClick={handleTaskCreateModal}>+</button> 
            </div>
        </div>
        </>
    );
}


export async function action({request}){

    const method = await request.method;
    const taskData = await request.formData();

    const task = {
        id: taskData.get('id'),
        taskID : 'NA',
        taskName : taskData.get('taskName'),
        taskSOPLink : taskData.get('taskSOPLink'),
        taskDescription : taskData.get('taskDescription'),
        taskReccuring : taskData.get('taskReccuring'),
        taskRecVal : 'NA',
        taskTime : taskData.get('taskTime'),
        taskSLA : taskData.get('taskSLA'),
        taskAtt : taskData.get('taskAtt'),
        domainName : 'NA',
        createdBy : 'Joel',  
        lastUpdatedTime : 'NA'
    }
    try{
        const data = await editDelTask(method, task);
        return redirect('/admin/createTask')
    }catch(error){
        throw json({message:'Error Editing or Deleting Task. Kindly try again Later! '},{status:'500'});
    }
}  


export async function loader(){
    return queryClient.fetchQuery(
        {queryKey:['tasks'],
        queryFn : loadTask,
    }
    )

}
//     if(method === 'DELETE'){
//         url =  url+`${taskData.get('id')}`;
//         const response = await fetch(url, 
//             {
//                 method:method,
//             })
//             if(!response.ok){
//                 throw json({message:'Error Deleting Data'},{status:'500'})
//             }
//             return redirect('/admin/createTask');
//     }
//     else{

//     if(method === 'PATCH'){
//        url =  url+`${taskData.get('id')}`;
//     }

//     const response = await fetch(url, 
//     {
//         method:method,
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(task)

//     })

//     if(!response.ok){
//         throw json({message:'Error'},{status:'500'})
//     }
//     return redirect('/admin/createTask');
// }


