import { MiniEmployeeStyle, MiniInfo , BtnDelete } from "../style/miniEmployee"
import { EmployeeProps } from "../types/employee"
import { BsFillTrashFill } from "react-icons/bs"
import { useDelete } from "../hooks/useDelete"

const MiniEmployee = ({info}:EmployeeProps) => {

    const { handleDelete } = useDelete(info)

    return (
        <MiniEmployeeStyle>
            <MiniInfo>
                <span>Nombre</span>
                <span>{info.nombre}</span>
            </MiniInfo>
            <BtnDelete onClick={handleDelete}> <BsFillTrashFill/> </BtnDelete>
        </MiniEmployeeStyle>
    )
}

export default MiniEmployee