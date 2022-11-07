import { useDispatch } from "react-redux"
import { delEmployee } from "../redux/actions/employeeActions"
import { Employee } from "../types/form"

export const useDelete = (info:Employee) => {

    const dispach = useDispatch()

    const handleDelete = () => {
        dispach(delEmployee(info))
    }

    return { handleDelete }
}