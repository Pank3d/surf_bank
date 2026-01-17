import style from './Footer.module.scss';
import { footerDescription, navigationData } from '../model/data';
import { Link } from 'react-router-dom';
import { useFooterData } from '@/shared/api';
import { Fragment } from 'react/jsx-runtime';

export const Footer = () => {
	const { data } = useFooterData();

	return (
		<footer className={style.footer}>
			<div className={style.inner}>
				<div className={style.inner__top}>
					<div className={style.info}>
						<img className={style.logo} src='/logo-white.svg' alt='' />
						<p className={style.text}>
							Surf Bunk is a financial technology company, <br /> banking for
							hight risk market, crypto projects and startups.
						</p>
						<p className={style.text}>{data?.support_time}</p>
						<p className={style.text}>aka@surfbank.io</p>
					</div>
					<div className={style.navigation}>
						{navigationData.map(({ title, links }, index) => (
							<div className={style.navigation__list} key={index}>
								<h3 className={style.navigation__title}>{title}</h3>
								<ul className={style.navigation__list}>
									{links.map((link, index) => (
										<li className={style.navigation__list_item} key={index}>
											<a href={link.href}>{link.title}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<p className={style.description}>{footerDescription}</p>
				{/* <p className={style.description}>{data?.description}</p> */}
				<div className={style.bottom}>
					<p className={style.bottom__description}>
						All rights reserved @ 2025 surfbank.io
					</p>
					<div className={style.bottom__links}>
						{data?.terms_privacy.map(({ title, link }, index) => (
							<Fragment key={index}>
								<Link className={style.link} to={link}>
									{title}
								</Link>
								{index !== data?.terms_privacy.length - 1 && (
									<span className={style.dote} />
								)}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
