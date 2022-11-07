import { useDispatch } from "react-redux"
import { useForm } from "../hooks/useForm"
import { addEmployee } from "../redux/actions/employeeActions"
import { AiOutlineMinus } from "react-icons/ai"
import { FormComtainer, FormInput, FormStyled, MinusBtn, RadionFormContainer } from "../style/form"
import { FormProps } from "../types/form"

const Form = ({handleShowForm}:FormProps) => {

    const dispach = useDispatch()
    const [ inputs , handleFilter , handleReset ] = useForm({
        nombre:"",
        email:"",
        estadoCivil:"",
        hijos: "",
    })

    const { nombre, email, estadoCivil, hijos } = inputs

    const handleADD = () =>{
        dispach(addEmployee(inputs))
        handleReset()
    }
    return (
        <FormComtainer>
            <FormStyled>
                <FormInput>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        name="nombre"
                        onChange={handleFilter}
                        value={nombre}
                        placeholder="Ingrese su Nombre"
                    />
                </FormInput>
                <FormInput>
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="email"
                        onChange={handleFilter}
                        value={email}
                        placeholder="Ingrese su correo"
                    />
                </FormInput>
                <FormInput>
                    <label>Estado Civil</label>
                    <select 
                        name="estadoCivil"
                        onChange={handleFilter}
                        value={estadoCivil}
                    >
                        <option value="" selected disabled>Estado Civil</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viudo">Viudo</option>
                    </select>
                </FormInput>
                <FormInput>
                    <label>Tiene hijos?</label>
                    <div>
                        <RadionFormContainer>
                            <input 
                                type="radio"
                                name="hijos"
                                onChange={handleFilter}
                                value={"si"}
                            />
                            <label>Si</label>
                        </RadionFormContainer>
                        <RadionFormContainer>
                            <input 
                                type="radio"
                                name="hijos"
                                onChange={handleFilter}
                                value={"no"}
                            />
                            <label>No</label>
                        </RadionFormContainer>
                    </div>
                </FormInput>
                <button onClick={handleADD}>Ingresar</button>
                <MinusBtn onClick={handleShowForm}><AiOutlineMinus/></MinusBtn>
            </FormStyled>
        </FormComtainer>
    )
}

export default Form