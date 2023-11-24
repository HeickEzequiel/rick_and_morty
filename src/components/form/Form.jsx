import React, { useState } from "react";
import validation from "../../utils/validation";

function Form(props){
    
const [userData, setUserData] = useState ({
    email:"",
    password: ""
})

const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password"
})

const handleChange = (event) => {
    const {name,value} = event.target
    setUserData({
        ...userData,
        [name]: value
    })
    setErrors(validation({
        ...userData,
        [name]: value
    }))
}
    
const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);
  }


    return(
        <div>
            <form onSubmit={handleSubmit} >

                <label>Email:</label>
                <input type='text'
                       key="email"
                       name= "email"
                       value={userData.email}
                       placeholder="Ingresar email"
                       onChange={handleChange}
                    />
                    <p>{ errors.email ? errors.email : null }</p>
                <br />

                
                <label>Password:</label>
                <input type='password'
                       key="password"
                       name= "password"
                       value={userData.password}
                       placeholder="Ingresar password"
                       onChange={handleChange}
                    />
                     <p>{ errors.password && errors.password }</p>
                <br />

                <button
                        type="submit"
                        disabled={ errors.email || errors.password }
                    >
                    Enviar </button>

            </form>
        </div>

    )
}

export default Form