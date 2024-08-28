import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import firebaseConfig from './src/firebase.js';
import './Admin.css'

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function ManageEmployees() {

    const [eMail, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [fName, setFname ] = useState('');
    const [lName, setLname ] = useState('');
    const [gender, setGender ] = useState('');
    const [phone, setPhone ] = useState('');
    const [address, setAddress ] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const ref = collection(db, 'employees')// Assuming 'employees' is your Firestore collection
        await addDoc(ref,{
            email: eMail,
            password: password,
            f_Name: fName,
            l_Name: lName,
            gender: gender,
            phone: phone,
            address: address
        });
        alert("New employee added")
        //reset the form fields
        setEmail('');
        setPassword('');
        setFname('');
        setLname('');
        setGender('');
        setPhone('');
        setAddress('');
    } catch (error){
        console.error("Error adding employees", error);
        alert("Fail to add Employee")
    }
}

  return (
    <div className="panel">
            <h2>Add New Employee</h2>
            <form method="post" action="">
                <table className="inTable">
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={eMail} 
                            onChange={(e) => setEmail(e.target.value)}
                            required/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password:</label></td>
                        <td><input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/></td>
                        
                    </tr>
                    <tr>
                        <td><label htmlFor="fname">Frist Name:</label></td>
                        <td><input 
                            type="text" 
                            id="f_name" 
                            name="f_name" 
                            value={fName}
                            onChange={(e) => setFname(e.target.value)}
                            required/></td>
                        
                    </tr>
                    <tr>
                        <td><label htmlFor="lname">Last Name:</label></td>
                        <td><input 
                            type="text" 
                            id="l_name" 
                            name="l_name" 
                            value={lName}
                            onChange={(e) => setLname(e.target.value)}
                            required/></td>    
                    </tr>
                    <tr>
                        <td><label htmlFor="gender">Gender:</label></td>
                        <td><select 
                                id="gender" 
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Contact Number:</label></td>
                        <td><input 
                            type="phone" 
                            id="phone" 
                            name="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required/></td>     
                    </tr>
                    <tr>
                        <td><label htmlFor="address">Address:</label></td>
                        <td><textarea 
                            id="address" 
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            required/>
                        </td>    
                    </tr>
                    <tr>
                        {<td colSpan="2" class="submit"><input type="submit" /*name="add_employee"  value="Add Employee"*/ /></td> }
                    </tr>
                </table>
                
            </form>

            <h2>Employee List</h2>
            <table className="list_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Full Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>01</td>
                            <td>isankaerangahtc820@gmail.com</td>
                            <td>Sanka</td>
                            <td>Sanka Eranga</td>
                            <td>absent</td>
                            <td>
                                {/* <a href="#"class="icon-view"><i class="fas fa-eye"></i></a>
                                <a href="#" onclick="return confirm('Are you sure?')"class="icon-delete"><i class="fas fa-trash"></i></a> */}
                            </td>
                        </tr>
                    
                </tbody>
            </table>
    </div>
  )
}
