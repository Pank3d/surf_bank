import { useState } from 'react';
import style from './section-login.module.scss';
import { Section, Input, Button } from '@/shared/ui';
import img from '@/assets/images/section-login/img-1.webp';
import img_mob from '@/assets/images/section-login/img-2.webp';
import { Link } from 'react-router-dom';
import { internalPaths } from '@/shared/routes/paths';
import { useAuthLogin } from '@/api/generated'; // 👈 хук из orval
import type { AuthLoginModel } from '@/api/generated'; // 👈 тип модели логина

export const SectionLogin = () => {
	const [form, setForm] = useState<AuthLoginModel>({
		login: '',
		password: '',
		code: '',
	});

	const loginMutation = useAuthLogin();

	const handleChange =
		(field: keyof AuthLoginModel) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setForm(prev => ({ ...prev, [field]: e.target.value }));
		};

	const handleSignIn = (e: React.FormEvent) => {
		e.preventDefault();

		loginMutation.mutate(
			{ data: form },
			{
				onSuccess: response => {
					const { accessToken, refreshToken, userId } = response;
					localStorage.setItem('auth_token', accessToken || '');
					localStorage.setItem('refresh_token', refreshToken || '');
					localStorage.setItem('user_id', userId || '');
					const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
					if (dashboardUrl) window.location.href = dashboardUrl;
				},
				onError: error => {
					console.error(error);
					alert('Ошибка авторизации');
				},
			}
		);
	};

	return (
		<div className={style.container}>
			<Section className={style.section}>
				<form className={style.form} onSubmit={handleSignIn}>
					<h2 className={style.title}>Welcome back</h2>
					<div className={style.inputs}>
						<Input
							placeholder='Username'
							value={form.login}
							onChange={handleChange('login')}
						/>
						<Input
							placeholder='Password'
							value={form.password}
							onChange={handleChange('password')}
						/>
					</div>
					<div className={style.buttons}>
						<Button arrow className={style.button} type='submit'>
							Sign In
						</Button>
						<Link
							to={internalPaths.forgotPassword}
							className={style.button__forgot}
						>
							Forgot password?
						</Link>
					</div>
				</form>
				<div className={style.img}>
					<img src={img} alt='img' />
					<img src={img_mob} alt='img_mob' />
				</div>
			</Section>
		</div>
	);
};
