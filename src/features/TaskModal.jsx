import { action } from "../pages/adminPage/components/CreateTask";
import uniqueID from "../utils/uniqueID";
import classes from "./TaskModal.module.css";
import {useSubmit, Form } from 'react-router-dom';

export default function TaskModal({formData, method, closeModal}){

    
    const submit = useSubmit();
    const [formError , setFormError] = useState(false);

    

    function handleSave(event){
        event.preventDefault();
        
        
        let formData = event.currentTarget.form;
        console.log(event)
        submit({formData }, {method:method});  
        closeModal();
    }

    function handleClose(){
        formData = '';
        closeModal()
    }
    return (
        <div className={classes.taskModalContainer}>
            <div className={classes.taskModalInnerContainer}>
            <Form  >
                <div>
                    <input type="text" name="id" id="id" defaultValue={formData ? formData.id : uniqueID()} hidden />
                </div>
                <div>
                    <label htmlFor="taskName">Task name : </label>
                    <input type="text" name="taskName" id="taskName" defaultValue={formData ? formData.taskName : ''} required/>
                </div>
                <div>
                    <label htmlFor="taskSOPLink">Task SOP link : </label>
                    <input type="text" name="taskSOPLink" id="taskSOPLink" defaultValue={formData ? formData.taskSOPLink : ''} required/>
                </div>
                <div style={{display:'flex'}}>
                    <label htmlFor="taskDescription">Task Description : </label>
                    <textarea style={{resize:'none',padding:'5px'}} name="taskDescription" id="taskDescription" cols="30" rows="5"  defaultValue={formData ? formData.taskDescription : ''} required></textarea>
                </div>
                <div>
                    <label htmlFor="taskTime">Task Time : </label>
                    <input type="time" name="taskTime" id="taskTime" defaultValue={formData ? formData.taskTime : ''} required/>
                </div>
                <div>
                    <label htmlFor="taskSLA">Task SLA : </label>
                    <input type="time" name="taskSLA" id="taskSLA" defaultValue={formData ? formData.taskSLA : ''} required/>
                </div>
                <div>
                    <label htmlFor="taskReccuring">Task Recurrence : </label>
                    <input type="text" name="taskReccuring" id="taskReccuring" defaultValue={formData ? formData.taskReccuring : ''} required/>
                </div>
                <div>
                    <label htmlFor="taskAtt">Task Attachment : </label>
                    <input type="checkbox" name="taskAtt" id="taskAtt" defaultChecked={formData ? formData.taskAtt : false} />
                </div>
                <div ><button type="button" onClick={handleClose}>Cancel</button>
                    <button type="submit" onClick={handleSave}>Save</button>
                </div>
            </Form>     
            </div> 
        </div>
    );
}