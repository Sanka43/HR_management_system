import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import firebaseConfig from './firebase';
import './Admin.css'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function AddNewTask() {
    
    const [taskName, setTaskName] = useState('');
    const [taskCode, setTaskCode] = useState('');
    const [startDate, setStartDate] = useState('');

    const handleSubmite = async (e) => {
        e.preventDefault();

        try {
            const ref = collection(db, 'tasks') // Assuming 'tasks' is your Firestore collection
            await addDoc(ref,{
                task_name: taskName,
                task_code: taskCode,
                satart_date: startDate
            });
            alert("task added");      
            //Reset the form fields
            setTaskName('');
            setTaskCode('');
            setStartDate('');

        } catch (error){
            console.error("Error adding tasks", error);
            alert("Fail to add task");
        }

    }

  return (
    <div className="panel">
        <div className="container">
            <h1>Add Task</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="task_name">Task Name:</label></td>
                            <td>
                                <input
                                    type="text"
                                    id="task_name" 
                                    name="task_name" 
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="task_code">Task Code:</label></td>
                            <td>
                                <input 
                                    type="text" 
                                    id="task_code" 
                                    name="task_code"
                                    value={taskCode}
                                    onChange={(e) => setTaskCode(e.target.value)} 
                                    required/>
                                </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="start_date">Start Date:</label></td>
                            <td>
                                <input 
                                    type="date" 
                                    id="start_date" 
                                    name="start_date" 
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required/>
                                </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Add Task"/> </td>
                        </tr> 
                    </tbody>
                </table>
            </form>
        </div>
    </div>
  )
}
