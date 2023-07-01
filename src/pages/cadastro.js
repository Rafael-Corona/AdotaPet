import styles from './login.module.css'
import { useState } from "react";
import { useRouter } from "next/router.js";

import {
    ButtonInverted,
    ButtonContainer,
    Input,
    FontBold,
    Errors,
  } from "./styles.js";

function Cadastro() {
    const router = useRouter();
    const [values, setValues] = useState({
        name: "",
        cpf: "",
        telefone: "",
        email: "",
        psw: "",
        pswRepeat: "",
      });
    
    const [formErrors, setFormErrors] = useState({});
    let errorsNum = 0;

	const signUpHandler = async (event) => {
		event.preventDefault()
        setFormErrors(validate(values));
        if (errorsNum === 0) {
            const data = {
                name: values.name,
                cpf: values.cpf,
                telefone: values.telefone,
                email: values.email,
                password: values.psw,
            }

    
            const jsonData = JSON.stringify(data)
    
            const endpoint = '/api/cadastro'
    
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: jsonData
            }
    
            const response = await fetch(endpoint, options)
    
            const result = await response.json()

            router.push("/login");
        }
		
	}

    //Função para validação dos dados de cadastro
    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if (Object.keys(values.cpf).length != 11) {
            errors.cpf = "CPF inválido!";
            errorsNum++;
        }
        if (!regexEmail.test(values.email)) {
            errors.email = "Formato de email inválido!";
            errorsNum++;
        }
        if (Object.keys(values.psw).length < 8) {
            errors.senha = "Senha muito curta!";
            errorsNum++;
        }
        if (values.pswRepeat != values.psw) {
            errors.senha = "Senhas não correspondem!";
            errorsNum++;
        }
        return errors;
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        setFormErrors("");
        errorsNum = 0;
        console.log(errorsNum)
    };

	return (
		<div className={styles.container}>
            <form action="/" method="POST" onSubmit={signUpHandler} className={styles.signup_form}>
            <div>
            <h3>
                <FontBold>Crie sua conta</FontBold>
            </h3>
            <br />
            <label>Nome e Sobrenome*</label>
            <Input
                type="text"
                placeholder="Nome"
                name="name"
                required
                onChange={onChange}
            />
            <br />
            <label>CPF*</label>
            <Input
                type="text"
                placeholder="CPF"
                name="cpf"
                maxLength={11}
                required
                onChange={onChange}
            />
            <br />
            <Errors>{formErrors.cpf}</Errors>
            <label>Telefone</label>
            <Input
                type="text"
                placeholder="Telefone"
                name="telefone"
                onChange={onChange}
            />
            <br />
            <label>Email*</label>
            <Input
                type="email"
                placeholder="Email*"
                name="email"
                required
                onChange={onChange}
            />
            <Errors>{formErrors.email}</Errors>
            <label>Senha*</label>
            <Input
                type="password"
                placeholder="Senha*"
                name="psw"
                required
                onChange={onChange}
            />
            <br />
            <label>Confirmar Senha*</label>
            <Input
                type="password"
                placeholder="Confirmar Senha*"
                name="pswRepeat"
                required
                onChange={onChange}
            />
            <br />
            <Errors>{formErrors.senha}</Errors>
            <ButtonContainer>
                <ButtonInverted type="submit">Cadastrar</ButtonInverted>
            </ButtonContainer>
            </div>
			</form>
		</div>
	)
}

export default Cadastro