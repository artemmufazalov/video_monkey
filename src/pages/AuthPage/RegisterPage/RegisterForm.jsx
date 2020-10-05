import React from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Button} from "antd";
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleOutlined} from '@ant-design/icons';

import validateForm from "../../../utils/helpers/validateForm";

const isRegisterFormSent = false;

const RegisterForm = (props) => {

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
                        Создайте учетную запись,
                        чтобы просматривать свои покупки и статус подписки
                    </div>
                </div>

            </div>

            <div className={"auth__container__form"}>

                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Зарегистрироваться</h2>
                    </div>
                    {!isRegisterFormSent ?
                        <Form onFinish={handleSubmit}>

                            <Form.Item hasFeedback
                                       help={!touched.email ? null : errors.email}
                                       validateStatus={validateForm("email", touched, errors)}>
                                <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                                       size={"large"}
                                       placeholder="E-mail"
                                       value={values.email}
                                       id={"email"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}/>
                            </Form.Item>

                            <Form.Item hasFeedback
                                       help={!touched.name ? null : errors.name}
                                       validateStatus={validateForm("name", touched, errors)}>
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                       size={"large"}
                                       placeholder="Имя"
                                       value={values.name}
                                       id={"name"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}/>
                            </Form.Item>

                            <Form.Item hasFeedback
                                       help={!touched.password ? null : errors.password}
                                       validateStatus={validateForm("password", touched, errors)}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                       size={"large"}
                                       type="password"
                                       placeholder="Пароль"
                                       value={values.password}
                                       id={"password"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}/>
                            </Form.Item>

                            <Form.Item hasFeedback
                                       help={!touched.passwordRepeat ? null : errors.passwordRepeat}
                                       validateStatus={validateForm("passwordRepeat", touched, errors)}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"/>}
                                       size={"large"}
                                       type="password"
                                       placeholder="Повторите пароль"
                                       value={values.passwordRepeat}
                                       id={"passwordRepeat"}
                                       onChange={handleChange}
                                       onBlur={handleBlur}/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit"
                                        size={"large"} onClick={handleSubmit}>
                                    Зарегистрироваться
                                </Button>
                            </Form.Item>

                            <div className="auth__container__form__bottom">
                                <p>
                                    Уже есть аккаунт?
                                </p>
                                <Link to="/login">
                                    Войти в аккаунт
                                </Link>
                            </div>

                        </Form>
                        :
                        <div className={"auth__container__form__block--confirmation"}>
                            <InfoCircleOutlined/>
                            <h3>
                                Подтвердите свой аккаунт
                            </h3>
                            <p>
                                На Вашу почту отправлено письмо с ссылкой для подтверждение аккаунта.
                            </p>
                        </div>
                    }

                </div>

            </div>

        </div>
    );
};

export default RegisterForm;