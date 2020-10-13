import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons';

const EmailConfirmation = ({initial, option }) => {

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
                {initial &&
                <div className={"auth__container__form__block"}>
                    <div className={"auth__container__form__heading"}>
                        <h2>Зарегистрироваться</h2>
                    </div>

                    <div className={"auth__container__form__block--confirmation"}>
                        <InfoCircleOutlined/>
                        <h3>
                            Подтвердите свой аккаунт
                        </h3>
                        <p>
                            На Вашу почту отправлено письмо с ссылкой для подтверждение аккаунта.
                        </p>
                    </div>
                </div>
                }

                {/*{option==="reject" && <>}
                {option==="submit" && <>}*/}


            </div>

        </div>
    );
};

export default EmailConfirmation;