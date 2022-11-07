import { Employee } from "./form";

export interface employeesInitialStateProps {
    employees: Array<Employee>
}

export interface actionProps {
    type: string
    payload: Employee
}