import style from './section-lets-connect.module.scss';
import { Section, H1, LetsConnectForm } from '@/shared/ui';
import clsx from 'clsx';

interface Props {
	className?: string;
}

const description = [
	'Surf Bank - collects and processes your personal data (names. email address and other data, depending on the information entered). provided through this form to manage your request.',
];

export const SectionLetsConnect = ({ className }: Props) => (
	<div className={clsx(style.container, className)}>
		<Section className={style.section}>
			<H1 className={style.title}>Let`s Connect</H1>
			<LetsConnectForm description={description} />
		</Section>
	</div>
);
