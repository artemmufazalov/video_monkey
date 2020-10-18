import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons';

import {errorCrossIcon, registrationReject, serverErrorIcon, submitIcon} from "../../../assets";

const EmailConfirmationContentView = ({option, onCancelRegistration, onVerifyUser}) => {
    switch (option) {
        case "initial":
        case "login":
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Подтвердить аккаунт</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <InfoCircleOutlined/>
                        <h3>
                            Требуется подтверждение аккаунта
                        </h3>
                        <p>
                            На Вашу почту отправлено письмо с ссылкой для подтверждение аккаунта.
                        </p>
                    </div>

                </div>
            );

        case "submit":
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Подтвердить аккаунт</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={submitIcon} alt="Submit"/>
                        <h3>
                            Ожидайте ответа
                        </h3>
                        <p>
                            На сервер был отправлен запрос на подтверждение.
                            Ожидайте ответа, в случае успеха, вы будут перенаправлены автоматически
                        </p>
                    </div>

                </div>
            );
        case "reject":
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Отмена регистрации</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={registrationReject} alt="Registration reject"/>
                        <br/>
                        <p>
                            Вы уверены, что хотите отменить регистацию? Для удаления аккаунта, перейдите
                            <b onClick={onCancelRegistration}> по ссылке</b>.
                            Если вы хотите продолжить регистацию, то <b onClick={onVerifyUser}>перейдите
                            сюда</b>.
                        </p>
                    </div>

                </div>
            );
        case "reject--success":

            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Удаление аккаунта</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={registrationReject} alt="Registration reject"/>
                        <h3>
                            Аккаунт был успешно удален
                        </h3>
                        <br/>
                        <p><b>На главную</b></p>
                    </div>

                </div>
            );
        case "reject--pending":
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Отмена регистрации</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={registrationReject} alt="Registration reject"/>
                        <h3>
                            Ожидайте ответа сервера
                        </h3>
                        <p>
                            Запрос на сервер был выслан. Ожидайте завершения операции
                        </p>
                    </div>

                </div>
            );

        case "error":
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Ошибка</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={serverErrorIcon} alt={"Error icon"}/>
                        <h3>
                            Ошибка сервера!
                        </h3>
                        <p>
                            Произошел сбой на сервере, в данный момент операция не может быть выполнена. Пожайлуста,
                            попробуйте повторить позже
                        </p>
                    </div>

                </div>
            );
        default:
            return (
                <div className={"auth__container__form__block"}>

                    <div className={"auth__container__form__heading"}>
                        <h2>Ошибка</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <img src={errorCrossIcon} alt="Error cross icon"/>
                        <h3>
                            Возникла ошибка!
                        </h3>
                        <p>
                            В данный момент операция не может быть выполнена. Пожайлуста, попробуйте повторить позже
                        </p>
                    </div>

                </div>
            );
    }
}

const EmailConfirmation = ({option, onCancelRegistration, onVerifyUser}) => {

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

                <EmailConfirmationContentView option={option} onCancelRegistration={onCancelRegistration}
                                              onVerifyUser={onVerifyUser}/>

            </div>

        </div>
    );
};

export default EmailConfirmation;