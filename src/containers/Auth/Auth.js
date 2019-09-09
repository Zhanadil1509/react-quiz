import React, {Component} from 'react';
import {Auths, AuthsForm} from "./style";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <Auths>
                <AuthsForm>
                    <h1>Авторизация</h1>
                    <form action="" onSubmit={this.submitHandler}>
                        <Input
                            type="text"
                            label={'E-mail'}
                        />
                        <Input
                            type="password"
                            label={'Пароль'}
                            errorMessage={'Error Text'}
                        />
                        <button
                            type={'success'}
                            onClick={this.loginHandler}
                        >Войти</button>
                        <button
                            type={'primary'}
                            onClick={this.registerHandler}
                        >Зарегистрироваться</button>
                    </form>
                </AuthsForm>
            </Auths>
        );
    }
}

export default Auth;