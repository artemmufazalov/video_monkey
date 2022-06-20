import React from 'react';
import classnames from 'classnames';

import styles from './Preloader.module.css';
import { preloader } from '../../assets';

const Preloader = ({ custom, className, large }) => {
	return (
		<img
			src={preloader}
			className={classnames({
				[className]: custom,
				[styles.preloaderLarge]: !custom && large,
			})}
			alt={'Preloader'}
		/>
	);
};

Preloader.defaultProps = {
	custom: false,
};

export default Preloader;
