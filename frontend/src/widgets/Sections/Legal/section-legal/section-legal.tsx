import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import style from './section-legal.module.scss';
import { legalPagesData } from '@/entities/legal/legalPagesData';

export const SectionLegal = () => {
	const location = useLocation();
	const [activeSection, setActiveSection] = useState<string>('');
	const contentRef = useRef<HTMLDivElement>(null);

	const pageId = location.pathname.replace('/', '');

	const pageData = legalPagesData.find(page => page.id === pageId);
	const handleScroll = () => {
		if (!contentRef.current) return;

		const sections = contentRef.current.querySelectorAll('h2, h3');
		let currentSection = '';

		sections.forEach(section => {
			const element = section as HTMLElement;
			const rect = element.getBoundingClientRect();

			if (rect.top <= 100 && rect.bottom >= 100) {
				currentSection = element.id;
			}
		});

		if (currentSection) {
			setActiveSection(currentSection);
		}
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const yOffset = -80; // Отступ от верха (учитывая хедер)
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (!pageData) {
		return <div>Page not found</div>;
	}

	return (
		<div className={style.legalPage}>
			<div className={style.container}>
				{/* Заголовок страницы */}

				<div className={style.contentWrapper}>
					{/* Левая навигационная панель */}
					<nav className={style.sidebar}>
						<ul className={style.sidebarList}>
							{pageData.sections.map(section => (
								<li key={section.id} className={style.sidebarItem}>
									<button
										className={`${style.sidebarLink} ${
											activeSection === section.id ? style.active : ''
										}`}
										onClick={() => scrollToSection(section.id)}
									>
										{section.title}
									</button>
								</li>
							))}
						</ul>
					</nav>

					{/* Правая область с контентом */}
					<div className={style.content} ref={contentRef}>
						<div className={style.header}>
							<h1 className={style.title}>{pageData.title}</h1>
							{pageData.date && (
								<div className={style.date}>{pageData.date}</div>
							)}
						</div>
						<div
							className={style.markdownContent}
							dangerouslySetInnerHTML={{ __html: pageData.content }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
