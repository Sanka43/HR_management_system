import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import firebaseConfig from './firebase';
import './Admin.css';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function ManageSalaries() {

    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const ref = collection(db, 'employees');
            const snapshot = await getDocs(ref);
            const employeeList = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setEmployees(employeeList);
          } catch (error) {
            console.error('Error fetching employees: ', error);
          }
        };
    
        fetchEmployees();
      }, []);

  return (
    <div className="panel">
            <h2>Add Salary</h2>
            <form method="post" action="">
                <table>
                <tbody>
                    <tr>
                        <th><label htmlFor="user_id">Employee:</label></th>
                        <th><label htmlFor="salary">Salary Amount:</label></th>
                    </tr>
                    <tr>
                        <td>
                            <select 
                                id="user_id" 
                                name="user_id"
                                value={selectedEmployee}
                                onChange={(e) => setSelectedEmployee(e.target.value)}>
                            <option value="">Select Employee</option>
                                {/* {employees.map((employee) => (
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                )
                             )} */}
                            </select>
                        </td>
                        <td colSpan="2">
                            <input 
                                type="number" 
                                id="salary" 
                                name="salary" 
                                step="0.01" 
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                required/>
                        </td>
                    </tr>
                    </tbody>  
                </table>
                <input type="submit" name="add_salary" value="Add Salary"/>
            </form>
        </div>
  )
}
