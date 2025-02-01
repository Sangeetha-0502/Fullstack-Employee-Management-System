// // import React,{useEffect, useState} from "react";
// // import { deleteEmployee, listOfEmployees } from "../EmployeService/Service"; 
// // import { useNavigate } from "react-router-dom";
// // const ListOfEmployees = () =>{

// //     const [employee, setEmploye] = useState([]);
// //     const navigator = useNavigate();

// //     useEffect(() =>{
// //         getallEmployee();
// //     },[])

// //     function getallEmployee(){
// //         listOfEmployees().then((response) => {
// //             setEmploye(response.data)
// //         }).catch(error=>{
// //             console.log(error);
// //         })
// //     }

// //     function addNewEmploye(){
// //         navigator('/add-employe')
// //     }
// //     function updateEmployee(id){
// //         navigator(`/update-employe/${id}`)

// //     }
// //     function removeEmployee(id){
// //         console.log(id);
// //         deleteEmployee(id).then((response) => {
// //             getallEmployee();
        
// //         }).catch(error => {
// //             console.error(error);
// //         })

// //     }
// //     return (
// //         <div className="container">
// //             <h2>List Of Employees</h2>
// //             <button className="btn btn-primary mb-2" onClick={addNewEmploye}>ADD</button>
// //             <table  className="table table-bordered table-striped">
// //                <thead>
             
// //                 <th>S.NO</th>
// //                 <th>Employe id</th>
// //                 <th>Employe firstName</th>
// //                 <th>Employe LastName</th>
// //                 <th>Employe email</th>
// //                 <th>Edit Details</th>
// //                </thead>

// //                <tbody>{
// //                 employee.map(employe => 
// //                     <tr keys={employe.id}>
// //                         <td>{employe.serialNo}</td>
// //                         <td>{employe.id}</td>
// //                         <td>{employe.firstName}</td>
// //                         <td>{employe.lastName}</td>
// //                         <td>{employe.email}</td>
// //                         <td>
// //                             <button className="btn btn-info" onClick={() => updateEmployee(employe.id)}>UPDATE</button>
// //                             <button className="btn btn-danger" style={{marginLeft:'10px'}} onClick={() => removeEmployee(employe.id)}>DELETE</button>
// //                         </td>
// //                     </tr>
// //                 )  
// //                }
// //                </tbody>
// //             </table>
// //             </div>
// //     )
// // }

// // export default ListOfEmployees
// import React, { useEffect, useState } from "react";
// import { deleteEmployee, listOfEmployees } from "../EmployeService/Service"; 
// import { useNavigate } from "react-router-dom";

// const ListOfEmployees = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(''); // State for search query
//   const navigator = useNavigate();

//   useEffect(() => {
//     getAllEmployees();
//   }, []);

//   // Fetch all employees
//   function getAllEmployees() {
//     listOfEmployees()
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Filtered employees based on search query
//   const filteredEmployees = employees.filter((employee) => {
//     return (
//       employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       employee.email.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   // Add a new employee
//   function addNewEmployee() {
//     navigator('/add-employe');
//   }

//   // Update employee details
//   function updateEmployee(id) {
//     navigator(`/update-employe/${id}`);
//   }

//   // Remove an employee
//   function removeEmployee(id) {
//     deleteEmployee(id)
//       .then((response) => {
//         getAllEmployees(); // Refresh the employee list after deletion
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   return (
//     <div className="container">
//       <h2>List of Employees</h2>
      
//       {/* Search Bar */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search employees..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* Add New Employee Button */}
//       <button className="btn btn-primary mb-2" onClick={addNewEmployee}>ADD</button>

//       {/* Employee Table */}
//       <table className="table table-bordered table-striped">
//         <thead>
//           <tr>
//             <th>S.NO</th>
//             <th>Employee ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Edit Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEmployees.length === 0 ? (
//             <tr>
//               <td colSpan="6">No employees found</td>
//             </tr>
//           ) : (
//             filteredEmployees.map((employee, index) => (
//               <tr key={employee.id}>
//                 <td>{index + 1}</td>
//                 <td>{employee.id}</td>
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.email}</td>
//                 <td>
//                   <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>UPDATE</button>
//                   <button
//                     className="btn btn-danger" 
//                     style={{ marginLeft: '10px' }} 
//                     onClick={() => removeEmployee(employee.id)}
//                   >
//                     DELETE
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListOfEmployees;

import React, { useEffect, useState } from "react";
import { deleteEmployee, listOfEmployees } from "../EmployeService/Service"; 
import { useNavigate } from "react-router-dom";

const ListOfEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees(searchQuery);
  }, [searchQuery]); // Run when searchQuery changes

  // Fetch employees from backend based on search query
  function getAllEmployees(query) {
    listOfEmployees(query) // Pass search query as a parameter
      .then((response) => {
        setEmployees(response.data); // Update state with the filtered employees
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update search query
  };

  // Add a new employee
  function addNewEmployee() {
    navigator('/add-employe');
  }

  // Update employee details
  function updateEmployee(id) {
    navigator(`/update-employe/${id}`);
  }

  // Remove an employee
  function removeEmployee(id) {
    deleteEmployee(id)
      .then(() => {
        getAllEmployees(searchQuery); // Refresh list after deletion
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2>List of Employees</h2>
      
      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={handleSearchChange} // Trigger search on change
        />
      </div>

      {/* Add New Employee Button */}
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>ADD</button>

      {/* Employee Table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="6">No employees found</td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>UPDATE</button>
                  <button
                    className="btn btn-danger" 
                    style={{ marginLeft: '10px' }} 
                    onClick={() => removeEmployee(employee.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfEmployees;
