import { useSelector } from "react-redux"
import Employee from "./components/Employee"
import Form from "./components/Form"
import Nav from "./components/Nav"
import { RootState } from "./redux/reducers/reducer"
import { BtnAddPlus, EmployeeContaienr } from "./style/app"
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"

function App() {

  const state = useSelector( (state: RootState) => state)
  const { employees } = state.employee
  const [ showForm , setShowForm ] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      {
        showForm
        ? <Form handleShowForm={handleShowForm}/>
        : <></>
      }
      <Nav employees={employees}/>
      <EmployeeContaienr>
        {
          employees.map((item)=>(
            <Employee info={item}/>
          ))
        }
      </EmployeeContaienr>
      <BtnAddPlus onClick={handleShowForm}><AiOutlinePlus/></BtnAddPlus>
    </div>
  )
}

export default App
