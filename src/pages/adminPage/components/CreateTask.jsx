import { useState } from 'react';
import '../AdminPage.css';
import TaskModal from '../../../features/TaskModal';

const TASKS = [{
    taskID : '1',
    taskName : 'Health Check',
    taskSOPLink : 'https://google.com',
    taskDesc : 'Perform regular HC at 7AM',
    taskRec : 'DL',
    taskRecVal : '1010101',
    taskTime : '07:00 AM',
    taskSLA : '07:30 AM',
    domainName : 'Surety',
    creaaedBy : 'admin',
    taskAtt: true,
    lastUpdatedTime : '21-09-2024 19:34:34PM'

},{
    taskID : '2GCC',
    taskName : 'ACES count',
    taskSOPLink : 'https://google.com',
    taskDesc : 'Perform regular HC at 12AM',
    taskRec : 'DL',
    taskRecVal : '1110101',
    taskTime : '06:00 PM',
    taskSLA : '07:20 PM',
    domainName : 'Surety',
    createdBy : 'admin',
    lastUpdatedTime : '21-09-2024 19:34:34PM'

},{
    taskID : '3',
    taskName : 'Clear Error',
    taskSOPLink : 'https://google.com',
    taskDesc : 'Perform regular HC at 7AM',
    taskRec : 'DL',
    taskRecVal : '1010101',
    taskTime : '8:00 AM',
    taskSLA : '08:30 AM',
    domainName : 'ExpRs',
    createdBy : 'admin',
    lastUpdatedTime : '26-09-2024 19:34:34PM'

},{
    taskID : '4',
    taskName : 'ACES checklist',
    taskSOPLink : 'https://google.com',
    taskDesc : 'Perform regular HC at 7AM',
    taskRec : 'DL',
    taskRecVal : '1010101',
    taskTime : '11:00 AM',
    taskSLA : '12:30 AM',
    domainName : 'GCC',
    createdBy : 'admin',
    lastUpdatedTime : '21-09-2024 20:34:34PM'

}]



export default function CreateTask(){

    const [openTaskModal, setOpenTaskModal] = useState(false);

    function handleTaskCreateModal(){
        setOpenTaskModal(true)
        }
    function handleCloseModal(){
        setOpenTaskModal(false)
    }
    return (
        <>
        {openTaskModal && <TaskModal formData={''} closeModal={handleCloseModal}/>}
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
                            {TASKS.map((task) => {
                           return ( <tr key={task.taskID}>
                                <td>{task.taskName}</td>
                                <td><a href={task.taskSOPLink} target="_blank">{task.taskName}</a></td>
                                <td style={{width:'200px'}}>{task.taskDesc}</td>
                                <td>{task.taskTime}</td>
                                <td>{task.taskSLA}</td>
                                <td>{task.taskRec}</td>
                                <td><input type="checkbox" disabled checked/></td>
                                <td><button>Edit</button><button>Delete</button></td>
                            </tr>);
                                console.log(task);
                            })}
                            
                        </tbody>
                    </table>

                </div>

                
            </div>
            <div className="createTaskAddTask">
                <button className='createTaskAddButton' onClick={handleTaskCreateModal}>+</button>      
            </div>
        </div>
        </>
    );
}


export function action({request,params}){
    console.log('Request',request);
    console.log('Params',params)
}