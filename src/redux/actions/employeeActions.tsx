import { Employee } from "../../types/form";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../typesActions/employeeTypes";

export const addEmployee = (employee:Employee) => ({ type: ADD_EMPLOYEE, payload:employee})

export const delEmployee = (employee:Employee) => ({ type: DELETE_EMPLOYEE, payload:employee})