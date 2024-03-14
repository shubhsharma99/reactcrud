import React, { useState } from 'react'

 

export const CrudApp2 = () =>{

    const [usersValue, setUsersValue ] = useState({

        "username": "",

        "useremail": "",

        "userpwd" : ""

    })

    const [arr, setArr] = useState([])

    const[flag,setFlag]=useState(true);

    const[emp,setEmp]=useState({ "username": "",

                                 "useremail": "",

                                 "userpwd" : ""})

   

   const inputHandler = (event) => {

    let val = event.target.value;

    let name = event.target.name;

    setUsersValue({...usersValue,[name]:val});

   }

 

   const add_user = (event) => {

    event.preventDefault();

    setArr([...arr, usersValue]);

    setUsersValue({

        "username": "",

        "useremail": "",

        "userpwd" : ""

           })

           }

 

   const employee_delete=(eid)=>{

    //console.log(eid)

    let newarr = arr.filter((items,index)=>{

        return eid != index;

            });

               setArr(newarr);

           }

         

   //edit employee

   const employee_edit=(ueid)=>{

  setEmp(emp);

  setFlag(false);

        let editArr = arr.filter((items,index)=>{

            return ueid === index

        });

        setUsersValue(editArr[0])

         }

 

 //update employee

        const update_employee=()=>{

            arr[emp] = usersValue

              setArr(arr);

              setUsersValue("");

              setFlag(true);

   }

  return (

    <div className='container'>

        <div className="row">

            <div className="col-sm-4">

                <h3>Add Employee</h3>

                <form onSubmit={add_user}>

                    <div className='form-group'>

                        <input type="text" className='form-control' name='username' onChange={inputHandler} placeholder='Enter Name' value={usersValue.username}/>

                    </div>

                    <div className='form-group'>

                        <input type="text" className='form-control' name='useremail' onChange={inputHandler} placeholder='Enter Email' value={usersValue.useremail}/>

                    </div>

                    <div className='form-group'>

                        <input type="text" className='form-control' name='userpwd' onChange={inputHandler} placeholder='Enter Password' value={usersValue.userpwd}/>

                    </div>

                    <div className='form-group'>

                        { flag==true ? <button type='submit' className='btn btn-info'>Add</button>:""}

                    </div>

                </form>

                       {flag==false ? <button type='button' className='btn btn-info' onClick={update_employee}>update</button>:""}

            </div>

           

            <div className="col-sm-8">

                <h3>Manage Employee</h3>

                <table className='table'>

                    <thead>

                        <tr>

                            <th>Employee Name</th>

                            <th>Employee email</th>

                            <th>Employee passward</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                       {arr.map((items,index)=>{

                        return(

                            <tr key={index}>

                                <td>{items.username}</td>

                                <td>{items.useremail}</td>

                                <td>{items.userpwd}</td>

                                <td><button className='btn btn-danger'onClick={()=>employee_delete(index)}>Delete</button>

                                <button className='btn btn-info ml-2' onClick={()=>employee_edit(index)}>Edit</button></td>

                            </tr>

                          )

                       })}

                       

                    </tbody>

                </table>

            </div>

        </div>

    </div>

  )

}