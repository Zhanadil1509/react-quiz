import React, {Component} from 'react';
import {Auths, AuthsForm} from "./style";
import Input from "../../components/UI/Input/Input";
import axios from "axios";

function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-d7aimWg-xKT17ZiTioX2NHltpmn_OM4', authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD-d7aimWg-xKT17ZiTioX2NHltpmn_OM4', authData)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    validateControl = (v, validation ) => {

        if(!validation) {
            return true
        }
        let isValid = true

        if(validation.required) isValid = v.trim() !== '' && isValid
        if(validation.email) isValid = validateEmail(v) && isValid
        if(validation.minLength) isValid = v.length >= validation.minLength && isValid

        return isValid
    }

    onChangeHandler = (e, v) => {
        const formControls = { ...this.state.formControls}
        const val = { ...formControls[v] }

        val.value = e.target.value
        val.touched = true
        val.valid = this.validateControl(val.value, val.validation)

        formControls[v] = val

        let isFormValid = true

        Object.keys(formControls).forEach(v => {
            isFormValid = formControls[v].valid && isFormValid
        })

        this.setState({formControls, isFormValid})
    }

    renderInputs = () => Object.keys(this.state.formControls).map((v, i) => {
        const val = this.state.formControls[v]
        return (
            <Input
                key={i}
                type={val.type}
                value={val.value}
                valid={val.valid}
                touched={val.touched}
                label={val.label}
                shouldValidate={!!val.validation}
                errorMessage={val.errorMessage}
                onChange={e => this.onChangeHandler(e, v)}
            />
        )
    })

    render() {
        return (
            <Auths>
                <AuthsForm>
                    <h1>Авторизация</h1>
                    <form action="" onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <button
                            type={'success'}
                            disabled={!this.state.isFormValid}
                            onClick={this.loginHandler}
                        >Войти</button>
                        <button
                            type={'primary'}
                            disabled={!this.state.isFormValid}
                            onClick={this.registerHandler}
                        >Зарегистрироваться</button>
                    </form>
                </AuthsForm>
            </Auths>
        );
    }
}

export default Auth;