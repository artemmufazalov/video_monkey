const emailValidationRegex = new RegExp(
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
);
const passwordValidationRegexp = new RegExp(
	/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
);

const validate = ({ isAuth, errors, values }) => {
	const rules = {
		email: (errors, value) => {
			if (!value) {
				errors.email = 'Обязательное поле';
			} else if (!emailValidationRegex.test(value)) {
				errors.email = 'Неверный формат e-mail адреса';
			}
		},

		password: (errors, value) => {
			if (!value) {
				errors.password = 'Обязательное поле';
			} else if (value.length < 6) {
				errors.password = isAuth
					? 'Неверный пароль'
					: 'Пароль должен содержать 6 или более символов';
			} else if (!passwordValidationRegexp.test(value)) {
				errors.password = isAuth
					? 'Неверный пароль'
					: 'Пароль должен содержать буквы и цифры';
			}
		},

		passwordRepeat: (errors, value) => {
			if (!value) {
				errors.passwordRepeat = 'Обязательное поле';
			} else if (value !== values.password) {
				errors.passwordRepeat = 'Пароли не совпадают';
			}
		},

		name: (errors, value) => {
			if (!value) {
				errors.name = 'Обязательное поле';
			}
		},
	};

	Object.keys(values).forEach(
		(key) => rules[key] && rules[key](errors, values[key])
	);
};

export default validate;
