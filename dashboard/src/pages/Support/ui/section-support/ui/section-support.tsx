import { SUPPORT_ITEMS } from '../model/data';
import style from './section-support.module.scss';

export const SectionSupport = () => {
	return (
		<div className={style.container}>
			{SUPPORT_ITEMS.map(item => (
				<div key={item.id} className={style.card}>
					<img src={item.icon} alt={item.title} className={style.icon} />

					<h3 className={style.title}>{item.title}</h3>
					<p className={style.description}>{item.description}</p>

					{item.type === 'button' ? (
						<button className={style.supportButton}>
							<span>{item.buttonText}</span>
							<img src={item.buttonIcon} alt='arrow' />
						</button>
					) : (
						<div className={style.contactInfo}>
							<span className={style.label}>{item.label}</span>
							<span className={style.value}>{item.value}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
};
