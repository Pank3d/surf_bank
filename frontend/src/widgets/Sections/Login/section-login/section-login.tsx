import { useState } from 'react';
import style from './section-login.module.scss';
import { Section, Input, ButtonColorize } from '@/shared/ui';
// import img from '@/assets/images/section-login/img-1.webp';
// import img_mob from '@/assets/images/section-login/img-2.webp';

// import { useAuthLogin } from '@/api/generated'; // 👈 хук из orval
import type { AuthLoginModel } from '@/api/generated'; // 👈 тип модели логина

export const SectionLogin = () => {
	const [form, setForm] = useState<AuthLoginModel>({
		login: '',
		password: '',
		code: '',
	});

	// Состояние для 6 инпутов кода
	const [codeDigits, setCodeDigits] = useState<string[]>(Array(6).fill(''));

	// Состояние для отображения блока с кодом
	const [showCodeInput, setShowCodeInput] = useState(false);

	// const loginMutation = useAuthLogin();

	const handleChange =
		(field: keyof AuthLoginModel) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setForm(prev => ({ ...prev, [field]: e.target.value }));
		};

	// Обработчик для инпутов кода
	const handleCodeChange = (index: number, value: string) => {
		// Разрешаем только цифры
		if (!/^\d*$/.test(value)) return;

		const newCodeDigits = [...codeDigits];
		newCodeDigits[index] = value.slice(0, 1); // Только один символ
		setCodeDigits(newCodeDigits);

		// Обновляем общий код в форме
		setForm(prev => ({
			...prev,
			code: newCodeDigits.join(''),
		}));

		// Автоматически переходим к следующему инпуту
		if (value && index < 5) {
			const nextInput = document.getElementById(`code-${index + 1}`);
			nextInput?.focus();
		}
	};

	// Обработчик для клавиши Backspace
	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>,
	) => {
		if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
			// Переходим к предыдущему инпуту
			const prevInput = document.getElementById(`code-${index - 1}`);
			prevInput?.focus();
		}
	};

	const handleSignIn = (e: React.FormEvent) => {
		e.preventDefault();

		// Если email введен и код еще не показываем
		if (form.login && !showCodeInput) {
			setShowCodeInput(true);
			return;
		}

		// Если код показан и все цифры введены
		if (showCodeInput && codeDigits.every(d => d)) {
			// Пропускаем запрос на сервер, сразу редиректим
			const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
			if (dashboardUrl) {
				window.location.href = dashboardUrl;
			}
		}
	};

	// Проверяем, заполнен ли email
	const isEmailFilled = form.login.trim() !== '';
	// Проверяем, заполнен ли код
	const isCodeComplete = codeDigits.every(d => d !== '');

	return (
		<div className={style.container}>
			<Section className={style.section}>
				<form className={style.form} onSubmit={handleSignIn}>
					<h2 className={style.title}>Log in</h2>

					<div className={style.inputs}>
						<Input
							placeholder='Email address'
							value={form.login}
							onChange={handleChange('login')}
						/>
					</div>

					{/* Блок с 6 инпутами для кода */}
					{showCodeInput && (
						<div className={style.codeContainer}>
							<div className={style.codeInputs}>
								{codeDigits.map((digit, index) => (
									<input
										key={index}
										id={`code-${index}`}
										type='text'
										inputMode='numeric'
										pattern='\d*'
										maxLength={1}
										value={digit}
										onChange={e => handleCodeChange(index, e.target.value)}
										onKeyDown={e => handleKeyDown(index, e)}
										className={style.codeInput}
										autoFocus={index === 0}
									/>
								))}
							</div>
						</div>
					)}

					<div className={style.buttons}>
						<ButtonColorize
							arrow
							className={style.button}
							type='submit'
							disabled={!isEmailFilled || (showCodeInput && !isCodeComplete)}
						>
							{showCodeInput ? 'Verify Code' : 'Log In'}
						</ButtonColorize>
					</div>
				</form>
			</Section>
		</div>
	);
};
