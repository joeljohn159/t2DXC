import classes from "./TaskModal.module.css";
import {Form} from 'react-router-dom';

export default function TaskModal({formData, closeModal}){
    return (
        <div className={classes.taskModalContainer}>
            <div className={classes.taskModalInnerContainer}>
            <Form method="post">
                <div>
                    <label htmlFor="taskName">Task name : </label>
                    <input type="text" name="taskName" id="taskName" required defaultValue={formData ? formData.taskName : ''}/>
                </div>
                <div>
                    <label htmlFor="taskSOPLink">Task SOP link : </label>
                    <input type="text" name="taskSOPLink" id="taskSOPLink" required defaultValue={formData ? formData.taskSOPLink : ''}/>
                </div>
                <div style={{display:'flex'}}>
                    <label htmlFor="taskDesc">Task Description : </label>
                    <textarea style={{resize:'none',padding:'5px'}} name="taskDesc" id="taskDesc" cols="30" rows="5" required defaultValue={formData ? formData.taskDesc : ''}></textarea>
                </div>
                <div>
                    <label htmlFor="taskTime">Task Time : </label>
                    <input type="time" name="taskTime" id="taskTime" required defaultValue={formData ? formData.taskTime : ''}/>
                </div>
                <div>
                    <label htmlFor="taskSLA">Task SLA : </label>
                    <input type="time" name="taskSLA" id="taskSLA" required defaultValue={formData ? formData.taskSLA : ''}/>
                </div>
                <div>
                    <label htmlFor="taskRec">Task Recurrence : </label>
                    <input type="text" name="taskRec" id="taskRec" required defaultValue={formData ? formData.taskRec : ''}/>
                </div>
                <div>
                    <label htmlFor="taskAtt">Task Attachment : </label>
                    <input type="checkbox" name="taskAtt" id="taskAtt" required defaultChecked={formData ? formData.taskAtt : false}/>
                </div>
                <div><button onClick={closeModal}>Cancel</button>
                    <button>Save</button>
                </div>
            </Form>     
            </div> 
        </div>
    );
}