export interface LegalPage {
	id: string;
	title: string;
	date: string;
	sections: Array<{
		id: string;
		title: string;
	}>;
	content: string;
}

export const legalPagesData: LegalPage[] = [
	{
		id: 'privacy-policy',
		title: 'Privacy Policy',
		date: '22.12.2025',
		sections: [
			{ id: 'summary', title: 'Global Privacy Notice' },
			{ id: 'controller', title: 'Data controller & contact' },
			{ id: 'information', title: 'Information we collect' },
			{ id: 'lawful-bases', title: 'Lawful bases for processing' },
			{ id: 'how-we-use', title: 'How we use your information' },
			{ id: 'sharing-processors', title: 'Sharing & processors' },
			{
				id: 'international-transfers',
				title: 'International transfers & safeguards',
			},
			{ id: 'data-retention', title: 'Data retention' },
			{ id: 'data-security', title: 'Data security' },
			{ id: 'cookies-tracking', title: 'Cookies & tracking' },
			{ id: 'children', title: 'Children' },
			{ id: 'your-rights', title: 'Your rights — quick summary' },
			{
				id: 'privacy-by-jurisdiction',
				title: 'Privacy notices by jurisdiction',
			},
			{
				id: 'automated-decision',
				title: 'Automated decision-making & profiling',
			},
			{ id: 'breach-notification', title: 'Breach notification' },
			{
				id: 'how-to-exercise',
				title: 'How to exercise your rights or complain',
			},
			{ id: 'changes-policy', title: 'Changes to this policy' },
		],
		content: `
      <h2 id="summary">Global Privacy Notice (short summary)</h2>
      <p>This Global Privacy Notice summarises the key privacy information you need when interacting with Surf Bank Financial Group:</p>
      
      <p><strong>Controller:</strong> Surf Bank Financial Group acts as the data controller for the personal data described in this policy.</p>
      
      <p><strong>What we collect:</strong> identity, contact, financial, authentication and device/usage data necessary to provide, secure and improve our services.</p>
      
      <p><strong>Why we process:</strong> to perform contracts, meet legal and regulatory obligations (including AML/KYC), prevent fraud, maintain security, and for legitimate business interests such as improving services — or with consent where required.</p>
      
      <p><strong>Sharing:</strong> we share data with trusted service providers, regulators where required, and in corporate transactions. We do not sell personal data for marketing.</p>
      
      <p><strong>Transfers:</strong> personal data may be transferred internationally; we apply appropriate safeguards (contractual safeguards, SCCs or equivalent).</p>
      
      <p><strong>Your rights:</strong> access, correction, deletion, restriction, objection, portability, withdraw consent and complaint to a supervisory authority where applicable.</p>
      
      <p><strong>Security & retention:</strong> we apply encryption, access controls and retention limits aligned to legal requirements.</p>
      
      <p><strong>Contact:</strong> <a href="mailto:support@surfbank.co">support@surfbank.co</a> — use this address to exercise rights, ask questions or raise concerns.</p>
      
      <p>For more detail on each item below, see the full policy sections that follow.</p>
      
      <hr />
      
      <h2 id="controller">1. Data controller & contact</h2>
      <p>Surf Bank Financial Group (each entity above) is the data controller for personal data processed in connection with the services provided by the Group entities.</p>
      <p>Data Protection Officer (DPO) / privacy contact: <a href="mailto:support@surfbank.co">support@surfbank.co</a></p>
      
      <h2 id="information">2. Information we collect</h2>
      <p>We collect categories of personal data necessary to provide and improve our services, including (examples):</p>
      <ul>
        <li><strong>Identifying information:</strong> name, date of birth, national ID.</li>
        <li><strong>Contact information:</strong> postal address, email, phone.</li>
        <li><strong>Financial information:</strong> bank account details, transaction history.</li>
        <li><strong>Authentication data:</strong> passwords, 2FA credentials (stored securely).</li>
        <li><strong>Usage & device data:</strong> IP address, device fingerprints, logs, cookies.</li>
        <li><strong>Customer support and case notes.</strong></li>
      </ul>
      <p>We collect this information from you, from your interactions with our services, and from third parties (e.g., identity verification providers, payment processors, partners) where permitted.</p>
      
      <h2 id="lawful-bases">3. Lawful bases for processing</h2>
      <p>We rely on lawful bases that apply depending on context, such as: performance of a contract; compliance with legal obligations (e.g., AML/KYC requirements); your consent where required; and our legitimate interests (e.g., fraud prevention, improving services), balanced against your rights.</p>
      
      <h2 id="how-we-use">4. How we use your information</h2>
      <p>We use personal data to: deliver account and payment services; verify identity and comply with AML/KYC and sanctions rules; operate and secure our products; provide customer support; detect and prevent fraud; perform analytics and improve our services; and meet legal or regulatory obligations.</p>
      
      <h2 id="sharing-processors">5. Sharing & processors</h2>
      <p>We do not sell personal data for third-party marketing. We share data with: service providers and processors (e.g., identity verification, payment, cloud hosting), regulators and law enforcement when required by law, and in corporate transactions (with safeguards). All processors are contractually bound to protect personal data and only process it per our instructions.</p>
      
      <h2 id="international-transfers">6. International transfers & safeguards</h2>
      <p>Personal data may be processed or stored in countries outside the EEA/UK/Canada (including the US). When data is transferred internationally we apply appropriate safeguards (e.g., EU Standard Contractual Clauses, contractual commitments, binding safeguards) or other lawful transfer mechanisms, and we document transfer risk assessments.</p>
      
      <h2 id="data-retention">7. Data retention</h2>
      <p>We retain personal data only as long as necessary to fulfil the purpose for which it was collected, to comply with legal obligations (for example AML/record-keeping laws) and to resolve disputes. Retention periods are documented and aligned with our Document Retention Policy.</p>
      
      <h2 id="data-security">8. Data security</h2>
      <p>We use technical and organisational measures to protect personal data including encryption in transit and at rest, access controls, keys managed via cloud KMS, monitoring and logging, regular security assessments, and incident response processes.</p>
      
      <h2 id="cookies-tracking">9. Cookies & tracking</h2>
      <p>We use cookies and similar technologies to operate our services, remember preferences, secure accounts and for analytics. Where required by law we will obtain consent. You can manage cookie preferences via your browser or the preferences tools we provide.</p>
      
      <h2 id="children">10. Children</h2>
      <p>Our services are not directed at children. We do not knowingly collect personal data from children under applicable age thresholds. If we become aware that we have collected such data we will delete it in accordance with applicable law.</p>
      
      <h2 id="your-rights">11. Your rights — quick summary</h2>
      <p>Subject to applicable law, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction or completion of inaccurate personal data.</li>
        <li>Request deletion/erasure where permitted.</li>
        <li>Request restriction of processing.</li>
        <li>Object to processing (including profiling) where grounds exist.</li>
        <li>Request data portability (receive a copy in machine-readable format).</li>
        <li>Withdraw consent where processing is based on consent.</li>
        <li>Lodge a complaint with a supervisory authority (see jurisdictional notices below).</li>
      </ul>
      <p>To exercise rights: contact <a href="mailto:support@surfbank.co">support@surfbank.co</a>. We will verify requests and respond within applicable legal timescales.</p>
      
      <h2 id="privacy-by-jurisdiction">12. Privacy notices by jurisdiction</h2>
      
      <h3>GDPR Notice (EU / EEA / UK)</h3>
      <p>If you are an EU/EEA or UK data subject, the GDPR (or UK GDPR) may apply to processing by Surf Bank. You have all rights described in Section 11. Where we rely on legitimate interests we will document and balance those interests; where we rely on consent you may withdraw consent at any time without affecting processing lawfully carried out before withdrawal. You have the right to lodge a complaint with your local supervisory authority (for example the Information Commissioner's Office (ICO) in the UK or the relevant national authority in the EU).</p>
      
      <h3>PIPEDA Notice (Canada)</h3>
      <p>If your personal data is processed under Canadian jurisdiction, PIPEDA and applicable provincial privacy laws govern processing. We rely on consent, contract performance or legal obligations as the basis for processing. You can withhold or withdraw consent (subject to legal or contractual restrictions) and request access or correction of your personal information. If you have a privacy complaint that we cannot resolve, you may contact the Office of the Privacy Commissioner of Canada (OPC).</p>
      
      <h3>United States notice (overview / state law)</h3>
      <p>There is no single U.S. federal privacy law covering all personal data; certain state laws (e.g., California CCPA/CPRA) may afford additional rights to residents (such as rights to know, delete, and limit sale/sharing). Where applicable state law provides specific rights, we will honour those rights. We do not "sell" personal data for purposes of consumer protection laws. To exercise state-specific rights, or for more information, contact <a href="mailto:support@surfbank.co">support@surfbank.co</a>.</p>
      
      <h2 id="automated-decision">13. Automated decision-making & profiling</h2>
      <p>We may use automated tools for identity verification, fraud detection and risk scoring. Where automated decision-making has a legal or similarly significant effect, we provide information about the logic involved, the meaning, and the possible consequences, and offer a way to request human review where required by law.</p>
      
      <h2 id="breach-notification">14. Breach notification</h2>
      <p>In the event of a personal data breach that creates a risk to your rights and freedoms, we will follow our incident response procedures and notify affected individuals and regulators as required by applicable law without undue delay.</p>
      
      <h2 id="how-to-exercise">15. How to exercise your rights or complain</h2>
      <p>Contact (DPO): <a href="mailto:support@surfbank.co">support@surfbank.co</a></p>
      <p>Postal: use the relevant entity address at top of this policy.</p>
      <p>If you are not satisfied with our response you may lodge a complaint with the relevant supervisory authority in your jurisdiction (e.g., ICO in the UK, OPC in Canada, or the relevant EU Member State authority).</p>
      
      <h2 id="changes-policy">16. Changes to this policy</h2>
      <p>We may update this Policy from time to time. We will publish the updated policy with a revised "Last Updated" date and, where required by law, notify you of material changes.</p>
    `,
	},
	{
		id: 'terms-of-service',
		title: 'Terms of Service',
		date: '22.12.2025',
		sections: [
			{ id: 'agreement', title: 'Agreement to Terms' },
			{ id: 'eligibility', title: 'Eligibility' },
			{ id: 'account-registration', title: 'Account Registration' },
			{ id: 'services-description', title: 'Services Description' },
			{ id: 'fees-payments', title: 'Fees and Payments' },
			{ id: 'prohibited-activities', title: 'Prohibited Activities' },
			{ id: 'limitation-liability', title: 'Limitation of Liability' },
			{ id: 'termination', title: 'Termination' },
			{ id: 'governing-law', title: 'Governing Law' },
			{ id: 'changes-terms', title: 'Changes to Terms' },
			{ id: 'contact-information', title: 'Contact Information' },
		],
		content: `
      <h2 id="agreement">1. Agreement to Terms</h2>
      <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
      
      <h2 id="eligibility">2. Eligibility</h2>
      <p>To use our services, you must be at least 18 years old and have the legal capacity to enter into a binding contract. You represent and warrant that you meet all eligibility requirements for the services you intend to use.</p>
      
      <h2 id="account-registration">3. Account Registration</h2>
      <p>You must register for an account to access certain features. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.</p>
      
      <h2 id="services-description">4. Services Description</h2>
      <p>Surf Bank Financial Group provides banking and financial services including but not limited to payment processing, account management, and related financial products. We reserve the right to modify or discontinue any service at any time.</p>
      
      <h2 id="fees-payments">5. Fees and Payments</h2>
      <p>Certain services may be subject to fees. All fees are stated in applicable currency and are non-refundable unless otherwise specified. You agree to pay all charges incurred by your account.</p>
      
      <h2 id="prohibited-activities">6. Prohibited Activities</h2>
      <p>You may not use our services for any illegal or unauthorized purpose. Prohibited activities include but are not limited to money laundering, fraud, terrorist financing, and any activity that violates applicable laws or regulations.</p>
      
      <h2 id="limitation-liability">7. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Surf Bank Financial Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.</p>
      
      <h2 id="termination">8. Termination</h2>
      <p>We may terminate or suspend your account and access to services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      
      <h2 id="governing-law">9. Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction where Surf Bank Financial Group is incorporated, without regard to its conflict of law provisions.</p>
      
      <h2 id="changes-terms">10. Changes to Terms</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of material changes. What constitutes a material change will be determined at our sole discretion.</p>
      
      <h2 id="contact-information">11. Contact Information</h2>
      <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@surfbank.co">support@surfbank.co</a>.</p>
    `,
	},
	{
		id: 'cookies-policy',
		title: 'Cookies Policy',
		date: '22.12.2025',
		sections: [
			{ id: 'introduction', title: 'This Cookies Policy' },
			{
				id: 'cookies-what-they-are',
				title: 'Cookies – What They Are and How We Use Them',
			},
			{ id: 'cookie-categories', title: 'Categories of Cookies Used' },
			{ id: 'managing-cookies', title: 'Managing Cookies' },
			{ id: 'links-other-websites', title: 'Links to Other Websites' },
			{ id: 'google-analytics', title: 'Google Analytics' },
			{ id: 'additional-information', title: 'Additional Information' },
			{ id: 'third-party-cookies', title: 'Third-Party Cookies' },
			{ id: 'cookie-data-retention', title: 'Data Retention' },
			{ id: 'website-updates', title: 'Website Updates' },
			{ id: 'your-rights-cookies', title: 'Your Rights' },
		],
		content: `
      <h2 id="introduction">This Cookies Policy</h2>
      <p>This Cookies Policy explains how cookies are used when you visit the website located at www.surfbank.co (the "Website").</p>
      <p>Our Website uses cookies to help distinguish you from other users. This enables us to provide you with a smoother and more personalised browsing experience and helps us to improve the performance and functionality of the Website. By continuing to use the Website, you acknowledge and agree to our use of cookies in accordance with this policy.</p>
      <p>If you have any questions or concerns regarding our use of cookies or the processing of personal data obtained through them, please contact us at: <a href="mailto:support@surfbank.co">support@surfbank.co</a>.</p>
      
      <h2 id="cookies-what-they-are">1. Cookies – What They Are and How We Use Them</h2>
      <p>Cookies are small text files containing letters and numbers that are stored on your browser or the hard drive of your device, subject to your consent. They allow information to be transferred to your device's hard drive and help websites function effectively.</p>
      <p>You may block cookies by adjusting the relevant settings in your browser, which allow you to refuse all or some cookies. Please note, however, that blocking all cookies (including those that are strictly necessary) may limit your ability to access certain parts of the Website or affect its functionality.</p>
      <p>We use cookies to recognise you and your preferences, enhance the performance of the Website, and collect analytical information for the benefit of our customers and the Leumi Group. The term "cookies" also includes similar technologies used to store or access information, such as Local Shared Objects (commonly known as "flash cookies"), web beacons, or clear gifs.</p>
      <p>Session cookies are temporary and allow us to track your actions during a single browsing session, for example, to remember search results. These cookies are deleted once you close your browser.</p>
      <p>Persistent cookies remain on your device between sessions and help us recognise you, authenticate users, and remember your preferences for future visits.</p>
      
      <h2 id="cookie-categories">Categories of Cookies Used</h2>
      <p><strong>Strictly Necessary Cookies</strong></p>
      <p>These cookies are essential for the Website to operate correctly. They enable core functions such as user authentication and access to secure areas of the Website.</p>
      
      <p><strong>Functionality Cookies</strong></p>
      <p>These cookies allow the Website to recognise you when you return or when you are already logged in. They help us personalise content, remember your preferences, and maintain settings such as your chosen language throughout your use of the Website or app.</p>
      
      <p><strong>Security Cookies</strong></p>
      <p>We use these cookies to help detect and prevent potential security risks and unauthorised activity.</p>
      
      <p><strong>Analytics and Performance Cookies</strong></p>
      <p>These cookies help us understand how visitors interact with the Website by recognising and counting visitors, monitoring page views, and analysing navigation patterns. This information assists us in improving the Website, for example, by ensuring that users can easily find the information they are looking for.</p>
      
      <p><strong>Targeting and Advertising Cookies</strong></p>
      <p>These cookies record your visit to the Website, the pages you have viewed, and the links you have followed. This information is used to make the Website more relevant to your interests and may be shared with third parties for these purposes. For example, we use Google Analytics, which employs cookies and similar technologies to analyse usage of the Website and report on trends and activities. Google Analytics may also collect information about your use of other websites, apps, and online resources.</p>
      
      <p><strong>Third-Party and Embedded Content Cookies</strong></p>
      <p>Our Website may include content or features provided by third parties, such as social media platforms (e.g. Facebook or X/Twitter) through sharing buttons or embedded media. These third parties may set their own cookies, which they may use to track your online activity. We do not have direct control over the information collected by these cookies.</p>
      
      <p>From time to time, we may test new features or make minor changes to the way the Website is delivered. During such testing, cookies may be used to ensure a consistent user experience and to help us understand which enhancements are most valued by our users.</p>
      
      <h2 id="managing-cookies">2. Managing Cookies</h2>
      <p>You may adjust your cookie preferences at any time by selecting the "Customise Cookies" option on the Website. Please note that cookies which are strictly necessary for the operation of the Website cannot be disabled through our cookie management tools.</p>
      <p>If you wish to refuse all cookies, including strictly necessary cookies, or delete cookies that have already been placed on your device (for this Website or others), you can do so through your browser settings. Your browser's help function will provide guidance on how to manage these settings.</p>
      <p>Please be aware that cookies play an important role in enabling and enhancing the functionality of our Website. Disabling certain cookies may affect how the Website operates and may restrict access to some features or sections.</p>
      
      <h2 id="links-other-websites">3. Links to Other Websites</h2>
      <p>The Website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy or security practices of such websites. We encourage you to review the privacy policies of any external websites you visit, particularly where they collect personal data.</p>
      <p>Some links may direct you to websites operated by our affiliates located outside the UK, the EU, or other jurisdictions that offer an equivalent level of data protection.</p>
      
      <h2 id="google-analytics">4. Google Analytics</h2>
      <p>Our Website uses Google Analytics, a web analytics service provided by Google Inc. ("Google"). Google Analytics uses cookies to analyse how users interact with the Website.</p>
      <p>The cookies used by Google Analytics collect your IP address. However, IP anonymisation is enabled on this Website, meaning your IP address is shortened and anonymised as soon as technically possible, before being stored or processed by Google.</p>
      <p>The information generated by these cookies helps us understand how visitors use the Website. Google does not combine the IP address transmitted by your browser in connection with Google Analytics with other data held by Google.</p>
      <p>You may prevent Google Analytics cookies from being stored by adjusting your browser settings. You may also opt out of Google Analytics tracking by downloading and installing the relevant browser plug-in available from Google.</p>
      
      <h2 id="additional-information">5. Additional Information</h2>
      
      <h3 id="third-party-cookies">Third-Party Cookies</h3>
      <p>Where we engage third-party service providers who have access to personal data collected via cookies on our Website, appropriate contractual safeguards are in place in accordance with applicable data protection laws, including the UK GDPR and, where relevant, the GDPR and PIPEDA.</p>
      
      <h3 id="cookie-data-retention">Data Retention</h3>
      <p>We retain personal data collected through cookies only for as long as necessary to provide personalised services for which you have given your consent. Further details about how we process personal data can be found in our Privacy Policy.</p>
      
      <h3 id="website-updates">Website Updates</h3>
      <p>We may update the way cookies are implemented across the Website from time to time. As a result, you may be asked to review or re-confirm your cookie preferences. Where we make changes to the cookies we use, this Cookies Policy will be updated accordingly. The most recent version of this policy will always be available on our Website.</p>
      
      <h2 id="your-rights-cookies">6. Your Rights</h2>
      <p>By using the Website, you confirm that you have read and understood this Cookies Policy and your rights relating to the use of cookies. Further information about your rights and how they apply to the processing of your personal data is set out in our Privacy Policy.</p>
      <p>If you have any questions or require further clarification, please contact us at: <a href="mailto:privacy@surfbank.co">privacy@surfbank.co</a>.</p>
    `,
	},
	{
		id: 'risk-appetite',
		title: 'Risk Appetite & Prohibited Activities',
		date: '22.12.2025',
		sections: [
			{ id: 'prohibited-activities', title: 'Prohibited Activities' },
			{
				id: 'fraudulent-identification',
				title: '1. Fraudulent Identification',
			},
			{ id: 'illegal-drugs', title: '2. Illegal Drugs & Drug Paraphernalia' },
			{ id: 'unlawful-violence', title: '3. Unlawful Violence' },
			{ id: 'unlawful-products', title: '4. Unlawful Products' },
			{
				id: 'intellectual-property',
				title: '5. Intellectual Property Violations',
			},
			{ id: 'telecommunications-abuse', title: '6. Telecommunications Abuse' },
			{ id: 'adult-content', title: '7. Adult-Oriented Content and Services' },
			{
				id: 'unfair-business',
				title: '8. Unfair, Abusive, or Misleading Business Practices',
			},
			{
				id: 'weapons-explosives',
				title: '9. Weapons, Explosives, and Hazardous Materials',
			},
			{ id: 'restricted-legal', title: '10. Restricted Legal Services' },
			{
				id: 'sanctions-licensing',
				title: '11. Sanctions, Regulatory, and Licensing Restrictions',
			},
		],
		content: `
      <h2 id="prohibited-activities">Prohibited Activities</h2>
      <p>The business does not provide banking or related services to corporates or individuals that are directly or indirectly involved in any of the activities listed below.</p>
      
      <h3 id="fraudulent-identification">1. Fraudulent Identification</h3>
      <ul>
        <li>Provision or use of fake references or identification documents</li>
        <li>ID-providing or identity-manipulation services</li>
      </ul>
      
      <h3 id="illegal-drugs">2. Illegal Drugs & Drug Paraphernalia</h3>
      <ul>
        <li>Illegal drugs or controlled substances</li>
        <li>Substances designed to mimic illegal drugs</li>
        <li>Equipment intended for the production, distribution, or use of drugs</li>
        <li>Cannabis-related products and businesses, including dispensaries</li>
      </ul>
      
      <h3 id="unlawful-violence">3. Unlawful Violence</h3>
      <p>Any business or organization that:</p>
      <ul>
        <li>Promotes or targets violence against any group based on race, religion, disability, gender, sexual orientation, national origin, or other immutable characteristics</li>
        <li>Engages in, encourages, promotes, or celebrates unlawful violence or physical harm to persons or property</li>
      </ul>
      
      <h3 id="unlawful-products">4. Unlawful Products</h3>
      <ul>
        <li>Any product or service that violates applicable laws or regulations in the jurisdictions where it is offered or targeted</li>
      </ul>
      
      <h3 id="intellectual-property">5. Intellectual Property Violations</h3>
      <ul>
        <li>Sale, distribution, or use of copyrighted materials, including music, films, software, or digital content, without valid authorization</li>
        <li>Production, marketing, or circulation of counterfeit goods or products imported or exported in violation of applicable regulations</li>
        <li>Sale or promotion of goods misrepresented as branded, designer, or trademark-protected items</li>
        <li>Any activity involving misuse or infringement of intellectual property rights, including trademarks, patents, copyrights, trade secrets, or data protection rights</li>
      </ul>
      
      <h3 id="telecommunications-abuse">6. Telecommunications Abuse</h3>
      <ul>
        <li>Equipment designed to manipulate, intercept, or disrupt telecommunications</li>
        <li>Jamming devices</li>
      </ul>
      
      <h3 id="adult-content">7. Adult-Oriented Content and Services</h3>
      <ul>
        <li>Creation, hosting, distribution, or monetization of pornographic or sexually explicit content in any format</li>
        <li>Provision or facilitation of sexual services, including escorting, prostitution, paid sexual interactions, erotic massages, or live adult platforms</li>
        <li>Operation of adult entertainment establishments such as strip clubs, topless bars, or adult video businesses</li>
        <li>Online platforms or services primarily intended for dating or adult-oriented social interaction</li>
      </ul>
      
      <h3 id="unfair-business">8. Unfair, Abusive, or Misleading Business Practices</h3>
      <ul>
        <li>Business models promising fast, guaranteed, or disproportionate financial returns with minimal effort, including:
          <ul>
            <li>Unrealistic profit claims or misleading income projections</li>
            <li>False testimonials, fabricated results, or deceptive marketing statements</li>
            <li>Aggressive or high-pressure sales practices without proper delivery of services</li>
          </ul>
        </li>
        <li>Services that do not provide meaningful added value, including unauthorized resale of services or public-sector offerings</li>
        <li>Pyramid, referral-based, or similar schemes lacking genuine commercial substance</li>
        <li>Manipulative sales of online traffic, leads, or artificial engagement</li>
        <li>Marketing practices involving negative-option billing, deceptive telemarketing, or unsolicited outreach</li>
        <li>Exploitative mortgage advisory, lending, credit repair, or financial counseling activities</li>
        <li>Investment structures designed to take advantage of customers through minimal upfront contributions</li>
        <li>Fraudulent or abusive activities, including remote technical support scams, pay-to-remove reputation services, essay-writing businesses, chain-letter schemes, or unsolicited door-to-door sales</li>
        <li>Any other activity deemed misleading, deceptive, or harmful under the company's risk assessment</li>
      </ul>
      
      <h3 id="weapons-explosives">9. Weapons, Explosives, and Hazardous Materials</h3>
      <ul>
        <li>Dual-use goods that may present regulatory, security, or compliance risks</li>
        <li>Manufacture, trade, or distribution of firearms, ammunition, weapons, fireworks, explosives, or related components</li>
        <li>Sale or handling of chemicals, peptides, laboratory substances, or materials that are toxic, flammable, or radioactive</li>
        <li>Direct trading of precious metals, subject to enhanced due diligence and individual review</li>
      </ul>
      
      <h3 id="restricted-legal">10. Restricted Legal Services</h3>
      <ul>
        <li>Legal practices collecting or processing funds for purposes unrelated to legitimate legal services, including activities presenting elevated AML risk</li>
        <li>Legal professionals or firms primarily engaged in bankruptcy-related services</li>
        <li>Businesses providing bail bond, bail guarantee, or similar surety services</li>
      </ul>
      
      <h3 id="sanctions-licensing">11. Sanctions, Regulatory, and Licensing Restrictions</h3>
      <ul>
        <li>Financial institutions or payment service providers operating without required licenses or regulatory registration</li>
        <li>Individuals or entities subject to international, U.S., EU, UK, or other applicable sanctions regimes</li>
        <li>Customers or ultimate beneficial owners holding 50% or more ownership or control who are sanctioned or designated persons</li>
        <li>Shell banks, shell companies, or entities established through bearer share structures, unless publicly listed on a recognized and regulated exchange</li>
      </ul>
    `,
	},
];
