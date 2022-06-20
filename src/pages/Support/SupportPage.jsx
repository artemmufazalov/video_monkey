import React, { useState } from 'react';
import { Upload, Radio, Input, Button } from 'antd';
import { UploadOutlined, CheckOutlined } from '@ant-design/icons';

import './SupportPage.scss';

const TextArea = Input.TextArea;

const SupportPage = ({ onFormUpload }) => {
	const [selectedOption, selectOption] = useState(1);
	const [attachedFiles, addFiles] = useState([]);

	const onSelectRadio = (e) => {
		selectOption(e.currentTarget.value);
	};

	return (
		<div className={'support'}>
			<div className="support__heading">
				<h1>Добро пожаловать на страницу поддержки</h1>
				<p>
					Для того, чтобы рассказать нам о возникших проблемах,
					заполните форму ниже. В случае необходимости, вы можете
					приложить скриншоты, показывающие ошибку
				</p>
			</div>

			<div className="support__form">
				<div className="support__form__email">
					<h2>Email</h2>
					<div className="support__form__block">
						<Input placeholder="Введите email" />
					</div>
				</div>

				<div className="support__form__selections">
					<h2>Выберети проблему из списка или укажите свою</h2>
					<div className="support__form__block">
						<Radio.Group
							className="support__form__selections__group"
							onChange={onSelectRadio}
							value={selectedOption}>
							<Radio
								className={
									'support__form__selections__group__radio'
								}
								value={1}>
								Ошибки при работе с сайтом
							</Radio>
							<Radio
								className={
									'support__form__selections__group__radio'
								}
								value={2}>
								Проблемы при работе с видеоредактором Video
								Monkey
							</Radio>
							<Radio
								className={
									'support__form__selections__group__radio'
								}
								value={3}>
								Не проходит оплата на сайте
							</Radio>
							<Radio
								className={
									'support__form__selections__group__radio'
								}
								value={4}>
								Другое (укажите в форме ниже)
								<div>
									<Input
										className={
											'support__form__selections__group__input'
										}
										disabled={selectedOption !== 4}
										placeholder={'Укажите свою проблему'}
									/>
								</div>
							</Radio>
						</Radio.Group>
					</div>
				</div>

				<div className="support__form__description">
					<h2>Краткое описание</h2>
					<div className="support__form__block">
						<TextArea placeholder={'Опишите возникшую проблему'} />
					</div>
				</div>

				<div className="support__form__attachments">
					<Upload
						action={(file) => {
							addFiles([...attachedFiles, file]);
						}}
						listType="picture"
						defaultFileList={[...attachedFiles]}>
						<Button
							icon={<UploadOutlined />}
							className={
								'support__form__attachments__uploadButton'
							}>
							Прикрепить скриншоты
						</Button>
					</Upload>
				</div>

				<div className="support__form__sendButton">
					<Button icon={<CheckOutlined />}>Отправить</Button>
				</div>
			</div>
		</div>
	);
};

export default SupportPage;
