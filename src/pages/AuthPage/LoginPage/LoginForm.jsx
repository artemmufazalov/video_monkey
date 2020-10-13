import React from 'react';
import {Link} from "react-router-dom";
import {Form,Input,Button} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import validateForm from "../../../utils/helpers/validateForm";

//TODO: create an error field under submit button
//TODO: redirect to verify page if user wasn't confirmed

const LoginForm = (props) => {

    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isValid,
    } = props;

    return (
        <div className={"auth__container"}>
            <div className={"auth__container__text"}>
                <div className="auth__container__text__block">
                    <div className="auth__container__text__block__heading">
                        Учетная запись Video Monkey
                    </div>
                    <div className="auth__container__text__block__description">
                        Войдите в учетную запись,
                        чтобы просматривать свои покупки и статус подписки
                    </div>
                </div>

            </div>

            <div className={"auth__container__form"}>

                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Войти в аккаунт</h2>
                    </div>

                    <Form onFinish={handleSubmit}>

                        <Form.Item hasFeedback
                                   help={!touched.email ? null : errors.email}
                                   validateStatus={validateForm("email", touched, errors)}>
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                   size={"large"}
                                   placeholder="E-mail"
                                   value={values.email}
                                   id={"email"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item hasFeedback
                                   help={!touched.password ? null : errors.password}
                                   validateStatus={validateForm("password", touched, errors)}>
                            <Input
                                size={"large"}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Пароль"
                                value={values.password}
                                id={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit"
                                    size={"large"} onClick={handleSubmit}
                                    disabled={isSubmitting}>
                                Войти в аккаунт
                            </Button>
                        </Form.Item>

                        <div className="auth__container__form__bottom">
                            <p>
                                Еще нет аккаунта?
                            </p>
                            <Link to="/register">
                                Зарегистрироваться
                            </Link>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    );
};

export default LoginForm;