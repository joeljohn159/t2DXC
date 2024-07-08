import { action } from "../pages/adminPage/components/CreateTask";
import uniqueID from "../utils/uniqueID";
import classes from "./TaskModal.module.css";
import { useSubmit, Form } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TaskModal({ formData, method, closeModal }) {


    const submit = useSubmit();
    const [formError, setFormError] = useState(false);
   

    function displayError() {
        setFormError(true);
    }

    function handleSave(event) {
        event.preventDefault();


        let formData = event.currentTarget;
        submit(formData, { method: method });
        closeModal();
    
    }

    function handleClose() {
        formData = '';
        closeModal()
    }
    return (
        <motion.div
            className={classes.taskModalContainer}
            initial={{x:50,opacity:0}}
            animate= {{x:0, opacity:1}} 
            exit={{y:10,opacity:0}}   
            transition={{type:'spring', duration:0.4}}  >
            <div className={classes.taskModalInnerContainer}>
                <Form onSubmit={handleSave} >
                    <div>
                        <input type="text" name="id" id="id" defaultValue={formData ? formData.id : uniqueID()} hidden />
                    </div>
                    <div className={classes.firstRow}>
                        <div>
                            <label htmlFor="taskName">Task name : </label>
                            <input className={classes.buttonInput} type="text" name="taskName" id="taskName" defaultValue={formData ? formData.taskName : ''} required />
                        </div>
                        <div>
                            <label htmlFor="taskSOPLink">Task SOP link : </label>
                            <input className={classes.buttonInput} type="text" name="taskSOPLink" id="taskSOPLink" defaultValue={formData ? formData.taskSOPLink : ''} required />
                        </div>
                    </div>

                    <div className={classes.descArea}>
                        <label htmlFor="taskDescription">Task Description : </label>
                        <textarea style={{ resize: 'none', padding: '5px' }} placeholder="Enter Description" name="taskDescription" id="taskDescription" cols="30" rows="5" defaultValue={formData ? formData.taskDescription : ''} required></textarea>
                    </div>
                    <div className={classes.SecondRow}>
                        <div>
                            <label htmlFor="taskTime">Task Time : </label>
                            <input className={classes.time} type="time" name="taskTime" id="taskTime" defaultValue={formData ? formData.taskTime : ''} required />
                        </div>
                        <div>
                            <label htmlFor="taskSLA">Task SLA : </label>
                            <input className={classes.time} type="time" name="taskSLA" id="taskSLA" defaultValue={formData ? formData.taskSLA : ''} required />
                        </div>
                    </div>

                    <div className={classes.thirdRow}>
                        <div>
                            {/* <label htmlFor="taskReccuring">Task Recurrence : </label>
                            <input className={classes.buttonInput} type="text" name="taskReccuring" id="taskReccuring" defaultValue={formData ? formData.taskReccuring : ''} required /> */}
                            <label style={{paddingBottom:'5px'}}>Task Recurrence : </label>
                            <select required name="taskReccuring" id="taskReccuring" defaultValue={formData ? formData.taskReccuring : false} >
                                <option value="" hidden>Select</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="taskAtt">Task Attachment  </label>&emsp;
                            <input type="checkbox" name="taskAtt" id="taskAtt" defaultChecked={formData ? formData.taskAtt  : false} />
                        </div>
                    </div>

                    <div >
                        <button style={{ border: '1px solid black', width: '7rem' }} type="button" onClick={handleClose}>Cancel</button>
                        <button style={{ border: '1px solid black', width: '7rem' }} type="submit">Save</button>
                    </div>
                </Form>
            </div>
        </motion.div>
    );
}