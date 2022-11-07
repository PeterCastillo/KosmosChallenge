import { actionProps, employeesInitialStateProps } from "../../types/redux";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../typesActions/employeeTypes";

export const employeesInitialState: employeesInitialStateProps = {
    employees: [
        {
            nombre:"Peter Castillo",
            email:"peterjackcc@gmail.com",
            estadoCivil:"Soltero",
            hijos: "0",
        },
        {
            nombre:"Stanley Vilta",
            email:"stanleyvll@gmail.com",
            estadoCivil:"Soltero",
            hijos: "1",
        },
        {
            nombre:"Juan Carrasco",
            email:"juancc@gmail.com",
            estadoCivil:"Casado",
            hijos: "3",
        },
        {
            nombre:"Maritza Canchari",
            email:"mcanchari@gmail.com",
            estadoCivil:"Casado",
            hijos: "3",
        }
    ]
}

export function empployeeReducer(state = employeesInitialState , action:actionProps ){
    switch(action.type){
        case(ADD_EMPLOYEE):{
            return {
                ...state,
                employees: [...state.employees,action.payload]
            }
        }
        case(DELETE_EMPLOYEE):{
            return {
                ...state,
                employees: state.employees.filter(item => ( item.nombre != action.payload.nombre ))
            }
        }
        default:{
            return state
        }
    }
}