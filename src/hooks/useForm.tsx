import React, {useState } from "react"
import { Employee } from "../types/form"

export const useForm = (initialState:Employee):[ Employee , React.ChangeEventHandler , () => void] => {

    const [ inputs , setInputs ] = useState<Employee>(initialState)

    const handleFilter = (e:any) => {
        const { name , type , value , checked } = e.target; 

        setInputs((old) => ({
            ...old,
            [name]: type === "radio" && checked && value === "si" ? "si" : value
        }))
    }
    
    const handleReset = () => {
        setInputs(initialState)
    }

    return [ inputs , handleFilter , handleReset ]
}