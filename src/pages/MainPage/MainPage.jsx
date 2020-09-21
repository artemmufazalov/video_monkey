import React from 'react';
import {NavLink} from "react-router-dom";

import "./MainPage.scss"
import {
    cameraIcon,
    cameraImg, checkedGreenIcon,
    computerIcon, laptopImg,
    softwareLogo,
    spinWithButton,
    videoCameraIcon,
    workingSpaceImg
} from "../../assets";

const features = {
    free: ["Профессиональные инструменты обработки фото и видео",
        "Доступ ко всем инструментам сообщества",
        "Более 100 продвинутых анимаций"],
    pro: ["Профессиональные инструменты обработки фото и видео",
        "Доступ ко всем инструментам сообщества",
        "Более 200 продвинутых анимаций",
        "Видеокурс по работе с программой от профессионалов компании",
        "Круглосуточная техническая поддержка",
        "Инструменты с использованием нейронных сетей для видеообработки нового уровня"
    ]
}

const MainPage = () => {
    return (
        <div className={"mainPage"}>
            <div className={"mainPage__top"}>
                <div className={"mainPage__top__content"}>
                    <div className={"mainPage__top__content__top"}>
                        <img src={softwareLogo} className={"mainPage__top__content__top__logo"} alt={"software logo"}/>
                        <span className={"mainPage__top__content__top__text"}>
                            <div className={"mainPage__top__content__top__text__name"}>Video Monkey 2020</div>
                            <div className={"mainPage__top__content__top__text__phrase"}>
                                Простой инструмент для выдающихся творений
                            </div>
                        </span>
                    </div>
                    <NavLink to={"/products"}>
                        <span className={"mainPage__top__content__tryButton"}>Попробовать бесплатно</span>
                    </NavLink>
                </div>
            </div>

            <div className={"mainPage__features"}>
                <div className={"mainPage__features__header"}>
                    Лучшее решение для хобби и творчества
                </div>
                <div className={"mainPage__features__wrapper"}>
                    <div className={"mainPage__features__wrapper__column"}>
                        <img src={cameraIcon} alt="camera"/>
                        <div>Обрабатотка фотографий</div>
                    </div>
                    <div className={"mainPage__features__wrapper__column"}>
                        <img src={videoCameraIcon} alt="video camera"/>
                        <div>Профессиональная обработка видео</div>
                    </div>
                    <div className={"mainPage__features__wrapper__column"}>
                        <img src={spinWithButton} alt="spin with button"/>
                        <div>Конвертация разных форматов медиа файлов</div>
                    </div>
                    <div className={"mainPage__features__wrapper__column"}>
                        <img src={computerIcon} alt="computer"/>
                        <div>Захват видео с экрана</div>
                    </div>
                </div>
            </div>

            <div className={"mainPage__photosAndText"}>
                <div className={"mainPage__photosAndText__item"}>
                    <img src={cameraImg} className={"mainPage__photosAndText__item__photo"} alt={"camera"}/>
                    <span className={"mainPage__photosAndText__item__content"}>
                        <div className={"mainPage__photosAndText__item__content__header"}>
                            Любая камера. Любой формат. Любая платформа
                        </div>
                        <div className={"mainPage__photosAndText__item__content__text"}>
                            Программа поддерживает обработку видео в формате 8к.
                            Работает одинаково хорошо на Windows, Mac OS или Linux.
                            Поддерживает все распространенные форматы файлов и видео.
                            Программа адаптирована под работу даже на слабых компьютерах
                        </div>
                    </span>
                </div>
                <div className={"mainPage__photosAndText__item"}>
                    <span className={"mainPage__photosAndText__item__content"}>
                        <div className={"mainPage__photosAndText__item__content__header"}>
                            Все инструменты всегда под рукой
                        </div>
                        <div className={"mainPage__photosAndText__item__content__text"}>
                            Профессиональный пакет позволяет получить доступ к синхранизации данных и настроек пользователя через единую облачную платформу.
                            Модульная архитектура позволяет получать доступ к новейшим решения для видеобработки по щелчку мыши
                        </div>
                    </span>
                    <img src={workingSpaceImg} className={"mainPage__photosAndText__item__photo"}
                         alt={"working place"}/>
                </div>
                <div className={"mainPage__photosAndText__item"}>
                    <img src={laptopImg} className={"mainPage__photosAndText__item__photo"} alt={"laptop"}/>
                    <span className={"mainPage__photosAndText__item__content"}>
                        <div className={"mainPage__photosAndText__item__content__header"}>
                            Вы только начинаетете?
                        </div>
                        <div className={"mainPage__photosAndText__item__content__text"}>
                            Набор инструментов достаточно прост чтобы в нем разобраться,
                            все версии включают в себя достаточно обширный список инструкций, охватывающий все функции программы.
                            Также, для всех, купивших полную версию, доступен курс по видеобработки из команды проффесионалов Video Monkey
                        </div>
                    </span>
                </div>
                <div className={"mainPage__photosAndText__phrase"}>
                    Дайте волю своему творческому потенциалу, <br/>
                    позвольте программе решать рутинные задачи за вас!
                </div>
            </div>

            <div className={"mainPage__products"}>
                <div className={"mainPage__products__column"}>
                    <div className={"mainPage__products__column__header"}>Video Monkey Free</div>
                    <div className={"mainPage__products__column__price"}>Бесплатно</div>
                    <div className={"mainPage__products__column__features"}>
                        {features.free.map(text => <div className={"mainPage__products__column__features__item"}>
                            <img src={checkedGreenIcon} alt={"check"}/>
                            <span>{text}</span>
                        </div>)}
                    </div>
                    <NavLink to={"/products"}>
                        <span className={"mainPage__products__column__button"}>
                        Попробовать бесплатно
                        </span>
                    </NavLink>
                </div>
                <div className={"mainPage__products__column"}>
                    <div className={"mainPage__products__column__header"}>Video Monkey Pro</div>
                    <div className={"mainPage__products__column__price"}>6 990 рублей</div>
                    <div className={"mainPage__products__column__features"}>
                        {features.pro.map(text => <div className={"mainPage__products__column__features__item"}>
                            <img src={checkedGreenIcon} alt={"check"}/>
                            <span>{text}</span>
                        </div>)}
                    </div>
                    <NavLink to={"/cart"}>
                         <span className={"mainPage__products__column__button"}>
                        Добавить в корзину
                        </span>
                    </NavLink>
                </div>
                <div className={"mainPage__products__column"}>
                    <div className={"mainPage__products__column__header"}>Video Monkey Pro 365</div>
                    <div className={"mainPage__products__column__price"}> 690 рублей ежемесячно</div>
                    <div className={"mainPage__products__column__features"}>
                        {features.pro.map(text => <div className={"mainPage__products__column__features__item"}>
                            <img src={checkedGreenIcon} alt={"check"}/>
                            <span>{text}</span>
                        </div>)}
                    </div>
                    <NavLink to={"/cart"}>
                         <span className={"mainPage__products__column__button"}>
                        Добавить в корзину
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MainPage;