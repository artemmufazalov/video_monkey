import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.scss';
import {
	facebookLogo,
	headphonesIcon,
	instagramLogo,
	vkLogo,
	youtubeLogo,
} from '../../assets';

const Footer = () => {
	return (
		<footer className={'footer'}>
			<div className={'footer__left'}>
				<div className={'footer__left__top'}>
					<div className={'footer__left__top__column'}>
						<NavLink to={'/products'}>Продукты</NavLink>
						<NavLink to={'/pricing'}>Цены</NavLink>
					</div>
					<div className={'footer__left__top__column'}>
						<NavLink to={'cart'}>Корзина</NavLink>
						<NavLink to={'profile'}>Личный кабинет</NavLink>
					</div>
					<div className={'footer__left__top__column'}>
						<NavLink to={'/contacts'}>Контакты</NavLink>
						<NavLink to={'/support'}>Поддержка</NavLink>
					</div>
					<div className={'footer__left__top__column'}>
						<NavLink to={'/about'}>О нас</NavLink>
					</div>
				</div>

				<div className={'footer__left__bottom'}>
					<span className={'footer__left__bottom__company'}>
						Copyright © 2020, Video Monkey LLC. Все права защищены.
					</span>
					<div className={'footer__left__bottom__number'}>
						<span>
							<img src={headphonesIcon} alt="headphones" />
						</span>
						<span>8-800-525-12-21</span>
					</div>
				</div>
			</div>

			<div className={'footer__right'}>
				<a
					href="https://www.youtube.com"
					target="_blank"
					rel="noopener noreferrer">
					<img src={youtubeLogo} alt="youtube" />
				</a>
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer">
					<img src={facebookLogo} alt="facebook" />
				</a>
				<a
					href="https://vk.com"
					target="_blank"
					rel="noopener noreferrer">
					<img src={vkLogo} alt="vk" />
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer">
					<img src={instagramLogo} alt="instagram" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
