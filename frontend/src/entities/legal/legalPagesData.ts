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
		id: 'cookies-policy',
		title: 'Cookies Policy',
		date: '22.12.2025',
		sections: [
			{ id: 'introduction', title: 'Introduction' },
			{ id: 'what-are-cookies', title: 'What Cookies Are and How We Use Them' },
			{ id: 'cookie-categories', title: 'Cookie Categories' },
			{ id: 'managing-cookies', title: 'Managing Cookies' },
			{ id: 'third-party-websites', title: 'Links to Other Websites' },
			{ id: 'google-analytics', title: 'Google Analytics' },
			{ id: 'additional-information', title: 'Additional Information' },
			{ id: 'your-rights', title: 'Your Rights' },
		],
		content: `
		<h2 id="introduction">Introduction</h2>
		<p>This Cookies Policy explains how cookies are used when you visit the website located at www.surfbank.co (the "Website").</p>
		<p>Our Website uses cookies to help distinguish you from other users. This enables us to provide you with a smoother and more personalised browsing experience and helps us to improve the performance and functionality of the Website.</p>
		<p>By continuing to use the Website, you acknowledge and agree to our use of cookies in accordance with this policy.</p>
		<p>If you have any questions or concerns regarding our use of cookies or the processing of personal data obtained through them, please contact us at: <a href="mailto:support@surfbank.co">support@surfbank.co</a>.</p>

		<h2 id="what-are-cookies">What Cookies Are and How We Use Them</h2>
		<p>Cookies are small text files containing letters and numbers that are stored on your browser or the hard drive of your device, subject to your consent. They allow information to be transferred to your device's hard drive and help websites function effectively.</p>
		
		<h3>Types of Cookies</h3>
		<p><strong>Session cookies</strong> are temporary and allow us to track your actions during a single browsing session, for example, to remember search results. These cookies are deleted once you close your browser.</p>
		<p><strong>Persistent cookies</strong> remain on your device between sessions and help us recognise you, authenticate users, and remember your preferences for future visits.</p>
		
		<p>The term "cookies" also includes similar technologies used to store or access information, such as Local Shared Objects (commonly known as "flash cookies"), web beacons, or clear gifs.</p>
		
		<p><strong>Important:</strong> You may block cookies by adjusting the relevant settings in your browser, which allow you to refuse all or some cookies. Please note, however, that blocking all cookies (including those that are strictly necessary) may limit your ability to access certain parts of the Website or affect its functionality.</p>

		<h2 id="cookie-categories">Cookie Categories</h2>
		<p>We use cookies to recognise you and your preferences, enhance the performance of the Website, and collect analytical information for the benefit of our customers and the Leumi Group.</p>
		
		<h3>1. Strictly Necessary Cookies</h3>
		<p>These cookies are essential for the Website to operate correctly. They enable core functions such as user authentication and access to secure areas of the Website.</p>
		
		<h3>2. Functionality Cookies</h3>
		<p>These cookies allow the Website to recognise you when you return or when you are already logged in. They help us personalise content, remember your preferences, and maintain settings such as your chosen language throughout your use of the Website or app.</p>
		
		<h3>3. Security Cookies</h3>
		<p>We use these cookies to help detect and prevent potential security risks and unauthorised activity.</p>
		
		<h3>4. Analytics and Performance Cookies</h3>
		<p>These cookies help us understand how visitors interact with the Website by recognising and counting visitors, monitoring page views, and analysing navigation patterns. This information assists us in improving the Website, for example, by ensuring that users can easily find the information they are looking for.</p>
		
		<h3>5. Targeting and Advertising Cookies</h3>
		<p>These cookies record your visit to the Website, the pages you have viewed, and the links you have followed. This information is used to make the Website more relevant to your interests and may be shared with third parties for these purposes.</p>
		
		<h3>6. Third-Party and Embedded Content Cookies</h3>
		<p>Our Website may include content or features provided by third parties, such as social media platforms (e.g. Facebook or X/Twitter) through sharing buttons or embedded media. These third parties may set their own cookies, which they may use to track your online activity. We do not have direct control over the information collected by these cookies.</p>
		
		<h3>Testing and Enhancements</h3>
		<p>From time to time, we may test new features or make minor changes to the way the Website is delivered. During such testing, cookies may be used to ensure a consistent user experience and to help us understand which enhancements are most valued by our users.</p>

		<h2 id="managing-cookies">Managing Cookies</h2>
		<h3>Cookie Preferences Tool</h3>
		<p>You may adjust your cookie preferences at any time by selecting the "Customise Cookies" option on the Website. Please note that cookies which are strictly necessary for the operation of the Website cannot be disabled through our cookie management tools.</p>
		
		<h3>Browser Settings</h3>
		<p>If you wish to refuse all cookies, including strictly necessary cookies, or delete cookies that have already been placed on your device (for this Website or others), you can do so through your browser settings. Your browser's help function will provide guidance on how to manage these settings.</p>
		
		<p><strong>Important Note:</strong> Cookies play an important role in enabling and enhancing the functionality of our Website. Disabling certain cookies may affect how the Website operates and may restrict access to some features or sections.</p>

		<h2 id="third-party-websites">Links to Other Websites</h2>
		<p>The Website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy or security practices of such websites.</p>
		<p>We encourage you to review the privacy policies of any external websites you visit, particularly where they collect personal data.</p>
		<p>Some links may direct you to websites operated by our affiliates located outside the UK, the EU, or other jurisdictions that offer an equivalent level of data protection.</p>

		<h2 id="google-analytics">Google Analytics</h2>
		<p>Our Website uses Google Analytics, a web analytics service provided by Google Inc. ("Google"). Google Analytics uses cookies to analyse how users interact with the Website.</p>
		
		<h3>IP Address Processing</h3>
		<p>The cookies used by Google Analytics collect your IP address. However, IP anonymisation is enabled on this Website, meaning your IP address is shortened and anonymised as soon as technically possible, before being stored or processed by Google.</p>
		<p>The information generated by these cookies helps us understand how visitors use the Website. Google does not combine the IP address transmitted by your browser in connection with Google Analytics with other data held by Google.</p>
		
		<h3>Opting Out</h3>
		<p>You may prevent Google Analytics cookies from being stored by adjusting your browser settings. You may also opt out of Google Analytics tracking by downloading and installing the relevant browser plug-in available from Google.</p>

		<h2 id="additional-information">Additional Information</h2>
		
		<h3>Third-Party Cookies</h3>
		<p>Where we engage third-party service providers who have access to personal data collected via cookies on our Website, appropriate contractual safeguards are in place in accordance with applicable data protection laws, including the UK GDPR and, where relevant, the GDPR and PIPEDA.</p>
		
		<h3>Data Retention</h3>
		<p>We retain personal data collected through cookies only for as long as necessary to provide personalised services for which you have given your consent. Further details about how we process personal data can be found in our <a href="#privacy-policy">Privacy Policy</a>.</p>
		
		<h3>Website Updates</h3>
		<p>We may update the way cookies are implemented across the Website from time to time. As a result, you may be asked to review or re-confirm your cookie preferences.</p>
		<p>Where we make changes to the cookies we use, this Cookies Policy will be updated accordingly. The most recent version of this policy will always be available on our Website.</p>

		<h2 id="your-rights">Your Rights</h2>
		<p>By using the Website, you confirm that you have read and understood this Cookies Policy and your rights relating to the use of cookies.</p>
		<p>Further information about your rights and how they apply to the processing of your personal data is set out in our <a href="#privacy-policy">Privacy Policy</a>.</p>
		<p>If you have any questions or require further clarification, please contact us at: <a href="mailto:privacy@surfbank.co">privacy@surfbank.co</a>.</p>
	`,
	},
	{
		id: 'terms-of-service',
		title: 'Terms of Service',
		date: '22.12.2025',
		sections: [
			{ id: 'introduction', title: 'Introduction' },
			{ id: 'service-description', title: 'Service Description' },
			{ id: 'disclaimers', title: 'Disclaimers' },
			{ id: 'acceptance-updates', title: 'Acceptance & Updates' },
			{ id: 'service-modifications', title: 'Service Modifications' },
			{
				id: 'accounts-controls',
				title: 'Accounts, Controls and Third-Party Providers',
			},
			{ id: 'prohibited-countries', title: 'Prohibited Countries' },
			{ id: 'prohibited-use', title: 'Prohibited Use' },
			{ id: 'digital-assets', title: 'Use of Digital Assets' },
			{ id: 'regulated-entities', title: 'Regulated Entities' },
			{ id: 'ongoing-compliance', title: 'Ongoing Compliance' },
			{
				id: 'permitted-prohibited-conduct',
				title: 'Permitted & Prohibited Conduct',
			},
			{ id: 'subcontracting', title: 'Subcontracting' },
			{ id: 'suspension-rights', title: 'Suspension Rights' },
			{ id: 'governing-law', title: 'Governing Law and Jurisdiction' },
			{ id: 'confidentiality', title: 'Confidentiality' },
			{ id: 'acknowledgment', title: 'Acknowledgment' },
			{ id: 'entire-agreement', title: 'Entire Agreement' },
			{ id: 'contact', title: 'Contact Us' },
		],
		content: `
		<h2 id="introduction">Introduction</h2>
		<p>Welcome to Surf Bank LTD ("Surf Bank", "we", "us", or "our"). These Terms of Service (the "Terms") govern your access to and use of the website located at www.surfbank.co (the "Website") and any services, platforms, products, or interfaces made available through the Website from time to time (collectively, the "Service").</p>
		<p>These Terms should be read together with our Privacy Policy and Cookies Policy, which explain how we process personal data and use cookies and similar technologies.</p>
		<p>By accessing or using the Website or the Services, you confirm that you have read, understood, and agree to be bound by these Terms.</p>

		<h3>Definitions</h3>
		<p><strong>"Service"</strong> means all of Surf Bank websites, applications (including, but not limited to, mobile and cloud applications), tools, platforms, and services offered by Surf Bank but excluding third party applications.</p>
		<p><strong>"Website"</strong> means the Calendly.com website or any other proprietary website owned by Surf Bank or that Surf Bank has the authority to manage and control and which link to this Terms of service.</p>
		<p><strong>"Personal Data"</strong> means any data relating to an identified or identifiable natural person that is processed by Surf Bank as described in this Terms of service when such information is protected as "personal data" or "personal information" or a similar term under applicable data protection laws.</p>

		<h2 id="service-description">Service Description</h2>
		<p>Surf Bank is a technology services provider. It is not a bank and does not itself provide regulated banking or payment services. Surf Bank delivers technology-enabled settlement solutions and digital asset wallets, supported by licensed and regulated partner institutions, together with technical infrastructure that facilitates interaction between fiat currencies and digital assets.</p>
		<p>All regulated financial services, including payment processing, safeguarding of funds, card issuance, or similar regulated activities, are provided exclusively by third-party institutions that are appropriately authorised and regulated in their respective jurisdictions. Unless expressly stated in service-specific terms, Surf Bank does not accept deposits, issue loans, or provide traditional banking services.</p>
		<p>Nothing in these Terms is intended to represent that Surf Bank is authorised or regulated by the UK Financial Conduct Authority ("FCA"). References to compliance, safeguards, or controls reflect internal risk-management and governance practices aligned with generally accepted UK financial services standards.</p>

		<h2 id="disclaimers">Disclaimers</h2>
		<p>The Website and Service are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including as to merchantability, fitness for a particular purpose, or non-infringement.</p>

		<h2 id="acceptance-updates">Acceptance & Updates</h2>
		<p>Your use of any Service constitutes acceptance of the Terms applicable to that Service. We may update these Terms periodically. Where material changes affect your rights or obligations, you may be required to review and accept the updated Terms before continuing to use the Services.</p>

		<h2 id="service-modifications">Service Modifications</h2>
		<p>We may add, remove, or modify the Services or introduce new conditions or requirements. Where changes materially affect the availability or operation of the Services, we will take reasonable steps to notify you in advance. We shall not be liable for non-material changes or enhancements.</p>
		<p>We may modify these Terms at any time by posting the revised version on the Website with a new "Last Updated" date. Your continued use of the Website after changes are posted constitutes your acceptance of the revised Terms.</p>

		<h2 id="accounts-controls">Accounts, Controls, and Third-Party Providers</h2>
		<h3>Restrictions and Controls</h3>
		<p>We may refuse, suspend, reverse, or restrict transactions or access to the Services where reasonably necessary to comply with applicable law, mitigate operational or financial risk, prevent fraud, or protect you, Surf Bank, or our partner institutions.</p>
		
		<h3>Account Migration</h3>
		<p>For operational, security, or regulatory-alignment reasons, your account or related Services may be migrated to another partner institution.</p>
		
		<h3>Third-Party Services</h3>
		<p>Certain Services are provided directly by designated third-party institutions. Your relationship with those institutions may be governed by separate terms. Surf Bank is not responsible for the acts or omissions of third parties acting outside Surf Bank's scope of control.</p>
		
		<h3>Custodial and Direct Structures</h3>
		<p>Assets and funds may be held either:</p>
		<ul>
			<li><strong>Custodial</strong>, where assets are held by a licensed custodian in a pooled or notional account; or</li>
			<li><strong>Direct</strong>, where you contract directly with the relevant institution and appoint Surf Bank as an agent for operational purposes.</li>
		</ul>

		<h2 id="prohibited-countries">Prohibited Countries</h2>
		<p>We do not onboard users or clients with direct or indirect links to jurisdictions subject to comprehensive sanctions or identified as high risk. This includes entities incorporated in, operating from, or owned or controlled by persons residing in or holding citizenship from such jurisdictions.</p>
		<p><strong>Prohibited jurisdictions include:</strong> Abkhazia, Afghanistan, Albania, American Samoa, Anguilla, Antigua and Barbuda, Aruba, Bahamas, Barbados, Belarus, Bermuda, British Virgin Islands, Burkina Faso, Burundi, Cambodia, Cayman Islands, Central African Republic, Congo (Democratic Republic), Cook Islands, Crimea, Cuba, Curacao, Fiji, Guam, Guinea, Guinea Bissau, Haiti, Iran, Iraq, Jamaica, Jordan, Libya, Mali, Marshall Islands, Morocco, Myanmar, Nagorno-Karabakh, Nicaragua, Northern Cyprus, North Korea, Pakistan, Palau, Panama, Philippines, Russian Federation, Samoa, Sahrawi Arab Democratic Republic, Senegal, Seychelles, Somalia, South Sudan, St Kitts & Nevis, St Lucia, St Vincent & Grenadines, Sudan, Syria, Trinidad & Tobago, Turks & Caicos, Uganda, Ukraine, United States of America, United Kingdom (in accordance with the FPR regulation), United States Virgin Islands, Vanuatu, Venezuela, West Bank, Yemen, Zimbabwe.</p>
		<p>Additional countries classified as High Risk by FATF, the EU, or the UK may be subject to enhanced due diligence or rejection based on case-by-case assessment.</p>

		<h2 id="prohibited-use">Prohibited Use</h2>
		<p>You must not:</p>
		<ul>
			<li>Circumvent or bypass technical or security measures;</li>
			<li>Access non-public systems or data;</li>
			<li>Use the Services as a pass-through or service bureau without adding substantive value;</li>
			<li>Reverse engineer or attempt to derive source code;</li>
			<li>Engage in unlawful, fraudulent, deceptive, or misleading conduct;</li>
			<li>Interfere with the integrity or performance of the Services;</li>
			<li>Copy, distribute, resell, or commercially exploit the Services without authorisation.</li>
		</ul>

		<h2 id="digital-assets">Use of Digital Assets</h2>
		<p><strong>Decentralised Networks:</strong> Surf Bank does not control blockchain networks or digital asset markets and accepts no responsibility for losses arising from market volatility, protocol failures, or incorrect wallet addresses.</p>
		<p><strong>Regulatory Scope:</strong> Certain digital asset-related Services may fall outside the scope of UK or EU financial services regulation.</p>
		<p><strong>Segregation:</strong> Digital assets are held by appointed custodians and are not recorded on Surf Bank's balance sheet.</p>

		<h2 id="regulated-entities">Regulated Entities</h2>
		<p>If you are a regulated financial institution, you remain solely responsible for complying with your own regulatory obligations, including reporting, record-keeping, and the filing of suspicious activity or equivalent reports.</p>

		<h2 id="ongoing-compliance">Ongoing Compliance</h2>
		<p>By using the Service, you represent and warrant that you will comply on an ongoing basis with these Terms, applicable laws, and any requirements communicated to you in connection with compliance, risk, or security controls.</p>

		<h2 id="permitted-prohibited-conduct">Permitted & Prohibited Conduct</h2>
		<h3>Permitted:</h3>
		<ul>
			<li>Access informational content;</li>
			<li>Submit enquiries or support requests;</li>
			<li>Use authorised interactive features.</li>
		</ul>
		<h3>Prohibited:</h3>
		<ul>
			<li>Attempt unauthorised access to systems or data;</li>
			<li>Compromise Website security or functionality;</li>
			<li>Transmit malware, spam, or fraudulent communications;</li>
			<li>Use the Website for unlawful or deceptive purposes.</li>
		</ul>

		<h2 id="subcontracting">Subcontracting</h2>
		<p>Surf Bank may subcontract its obligations to third-party service providers.</p>

		<h2 id="suspension-rights">Suspension Rights</h2>
		<p>We may suspend or terminate access to the Services with immediate effect where:</p>
		<ul>
			<li>You breach these Terms or applicable law;</li>
			<li>Continued provision would expose Surf Bank or its partners to legal or regulatory risk;</li>
			<li>We are instructed to do so by regulators, courts, or competent authorities;</li>
			<li>We reasonably suspect fraud, cyber threats, or other unlawful activity.</li>
		</ul>

		<h2 id="governing-law">Governing Law and Jurisdiction</h2>
		<p>These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of England and Wales. Any dispute shall be resolved exclusively in the courts of England and Wales, and you consent to personal jurisdiction there.</p>

		<h2 id="confidentiality">Confidentiality</h2>
		<p>Each party agrees to keep confidential any non-public, proprietary, or confidential information disclosed in connection with the Services, except where disclosure is required by law or the information is otherwise lawfully available.</p>

		<h2 id="acknowledgment">Acknowledgment</h2>
		<p>By registering for or using the Services, you acknowledge that you have read, understood, and agree to these Terms of Service, together with the Privacy Policy and Cookies Policy.</p>

		<h2 id="entire-agreement">Entire Agreement</h2>
		<p>These Terms, together with any documents expressly incorporated by reference, constitute the entire agreement between you and Surf Bank regarding the Website.</p>

		<h2 id="contact">Contact Us</h2>
		<p>For questions relating to these Terms or the Service, please contact us at: <a href="mailto:help@surfbank.co">help@surfbank.co</a>.</p>
		<p>Surf Bank LTD 205 5 Ave SW, Hong Kong, AB T2P 3L6, Email: 
info@surfbank.co | <a href="mailto:help@surfbank.co">help@surfbank.co</a>.</p>
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
