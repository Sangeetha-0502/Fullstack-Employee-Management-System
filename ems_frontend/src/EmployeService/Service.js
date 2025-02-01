import axios from "axios";

const api = 'http://localhost:8080/api/employe';

export const listOfEmployees = (query) => {
    const url = query ? `${api}?firstName=${query}` : api; // Send query if it exists, otherwise send the full list of employees
    return axios.get(url);
  };

export const createEmployee = (employee) => axios.post(api, employee);

export const getEmployee = (employeeId) => axios.get(`${api}/${employeeId}`);

export const updateEmployee = (employeeId, employee) => axios.put(`${api}/${employeeId}`, employee);

export const deleteEmployee = (employeeId) => axios.delete(`${api}/${employeeId}`);
