import { internalPath } from '@/shared/routes/routes';
import style from './section-account-details.module.scss';
import { Button, Select, Textarea } from '@/shared/ui';
import { StepsButtons } from '@/widgets';
import { useState } from 'react';
import plusIcon from '@/assets/plus-gray.svg';
import usd from '@/assets/newusd.svg';
import wallet from '@/assets/wallet.svg';
// import uploadIcon from '@/assets/upload.svg';

export const SectionAccountDetails = () => {
	const [files, setFiles] = useState<File[]>([]);

	return (
		<form className={style.form} action=''>
			<button type='button' className={style.addButton}>
				Counterparty
				<img src={plusIcon} alt='add' />
			</button>
			<button type='button' className={style.addButton}>
				Counterparty account
				<img src={plusIcon} alt='add' />
			</button>

			<div className={style.amountSection}>
				<div className={style.amountHeader}>
					<span className={style.amountTitle}>Amount</span>
				</div>

				<div className={style.amountInputWrapper}>
					<span className={style.amountValue}>500.00</span>
					<img src={usd} alt='usd' />
				</div>

				<div className={style.amountButtons}>
					<p className={style.amountButton}>$0</p>
					<p className={style.amountButton}>
						<img src={wallet} alt='wallet' />
						<span className={style.amountButtonPrice}>
							$99.999 <span>Max</span>
						</span>
					</p>
				</div>
			</div>

			<div className={style.totalAmount}>
				<Select placeholder='Total amount' iconText='500.00 USD' />
			</div>

			<Textarea placeholder='Comment' className={style.textarea} />
			<Textarea
				placeholder='Reference to recipient*'
				className={style.textarea}
			/>

			<div className={style.section}>
				<h3 className={style.sectionTitle}>Upload Supporting Documents</h3>

				<p className={style.uploadHint}>
					File types supported: PDF, DOCX, DOCS, JPG, JPEG, PNG
					<br />
					Format 10 mb max size (10MB)
				</p>

				<div className={style.uploadArea}>
					<input
						type='file'
						id='file-upload'
						multiple
						className={style.fileInput}
						onChange={e => {
							if (e.target.files) {
								setFiles(Array.from(e.target.files));
							}
						}}
					/>
					<label htmlFor='file-upload' className={style.uploadLabel}>
						<Button white>Select file</Button>
					</label>
				</div>

				{files.length > 0 && (
					<div className={style.fileList}>
						{files.map((file, index) => (
							<div key={index} className={style.fileItem}>
								<span>{file.name}</span>
								<button
									type='button'
									onClick={() => setFiles(files.filter((_, i) => i !== index))}
								>
									×
								</button>
							</div>
						))}
					</div>
				)}
			</div>
			<StepsButtons
				back={internalPath.sendMoney.counterparty}
				to={internalPath.home}
			/>
		</form>
	);
};
