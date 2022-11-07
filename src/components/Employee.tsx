import { EmployeeDelteteBtn, EmployeeInfo, EmployeeStyle, Title } from "../style/employee"
import { EmployeeProps } from "../types/employee"
import { BsFillTrashFill } from "react-icons/bs"
import { useDelete } from "../hooks/useDelete"

const Employee = ({ info }:EmployeeProps) => {

    const { handleDelete } = useDelete(info)

    return (
        <EmployeeStyle>
            <Title>Employee</Title>
            <EmployeeInfo>
                <span>Nombre: </span>
                <span> {info.nombre}</span>
            </EmployeeInfo>
            <EmployeeInfo>
                <span>Email: </span>
                <span> {info.email}</span>
            </EmployeeInfo>
            <EmployeeInfo>
                <span>Estado Civil: </span>
                <span> {info.estadoCivil}</span>
            </EmployeeInfo>
            <EmployeeInfo>
                <span>Hijos: </span>
                <span> {info.hijos}</span>
            </EmployeeInfo>
            <EmployeeDelteteBtn onClick={handleDelete}><BsFillTrashFill/></EmployeeDelteteBtn>
        </EmployeeStyle>
    )
}

export default Employee