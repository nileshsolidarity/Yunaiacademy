export const intermediateCourses = [
  {
    title: 'CA Intermediate - Advanced Accounting',
    slug: 'ca-inter-advanced-accounting',
    description: 'Comprehensive coverage of Accounting Standards, Company Accounts, Amalgamation, and Consolidation as per ICAI CA Intermediate syllabus.',
    category: 'CA Intermediate',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Framework for Financial Reporting',
        textContent: `The conceptual framework for financial reporting provides the foundation for preparing and presenting financial statements. It defines the objective of general-purpose financial reporting, which is to provide financial information useful to existing and potential investors, lenders, and other creditors in making decisions about providing resources to the entity.

Qualitative characteristics of useful financial information are divided into fundamental characteristics (relevance and faithful representation) and enhancing characteristics (comparability, verifiability, timeliness, and understandability). Information is relevant if it can make a difference in decisions made by users.

The elements of financial statements include Assets (present economic resource controlled by the entity), Liabilities (present obligation to transfer an economic resource), Equity (residual interest in assets after deducting liabilities), Income (increases in assets or decreases in liabilities resulting in increases in equity), and Expenses (decreases in assets or increases in liabilities resulting in decreases in equity).

Recognition criteria require that an item meets the definition of an element and that recognizing it provides relevant information that faithfully represents the item. Measurement bases include historical cost, current value (fair value, value in use, and current cost).`,
        quizTitle: 'Financial Reporting Framework Quiz',
        questions: [
          { question: 'Fundamental qualitative characteristics include:', options: ['Comparability and timeliness', 'Relevance and faithful representation', 'Verifiability and understandability', 'Materiality and prudence'], correctAnswer: 1, explanation: 'Relevance and faithful representation are the two fundamental qualitative characteristics.' },
          { question: 'An asset is defined as:', options: ['Cash in hand', 'A present economic resource controlled by the entity', 'Future profit', 'Shareholders equity'], correctAnswer: 1, explanation: 'An asset is a present economic resource controlled by the entity as a result of past events.' },
          { question: 'Income includes:', options: ['Only revenue', 'Revenue and gains', 'Only gains', 'Cash receipts only'], correctAnswer: 1, explanation: 'Income encompasses both revenue arising from ordinary activities and gains.' },
          { question: 'Which is an enhancing qualitative characteristic?', options: ['Relevance', 'Faithful representation', 'Comparability', 'Materiality'], correctAnswer: 2, explanation: 'Comparability is an enhancing characteristic along with verifiability, timeliness, and understandability.' },
          { question: 'Historical cost measures an asset at:', options: ['Current market price', 'The cost incurred to acquire it', 'Net realizable value', 'Replacement cost'], correctAnswer: 1, explanation: 'Historical cost measures the consideration paid to acquire the asset at the time of acquisition.' },
        ],
      },
      {
        title: 'Key Accounting Standards',
        textContent: `Accounting Standard 1 (AS-1) deals with Disclosure of Accounting Policies. It requires entities to disclose significant accounting policies as part of financial statements. Accounting policies should be selected based on prudence, substance over form, and materiality.

AS-9 covers Revenue Recognition. Revenue from the sale of goods is recognized when the seller transfers significant risks and rewards of ownership, retains no effective control, the amount can be reliably measured, and economic benefits will flow to the seller. Service revenue is recognized proportionally or on completion.

AS-10 deals with Property, Plant and Equipment. PPE are tangible items held for use in production or supply of goods/services, for rental, or for administrative purposes and expected to be used for more than one period. They are initially measured at cost and subsequently at cost less accumulated depreciation and impairment.

AS-13 covers Accounting for Investments. Current investments are carried at lower of cost and fair value. Long-term investments are carried at cost less any permanent diminution in value. Transfers between categories should be at lower of cost and carrying amount.

AS-19 deals with Leases. A finance lease transfers substantially all risks and rewards to the lessee. An operating lease does not transfer substantially all risks and rewards. Classification depends on substance rather than legal form of the transaction.`,
        quizTitle: 'Accounting Standards Quiz',
        questions: [
          { question: 'AS-1 deals with:', options: ['Revenue Recognition', 'Disclosure of Accounting Policies', 'Fixed Assets', 'Investments'], correctAnswer: 1, explanation: 'AS-1 deals with Disclosure of Accounting Policies in financial statements.' },
          { question: 'Revenue from sale of goods is recognized when:', options: ['Invoice is raised', 'Cash is received', 'Significant risks and rewards transfer', 'Order is placed'], correctAnswer: 2, explanation: 'Revenue is recognized when significant risks and rewards of ownership are transferred to the buyer.' },
          { question: 'Current investments are carried at:', options: ['Cost', 'Fair value', 'Lower of cost and fair value', 'Higher of cost and fair value'], correctAnswer: 2, explanation: 'Current investments are carried at the lower of cost and fair value (net realizable value).' },
          { question: 'A finance lease transfers:', options: ['Legal title only', 'Substantially all risks and rewards', 'Only possession', 'Nothing'], correctAnswer: 1, explanation: 'A finance lease transfers substantially all risks and rewards incidental to ownership to the lessee.' },
          { question: 'PPE is initially measured at:', options: ['Fair value', 'Cost', 'Book value', 'Replacement cost'], correctAnswer: 1, explanation: 'Property, Plant and Equipment is initially recognized and measured at cost of acquisition.' },
        ],
      },
      {
        title: 'Company Accounts',
        textContent: `Company accounts involve the preparation and presentation of financial statements of companies governed by the Companies Act, 2013. Schedule III of the Act prescribes the format for Balance Sheet and Statement of Profit and Loss.

Share Capital transactions include issue of shares at par, premium, or discount. Share premium is credited to the Securities Premium Account and can only be used for specific purposes under Section 52. Right shares are offered to existing shareholders in proportion to their holdings.

Redemption of Preference Shares must comply with Section 55 of the Companies Act. Preference shares can be redeemed out of profits available for distribution or out of proceeds of a fresh issue of shares. The Capital Redemption Reserve must be created when redemption is out of profits.

Buy-back of Shares is governed by Section 68. A company may buy back its own shares subject to conditions including authorization by articles, special resolution, and maximum limits. The buy-back cannot exceed 25% of total paid-up capital and free reserves.

Debentures are debt instruments issued by companies. They may be secured or unsecured, convertible or non-convertible. Interest on debentures is a charge against profits. Redemption of debentures can be at par, premium, or through sinking fund.`,
        quizTitle: 'Company Accounts Quiz',
        questions: [
          { question: 'Schedule III of Companies Act prescribes:', options: ['Tax rates', 'Format of financial statements', 'Audit procedures', 'Director salaries'], correctAnswer: 1, explanation: 'Schedule III prescribes the format for Balance Sheet and Statement of Profit and Loss for companies.' },
          { question: 'Securities Premium can be used for:', options: ['Dividend payment', 'Specific purposes under Section 52', 'Any business purpose', 'Director remuneration'], correctAnswer: 1, explanation: 'Securities Premium Account can only be utilized for purposes specified under Section 52.' },
          { question: 'When preference shares are redeemed from profits, which reserve is created?', options: ['General Reserve', 'Capital Redemption Reserve', 'Revenue Reserve', 'Debenture Redemption Reserve'], correctAnswer: 1, explanation: 'Capital Redemption Reserve must be created equal to the nominal value of shares redeemed from profits.' },
          { question: 'Maximum buy-back limit is:', options: ['10% of paid-up capital', '25% of paid-up capital and free reserves', '50% of paid-up capital', 'No limit'], correctAnswer: 1, explanation: 'Buy-back cannot exceed 25% of the total paid-up capital and free reserves of the company.' },
          { question: 'Interest on debentures is:', options: ['Distribution of profit', 'Charge against profit', 'Capital expenditure', 'Not recorded'], correctAnswer: 1, explanation: 'Interest on debentures is a charge against profits, paid irrespective of profit or loss.' },
        ],
      },
      {
        title: 'Amalgamation & Reconstruction',
        textContent: `Amalgamation is the process where two or more companies combine to form a new company, or one company absorbs another. AS-14 classifies amalgamation into two types: Amalgamation in the Nature of Merger and Amalgamation in the Nature of Purchase.

Amalgamation in the Nature of Merger requires: all assets and liabilities of the transferor become assets and liabilities of the transferee, shareholders holding at least 90% equity shares become shareholders of the transferee, consideration is discharged through equity shares, and the business is intended to be continued.

The Pooling of Interests Method is used for mergers. Assets and liabilities are recorded at their existing carrying values. The difference between the amount recorded as share capital and the amount of share capital of the transferor is adjusted in reserves.

The Purchase Method is used for amalgamation in the nature of purchase. Assets and liabilities are recorded at their fair values. Purchase consideration is compared with net assets acquired, and the difference is treated as Goodwill (excess) or Capital Reserve (shortfall).

Internal Reconstruction involves reorganizing the financial structure of a company without forming a new company. It typically involves reduction of share capital, writing off losses, and revaluing assets. This requires court approval and compliance with the Companies Act provisions.`,
        quizTitle: 'Amalgamation Quiz',
        questions: [
          { question: 'AS-14 classifies amalgamation into:', options: ['Three types', 'Two types: Merger and Purchase', 'Four types', 'No classification'], correctAnswer: 1, explanation: 'AS-14 classifies amalgamation into Amalgamation in the Nature of Merger and in the Nature of Purchase.' },
          { question: 'Pooling of Interests Method is used for:', options: ['Purchase type amalgamation', 'Merger type amalgamation', 'All amalgamations', 'Internal reconstruction'], correctAnswer: 1, explanation: 'The Pooling of Interests Method is used when amalgamation is in the nature of merger.' },
          { question: 'Under Purchase Method, assets are recorded at:', options: ['Book value', 'Fair value', 'Historical cost', 'Nominal value'], correctAnswer: 1, explanation: 'Under the Purchase Method, assets and liabilities of the transferor are recorded at fair values.' },
          { question: 'If purchase consideration exceeds net assets, the difference is:', options: ['Capital Reserve', 'Goodwill', 'Revenue Reserve', 'Written off immediately'], correctAnswer: 1, explanation: 'When purchase consideration exceeds the net assets acquired, the excess is recorded as Goodwill.' },
          { question: 'Internal reconstruction involves:', options: ['Forming a new company', 'Reorganizing financial structure without a new company', 'Merger of two companies', 'Liquidation'], correctAnswer: 1, explanation: 'Internal reconstruction reorganizes a company\'s financial structure without creating a new entity.' },
        ],
      },
      {
        title: 'Consolidation of Financial Statements',
        textContent: `Consolidated Financial Statements present the financial position and results of a parent company and its subsidiaries as a single economic entity. AS-21 governs consolidation. A subsidiary is an entity controlled by the parent (usually through holding more than 50% voting power).

The consolidation process involves combining the financial statements of parent and subsidiaries on a line-by-line basis, adding together like items of assets, liabilities, income, and expenses. The parent's investment in the subsidiary is eliminated against the parent's share of the subsidiary's equity.

Minority Interest (Non-Controlling Interest) represents the portion of the subsidiary's equity not owned by the parent. It is presented in the consolidated balance sheet separately from the parent's equity. Minority interest in profit or loss is also shown separately.

Goodwill on Consolidation arises when the cost of investment in the subsidiary exceeds the parent's share of the subsidiary's net assets at the date of acquisition. Capital Reserve arises when the parent's share exceeds the cost of investment.

Intra-group transactions (sales between parent and subsidiary) must be eliminated to avoid double counting. This includes intra-group sales, unrealized profits on inventory, intra-group loans, and dividends. Only transactions with external parties are reflected in consolidated statements.`,
        quizTitle: 'Consolidation Quiz',
        questions: [
          { question: 'A subsidiary is controlled when parent holds:', options: ['25% voting power', 'More than 50% voting power', 'Exactly 50%', 'Any shares'], correctAnswer: 1, explanation: 'Control is generally established when the parent holds more than 50% of the voting power.' },
          { question: 'Minority Interest represents:', options: ['Parent\'s share of subsidiary', 'Portion of subsidiary equity NOT owned by parent', 'Total subsidiary equity', 'Goodwill'], correctAnswer: 1, explanation: 'Minority Interest is the portion of the subsidiary\'s net assets/equity not attributable to the parent.' },
          { question: 'Goodwill on consolidation arises when:', options: ['Net assets exceed investment cost', 'Investment cost exceeds parent share of net assets', 'They are equal', 'There is no subsidiary'], correctAnswer: 1, explanation: 'Goodwill arises when the cost of investment exceeds the parent\'s share of subsidiary\'s net assets.' },
          { question: 'Intra-group transactions are:', options: ['Shown separately', 'Eliminated on consolidation', 'Doubled', 'Ignored'], correctAnswer: 1, explanation: 'Intra-group transactions are eliminated to present the group as a single economic entity.' },
          { question: 'Consolidation adds items on a:', options: ['Proportionate basis', 'Line-by-line basis', 'Net basis', 'Selective basis'], correctAnswer: 1, explanation: 'Consolidation combines financial statements on a line-by-line basis, adding like items together.' },
        ],
      },
    ],
  },
  {
    title: 'CA Intermediate - Corporate & Other Laws',
    slug: 'ca-inter-corporate-laws',
    description: 'Comprehensive coverage of the Companies Act 2013, NCLT, Winding Up, FEMA, and Competition Act as per ICAI CA Intermediate syllabus.',
    category: 'Corporate Law',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Companies Act - Incorporation & Management',
        textContent: `The Companies Act, 2013 governs the incorporation, management, and dissolution of companies in India. A company is an artificial legal person created by law, having a separate legal entity, perpetual succession, common seal, and limited liability of its members.

Types of companies include: Private Company (minimum 2 members, maximum 200, restrictions on share transfer), Public Company (minimum 7 members, no maximum limit, freely transferable shares), One Person Company (single member), and Section 8 Company (formed for charitable purposes).

Incorporation requires filing the Memorandum of Association (constitution of the company defining its objects, name, registered office, liability, and capital), Articles of Association (rules for internal management), and other documents with the Registrar of Companies.

The Board of Directors manages the company. A public company must have minimum 3 directors, private company needs minimum 2. Independent directors are required in listed and certain public companies. Directors have duties of care, skill, diligence, and must act in the company's interest.

Key managerial personnel include Managing Director, Whole-time Director, CEO, CFO, and Company Secretary. Their appointment, remuneration, and removal are governed by specific provisions of the Companies Act.`,
        quizTitle: 'Companies Act - Incorporation Quiz',
        questions: [
          { question: 'Minimum members for a public company:', options: ['2', '5', '7', '10'], correctAnswer: 2, explanation: 'A public company requires a minimum of 7 members for incorporation.' },
          { question: 'Memorandum of Association defines:', options: ['Internal management rules', 'Constitution and objects of the company', 'Director salaries', 'Audit procedures'], correctAnswer: 1, explanation: 'The MOA is the constitution defining the company\'s name, objects, registered office, liability, and capital.' },
          { question: 'Minimum directors in a private company:', options: ['1', '2', '3', '5'], correctAnswer: 1, explanation: 'A private company requires a minimum of 2 directors.' },
          { question: 'One Person Company has:', options: ['2 members minimum', 'Single member', '7 members', 'No members'], correctAnswer: 1, explanation: 'A One Person Company (OPC) has only a single member who is both shareholder and director.' },
          { question: 'Company Secretary is classified as:', options: ['External auditor', 'Key Managerial Personnel', 'Independent director', 'Shareholder representative'], correctAnswer: 1, explanation: 'Company Secretary is one of the Key Managerial Personnel under the Companies Act, 2013.' },
        ],
      },
      {
        title: 'Companies Act - Meetings & Resolutions',
        textContent: `Company meetings are essential for corporate governance. The Annual General Meeting (AGM) must be held every year within 6 months of the close of the financial year. It considers accounts, declares dividends, appoints auditors, and elects directors.

Extraordinary General Meetings (EGM) can be called by the Board, requisitionists (holding at least 10% voting power), or by NCLT. Board meetings must be held at least 4 times a year with a maximum gap of 120 days between two meetings.

Quorum for meetings varies by company type. For public companies: 5 members for up to 1000 members, 15 for 1001-5000, and 30 for more than 5000. For private companies: 2 members. Board meeting quorum is one-third of total strength or 2, whichever is higher.

Resolutions can be Ordinary (passed by simple majority - more than 50% of votes cast), Special (passed by at least 75% of votes cast), or Resolutions requiring special notice. Certain matters like alteration of articles, change of name, and reduction of capital require special resolutions.

Proxy is a person authorized by a member to attend and vote at a meeting on their behalf. Every member entitled to attend and vote can appoint a proxy. A proxy cannot speak at the meeting. Section 105 governs proxy provisions.`,
        quizTitle: 'Meetings & Resolutions Quiz',
        questions: [
          { question: 'AGM must be held within how many months of year-end?', options: ['3 months', '6 months', '9 months', '12 months'], correctAnswer: 1, explanation: 'The AGM must be held within 6 months from the close of the financial year.' },
          { question: 'A special resolution requires:', options: ['Simple majority', '75% of votes cast', '51% of votes cast', 'Unanimous vote'], correctAnswer: 1, explanation: 'A special resolution requires at least 75% of votes cast by members present and voting.' },
          { question: 'Board meetings must be held at least:', options: ['2 times a year', '4 times a year', '6 times a year', '12 times a year'], correctAnswer: 1, explanation: 'The Board must meet at least 4 times a year with not more than 120 days between two meetings.' },
          { question: 'Quorum for a private company general meeting is:', options: ['5 members', '2 members', '7 members', '10 members'], correctAnswer: 1, explanation: 'The quorum for a general meeting of a private company is 2 members personally present.' },
          { question: 'A proxy can:', options: ['Speak at the meeting', 'Vote on behalf of the member', 'Change the agenda', 'Adjourn the meeting'], correctAnswer: 1, explanation: 'A proxy can attend and vote at the meeting but cannot speak (except at a poll).' },
        ],
      },
      {
        title: 'Winding Up & NCLT',
        textContent: `Winding up is the process of bringing a company's existence to an end. Under the Companies Act, 2013, winding up can be by the Tribunal (compulsory) or voluntary. The Insolvency and Bankruptcy Code, 2016 now primarily governs corporate insolvency.

Compulsory winding up by the Tribunal (NCLT) can be ordered when: the company has passed a special resolution, the company acted against sovereignty/integrity of India, company affairs are conducted in a fraudulent manner, the company has not filed financial statements or annual returns for 5 consecutive years, or NCLT considers it just and equitable.

The National Company Law Tribunal (NCLT) is a quasi-judicial body established under the Companies Act, 2013. It handles disputes related to companies including oppression and mismanagement, mergers and amalgamations, winding up, and conversion of companies.

The National Company Law Appellate Tribunal (NCLAT) hears appeals against NCLT orders. Further appeals lie to the Supreme Court on questions of law. NCLT and NCLAT replaced the Company Law Board and BIFR.

During winding up, a liquidator is appointed to collect assets, settle liabilities, and distribute surplus among members. The order of payment is: secured creditors, winding up costs, preferential creditors (employees, government dues), unsecured creditors, and finally shareholders.`,
        quizTitle: 'Winding Up & NCLT Quiz',
        questions: [
          { question: 'NCLT stands for:', options: ['National Company Law Tribunal', 'National Corporate Litigation Tribunal', 'New Company Law Tribunal', 'National Commerce and Law Tribunal'], correctAnswer: 0, explanation: 'NCLT stands for National Company Law Tribunal, established under the Companies Act, 2013.' },
          { question: 'Appeals against NCLT orders go to:', options: ['High Court', 'NCLAT', 'RBI', 'SEBI'], correctAnswer: 1, explanation: 'Appeals against NCLT orders are heard by the National Company Law Appellate Tribunal (NCLAT).' },
          { question: 'In winding up, who is paid first after secured creditors?', options: ['Shareholders', 'Unsecured creditors', 'Winding up costs and preferential creditors', 'Directors'], correctAnswer: 2, explanation: 'After secured creditors, winding up costs are paid, followed by preferential creditors (employees, government).' },
          { question: 'Compulsory winding up can be ordered when a company has not filed returns for:', options: ['1 year', '3 years', '5 consecutive years', '10 years'], correctAnswer: 2, explanation: 'NCLT can order winding up if a company has not filed financial statements/annual returns for 5 consecutive years.' },
          { question: 'NCLT replaced:', options: ['RBI', 'Company Law Board and BIFR', 'SEBI', 'Income Tax Tribunal'], correctAnswer: 1, explanation: 'NCLT replaced the Company Law Board (CLB) and Board for Industrial and Financial Reconstruction (BIFR).' },
        ],
      },
      {
        title: 'Other Laws - FEMA & Competition Act',
        textContent: `The Foreign Exchange Management Act (FEMA), 1999 regulates foreign exchange transactions in India. It replaced FERA (1973) and shifted from conservation of foreign exchange to facilitating external trade and promoting orderly development of the forex market.

FEMA classifies transactions into Current Account Transactions (generally permitted freely) and Capital Account Transactions (regulated by RBI). Authorized persons (banks, money changers) can deal in foreign exchange. Contraventions attract civil penalties, not criminal prosecution.

Foreign Direct Investment (FDI) is regulated under FEMA. FDI can come through the Automatic Route (no prior approval needed) or the Government Route (prior approval of the government required). Sectoral caps define maximum FDI allowed in different sectors.

The Competition Act, 2002 aims to prevent anti-competitive agreements, abuse of dominant position, and regulate mergers and acquisitions. The Competition Commission of India (CCI) is the regulatory body. Anti-competitive agreements include price fixing, market sharing, bid rigging, and tie-in arrangements.

Abuse of dominant position includes imposing unfair conditions, limiting production, denying market access, and applying discriminatory conditions. Mergers and acquisitions beyond specified thresholds require mandatory notification to CCI for prior approval.`,
        quizTitle: 'FEMA & Competition Act Quiz',
        questions: [
          { question: 'FEMA replaced:', options: ['Companies Act', 'FERA', 'RBI Act', 'Banking Regulation Act'], correctAnswer: 1, explanation: 'FEMA (1999) replaced FERA (1973), shifting focus from conservation to facilitation of foreign exchange.' },
          { question: 'Under FEMA, current account transactions are:', options: ['Prohibited', 'Generally permitted freely', 'Require RBI approval', 'Only for NRIs'], correctAnswer: 1, explanation: 'Current account transactions are generally freely permitted under FEMA with some restrictions.' },
          { question: 'CCI stands for:', options: ['Central Commerce Institute', 'Competition Commission of India', 'Company Compliance India', 'Central Corporate Institution'], correctAnswer: 1, explanation: 'CCI stands for Competition Commission of India, established under the Competition Act, 2002.' },
          { question: 'Anti-competitive agreements include:', options: ['Normal business contracts', 'Price fixing and bid rigging', 'Employment agreements', 'Lease agreements'], correctAnswer: 1, explanation: 'Anti-competitive agreements include price fixing, market sharing, bid rigging, and tie-in arrangements.' },
          { question: 'FDI through Automatic Route requires:', options: ['Government prior approval', 'CCI approval', 'No prior approval', 'Parliamentary approval'], correctAnswer: 2, explanation: 'FDI through the Automatic Route does not require any prior approval from the government.' },
        ],
      },
    ],
  },
  {
    title: 'CA Intermediate - Taxation',
    slug: 'ca-intermediate-taxation',
    description: 'Complete coverage of Income Tax and GST as per ICAI CA Intermediate syllabus including computation of income, deductions, and GST compliance.',
    category: 'Taxation',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Income Tax Fundamentals',
        textContent: `The Income Tax Act, 1961 is the primary legislation governing income tax in India. Every person whose total income exceeds the basic exemption limit is liable to pay income tax. The tax year runs from April 1 to March 31 (Previous Year), and tax is assessed in the following year (Assessment Year).

Residential status determines the taxability of income. A Resident and Ordinarily Resident (ROR) is taxed on global income. A Resident but Not Ordinarily Resident (RNOR) is taxed on Indian income and income from a business controlled from India. A Non-Resident (NR) is taxed only on Indian income.

Income is classified into five heads: Income from Salary, Income from House Property, Profits and Gains of Business or Profession, Capital Gains, and Income from Other Sources. Each head has specific rules for computation of income.

Gross Total Income is the aggregate of income under all five heads after set-off and carry forward of losses. Total Income is arrived at after deducting eligible deductions under Chapter VI-A (Sections 80C to 80U). Tax is computed on Total Income at applicable slab rates.

Tax liability includes income tax, surcharge (if applicable), and health and education cess at 4%. Advance tax must be paid in installments during the year. TDS (Tax Deducted at Source) is deducted by the payer on specified payments.`,
        quizTitle: 'Income Tax Fundamentals Quiz',
        questions: [
          { question: 'Income tax in India is governed by:', options: ['Companies Act', 'Income Tax Act 1961', 'RBI Act', 'SEBI Act'], correctAnswer: 1, explanation: 'The Income Tax Act, 1961 is the primary legislation governing income tax in India.' },
          { question: 'A Resident and Ordinarily Resident is taxed on:', options: ['Indian income only', 'Global income', 'Business income only', 'Salary only'], correctAnswer: 1, explanation: 'An ROR individual is taxed on their worldwide (global) income in India.' },
          { question: 'How many heads of income are there?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'Income is classified into 5 heads: Salary, House Property, Business/Profession, Capital Gains, Other Sources.' },
          { question: 'Health and Education Cess rate is:', options: ['2%', '3%', '4%', '5%'], correctAnswer: 2, explanation: 'Health and Education Cess is levied at 4% on income tax and surcharge.' },
          { question: 'Previous Year and Assessment Year differ by:', options: ['6 months', '1 year', '2 years', 'They are the same'], correctAnswer: 1, explanation: 'Assessment Year follows the Previous Year. Income earned in PY is assessed in AY (1 year later).' },
        ],
      },
      {
        title: 'Income from Salary & House Property',
        textContent: `Salary income includes basic salary, dearness allowance, bonus, commission, leave encashment, gratuity, pension, and perquisites. Salary is taxable on due or receipt basis, whichever is earlier. Exemptions are available for HRA (Section 10(13A)), Leave Travel Allowance, and standard deduction of Rs 50,000.

Perquisites are benefits in kind provided by the employer. They include rent-free accommodation (valued at specified percentage of salary), car provided by employer, interest-free loans, and club memberships. Some perquisites are taxable for all employees while others only for specified employees.

Provident Fund contributions: Employee contributions to PF are deductible under Section 80C. Employer contributions up to 12% of salary are exempt. Interest on PF is exempt up to 9.5% per annum. Recognized PF has the most favorable tax treatment.

Income from House Property is taxed under Section 22. Only the owner is taxed. Gross Annual Value is the higher of expected rent and actual rent received (for let-out property). Standard deduction of 30% on Net Annual Value is allowed. Municipal taxes paid are deductible. Interest on borrowed capital is allowed as deduction.

For self-occupied property, the annual value is considered nil. Interest deduction is limited to Rs 2 lakhs for self-occupied property (Section 24(b)). For let-out property, there is no limit on interest deduction. Loss from house property can be set off against other income up to Rs 2 lakhs.`,
        quizTitle: 'Salary & House Property Quiz',
        questions: [
          { question: 'Standard deduction from salary income is:', options: ['Rs 25,000', 'Rs 50,000', 'Rs 75,000', 'Rs 1,00,000'], correctAnswer: 1, explanation: 'A standard deduction of Rs 50,000 is allowed from salary income.' },
          { question: 'For self-occupied property, the annual value is:', options: ['Market rent', 'Municipal valuation', 'Nil', 'Fair rent'], correctAnswer: 2, explanation: 'For a self-occupied property, the Gross Annual Value is taken as Nil.' },
          { question: 'Standard deduction on Net Annual Value of house property is:', options: ['10%', '20%', '30%', '40%'], correctAnswer: 2, explanation: 'A standard deduction of 30% on Net Annual Value is allowed for all let-out properties.' },
          { question: 'Interest on home loan for self-occupied property is deductible up to:', options: ['Rs 1 lakh', 'Rs 1.5 lakh', 'Rs 2 lakh', 'No limit'], correctAnswer: 2, explanation: 'For self-occupied property, interest on borrowed capital is deductible up to Rs 2 lakh under Section 24(b).' },
          { question: 'Salary is taxable on:', options: ['Due basis only', 'Receipt basis only', 'Due or receipt basis, whichever is earlier', 'Accrual basis only'], correctAnswer: 2, explanation: 'Salary income is taxable on due basis or receipt basis, whichever is earlier.' },
        ],
      },
      {
        title: 'Business Income & Capital Gains',
        textContent: `Income from Business or Profession is computed under Sections 28-44. Profits and gains of any business or profession carried on during the previous year are taxable. The computation involves: Revenue Receipts minus Expenses (allowed deductions) = Business Income.

Key deductions allowed include rent, repairs, insurance of premises (Section 30), salary and bonus to employees, interest on borrowed capital, depreciation on assets (Section 32), and expenditure on scientific research (Section 35). Certain expenses are specifically disallowed like personal expenses, income tax, and penalties.

Depreciation is a significant deduction. It is computed on Written Down Value at prescribed rates. Block of assets concept groups similar assets. Additional depreciation of 20% is available on new plant and machinery in the year of acquisition for manufacturing entities.

Capital Gains arise from transfer of a capital asset. Short-term capital gains (holding period less than 24/36 months depending on asset type) are taxed at normal rates or 15% (for listed shares under Section 111A). Long-term capital gains benefit from indexation and are taxed at 20% (or 10% for listed securities above Rs 1 lakh under Section 112A).

Exemptions from capital gains include: Section 54 (investment in residential house from sale of residential property), Section 54EC (investment in specified bonds within 6 months), and Section 54F (investment in residential house from sale of any long-term capital asset other than house property).`,
        quizTitle: 'Business Income & Capital Gains Quiz',
        questions: [
          { question: 'Depreciation under Income Tax is calculated on:', options: ['Straight Line basis', 'Written Down Value basis', 'Units of production', 'Any method'], correctAnswer: 1, explanation: 'Under the Income Tax Act, depreciation is computed on Written Down Value (WDV) basis.' },
          { question: 'LTCG on sale of land/building is taxed at:', options: ['10%', '15%', '20% with indexation', '30%'], correctAnswer: 2, explanation: 'Long-term capital gains on land/building are taxed at 20% after indexation benefit.' },
          { question: 'Section 54 exemption applies to:', options: ['Sale of any asset', 'Sale of residential house invested in new residential house', 'Sale of shares', 'All capital gains'], correctAnswer: 1, explanation: 'Section 54 provides exemption when capital gains from sale of residential house are invested in a new residential house.' },
          { question: 'Additional depreciation rate is:', options: ['10%', '15%', '20%', '25%'], correctAnswer: 2, explanation: 'Additional depreciation of 20% is available on new plant and machinery for manufacturing entities.' },
          { question: 'Which expense is specifically disallowed?', options: ['Salary to employees', 'Rent of premises', 'Income tax paid', 'Insurance premium'], correctAnswer: 2, explanation: 'Income tax paid is specifically disallowed as a deduction while computing business income.' },
        ],
      },
      {
        title: 'Deductions & Tax Computation',
        textContent: `Chapter VI-A deductions reduce the Gross Total Income to arrive at Total Income. Section 80C allows deduction up to Rs 1.5 lakhs for investments in PPF, ELSS, NSC, life insurance premium, tuition fees, home loan principal repayment, and fixed deposits with 5-year lock-in.

Section 80D allows deduction for medical insurance premium: up to Rs 25,000 for self/family (Rs 50,000 for senior citizens). Section 80E allows deduction for interest on education loan with no upper limit. Section 80G allows deduction for donations to specified funds and institutions.

Section 80TTA allows deduction up to Rs 10,000 for interest on savings bank account (Rs 50,000 for senior citizens under 80TTB). Section 80U provides deduction for persons with disability. Section 80DD for expenses on disabled dependents.

Tax computation involves applying the slab rates to Total Income. For individuals below 60, the basic exemption is Rs 2.5 lakhs. Senior citizens (60-80) have Rs 3 lakhs, and super senior citizens (above 80) have Rs 5 lakhs. The new tax regime under Section 115BAC offers lower rates but most deductions are foregone.

Set-off and carry forward of losses: Intra-head set-off happens first, then inter-head set-off. Business loss can be set off against any income except salary. Unabsorbed business loss carries forward for 8 years. Capital loss can only be set off against capital gains.`,
        quizTitle: 'Deductions & Tax Computation Quiz',
        questions: [
          { question: 'Maximum deduction under Section 80C is:', options: ['Rs 1 lakh', 'Rs 1.5 lakh', 'Rs 2 lakh', 'Rs 2.5 lakh'], correctAnswer: 1, explanation: 'Section 80C allows a maximum deduction of Rs 1.5 lakhs for specified investments and expenses.' },
          { question: 'Capital loss can be set off against:', options: ['Any income', 'Only salary income', 'Only capital gains', 'Business income'], correctAnswer: 2, explanation: 'Capital loss (both short-term and long-term) can only be set off against capital gains.' },
          { question: 'Unabsorbed business loss can be carried forward for:', options: ['4 years', '8 years', '10 years', 'Indefinitely'], correctAnswer: 1, explanation: 'Unabsorbed business loss (other than speculative) can be carried forward for 8 assessment years.' },
          { question: 'Section 80D covers deduction for:', options: ['Life insurance', 'Medical insurance premium', 'Education loan', 'House rent'], correctAnswer: 1, explanation: 'Section 80D provides deduction for medical/health insurance premium payments.' },
          { question: 'Basic exemption limit for individuals below 60 is:', options: ['Rs 2 lakh', 'Rs 2.5 lakh', 'Rs 3 lakh', 'Rs 5 lakh'], correctAnswer: 1, explanation: 'For individuals below 60 years, the basic exemption limit is Rs 2.5 lakhs.' },
        ],
      },
      {
        title: 'GST Framework & Compliance',
        textContent: `The Goods and Services Tax (GST) is a comprehensive indirect tax on the supply of goods and services in India. It replaced multiple taxes including excise duty, service tax, VAT, and CST. GST is levied at each stage of the supply chain with input tax credit available.

GST has four components: CGST (Central GST collected by Central Government), SGST (State GST collected by State Government) for intra-state supplies, IGST (Integrated GST collected by Central Government) for inter-state supplies and imports, and UTGST for Union Territories.

Registration is mandatory when aggregate turnover exceeds Rs 20 lakhs (Rs 10 lakhs for special category states). Certain persons like inter-state suppliers and e-commerce operators must register irrespective of turnover. PAN-based GSTIN (15-digit number) is allotted.

Input Tax Credit (ITC) is the backbone of GST. A registered person can claim credit of tax paid on inputs used in the course of business. ITC is available only if: the person has the tax invoice, goods/services have been received, tax has been paid to the government, and returns have been filed.

Key compliance requirements include: Monthly returns (GSTR-1 for outward supplies, GSTR-3B for summary), Annual return (GSTR-9), and GST Audit for turnover exceeding Rs 5 crores. E-way bills are required for movement of goods exceeding Rs 50,000 in value.`,
        quizTitle: 'GST Framework Quiz',
        questions: [
          { question: 'GST replaced:', options: ['Income tax only', 'Multiple indirect taxes like excise, VAT, service tax', 'Corporate tax', 'Property tax'], correctAnswer: 1, explanation: 'GST replaced multiple indirect taxes including excise duty, service tax, VAT, CST, and others.' },
          { question: 'IGST is levied on:', options: ['Intra-state supplies', 'Inter-state supplies', 'Exports only', 'Imports only'], correctAnswer: 1, explanation: 'IGST (Integrated GST) is levied on inter-state supplies and imports.' },
          { question: 'GST registration threshold for general states is:', options: ['Rs 10 lakhs', 'Rs 20 lakhs', 'Rs 40 lakhs', 'Rs 50 lakhs'], correctAnswer: 1, explanation: 'Registration is mandatory when aggregate turnover exceeds Rs 20 lakhs (Rs 10 lakhs for special category states).' },
          { question: 'ITC can be claimed only if:', options: ['Purchase is made', 'Tax invoice is available and goods received', 'Payment is made in cash', 'Seller is registered'], correctAnswer: 1, explanation: 'ITC requires possession of tax invoice, receipt of goods/services, tax payment to government, and filing of returns.' },
          { question: 'E-way bill is required for goods movement exceeding:', options: ['Rs 10,000', 'Rs 25,000', 'Rs 50,000', 'Rs 1,00,000'], correctAnswer: 2, explanation: 'E-way bills are required for movement of goods exceeding Rs 50,000 in value.' },
        ],
      },
    ],
  },
  {
    title: 'CA Intermediate - Cost & Management Accounting',
    slug: 'ca-inter-cost-accounting',
    description: 'Complete coverage of Cost Concepts, Material & Labour Costing, Overheads, Process Costing, Standard Costing, Marginal Costing, and Budgeting as per ICAI syllabus.',
    category: 'Cost Accounting',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Cost Concepts & Classification',
        textContent: `Cost accounting is the process of recording, classifying, analyzing, and allocating costs associated with a process, and then developing various courses of action to control costs. It aims to provide information for decision-making, cost control, and cost reduction.

Costs are classified by nature (material, labour, expenses), by function (production, administration, selling, distribution), by behavior (fixed, variable, semi-variable), by controllability (controllable, uncontrollable), and by relevance to decisions (relevant, irrelevant, sunk, opportunity).

Fixed costs remain constant in total regardless of output level within the relevant range. Variable costs change in direct proportion to output. Semi-variable costs have both fixed and variable components. The relevant range is the activity level within which cost behavior assumptions hold.

Cost centers are the smallest segments of activity or area of responsibility for which costs are accumulated. Cost units are units of product or service for which costs are computed. Cost objects are anything for which a separate measurement of costs is desired.

The total cost of a product comprises: Prime Cost (Direct Material + Direct Labour + Direct Expenses) + Factory Overheads = Works Cost + Office Overheads = Cost of Production + Selling and Distribution Overheads = Total Cost/Cost of Sales.`,
        quizTitle: 'Cost Concepts Quiz',
        questions: [
          { question: 'Prime Cost includes:', options: ['All overheads', 'Direct Material + Direct Labour + Direct Expenses', 'Only material cost', 'Factory overhead'], correctAnswer: 1, explanation: 'Prime Cost = Direct Material + Direct Labour + Direct Expenses (all direct costs).' },
          { question: 'Fixed costs in total:', options: ['Change with output', 'Remain constant within relevant range', 'Always increase', 'Are always zero'], correctAnswer: 1, explanation: 'Fixed costs remain constant in total regardless of output level within the relevant range.' },
          { question: 'Opportunity cost is:', options: ['Historical cost', 'Benefit foregone by choosing an alternative', 'Future cost', 'Sunk cost'], correctAnswer: 1, explanation: 'Opportunity cost is the benefit foregone by choosing one alternative over the next best alternative.' },
          { question: 'Works Cost equals:', options: ['Prime Cost + Factory Overheads', 'Total cost - Selling overhead', 'Only factory expenses', 'Material cost'], correctAnswer: 0, explanation: 'Works Cost = Prime Cost + Factory/Manufacturing Overheads.' },
          { question: 'A sunk cost is:', options: ['A future cost', 'Already incurred and cannot be recovered', 'Variable cost', 'Opportunity cost'], correctAnswer: 1, explanation: 'Sunk costs are costs already incurred in the past that cannot be recovered or changed by any future decision.' },
        ],
      },
      {
        title: 'Material & Labour Costing',
        textContent: `Material cost control involves procurement, storage, and issue of materials. Economic Order Quantity (EOQ) minimizes total inventory costs (ordering + carrying). EOQ = sqrt(2 x Annual Demand x Ordering Cost / Carrying Cost per unit). Reorder level = Maximum Usage x Maximum Lead Time.

Methods of pricing material issues include FIFO (First In First Out), LIFO (Last In First Out), Weighted Average, and Specific Identification. FIFO values issues at the oldest prices and closing stock at recent prices. Weighted Average smooths out price fluctuations.

ABC Analysis classifies inventory into three categories: A items (high value, low volume - tight control), B items (moderate value and volume - moderate control), and C items (low value, high volume - minimal control). This Pareto principle approach focuses control efforts on the most valuable items.

Labour cost includes wages, bonuses, overtime premium, idle time, and labour turnover costs. Time-based systems pay for hours worked. Piece-rate systems pay per unit produced. Incentive schemes include Taylor's Differential Piece Rate, Halsey Plan (50% bonus on time saved), and Rowan Plan (proportional bonus).

Labour turnover refers to the rate at which employees leave and are replaced. It is measured as: (Number of separations / Average number of workers) x 100. High turnover increases costs through recruitment, training, and reduced productivity. Preventive measures include good working conditions and fair wages.`,
        quizTitle: 'Material & Labour Costing Quiz',
        questions: [
          { question: 'EOQ formula is:', options: ['sqrt(2DS/H)', '2DS/H', 'DS/2H', 'sqrt(DS/H)'], correctAnswer: 0, explanation: 'EOQ = sqrt(2DS/H) where D is annual demand, S is ordering cost, and H is carrying cost per unit.' },
          { question: 'FIFO values closing stock at:', options: ['Oldest prices', 'Latest/recent prices', 'Average prices', 'Standard prices'], correctAnswer: 1, explanation: 'Under FIFO, issues are at oldest prices, so closing stock is valued at the most recent purchase prices.' },
          { question: 'In ABC Analysis, A items are:', options: ['Low value, high volume', 'High value, low volume', 'Medium value', 'Equal in all respects'], correctAnswer: 1, explanation: 'A items represent high value but low volume, requiring tight control.' },
          { question: 'Halsey Plan gives bonus of:', options: ['100% of time saved', '50% of time saved', '75% of time saved', '25% of time saved'], correctAnswer: 1, explanation: 'Halsey Plan gives a bonus equal to 50% of the wages for time saved.' },
          { question: 'Reorder Level equals:', options: ['EOQ x Lead Time', 'Maximum Usage x Maximum Lead Time', 'Average Usage x Average Lead Time', 'Minimum stock'], correctAnswer: 1, explanation: 'Reorder Level = Maximum Usage Rate x Maximum Lead Time to prevent stockouts.' },
        ],
      },
      {
        title: 'Overhead Allocation & Absorption',
        textContent: `Overheads are indirect costs that cannot be directly traced to a specific cost unit. They are classified as production overheads (factory rent, factory manager salary), administration overheads (office rent, audit fees), and selling and distribution overheads (advertising, delivery costs).

Overhead allocation assigns the entire overhead cost to a specific cost center when it relates exclusively to that center. Overhead apportionment distributes shared overhead costs among multiple cost centers using appropriate bases such as floor area, number of employees, or machine hours.

Reciprocal services between service departments must be handled through methods such as: Repeated Distribution Method (iterative apportionment until negligible), Simultaneous Equation Method (mathematical), or Specified Order of Closing Method (step-down method).

Overhead absorption rates are predetermined and used to charge overheads to products. Common bases include: Direct Labour Hour Rate, Machine Hour Rate, Percentage of Direct Materials, Percentage of Direct Labour, and Per Unit Rate. The choice depends on the nature of production.

Under-absorption occurs when actual overheads exceed absorbed overheads. Over-absorption occurs when absorbed overheads exceed actual overheads. The difference is treated by: supplementary rate, writing off to costing P&L, or carrying forward.`,
        quizTitle: 'Overhead Allocation Quiz',
        questions: [
          { question: 'Overhead allocation assigns costs to:', options: ['Multiple cost centers', 'A specific cost center exclusively', 'Products directly', 'None'], correctAnswer: 1, explanation: 'Allocation assigns the entire amount of an overhead to a cost center when it relates exclusively to that center.' },
          { question: 'Floor area is commonly used to apportion:', options: ['Labour costs', 'Rent and building maintenance', 'Power costs', 'Depreciation'], correctAnswer: 1, explanation: 'Floor area (square footage) is the appropriate basis for apportioning rent and building-related costs.' },
          { question: 'Under-absorption of overhead means:', options: ['Absorbed > Actual', 'Actual > Absorbed', 'They are equal', 'No overheads exist'], correctAnswer: 1, explanation: 'Under-absorption occurs when actual overheads are more than the overheads absorbed/recovered.' },
          { question: 'Machine Hour Rate is appropriate when production is:', options: ['Labour intensive', 'Machine intensive', 'Service based', 'Manual only'], correctAnswer: 1, explanation: 'Machine Hour Rate is the most appropriate absorption rate when production is machine-intensive.' },
          { question: 'Reciprocal service department costs are handled by:', options: ['Ignoring them', 'Simultaneous equation or repeated distribution method', 'Direct allocation only', 'Charging to profit'], correctAnswer: 1, explanation: 'Reciprocal services between departments are handled using simultaneous equations or repeated distribution.' },
        ],
      },
      {
        title: 'Process & Standard Costing',
        textContent: `Process Costing is used when production involves continuous processes with homogeneous output. Industries like chemicals, cement, sugar, and oil refining use process costing. Each process is a cost center, and costs are accumulated per process and divided by units produced.

Normal Loss is the expected loss in a process (evaporation, spillage). It is treated by crediting scrap value to the process account. Abnormal Loss exceeds normal loss and is charged to Abnormal Loss Account at cost per unit. Abnormal Gain occurs when actual loss is less than normal loss.

Equivalent Production converts partially completed units into equivalent completed units. If 100 units are 60% complete, they equal 60 equivalent units. This concept is essential for valuing work-in-progress. Methods include FIFO and Weighted Average.

Standard Costing sets predetermined costs as targets and compares them with actual costs. The difference is called a variance. Material Variance = (Standard Quantity x Standard Price) - (Actual Quantity x Actual Price), which can be split into Price Variance and Usage Variance.

Key variances include: Material Cost Variance (Price + Usage), Labour Cost Variance (Rate + Efficiency), Variable Overhead Variance (Expenditure + Efficiency), and Fixed Overhead Variance (Expenditure + Volume). Favorable variances reduce costs, while adverse variances increase costs.`,
        quizTitle: 'Process & Standard Costing Quiz',
        questions: [
          { question: 'Process costing is used for:', options: ['Job shops', 'Continuous production with homogeneous output', 'Construction projects', 'Consulting services'], correctAnswer: 1, explanation: 'Process costing is used when production is continuous and output is homogeneous (identical units).' },
          { question: 'Abnormal loss is valued at:', options: ['Scrap value', 'Zero', 'Cost per good unit', 'Market value'], correctAnswer: 2, explanation: 'Abnormal loss is valued at the cost per good unit and transferred to Abnormal Loss Account.' },
          { question: 'Material Price Variance isolates the effect of:', options: ['Quantity used', 'Price paid vs standard price', 'Wastage', 'Quality'], correctAnswer: 1, explanation: 'Material Price Variance measures the difference between actual and standard price for actual quantity purchased.' },
          { question: 'A favorable variance means:', options: ['Actual exceeds standard', 'Standard exceeds actual (lower actual cost)', 'No difference', 'Higher selling price'], correctAnswer: 1, explanation: 'A favorable variance occurs when actual cost is less than standard cost (or actual revenue exceeds standard).' },
          { question: 'Equivalent production converts:', options: ['Good units to bad units', 'WIP into equivalent completed units', 'Standard to actual', 'Fixed to variable'], correctAnswer: 1, explanation: 'Equivalent production converts partially completed work-in-progress into equivalent fully completed units.' },
        ],
      },
      {
        title: 'Marginal Costing & Budgeting',
        textContent: `Marginal Costing separates costs into fixed and variable. Only variable costs are charged to products; fixed costs are treated as period costs and written off against contribution. Contribution = Sales - Variable Cost. Profit = Total Contribution - Fixed Costs.

Break-even Point (BEP) is where total revenue equals total costs (no profit, no loss). BEP in units = Fixed Costs / Contribution per unit. BEP in value = Fixed Costs / P/V Ratio. P/V Ratio (Profit Volume Ratio) = Contribution / Sales x 100.

Marginal costing is useful for: Make or buy decisions, Accept or reject special orders, Product mix decisions, Shut down or continue decisions, and Pricing decisions. The key principle is that any price above variable cost contributes to fixed costs and profit.

A budget is a quantitative plan for the future expressed in monetary terms. The master budget comprises functional budgets (sales, production, materials, labour, overhead budgets), cash budget, and budgeted financial statements. Budgets serve as tools for planning, coordination, and control.

Flexible budgets adjust for different activity levels, unlike fixed budgets prepared for a single level. Budget variance = Actual results - Budgeted results. Zero-based budgeting requires justification of all expenditures from scratch each period, not just incremental changes.`,
        quizTitle: 'Marginal Costing & Budgeting Quiz',
        questions: [
          { question: 'Contribution equals:', options: ['Sales minus all costs', 'Sales minus variable costs', 'Profit plus tax', 'Fixed costs plus profit'], correctAnswer: 1, explanation: 'Contribution = Sales Revenue - Variable Costs. It contributes towards covering fixed costs and profit.' },
          { question: 'BEP in units equals:', options: ['Fixed Costs / Sales Price', 'Fixed Costs / Contribution per unit', 'Variable Costs / Sales', 'Total Costs / Units'], correctAnswer: 1, explanation: 'Break-even point in units = Fixed Costs / Contribution per unit.' },
          { question: 'P/V Ratio equals:', options: ['Profit / Sales', 'Contribution / Sales x 100', 'Variable Cost / Sales', 'Fixed Cost / Sales'], correctAnswer: 1, explanation: 'Profit Volume Ratio = (Contribution / Sales) x 100. It indicates contribution percentage of sales.' },
          { question: 'In marginal costing, fixed costs are treated as:', options: ['Product costs', 'Period costs', 'Variable costs', 'Ignored'], correctAnswer: 1, explanation: 'In marginal costing, fixed costs are treated as period costs and charged to the period, not to products.' },
          { question: 'Zero-based budgeting requires:', options: ['Only incremental changes', 'Justification of all expenditures from scratch', 'No budget preparation', 'Fixed budget only'], correctAnswer: 1, explanation: 'Zero-based budgeting requires every expenditure to be justified from zero, not based on previous budgets.' },
        ],
      },
    ],
  },
  {
    title: 'CA Intermediate - Auditing & Ethics',
    slug: 'ca-inter-auditing',
    description: 'Complete coverage of audit concepts, planning, internal controls, evidence, company audit, reporting, and professional ethics as per ICAI CA Intermediate syllabus.',
    category: 'Auditing',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Nature & Scope of Audit',
        textContent: `Auditing is the systematic examination of books of accounts, vouchers, and documents to verify the truth and fairness of financial statements. The objective of an audit is to express an opinion on whether financial statements are prepared in accordance with the applicable financial reporting framework.

Audit can be classified as: Statutory Audit (required by law, e.g., company audit under Companies Act), Internal Audit (by company's own staff for management), Tax Audit (under Income Tax Act Section 44AB), and Government Audit (by CAG for government entities).

The auditor's responsibilities include: planning and performing the audit to obtain reasonable assurance, maintaining professional skepticism, exercising professional judgment, and obtaining sufficient appropriate audit evidence to reduce audit risk to an acceptably low level.

Audit risk is the risk that the auditor expresses an inappropriate opinion when financial statements are materially misstated. Audit Risk = Inherent Risk x Control Risk x Detection Risk. The auditor can only control detection risk through the nature, timing, and extent of audit procedures.

Materiality is the magnitude of an omission or misstatement that could influence the economic decisions of users. The auditor determines materiality for the financial statements as a whole and may determine a lower materiality level for specific classes of transactions or account balances.`,
        quizTitle: 'Nature of Audit Quiz',
        questions: [
          { question: 'The primary objective of an audit is to:', options: ['Detect fraud', 'Express an opinion on financial statements', 'Prepare financial statements', 'Calculate tax'], correctAnswer: 1, explanation: 'The primary objective is to express an opinion on whether financial statements give a true and fair view.' },
          { question: 'Audit Risk equals:', options: ['Inherent Risk + Control Risk', 'Inherent Risk x Control Risk x Detection Risk', 'Detection Risk only', 'Control Risk x Detection Risk'], correctAnswer: 1, explanation: 'Audit Risk = Inherent Risk x Control Risk x Detection Risk (the audit risk model).' },
          { question: 'The auditor can directly control:', options: ['Inherent risk', 'Control risk', 'Detection risk', 'All risks equally'], correctAnswer: 2, explanation: 'The auditor can only directly control detection risk through audit procedures; inherent and control risks are entity-related.' },
          { question: 'Tax audit under Income Tax Act is required under:', options: ['Section 44AB', 'Section 80C', 'Section 139', 'Section 269'], correctAnswer: 0, explanation: 'Tax audit is required under Section 44AB of the Income Tax Act when turnover exceeds specified limits.' },
          { question: 'Professional skepticism means:', options: ['Trusting management fully', 'Questioning mind and critical assessment of evidence', 'Suspecting fraud always', 'Rejecting all evidence'], correctAnswer: 1, explanation: 'Professional skepticism involves a questioning mind and critical assessment of audit evidence.' },
        ],
      },
      {
        title: 'Audit Planning & Documentation',
        textContent: `Audit planning involves developing an overall audit strategy and a detailed audit plan. The overall strategy sets the scope, timing, and direction of the audit. The audit plan is more detailed and includes the nature, timing, and extent of audit procedures to be performed.

Understanding the entity and its environment is crucial. The auditor must understand the entity's business, industry, regulatory framework, internal controls, accounting policies, and business risks. This knowledge helps in identifying and assessing risks of material misstatement.

Risk assessment procedures include inquiries of management, analytical procedures, and observation and inspection. Based on the assessed risks, the auditor designs further audit procedures comprising tests of controls (to test the operating effectiveness of controls) and substantive procedures (to detect material misstatements).

Audit documentation (working papers) provides evidence of the auditor's basis for conclusions and that the audit was planned and performed in accordance with standards. Documentation includes audit plan, analysis, issues identified, and conclusions. It must be sufficient for an experienced auditor to understand the work.

Engagement letters establish the terms of the audit engagement between the auditor and the client. They specify the objective and scope of audit, responsibilities of the auditor and management, applicable financial reporting framework, and the expected form of reports.`,
        quizTitle: 'Audit Planning Quiz',
        questions: [
          { question: 'The overall audit strategy sets the:', options: ['Final opinion', 'Scope, timing, and direction', 'Fee structure', 'Staffing requirements only'], correctAnswer: 1, explanation: 'The overall audit strategy sets the scope, timing, and direction of the audit.' },
          { question: 'Tests of Controls assess:', options: ['Financial statement accuracy', 'Operating effectiveness of internal controls', 'Management honesty', 'Tax compliance'], correctAnswer: 1, explanation: 'Tests of controls evaluate the operating effectiveness of internal controls in preventing or detecting misstatements.' },
          { question: 'Audit documentation must be sufficient for:', options: ['The client to understand', 'An experienced auditor to understand the work', 'The public to review', 'Tax authorities'], correctAnswer: 1, explanation: 'Documentation must be sufficient for an experienced auditor with no previous connection to understand the work performed.' },
          { question: 'Engagement letters establish:', options: ['The audit fee only', 'Terms of the audit engagement', 'The audit opinion', 'Staff assignments'], correctAnswer: 1, explanation: 'Engagement letters establish the terms, objectives, scope, and responsibilities for the audit engagement.' },
          { question: 'Risk assessment procedures include:', options: ['Only inquiries', 'Inquiries, analytical procedures, and observation', 'Only inspection', 'Only computation'], correctAnswer: 1, explanation: 'Risk assessment procedures include inquiries of management, analytical procedures, and observation and inspection.' },
        ],
      },
      {
        title: 'Internal Controls & Audit Evidence',
        textContent: `Internal control is a process designed by management to provide reasonable assurance regarding the achievement of objectives relating to: reliability of financial reporting, effectiveness and efficiency of operations, and compliance with applicable laws and regulations.

Components of internal control (COSO Framework) include: Control Environment (integrity, ethical values, governance), Risk Assessment (identifying and analyzing risks), Control Activities (policies and procedures), Information and Communication (capturing and exchanging information), and Monitoring Activities (evaluating control performance).

Audit evidence is all information used by the auditor to arrive at conclusions. It includes information from accounting records and other information. Evidence must be sufficient (quantity) and appropriate (quality, i.e., relevance and reliability).

Audit procedures for obtaining evidence include: Inspection (examining records or physical assets), Observation (watching processes), External Confirmation (obtaining responses from third parties), Recalculation (checking mathematical accuracy), Reperformance (independently executing procedures), Analytical Procedures (evaluating information through plausible relationships), and Inquiry (seeking information from knowledgeable persons).

Assertions are representations by management embodied in financial statements. They relate to: Existence/Occurrence, Completeness, Rights and Obligations, Valuation/Allocation, and Presentation and Disclosure. The auditor designs procedures to test each relevant assertion.`,
        quizTitle: 'Internal Controls & Evidence Quiz',
        questions: [
          { question: 'How many components does the COSO Internal Control framework have?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'COSO framework has 5 components: Control Environment, Risk Assessment, Control Activities, Information & Communication, Monitoring.' },
          { question: 'External confirmation involves:', options: ['Asking management', 'Obtaining responses from third parties', 'Checking calculations', 'Physical inspection'], correctAnswer: 1, explanation: 'External confirmation involves obtaining a direct response from a third party (e.g., bank, debtor) to verify information.' },
          { question: 'Audit evidence must be:', options: ['Only sufficient', 'Only appropriate', 'Both sufficient and appropriate', 'Neither'], correctAnswer: 2, explanation: 'Audit evidence must be both sufficient (quantity) and appropriate (quality - relevant and reliable).' },
          { question: 'The Completeness assertion relates to:', options: ['All transactions that should be recorded are recorded', 'Assets exist', 'Amounts are correct', 'Proper classification'], correctAnswer: 0, explanation: 'Completeness assertion means all transactions and events that should have been recorded have been recorded.' },
          { question: 'Internal control provides:', options: ['Absolute assurance', 'Reasonable assurance', 'No assurance', 'Guarantee of accuracy'], correctAnswer: 1, explanation: 'Internal control provides reasonable (not absolute) assurance of achieving entity objectives.' },
        ],
      },
      {
        title: 'Company Audit & Audit Reports',
        textContent: `Company audit under the Companies Act, 2013 is mandatory for all companies. The auditor is appointed at the AGM. First auditor is appointed by the Board within 30 days. The auditor holds office from one AGM to the next. Maximum tenure: individual auditor 5 years, audit firm 10 years (with rotation).

The auditor has the right to: access books and records at all times, require information and explanations from officers, attend general meetings, and receive notices. The auditor has the duty to: make a report to members, report fraud to Central Government (Section 143(12)), and report on internal financial controls.

Section 143(3) requires the auditor to report on: whether accounts give a true and fair view, whether proper books of account have been kept, whether the Balance Sheet and P&L comply with accounting standards, observations and comments on financial transactions, and whether the company has adequate internal financial controls.

The audit report can be: Unmodified (clean opinion - no material misstatements), Qualified (material but not pervasive misstatements), Adverse (material and pervasive misstatements), or Disclaimer (inability to obtain sufficient appropriate evidence with possible pervasive effects).

CARO (Companies Auditor's Report Order) requires auditors to report on specific matters including fixed assets, inventory, loans granted, deposits, statutory dues, loan defaults, fraud, and related party transactions. CARO applies to companies other than banking, insurance, and Section 8 companies.`,
        quizTitle: 'Company Audit Quiz',
        questions: [
          { question: 'Maximum tenure for an individual auditor is:', options: ['3 years', '5 years', '10 years', 'No limit'], correctAnswer: 1, explanation: 'An individual auditor can hold office for a maximum consecutive period of 5 years (with rotation).' },
          { question: 'An unmodified audit report means:', options: ['Material misstatements found', 'No material misstatements - true and fair view', 'Auditor could not form opinion', 'Qualified opinion'], correctAnswer: 1, explanation: 'An unmodified (clean) opinion means the financial statements give a true and fair view without material misstatements.' },
          { question: 'Fraud reporting by auditor is required under:', options: ['Section 143(12)', 'Section 139', 'Section 134', 'Section 149'], correctAnswer: 0, explanation: 'Under Section 143(12), the auditor must report fraud to the Central Government if discovered during audit.' },
          { question: 'CARO applies to:', options: ['All companies', 'Companies other than banking, insurance, Section 8', 'Only listed companies', 'Only private companies'], correctAnswer: 1, explanation: 'CARO applies to companies other than banking, insurance, and Section 8 (not-for-profit) companies.' },
          { question: 'Adverse opinion is issued when misstatements are:', options: ['Material but not pervasive', 'Material and pervasive', 'Immaterial', 'Not detected'], correctAnswer: 1, explanation: 'An adverse opinion is issued when misstatements are both material and pervasive to the financial statements.' },
        ],
      },
      {
        title: 'Professional Ethics',
        textContent: `Professional ethics are fundamental to the auditing profession. The Chartered Accountants Act, 1949 and the Code of Ethics issued by ICAI govern the ethical conduct of Chartered Accountants. Ethical requirements ensure public confidence in the profession.

Fundamental principles include: Integrity (being straightforward and honest), Objectivity (not allowing bias or conflict of interest), Professional Competence and Due Care (maintaining knowledge and skill), Confidentiality (not disclosing client information without authorization), and Professional Behavior (complying with laws and avoiding discredit).

Independence is crucial for auditors. It has two aspects: Independence of Mind (the state of mind that permits expressing an opinion without being affected by influences that compromise professional judgment) and Independence in Appearance (avoiding facts and circumstances so significant that a reasonable person would conclude objectivity is compromised).

Threats to independence include: Self-interest Threat (financial interest in client), Self-review Threat (auditing own work), Advocacy Threat (promoting client's position), Familiarity Threat (close relationship with client), and Intimidation Threat (being deterred from acting objectively due to actual or perceived pressures).

Disciplinary mechanisms under the CA Act include proceedings before the Board of Discipline and the Disciplinary Committee. Misconduct includes professional misconduct (First Schedule) and other misconduct (Second Schedule). Penalties range from reprimand to removal of name from the register.`,
        quizTitle: 'Professional Ethics Quiz',
        questions: [
          { question: 'Fundamental principles of ethics include:', options: ['Only integrity', 'Integrity, Objectivity, Competence, Confidentiality, Professional Behavior', 'Only confidentiality', 'Only competence'], correctAnswer: 1, explanation: 'The five fundamental principles are Integrity, Objectivity, Professional Competence, Confidentiality, and Professional Behavior.' },
          { question: 'Self-review threat arises when:', options: ['Auditor has financial interest', 'Auditor reviews own previous work', 'Client intimidates auditor', 'Auditor is too close to client'], correctAnswer: 1, explanation: 'Self-review threat occurs when the auditor is in a position to review work previously performed by themselves or their firm.' },
          { question: 'Independence in Appearance means:', options: ['Looking professional', 'A reasonable person would conclude objectivity is not compromised', 'Wearing formal clothes', 'Having a separate office'], correctAnswer: 1, explanation: 'Independence in Appearance means avoiding situations where a reasonable person would question the auditor\'s objectivity.' },
          { question: 'Confidentiality requires:', options: ['Sharing all information publicly', 'Not disclosing client information without authorization', 'Hiding audit findings', 'Encrypting all documents'], correctAnswer: 1, explanation: 'Confidentiality requires not disclosing information acquired during professional work without proper authority or legal duty.' },
          { question: 'The CA Act was enacted in:', options: ['1932', '1949', '1961', '2013'], correctAnswer: 1, explanation: 'The Chartered Accountants Act was enacted in 1949, establishing ICAI and governing the CA profession.' },
        ],
      },
    ],
  },
  {
    title: 'CA Intermediate - Financial Management & SM',
    slug: 'ca-inter-financial-management',
    description: 'Complete coverage of Financial Management fundamentals, Capital Budgeting, Cost of Capital, Working Capital Management, and Strategic Management as per ICAI syllabus.',
    category: 'Financial Management',
    level: 'INTERMEDIATE' as const,
    modules: [
      {
        title: 'Financial Management Overview',
        textContent: `Financial Management is concerned with the efficient acquisition and allocation of financial resources to maximize the wealth of shareholders. The primary goal is shareholder wealth maximization, measured by the market price of shares, which considers both profitability and risk.

Key functions of financial management include: Investment Decision (capital budgeting - where to invest funds), Financing Decision (capital structure - how to raise funds through debt and equity), Dividend Decision (how much profit to distribute vs retain), and Liquidity Decision (maintaining optimal cash and current assets).

The Time Value of Money is a core concept. A rupee today is worth more than a rupee in the future because of: earning potential (investment opportunity), inflation (declining purchasing power), and uncertainty (risk of not receiving future amounts). Present Value discounts future cash flows; Future Value compounds present amounts.

Present Value = Future Value / (1 + r)^n. Future Value = Present Value x (1 + r)^n. Annuity Present Value = PMT x [(1 - (1+r)^-n) / r]. These formulas are used extensively in investment appraisal, loan calculations, and valuation.

The financial manager must balance profitability (return on investment) with liquidity (ability to meet short-term obligations). Risk-return tradeoff is fundamental - higher returns generally come with higher risk. The optimal financial strategy maximizes value while managing risk appropriately.`,
        quizTitle: 'Financial Management Overview Quiz',
        questions: [
          { question: 'The primary goal of financial management is:', options: ['Profit maximization', 'Shareholder wealth maximization', 'Sales maximization', 'Cost minimization'], correctAnswer: 1, explanation: 'Shareholder wealth maximization (maximizing share price) is the primary goal as it considers both profitability and risk.' },
          { question: 'The investment decision is also called:', options: ['Dividend decision', 'Capital budgeting', 'Working capital management', 'Capital structure'], correctAnswer: 1, explanation: 'The investment decision (where to invest funds) is also known as capital budgeting.' },
          { question: 'Time Value of Money means:', options: ['Money loses value over time', 'A rupee today is worth more than a rupee tomorrow', 'Inflation does not exist', 'All money is equal'], correctAnswer: 1, explanation: 'Time value of money means a rupee today has more value than a rupee in the future due to earning potential and inflation.' },
          { question: 'Present Value formula is:', options: ['FV x (1+r)^n', 'FV / (1+r)^n', 'FV + r x n', 'FV - r x n'], correctAnswer: 1, explanation: 'Present Value = Future Value / (1+r)^n, which discounts the future value back to today.' },
          { question: 'Higher returns generally come with:', options: ['Lower risk', 'Higher risk', 'No risk', 'Same risk'], correctAnswer: 1, explanation: 'The risk-return tradeoff means higher expected returns are generally associated with higher risk.' },
        ],
      },
      {
        title: 'Capital Budgeting & Cost of Capital',
        textContent: `Capital budgeting evaluates long-term investment projects. Key techniques include: Net Present Value (NPV) - the sum of present values of all cash flows including investment; Internal Rate of Return (IRR) - the discount rate that makes NPV zero; Payback Period - time to recover initial investment; and Profitability Index (PI) - present value of future cash flows divided by initial investment.

NPV is considered the most theoretically correct method. A positive NPV indicates the project adds value. When projects are mutually exclusive, choose the one with the highest positive NPV. When independent, accept all projects with positive NPV. NPV assumes reinvestment at the cost of capital.

IRR is the rate at which NPV equals zero. Accept projects with IRR greater than cost of capital. The IRR method assumes reinvestment at the IRR itself, which may be unrealistic for very high IRR projects. NPV and IRR may conflict for mutually exclusive projects due to different reinvestment assumptions.

Cost of Capital is the minimum return a company must earn to satisfy its investors. Cost of Equity can be estimated using: Dividend Discount Model (Ke = D1/P0 + g) or Capital Asset Pricing Model (Ke = Rf + Beta x (Rm - Rf)). Cost of Debt (Kd) is the after-tax cost: Kd = Interest Rate x (1 - Tax Rate).

Weighted Average Cost of Capital (WACC) = (Weight of Equity x Cost of Equity) + (Weight of Debt x Cost of Debt). WACC is used as the discount rate for NPV calculations. The optimal capital structure minimizes WACC and maximizes firm value.`,
        quizTitle: 'Capital Budgeting Quiz',
        questions: [
          { question: 'NPV is positive when:', options: ['Project destroys value', 'Project adds value to the firm', 'IRR is less than cost of capital', 'Cash flows are negative'], correctAnswer: 1, explanation: 'A positive NPV means the project generates returns above the required rate (cost of capital) and adds value.' },
          { question: 'IRR is the discount rate that makes NPV:', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctAnswer: 2, explanation: 'IRR is defined as the discount rate at which the Net Present Value of all cash flows equals zero.' },
          { question: 'CAPM formula for cost of equity is:', options: ['D1/P0 + g', 'Rf + Beta x (Rm - Rf)', 'Interest x (1-T)', 'WACC x Beta'], correctAnswer: 1, explanation: 'CAPM: Ke = Risk-free rate + Beta x (Market return - Risk-free rate), i.e., Rf + Beta(Rm-Rf).' },
          { question: 'After-tax cost of debt equals:', options: ['Interest rate', 'Interest rate x (1 - Tax rate)', 'Interest rate x Tax rate', 'Interest rate + Tax'], correctAnswer: 1, explanation: 'After-tax cost of debt = Interest rate x (1 - Tax rate) because interest is tax-deductible.' },
          { question: 'WACC is used as:', options: ['Tax rate', 'Discount rate for project evaluation', 'Inflation rate', 'Growth rate'], correctAnswer: 1, explanation: 'WACC serves as the discount rate (hurdle rate) for evaluating investment projects via NPV.' },
        ],
      },
      {
        title: 'Working Capital Management',
        textContent: `Working Capital is the capital required for day-to-day operations. Gross Working Capital = Total Current Assets. Net Working Capital = Current Assets - Current Liabilities. Effective working capital management ensures the firm has adequate liquidity while minimizing idle funds.

The Operating Cycle (or Cash Conversion Cycle) is the time between paying for raw materials and receiving cash from customers. Operating Cycle = Inventory Conversion Period + Receivable Collection Period - Payable Deferral Period. A shorter cycle means less working capital is needed.

Inventory management aims to minimize total inventory costs while maintaining adequate stock. Techniques include EOQ (Economic Order Quantity), ABC Analysis, JIT (Just-in-Time), and safety stock calculations. The goal is to balance holding costs against ordering costs and stockout costs.

Receivables management involves setting credit policies (credit period, credit standards, collection policies, cash discounts). The goal is to maximize sales while minimizing bad debts and collection costs. Aging analysis tracks how long receivables have been outstanding.

Cash management involves maintaining optimal cash balances. Models include Baumol Model (treating cash as inventory, optimizing transaction costs vs opportunity costs) and Miller-Orr Model (setting control limits for cash fluctuations). Cash budget is the key tool for forecasting cash needs.`,
        quizTitle: 'Working Capital Management Quiz',
        questions: [
          { question: 'Net Working Capital equals:', options: ['Total Assets - Fixed Assets', 'Current Assets - Current Liabilities', 'Cash + Receivables', 'Total Liabilities'], correctAnswer: 1, explanation: 'Net Working Capital = Current Assets - Current Liabilities, representing the liquidity cushion.' },
          { question: 'A shorter operating cycle means:', options: ['More working capital needed', 'Less working capital needed', 'No effect on working capital', 'Higher debt'], correctAnswer: 1, explanation: 'A shorter operating cycle means funds are tied up for less time, requiring less working capital.' },
          { question: 'The Baumol Model treats cash as:', options: ['Fixed asset', 'Inventory to be optimized', 'Liability', 'Equity'], correctAnswer: 1, explanation: 'The Baumol Model applies inventory management principles to cash, optimizing transaction and opportunity costs.' },
          { question: 'Aging analysis is used in:', options: ['Inventory management', 'Cash management', 'Receivables management', 'Fixed asset management'], correctAnswer: 2, explanation: 'Aging analysis categorizes receivables by how long they have been outstanding to identify collection issues.' },
          { question: 'JIT stands for:', options: ['Joint Investment Trust', 'Just-in-Time', 'Junior Income Tax', 'Joint Internal Transfer'], correctAnswer: 1, explanation: 'JIT (Just-in-Time) is an inventory management system that receives materials only when needed in production.' },
        ],
      },
      {
        title: 'Strategic Management Essentials',
        textContent: `Strategic Management is the process of formulating, implementing, and evaluating cross-functional decisions that enable an organization to achieve its long-term objectives. It involves analyzing the competitive environment, setting organizational direction, and creating strategies.

The Strategic Management Process includes: Environmental Scanning (analysis of internal and external environment), Strategy Formulation (developing vision, mission, objectives, and strategies), Strategy Implementation (putting strategies into action through structure, culture, and resources), and Strategy Evaluation (monitoring and corrective action).

SWOT Analysis examines internal Strengths and Weaknesses, and external Opportunities and Threats. Porter's Five Forces model analyzes competitive dynamics: Threat of New Entrants, Bargaining Power of Suppliers, Bargaining Power of Buyers, Threat of Substitutes, and Rivalry Among Existing Competitors.

Corporate level strategies include: Stability (maintaining status quo), Expansion (growth through concentration, integration, or diversification), Retrenchment (turnaround, divestiture, or liquidation), and Combination strategies. Business level strategies follow Porter's Generic Strategies: Cost Leadership, Differentiation, and Focus.

The BCG Matrix classifies business units as Stars (high market share, high growth), Cash Cows (high share, low growth), Question Marks (low share, high growth), and Dogs (low share, low growth). This helps in resource allocation across a diversified portfolio.`,
        quizTitle: 'Strategic Management Quiz',
        questions: [
          { question: 'SWOT stands for:', options: ['Sales, Working Capital, Operations, Tax', 'Strengths, Weaknesses, Opportunities, Threats', 'Strategy, Work, Objectives, Targets', 'Systems, Workflow, Output, Technology'], correctAnswer: 1, explanation: 'SWOT stands for Strengths, Weaknesses, Opportunities, and Threats - a strategic analysis tool.' },
          { question: 'Porter\'s Five Forces does NOT include:', options: ['Threat of new entrants', 'Bargaining power of government', 'Threat of substitutes', 'Rivalry among competitors'], correctAnswer: 1, explanation: 'Porter\'s Five Forces are: New Entrants, Supplier Power, Buyer Power, Substitutes, and Competitive Rivalry. Government is not one.' },
          { question: 'In BCG Matrix, Cash Cows have:', options: ['High growth, low share', 'High share, low growth', 'Low share, low growth', 'High share, high growth'], correctAnswer: 1, explanation: 'Cash Cows have high market share in low-growth markets, generating more cash than they consume.' },
          { question: 'Cost Leadership is a:', options: ['Corporate level strategy', 'Business level strategy', 'Functional strategy', 'Retrenchment strategy'], correctAnswer: 1, explanation: 'Cost Leadership is one of Porter\'s Generic Business Level Strategies along with Differentiation and Focus.' },
          { question: 'Strategy Implementation involves:', options: ['Setting vision only', 'Putting strategies into action', 'Only environmental scanning', 'Evaluation only'], correctAnswer: 1, explanation: 'Strategy Implementation involves putting formulated strategies into action through organizational structure, culture, and resource allocation.' },
        ],
      },
    ],
  },
];
