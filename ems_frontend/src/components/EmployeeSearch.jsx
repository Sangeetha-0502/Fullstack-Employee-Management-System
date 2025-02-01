import React, { useState } from 'react';

const EmployeeSearch = () => {
  // Dummy employee data
  const employees = [
    { id: 1, name: 'John Doe', department: 'HR' },
    { id: 2, name: 'Jane Smith', department: 'Engineering' },
    { id: 3, name: 'James Bond', department: 'Secret Service' },
    { id: 4, name: 'Lucy Liu', department: 'Design' },
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Search Bar styled using Bootstrap */}
          <input
            type="text"
            className="form-control"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Display filtered employee list */}
      {filteredEmployees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <ul className="list-group mt-3">
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              {employee.name} - {employee.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeSearch;
