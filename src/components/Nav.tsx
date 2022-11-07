import { NavContainer, Title , MiniEmployeeSection, NavStyle, MenuEmployee } from "../style/nav"
import { BsFillFilePersonFill } from "react-icons/bs"
import { NavProps } from "../types/nav"
import MiniEmployee from "./MiniEmployee"
import { useState } from "react"

const Nav = ({ employees }:NavProps) => {
    const [ showEmployee , setShowEmployee ] = useState(false)

    return (
        <NavContainer>
            <NavStyle>
                <Title>Kosmos Employee Management</Title>
                <MiniEmployeeSection onClick={()=> setShowEmployee(!showEmployee)}><BsFillFilePersonFill/></MiniEmployeeSection>
                {
                    showEmployee
                    ?<MenuEmployee>
                        {
                            employees.map(item => (
                                <MiniEmployee info={item}/>
                            ))
                        }
                    </MenuEmployee>
                    :<></>
                }
            </NavStyle>
        </NavContainer>
    )
}

export default Nav