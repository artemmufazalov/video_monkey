import React from 'react';
import {NavLink} from "react-router-dom";

import "./Header.scss";
import {monkeyLogo, shoppingCartIcon, userIcon} from "../../assets";

const Header = () => {
    return (
        <header className="header">
            <span className="header__left">
                <div className="header__left__appLogo">
                    <NavLink to={"/"}>
                        <img src={monkeyLogo}
                             alt={"monkey logo"}/>
                    </NavLink>
                </div>

                <NavLink to={"/"} className="header__left__appName">Video Monkey</NavLink>

            </span>

            <span className="header__right">
                <div className={"header__right__links"}>
                     <NavLink to={"/products"}>Продукты</NavLink>
                     <NavLink to={"/pricing"}>Цены</NavLink>
                     <NavLink to={"/support"}>Поддержка</NavLink>
                </div>

                <div className={"header__right__icons"}>
                    <NavLink to={"/profile"}>
                        <img src={userIcon} alt={"user icon"}/>
                    </NavLink>

                    <NavLink to={"/cart"}>
                        <img src={shoppingCartIcon} alt={"shopping cart icon"}/>
                    </NavLink>
                </div>

            </span>
        </header>
    );
};

export default Header;