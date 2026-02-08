import style from './section-find-out-more.module.scss';
import { Section, H1, FindOutMoreForm } from '@/shared/ui';
import clsx from 'clsx';
import { usePageLetsConnectData } from '@/shared/api';
import { moreData } from './model/data';

interface Props {
	className?: string;
}

export const SectionFindOutMore = ({ className }: Props) => {
	const { data } = usePageLetsConnectData();

	const description = data ? data?.description : moreData;

	return (
		<div className={clsx(style.container, className)}>
			<Section className={style.section}>
				<H1 className={style.title}>Find out more</H1>
				<p className={style.text}>
					To learn more about our. Surf Bank please feel free to contact us. We
					are always open to exploring new collaborations that deliver
					meaningful value for our customers and business partners.
				</p>
				<FindOutMoreForm description={description} />
			</Section>
		</div>
	);
};
