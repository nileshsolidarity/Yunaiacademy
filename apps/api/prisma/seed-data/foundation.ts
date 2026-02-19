export const foundationCourses = [
  {
    title: 'CA Foundation - Principles & Practice of Accounting',
    slug: 'ca-foundation-accounting',
    description: 'Master the fundamentals of accounting as per the ICAI CA Foundation syllabus. Covers accounting principles, journal entries, ledger posting, trial balance, final accounts, depreciation, and partnership accounting.',
    category: 'CA Foundation',
    level: 'BEGINNER' as const,
    modules: [
      {
        title: 'Introduction to Accounting',
        textContent: `Accounting is the systematic process of recording, classifying, summarizing, and interpreting financial transactions to provide useful information for decision-making. It is often called the "language of business" because it communicates the financial health of an organization to various stakeholders.

The primary objective of accounting is to maintain a systematic record of all business transactions. This helps in determining the profit or loss of a business during a specific period and the financial position at the end of that period.

There are three main branches of accounting: Financial Accounting, which deals with the preparation of financial statements; Cost Accounting, which focuses on the cost of production; and Management Accounting, which provides information for internal decision-making.

Key accounting concepts include the Going Concern Concept (business will continue indefinitely), Accrual Concept (transactions recorded when they occur, not when cash changes hands), Consistency Concept (same methods used year to year), and Prudence Concept (anticipate losses but not gains).

The accounting equation forms the foundation: Assets = Liabilities + Capital. Every transaction affects at least two accounts, maintaining this equation's balance at all times.`,
        quizTitle: 'Introduction to Accounting Quiz',
        questions: [
          { question: 'What is accounting often called?', options: ['Language of business', 'Art of science', 'Math of commerce', 'Logic of trade'], correctAnswer: 0, explanation: 'Accounting is called the "language of business" because it communicates financial information to stakeholders.' },
          { question: 'Which concept assumes the business will continue indefinitely?', options: ['Accrual Concept', 'Going Concern Concept', 'Prudence Concept', 'Consistency Concept'], correctAnswer: 1, explanation: 'The Going Concern Concept assumes the business will operate for an indefinite period.' },
          { question: 'What is the accounting equation?', options: ['Assets = Liabilities + Capital', 'Assets = Capital - Liabilities', 'Liabilities = Assets + Capital', 'Capital = Assets + Liabilities'], correctAnswer: 0, explanation: 'The fundamental accounting equation is Assets = Liabilities + Capital.' },
          { question: 'Which branch of accounting focuses on cost of production?', options: ['Financial Accounting', 'Cost Accounting', 'Management Accounting', 'Tax Accounting'], correctAnswer: 1, explanation: 'Cost Accounting focuses on determining the cost of production of goods and services.' },
          { question: 'The Accrual Concept states that transactions are recorded when:', options: ['Cash is received', 'They occur', 'Bills are paid', 'Auditor approves'], correctAnswer: 1, explanation: 'Under the Accrual Concept, transactions are recorded when they occur, regardless of cash movement.' },
        ],
      },
      {
        title: 'Journal Entries & Recording',
        textContent: `A journal is the book of original entry where all business transactions are first recorded in chronological order. Each journal entry consists of a date, accounts affected, amounts debited and credited, and a narration explaining the transaction.

The Double Entry System requires every transaction to be recorded in at least two accounts. For every debit, there must be a corresponding credit of equal amount. This system ensures the accounting equation always remains balanced.

The Golden Rules of Accounting guide how to record transactions: For Personal Accounts - Debit the receiver, Credit the giver. For Real Accounts - Debit what comes in, Credit what goes out. For Nominal Accounts - Debit all expenses and losses, Credit all incomes and gains.

Simple journal entries involve only two accounts, while compound entries involve more than two accounts. Opening entries are passed at the beginning of a new accounting year to bring forward balances from the previous year.

Common types of journal entries include purchase of goods, sale of goods, payment of expenses, receipt of income, purchase of assets, and adjusting entries at year-end.`,
        quizTitle: 'Journal Entries Quiz',
        questions: [
          { question: 'What is the book of original entry called?', options: ['Ledger', 'Journal', 'Trial Balance', 'Balance Sheet'], correctAnswer: 1, explanation: 'The Journal is the book of original entry where transactions are first recorded.' },
          { question: 'Under the Double Entry System, for every debit there is a:', options: ['Triple credit', 'No credit needed', 'Corresponding credit', 'Partial credit'], correctAnswer: 2, explanation: 'The Double Entry System requires every debit to have a corresponding credit of equal amount.' },
          { question: 'For a Personal Account, the rule is:', options: ['Debit what comes in', 'Debit the receiver', 'Debit all expenses', 'Debit the giver'], correctAnswer: 1, explanation: 'The Golden Rule for Personal Accounts is: Debit the receiver, Credit the giver.' },
          { question: 'A compound journal entry involves:', options: ['Only one account', 'Exactly two accounts', 'More than two accounts', 'No accounts'], correctAnswer: 2, explanation: 'A compound journal entry involves more than two accounts in a single entry.' },
          { question: 'Opening entries are passed:', options: ['At year end', 'At the beginning of a new year', 'Monthly', 'Weekly'], correctAnswer: 1, explanation: 'Opening entries are passed at the beginning of a new accounting year to bring forward previous year balances.' },
        ],
      },
      {
        title: 'Ledger & Trial Balance',
        textContent: `A Ledger is the principal book of accounts where all transactions from the journal are posted (transferred) to respective individual accounts. It is also called the book of final entry. Each account in the ledger has a debit side (left) and a credit side (right).

Posting is the process of transferring entries from the journal to the ledger. When posting, the account being debited in the journal gets an entry on the debit side of its ledger account, and the account being credited gets an entry on the credit side.

Balancing of accounts is done periodically. The difference between the total of the debit side and credit side is called the balance. If the debit total exceeds the credit total, it is a debit balance, and vice versa.

A Trial Balance is a statement prepared at the end of an accounting period listing all ledger account balances. The total of all debit balances must equal the total of all credit balances. If they match, it indicates arithmetical accuracy (though not the absence of all errors).

Errors not revealed by a Trial Balance include errors of principle, compensating errors, errors of omission (complete), and errors of commission where the amount is correct but posted to the wrong account of the same class.`,
        quizTitle: 'Ledger & Trial Balance Quiz',
        questions: [
          { question: 'The Ledger is also known as:', options: ['Book of original entry', 'Book of final entry', 'Book of prime entry', 'Cash book'], correctAnswer: 1, explanation: 'The Ledger is called the book of final entry because journal entries are finally posted here.' },
          { question: 'What is posting?', options: ['Writing journal entries', 'Transferring entries from journal to ledger', 'Preparing trial balance', 'Closing accounts'], correctAnswer: 1, explanation: 'Posting is the process of transferring entries from the journal to the respective ledger accounts.' },
          { question: 'If debit total exceeds credit total, the balance is:', options: ['Credit balance', 'Debit balance', 'Zero balance', 'Suspense balance'], correctAnswer: 1, explanation: 'When the debit side total exceeds the credit side total, the account has a debit balance.' },
          { question: 'A Trial Balance proves:', options: ['All entries are correct', 'Arithmetical accuracy', 'No fraud exists', 'Business is profitable'], correctAnswer: 1, explanation: 'A Trial Balance only proves arithmetical accuracy, not the absence of all errors.' },
          { question: 'Which error is NOT revealed by a Trial Balance?', options: ['Addition error', 'Posting to wrong side', 'Error of principle', 'Omission of one side'], correctAnswer: 2, explanation: 'Errors of principle (posting to wrong class of account) are not revealed by a Trial Balance as debits still equal credits.' },
        ],
      },
      {
        title: 'Final Accounts',
        textContent: `Final Accounts are the financial statements prepared at the end of an accounting period to show the financial results and position of a business. They typically consist of the Trading Account, Profit & Loss Account, and Balance Sheet.

The Trading Account shows the Gross Profit or Gross Loss for the period. It includes Opening Stock, Purchases, Direct Expenses on the debit side, and Sales and Closing Stock on the credit side. Gross Profit = Sales - Cost of Goods Sold.

The Profit & Loss Account shows the Net Profit or Net Loss. All indirect expenses (administrative, selling, distribution) are debited, and all indirect incomes plus gross profit are credited. Net Profit = Gross Profit + Other Income - Indirect Expenses.

The Balance Sheet is a statement showing the financial position of the business on a specific date. It lists all assets on one side and all liabilities plus capital on the other. Assets = Liabilities + Capital (Owner's Equity).

Adjustments in Final Accounts include closing stock, outstanding expenses, prepaid expenses, accrued income, income received in advance, depreciation, bad debts, and provision for doubtful debts. Each adjustment typically affects two components of the final accounts.`,
        quizTitle: 'Final Accounts Quiz',
        questions: [
          { question: 'The Trading Account shows:', options: ['Net Profit', 'Gross Profit', 'Total Assets', 'Cash Balance'], correctAnswer: 1, explanation: 'The Trading Account shows Gross Profit or Gross Loss for the period.' },
          { question: 'Gross Profit equals:', options: ['Sales minus all expenses', 'Sales minus Cost of Goods Sold', 'Total income minus tax', 'Revenue minus overheads'], correctAnswer: 1, explanation: 'Gross Profit = Sales - Cost of Goods Sold (Opening Stock + Purchases + Direct Expenses - Closing Stock).' },
          { question: 'The Balance Sheet shows:', options: ['Profit for the year', 'Financial position on a date', 'Cash flow statement', 'Tax liability'], correctAnswer: 1, explanation: 'The Balance Sheet shows the financial position of the business on a specific date.' },
          { question: 'Outstanding expenses are:', options: ['Paid but not due', 'Due but not yet paid', 'Neither due nor paid', 'Paid in advance'], correctAnswer: 1, explanation: 'Outstanding expenses are expenses that are due for the current period but have not yet been paid.' },
          { question: 'Closing stock appears in:', options: ['Trading Account credit side and Balance Sheet asset side', 'Only Trading Account', 'Only Balance Sheet', 'Profit & Loss Account'], correctAnswer: 0, explanation: 'Closing stock appears on the credit side of the Trading Account and as a current asset on the Balance Sheet.' },
        ],
      },
      {
        title: 'Bank Reconciliation Statement',
        textContent: `A Bank Reconciliation Statement (BRS) is prepared to reconcile the difference between the balance shown in the Cash Book (bank column) and the balance shown in the Bank Statement (Passbook). These balances often differ due to timing differences and errors.

Common reasons for differences include: Cheques issued but not yet presented for payment, Cheques deposited but not yet collected by the bank, Direct deposits made by third parties, Bank charges and interest debited by the bank, Standing instructions for payments, and Errors in either the Cash Book or Bank Statement.

When preparing a BRS starting from the Cash Book balance, items that increase the bank balance are added, and items that decrease it are subtracted. The reverse applies when starting from the Passbook balance.

Cheques issued but not presented: These are recorded in the Cash Book (reducing the balance) but not yet in the Bank Statement. They are added to the Cash Book balance or subtracted from the Passbook balance.

It is important to distinguish between favorable balances (money in the bank) and unfavorable/overdrawn balances (overdraft). The treatment of adjustments reverses when dealing with an overdrawn balance.`,
        quizTitle: 'Bank Reconciliation Quiz',
        questions: [
          { question: 'BRS reconciles the difference between:', options: ['Cash Book and Journal', 'Cash Book and Bank Statement', 'Ledger and Trial Balance', 'Journal and Ledger'], correctAnswer: 1, explanation: 'A BRS reconciles the Cash Book (bank column) balance with the Bank Statement/Passbook balance.' },
          { question: 'Cheques issued but not yet presented will:', options: ['Decrease Passbook balance', 'Increase Cash Book balance', 'Appear in Cash Book but not Bank Statement', 'Appear in neither'], correctAnswer: 2, explanation: 'Cheques issued but not presented are recorded in the Cash Book but not yet reflected in the Bank Statement.' },
          { question: 'Bank charges appear in:', options: ['Cash Book only', 'Bank Statement only initially', 'Both simultaneously', 'Neither'], correctAnswer: 1, explanation: 'Bank charges are first recorded by the bank in the Bank Statement. The Cash Book is updated when the business becomes aware.' },
          { question: 'An unfavorable balance means:', options: ['High profit', 'Money in the bank', 'Bank overdraft', 'No transactions'], correctAnswer: 2, explanation: 'An unfavorable or overdrawn balance means the account has a bank overdraft.' },
          { question: 'Direct deposits by customers will:', options: ['Appear in Cash Book first', 'Appear in Bank Statement first', 'Never reconcile', 'Reduce bank balance'], correctAnswer: 1, explanation: 'Direct deposits by customers appear in the Bank Statement first, as the business may not know about them immediately.' },
        ],
      },
      {
        title: 'Depreciation Accounting',
        textContent: `Depreciation is the systematic allocation of the depreciable amount of a fixed asset over its useful life. It represents the reduction in the value of an asset due to use, passage of time, wear and tear, technological obsolescence, or other factors.

The Straight Line Method (SLM) charges an equal amount of depreciation each year. Formula: Annual Depreciation = (Cost - Residual Value) / Useful Life. This method is simple and suitable when the asset provides uniform benefit over its life.

The Written Down Value Method (WDV) or Reducing Balance Method charges depreciation on the book value (written down value) at a fixed percentage each year. Depreciation amount decreases each year. This method charges higher depreciation in earlier years.

AS-6 (Revised) governs depreciation accounting in India. It requires depreciation to be charged on all depreciable assets. The method chosen should reflect the pattern of economic benefits. A change in method is permitted only if the new method gives a fairer presentation.

Other methods include the Units of Production Method (based on output), Sum of Years Digits Method, and Annuity Method. The choice of method depends on the nature of the asset and the pattern of benefits derived from it.`,
        quizTitle: 'Depreciation Quiz',
        questions: [
          { question: 'Depreciation is the allocation of cost over:', options: ['One year only', 'Useful life of the asset', 'Indefinite period', 'Until fully paid'], correctAnswer: 1, explanation: 'Depreciation is the systematic allocation of the depreciable amount over the useful life of the asset.' },
          { question: 'Under Straight Line Method, depreciation each year is:', options: ['Increasing', 'Decreasing', 'Equal', 'Variable'], correctAnswer: 2, explanation: 'The Straight Line Method charges an equal amount of depreciation each year.' },
          { question: 'WDV Method charges depreciation on:', options: ['Original cost every year', 'Written down value', 'Market value', 'Replacement cost'], correctAnswer: 1, explanation: 'The Written Down Value Method charges depreciation at a fixed rate on the remaining book value each year.' },
          { question: 'Which Accounting Standard governs depreciation?', options: ['AS-1', 'AS-6', 'AS-10', 'AS-16'], correctAnswer: 1, explanation: 'AS-6 (Revised) - Depreciation Accounting governs the depreciation of fixed assets.' },
          { question: 'Higher depreciation in early years is a feature of:', options: ['Straight Line Method', 'Written Down Value Method', 'Units of Production', 'Annuity Method'], correctAnswer: 1, explanation: 'WDV Method charges higher depreciation in earlier years as the rate is applied on a higher base.' },
        ],
      },
      {
        title: 'Accounting for Special Transactions',
        textContent: `Bills of Exchange are negotiable instruments used in business for credit transactions. A Bill of Exchange is a written order by the drawer directing the drawee to pay a specified amount to the payee on demand or at a fixed future date. When the drawee accepts it, it becomes an Acceptance.

Consignment is a trading arrangement where the owner (Consignor) sends goods to an agent (Consignee) for sale. The consignor retains ownership until goods are sold. The consignee earns a commission on sales. Key accounts include Consignment Account, Consignee Account, and Goods Sent on Consignment Account.

Joint Venture is a temporary partnership between two or more persons for a specific business purpose. It terminates when the purpose is achieved. Profits are shared in the agreed ratio. It can be recorded using separate books or through memorandum joint venture accounts.

Sale on Approval or Return Basis involves goods sent to customers on a trial basis. Revenue is recognized only when the customer accepts the goods or the approval period expires. Until then, goods remain the property of the seller.

Accounting for these special transactions requires understanding the specific journal entries, ledger posting, and treatment of expenses, losses, and profits unique to each type of arrangement.`,
        quizTitle: 'Special Transactions Quiz',
        questions: [
          { question: 'In a consignment, the owner of goods is called:', options: ['Consignee', 'Consignor', 'Agent', 'Buyer'], correctAnswer: 1, explanation: 'The Consignor is the owner who sends goods to the Consignee (agent) for sale.' },
          { question: 'A Bill of Exchange becomes an Acceptance when:', options: ['Drawer signs it', 'Drawee accepts it', 'Payee receives it', 'Bank endorses it'], correctAnswer: 1, explanation: 'When the drawee accepts the bill by signing it, it becomes an Acceptance.' },
          { question: 'A Joint Venture is:', options: ['Permanent partnership', 'Temporary partnership for specific purpose', 'Company', 'Sole proprietorship'], correctAnswer: 1, explanation: 'A Joint Venture is a temporary partnership formed for a specific business purpose and terminates when achieved.' },
          { question: 'In consignment, who earns commission?', options: ['Consignor', 'Consignee', 'Both equally', 'Neither'], correctAnswer: 1, explanation: 'The Consignee (agent) earns commission for selling goods on behalf of the Consignor.' },
          { question: 'In Sale on Approval, revenue is recognized when:', options: ['Goods are sent', 'Customer accepts or approval period expires', 'Invoice is raised', 'Goods are manufactured'], correctAnswer: 1, explanation: 'Revenue is recognized only when the customer approves the goods or the approval period expires.' },
        ],
      },
      {
        title: 'Partnership Accounting',
        textContent: `A Partnership is a relationship between persons who agree to share profits of a business carried on by all or any of them acting for all. The Indian Partnership Act, 1932 governs partnerships in India. The Partnership Deed contains the terms and conditions agreed upon by partners.

In the absence of a partnership deed, the Partnership Act provides default rules: Profits shared equally, no interest on capital, no interest on drawings, no salary or commission to partners, and interest at 6% per annum on loans by partners to the firm.

Capital Accounts can be maintained using the Fixed Capital Method or Fluctuating Capital Method. Under Fixed Capital, the capital balance remains constant and adjustments are made through Current Accounts. Under Fluctuating Capital, all adjustments are made directly in the Capital Accounts.

Goodwill in partnership arises during admission, retirement, or death of a partner. Methods of valuing goodwill include Average Profit Method, Super Profit Method, and Capitalization Method. Goodwill is adjusted to compensate existing partners for the incoming partner's share.

Reconstitution of a firm includes admission of a partner, retirement of a partner, and death of a partner. Each event requires adjusting goodwill, revaluing assets and liabilities, and redistributing balances among the partners according to their agreed ratios.`,
        quizTitle: 'Partnership Accounting Quiz',
        questions: [
          { question: 'In absence of a partnership deed, profits are shared:', options: ['Based on capital ratio', 'Equally', 'Based on seniority', 'Not shared'], correctAnswer: 1, explanation: 'When there is no partnership deed, the Partnership Act requires profits to be shared equally.' },
          { question: 'Which Act governs partnerships in India?', options: ['Companies Act 2013', 'Indian Partnership Act 1932', 'LLP Act 2008', 'Contract Act 1872'], correctAnswer: 1, explanation: 'The Indian Partnership Act, 1932 governs partnerships in India.' },
          { question: 'Under Fixed Capital Method, adjustments go to:', options: ['Capital Account', 'Current Account', 'Profit & Loss Account', 'Reserve Account'], correctAnswer: 1, explanation: 'Under Fixed Capital Method, the capital balance stays fixed and all adjustments are made through Current Accounts.' },
          { question: 'Goodwill valuation using excess of actual profit over normal profit is:', options: ['Average Profit Method', 'Super Profit Method', 'Capitalization Method', 'Annuity Method'], correctAnswer: 1, explanation: 'The Super Profit Method values goodwill based on the excess of actual profits over normal profits.' },
          { question: 'Reconstitution of a firm does NOT include:', options: ['Admission of partner', 'Retirement of partner', 'Annual audit', 'Death of partner'], correctAnswer: 2, explanation: 'Reconstitution involves admission, retirement, or death of a partner, not annual audit.' },
        ],
      },
    ],
  },
  {
    title: 'CA Foundation - Business Laws & Correspondence',
    slug: 'ca-foundation-business-laws',
    description: 'Comprehensive coverage of the Indian Contract Act, Sale of Goods Act, Partnership Act, LLP Act, and Business Correspondence as per the ICAI CA Foundation syllabus.',
    category: 'CA Foundation',
    level: 'BEGINNER' as const,
    modules: [
      {
        title: 'Indian Contract Act 1872',
        textContent: `The Indian Contract Act, 1872 is the primary legislation governing contracts in India. A contract is an agreement enforceable by law. Section 2(h) defines it as "an agreement enforceable by law." For an agreement to become a contract, it must satisfy certain essential elements.

Essential elements of a valid contract include: Offer and Acceptance, Intention to create legal relations, Lawful consideration, Capacity of parties, Free consent, Lawful object, Agreement not declared void, and Certainty and possibility of performance.

An offer (or proposal) is the expression of willingness to do or abstain from doing something with a view to obtaining the assent of the other party. Acceptance is the expression of assent to the terms of the offer. Communication of offer and acceptance is essential.

Consideration is the price paid for the promise. It can be past, present, or future. Under Indian law, consideration can move from a third party (unlike English law). An agreement without consideration is generally void, with certain exceptions under Section 25.

Free consent means consent not caused by coercion, undue influence, fraud, misrepresentation, or mistake. If consent is not free, the contract becomes voidable at the option of the party whose consent was not free.`,
        quizTitle: 'Indian Contract Act Quiz',
        questions: [
          { question: 'A contract is defined under which section?', options: ['Section 2(a)', 'Section 2(h)', 'Section 10', 'Section 25'], correctAnswer: 1, explanation: 'Section 2(h) of the Indian Contract Act defines a contract as an agreement enforceable by law.' },
          { question: 'Consideration can move from:', options: ['Only the promisee', 'Only the promisor', 'A third party also', 'Nobody'], correctAnswer: 2, explanation: 'Under Indian law, consideration can move from the promisee or any other person (third party).' },
          { question: 'A voidable contract can be cancelled by:', options: ['Either party', 'The aggrieved party only', 'The court only', 'Nobody'], correctAnswer: 1, explanation: 'A voidable contract can be cancelled at the option of the party whose consent was not free.' },
          { question: 'Which is NOT an essential element of a valid contract?', options: ['Free consent', 'Lawful consideration', 'Registration', 'Capacity of parties'], correctAnswer: 2, explanation: 'Registration is not an essential element of a valid contract under the Indian Contract Act.' },
          { question: 'Consent is not free if caused by:', options: ['Mutual agreement', 'Coercion or fraud', 'Lawful consideration', 'Written offer'], correctAnswer: 1, explanation: 'Consent is not free if caused by coercion, undue influence, fraud, misrepresentation, or mistake.' },
        ],
      },
      {
        title: 'Sale of Goods Act 1930',
        textContent: `The Sale of Goods Act, 1930 governs contracts relating to the sale of goods in India. A contract of sale is a contract whereby the seller transfers or agrees to transfer the property (ownership) in goods to the buyer for a price.

A sale is different from an agreement to sell. In a sale, the transfer of property happens immediately. In an agreement to sell, the transfer is to take place at a future time or subject to conditions. An agreement to sell becomes a sale when the conditions are fulfilled.

Conditions and Warranties are important concepts. A condition is a stipulation essential to the main purpose of the contract, breach of which gives the right to repudiate the contract. A warranty is collateral to the main purpose, and its breach gives only a right to claim damages.

Implied conditions include: Condition as to title, Sale by description, Sale by sample, Fitness for purpose, and Merchantable quality. These conditions are deemed to be part of every contract of sale unless excluded.

Transfer of property (ownership) determines who bears the risk. The general rule is that risk follows ownership. For specific goods, property passes when intended by the parties. For unascertained goods, property passes when goods are ascertained and appropriated to the contract.`,
        quizTitle: 'Sale of Goods Act Quiz',
        questions: [
          { question: 'In a sale, transfer of property happens:', options: ['In the future', 'Immediately', 'Never', 'After one year'], correctAnswer: 1, explanation: 'In a sale, the transfer of ownership happens immediately at the time of the contract.' },
          { question: 'Breach of a condition gives the right to:', options: ['Claim damages only', 'Repudiate the contract', 'File a criminal case', 'Nothing'], correctAnswer: 1, explanation: 'Breach of a condition gives the buyer the right to repudiate (cancel) the contract.' },
          { question: 'Risk follows:', options: ['Possession', 'Ownership', 'Payment', 'Delivery'], correctAnswer: 1, explanation: 'The general rule is that risk follows ownership regardless of who has possession.' },
          { question: 'Which is an implied condition?', options: ['Price payable in installments', 'Condition as to title', 'Delivery on Sunday', 'Payment by cheque'], correctAnswer: 1, explanation: 'Condition as to title is an implied condition in every contract of sale.' },
          { question: 'An agreement to sell becomes a sale when:', options: ['Buyer pays', 'Conditions are fulfilled', 'Contract is signed', 'Goods are manufactured'], correctAnswer: 1, explanation: 'An agreement to sell becomes a sale when the conditions are fulfilled or the specified time elapses.' },
        ],
      },
      {
        title: 'Indian Partnership Act 1932',
        textContent: `The Indian Partnership Act, 1932 defines and governs partnerships in India. Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.

Essential elements of a partnership include: Association of two or more persons, Agreement to carry on business, Sharing of profits, Business carried on by all or any acting for all (mutual agency), and the relationship arising from contract, not from status.

Every partner is an agent of the firm and of other partners. This is called mutual agency. Each partner can bind the firm by acts done in the ordinary course of business. However, a partner cannot bind the firm by acts not within the scope of the firm's business.

Registration of a firm is optional but recommended. An unregistered firm faces certain disabilities: It cannot file a suit against third parties, a partner cannot file a suit against the firm, and the firm cannot file a suit against partners. However, these do not apply to suits for dissolution or insolvency.

Types of partners include Active/Working Partners (participate in management), Sleeping/Dormant Partners (invest but do not participate), Nominal Partners (lend their name), Partner by Estoppel (represented as partner), and Partner by Holding Out.`,
        quizTitle: 'Partnership Act Quiz',
        questions: [
          { question: 'The principle of mutual agency means:', options: ['Partners are employees', 'Each partner is an agent of the firm', 'Only one partner acts', 'Government appoints agents'], correctAnswer: 1, explanation: 'Mutual agency means every partner is an agent of the firm and can bind the firm by authorized acts.' },
          { question: 'Registration of a partnership firm is:', options: ['Mandatory', 'Optional', 'Illegal', 'Automatic'], correctAnswer: 1, explanation: 'Registration of a firm under the Partnership Act is optional but provides certain legal benefits.' },
          { question: 'A dormant partner is one who:', options: ['Manages the business actively', 'Invests but does not participate in management', 'Has left the firm', 'Is deceased'], correctAnswer: 1, explanation: 'A dormant or sleeping partner contributes capital but does not participate in day-to-day management.' },
          { question: 'An unregistered firm cannot:', options: ['Do business', 'File suit against third parties', 'Open bank accounts', 'Hire employees'], correctAnswer: 1, explanation: 'An unregistered firm faces the disability of not being able to file suits against third parties.' },
          { question: 'Partnership arises from:', options: ['Status', 'Contract/Agreement', 'Birth', 'Government order'], correctAnswer: 1, explanation: 'Partnership relationship arises from a contract or agreement, not from status like Hindu Undivided Family.' },
        ],
      },
      {
        title: 'Limited Liability Partnership Act 2008',
        textContent: `The Limited Liability Partnership (LLP) Act, 2008 introduced LLPs in India. An LLP is a body corporate formed and incorporated under this Act. It combines the advantages of a partnership (flexibility) with limited liability of a company.

Key features of an LLP include: It is a separate legal entity distinct from its partners, Partners have limited liability (liability limited to their agreed contribution), Minimum two designated partners required (at least one must be resident in India), and it has perpetual succession.

An LLP Agreement governs the mutual rights and duties of partners. In the absence of an agreement, the provisions of Schedule I of the LLP Act apply. These default provisions are similar to the Partnership Act defaults.

Designated Partners have specific responsibilities including filing documents, returns, and statements, compliance with provisions of the Act, and they are liable for penalties for non-compliance. Every LLP must have at least two designated partners.

Advantages of LLP over traditional partnership include limited liability protection, separate legal entity status, no requirement of minimum capital, fewer compliance requirements compared to companies, flexibility in internal management, and tax benefits as LLP is taxed as a partnership firm.`,
        quizTitle: 'LLP Act Quiz',
        questions: [
          { question: 'An LLP is a:', options: ['Partnership firm', 'Body corporate', 'Private company', 'Trust'], correctAnswer: 1, explanation: 'An LLP is a body corporate formed and incorporated under the LLP Act, 2008.' },
          { question: 'Minimum number of designated partners required:', options: ['One', 'Two', 'Three', 'Five'], correctAnswer: 1, explanation: 'Every LLP must have at least two designated partners, one of whom must be a resident in India.' },
          { question: 'Partners in an LLP have:', options: ['Unlimited liability', 'Limited liability', 'No liability', 'Joint liability only'], correctAnswer: 1, explanation: 'Partners in an LLP have limited liability, limited to their agreed contribution.' },
          { question: 'LLP has:', options: ['Limited life', 'Perpetual succession', 'Life of 10 years', 'No legal existence'], correctAnswer: 1, explanation: 'An LLP has perpetual succession, meaning it continues to exist regardless of changes in partners.' },
          { question: 'LLP Act was enacted in:', options: ['1932', '2000', '2008', '2013'], correctAnswer: 2, explanation: 'The Limited Liability Partnership Act was enacted in 2008 in India.' },
        ],
      },
      {
        title: 'Business Correspondence & Communication',
        textContent: `Business Communication is the process of sharing information between people within and outside an organization. Effective communication is essential for business success as it facilitates decision-making, coordination, and relationship building.

Types of business communication include: Internal Communication (within the organization - upward, downward, horizontal), External Communication (with customers, suppliers, government), Formal Communication (through official channels), and Informal Communication (grapevine, casual).

Business Letters follow a standard format including: Date, Reference number, Recipient's address, Subject line, Salutation, Body (introduction, main content, conclusion), Complimentary close, Signature, and Enclosures. The tone should be professional, clear, and courteous.

Common types of business letters include: Inquiry letters, Quotation letters, Order letters, Complaint letters, Collection letters, Circular letters, and Letters of recommendation. Each type serves a specific purpose in business operations.

Email etiquette in business requires: Clear subject lines, Professional greeting and closing, Concise and relevant content, Proper formatting, Appropriate use of CC and BCC, Timely responses, and Avoidance of informal language or abbreviations.`,
        quizTitle: 'Business Communication Quiz',
        questions: [
          { question: 'Communication within an organization is called:', options: ['External communication', 'Internal communication', 'Public communication', 'Mass communication'], correctAnswer: 1, explanation: 'Communication within an organization (between employees, departments) is called internal communication.' },
          { question: 'Grapevine refers to:', options: ['Formal communication', 'Informal communication', 'Written communication', 'Legal communication'], correctAnswer: 1, explanation: 'Grapevine refers to informal communication channels in an organization.' },
          { question: 'Which is NOT part of a business letter format?', options: ['Subject line', 'Salutation', 'Hashtags', 'Complimentary close'], correctAnswer: 2, explanation: 'Hashtags are not part of standard business letter format.' },
          { question: 'Downward communication flows from:', options: ['Subordinate to superior', 'Superior to subordinate', 'Peer to peer', 'External to internal'], correctAnswer: 1, explanation: 'Downward communication flows from superiors (management) to subordinates (employees).' },
          { question: 'BCC in emails stands for:', options: ['Business Carbon Copy', 'Blind Carbon Copy', 'Basic Communication Copy', 'Bulk Carbon Copy'], correctAnswer: 1, explanation: 'BCC stands for Blind Carbon Copy - recipients in BCC are hidden from other recipients.' },
        ],
      },
    ],
  },
  {
    title: 'CA Foundation - Business Mathematics & Statistics',
    slug: 'ca-foundation-maths-stats',
    description: 'Complete coverage of Business Mathematics, Logical Reasoning, and Statistics as per the ICAI CA Foundation Paper 3 syllabus.',
    category: 'CA Foundation',
    level: 'BEGINNER' as const,
    modules: [
      {
        title: 'Ratio, Proportion & Indices',
        textContent: `A ratio is a comparison of two quantities of the same kind expressed as a fraction. If a and b are two quantities, the ratio of a to b is written as a:b or a/b. Ratios are used extensively in business for financial analysis, cost allocation, and performance measurement.

Proportion is the equality of two ratios. If a:b = c:d, then a, b, c, d are said to be in proportion. This is written as a:b :: c:d. Properties of proportion include cross multiplication (ad = bc), invertendo, alternendo, and componendo-dividendo.

Indices (or exponents) represent repeated multiplication. The laws of indices include: a^m x a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(mn), a^0 = 1, and a^(-n) = 1/a^n. These laws simplify complex calculations in business and finance.

Logarithms are the inverse of exponents. If a^x = N, then log_a(N) = x. Properties include: log(MN) = logM + logN, log(M/N) = logM - logN, and log(M^n) = n.logM. Logarithms simplify multiplication and division into addition and subtraction.

Applications in business include calculating compound interest, growth rates, depreciation, and analyzing financial ratios for comparing company performance across periods.`,
        quizTitle: 'Ratio & Indices Quiz',
        questions: [
          { question: 'If a:b = 2:3 and b:c = 4:5, then a:b:c is:', options: ['8:12:15', '2:3:5', '4:6:5', '2:4:5'], correctAnswer: 0, explanation: 'Making b common: a:b = 8:12, b:c = 12:15. So a:b:c = 8:12:15.' },
          { question: 'a^0 equals:', options: ['0', '1', 'a', 'Undefined'], correctAnswer: 1, explanation: 'Any non-zero number raised to the power 0 equals 1.' },
          { question: 'log(MN) equals:', options: ['logM x logN', 'logM + logN', 'logM - logN', 'logM / logN'], correctAnswer: 1, explanation: 'The logarithm of a product equals the sum of logarithms: log(MN) = logM + logN.' },
          { question: 'If a:b :: c:d, then ad equals:', options: ['ac', 'bd', 'bc', 'ab'], correctAnswer: 2, explanation: 'In proportion, the product of extremes equals the product of means: ad = bc.' },
          { question: 'a^m x a^n equals:', options: ['a^(m-n)', 'a^(mn)', 'a^(m+n)', '2a^(mn)'], correctAnswer: 2, explanation: 'When multiplying same bases, add exponents: a^m x a^n = a^(m+n).' },
        ],
      },
      {
        title: 'Equations & Matrices',
        textContent: `Linear equations involve variables with the highest power of 1. A system of two linear equations can be solved using substitution, elimination, or matrix methods. Business applications include break-even analysis, cost-volume-profit analysis, and resource allocation.

Quadratic equations have the form ax^2 + bx + c = 0. Solutions are found using the quadratic formula: x = (-b +/- sqrt(b^2 - 4ac)) / 2a. The discriminant (b^2 - 4ac) determines the nature of roots: positive gives real distinct roots, zero gives equal roots, negative gives no real roots.

Matrices are rectangular arrays of numbers arranged in rows and columns. Matrix operations include addition (same order matrices), subtraction, scalar multiplication, and matrix multiplication (columns of first must equal rows of second).

The determinant of a 2x2 matrix [a,b; c,d] is ad - bc. Determinants are used to solve systems of linear equations using Cramer's Rule and to find the inverse of a matrix.

The inverse of a matrix A (denoted A^-1) exists only if the determinant is non-zero. For a 2x2 matrix, A^-1 = (1/det(A)) x adjoint(A). Matrix inverse is used in solving simultaneous equations: if AX = B, then X = A^-1 x B.`,
        quizTitle: 'Equations & Matrices Quiz',
        questions: [
          { question: 'The quadratic formula gives x = :', options: ['(-b +/- sqrt(b^2 - 4ac)) / 2a', '(-b + 4ac) / 2a', 'b^2 - 4ac', 'a + b + c'], correctAnswer: 0, explanation: 'The quadratic formula is x = (-b +/- sqrt(b^2 - 4ac)) / 2a for equation ax^2 + bx + c = 0.' },
          { question: 'If discriminant is zero, roots are:', options: ['Real and distinct', 'Real and equal', 'No real roots', 'Complex'], correctAnswer: 1, explanation: 'When discriminant (b^2 - 4ac) = 0, the equation has real and equal roots.' },
          { question: 'Determinant of matrix [3,1; 2,4] is:', options: ['10', '14', '12', '5'], correctAnswer: 0, explanation: 'Determinant = (3)(4) - (1)(2) = 12 - 2 = 10.' },
          { question: 'Matrix inverse exists when determinant is:', options: ['Zero', 'Non-zero', 'Negative only', 'Positive only'], correctAnswer: 1, explanation: 'A matrix has an inverse only when its determinant is non-zero (non-singular matrix).' },
          { question: 'For matrix multiplication AB, we need:', options: ['Same number of rows', 'Columns of A = Rows of B', 'Same order matrices', 'Square matrices only'], correctAnswer: 1, explanation: 'For AB to be defined, the number of columns in A must equal the number of rows in B.' },
        ],
      },
      {
        title: 'Simple & Compound Interest',
        textContent: `Simple Interest (SI) is calculated on the original principal amount throughout the entire period. Formula: SI = P x R x T / 100, where P is Principal, R is Rate of interest per annum, and T is Time in years. Amount = Principal + Simple Interest.

Compound Interest (CI) is calculated on the principal plus accumulated interest. The amount after n years: A = P(1 + r/100)^n. Compound Interest = Amount - Principal. Compounding can be annual, semi-annual, quarterly, or monthly.

For semi-annual compounding, the rate is halved and time is doubled: A = P(1 + r/200)^(2n). For quarterly compounding: A = P(1 + r/400)^(4n). The more frequent the compounding, the higher the effective interest.

Effective Rate of Interest is the actual rate when compounding is more frequent than annual. If nominal rate is r% compounded m times a year, effective rate = (1 + r/100m)^m - 1. This helps compare different investment options.

Applications include bank deposits, loan calculations, investment analysis, depreciation using reducing balance method, and population growth calculations. The difference between CI and SI for 2 years = P(r/100)^2.`,
        quizTitle: 'Interest Calculations Quiz',
        questions: [
          { question: 'Simple Interest formula is:', options: ['P(1+r)^n', 'PRT/100', 'P+RT', 'PR^T'], correctAnswer: 1, explanation: 'Simple Interest = P x R x T / 100 where P is Principal, R is Rate, T is Time.' },
          { question: 'In compound interest, interest is calculated on:', options: ['Original principal only', 'Principal plus accumulated interest', 'Interest only', 'Half the principal'], correctAnswer: 1, explanation: 'Compound interest is calculated on the principal plus any interest already accumulated.' },
          { question: 'For semi-annual compounding with rate r%, the rate used is:', options: ['r%', 'r/2%', '2r%', 'r/4%'], correctAnswer: 1, explanation: 'For semi-annual compounding, the annual rate is halved (r/2) and applied twice a year.' },
          { question: 'More frequent compounding leads to:', options: ['Lower returns', 'Higher effective rate', 'Same returns', 'No interest'], correctAnswer: 1, explanation: 'More frequent compounding results in a higher effective rate of interest.' },
          { question: 'CI - SI for 2 years equals:', options: ['P(r/100)', 'P(r/100)^2', '2P(r/100)', 'P(r/100)^3'], correctAnswer: 1, explanation: 'The difference between CI and SI for 2 years = P(r/100)^2.' },
        ],
      },
      {
        title: 'Permutations & Combinations',
        textContent: `The fundamental counting principle states that if one task can be done in m ways and another in n ways, both tasks together can be done in m x n ways. This extends to any number of tasks performed sequentially.

Permutations represent arrangements where order matters. The number of permutations of n things taken r at a time: nPr = n! / (n-r)!. For example, arranging 3 books from 5: 5P3 = 5!/(5-3)! = 60.

Combinations represent selections where order does not matter. The number of combinations of n things taken r at a time: nCr = n! / (r! x (n-r)!). For example, choosing 3 books from 5: 5C3 = 5!/(3!x2!) = 10.

Key relationships: nPr = nCr x r! (every combination can be arranged in r! ways). Also, nCr = nC(n-r), and nC0 = nCn = 1.

Applications in business include: calculating the number of possible committees, arrangements of products, password combinations, scheduling possibilities, and probability calculations. The Binomial Theorem uses combinations: (a+b)^n = sum of nCr x a^(n-r) x b^r.`,
        quizTitle: 'Permutations & Combinations Quiz',
        questions: [
          { question: 'Permutations differ from combinations in that permutations consider:', options: ['Size only', 'Order of arrangement', 'Color only', 'Weight'], correctAnswer: 1, explanation: 'Permutations consider the order of arrangement while combinations do not.' },
          { question: '5P2 equals:', options: ['10', '20', '25', '5'], correctAnswer: 1, explanation: '5P2 = 5!/(5-2)! = 5!/3! = 5x4 = 20.' },
          { question: '5C3 equals:', options: ['60', '20', '10', '15'], correctAnswer: 2, explanation: '5C3 = 5!/(3!x2!) = 120/(6x2) = 10.' },
          { question: 'nCr = nC(n-r) means:', options: ['Choosing r items is same as choosing remaining n-r items', 'All combinations are equal', 'Order matters', 'Nothing special'], correctAnswer: 0, explanation: 'Choosing r items from n is the same as leaving out (n-r) items, hence nCr = nC(n-r).' },
          { question: 'nC0 equals:', options: ['0', '1', 'n', 'n!'], correctAnswer: 1, explanation: 'nC0 = 1 because there is exactly one way to choose nothing from n items.' },
        ],
      },
      {
        title: 'Measures of Central Tendency',
        textContent: `Central tendency measures identify the central or typical value in a dataset. The three main measures are Mean, Median, and Mode. Each has specific advantages and is suitable for different types of data and business applications.

Arithmetic Mean is the sum of all observations divided by the number of observations. For grouped data, it can be calculated using Direct Method, Short-cut Method, or Step Deviation Method. The mean is affected by extreme values (outliers).

Median is the middle value when data is arranged in ascending or descending order. For grouped data: Median = L + ((N/2 - cf) / f) x h, where L is lower limit of median class, cf is cumulative frequency before median class, f is frequency of median class, and h is class width.

Mode is the most frequently occurring value. For grouped data: Mode = L + ((f1 - f0) / (2f1 - f0 - f2)) x h, where f1 is frequency of modal class, f0 and f2 are frequencies of classes before and after.

The empirical relationship between Mean, Median, and Mode: Mode = 3 Median - 2 Mean (approximately). Weighted Mean assigns different weights to values based on their importance. Geometric Mean and Harmonic Mean are used for growth rates and speed/rate calculations respectively.`,
        quizTitle: 'Central Tendency Quiz',
        questions: [
          { question: 'Which measure is most affected by outliers?', options: ['Mean', 'Median', 'Mode', 'All equally'], correctAnswer: 0, explanation: 'The Arithmetic Mean is most affected by extreme values (outliers) in the data.' },
          { question: 'Median divides the data into:', options: ['Three parts', 'Two equal halves', 'Four parts', 'Unequal parts'], correctAnswer: 1, explanation: 'The Median divides the data into two equal halves when arranged in order.' },
          { question: 'Mode is the value that occurs:', options: ['Least frequently', 'Most frequently', 'Only once', 'In the middle'], correctAnswer: 1, explanation: 'The Mode is the value that occurs most frequently in a dataset.' },
          { question: 'The empirical relation is: Mode =', options: ['2 Median - 3 Mean', '3 Median - 2 Mean', 'Mean + Median', 'Mean - Median'], correctAnswer: 1, explanation: 'The empirical relationship is Mode = 3 Median - 2 Mean (approximately).' },
          { question: 'Geometric Mean is used for:', options: ['Calculating averages of exam scores', 'Growth rates and ratios', 'Finding the mode', 'Counting frequency'], correctAnswer: 1, explanation: 'Geometric Mean is especially useful for calculating average growth rates and ratios.' },
        ],
      },
      {
        title: 'Probability',
        textContent: `Probability measures the likelihood of an event occurring. It ranges from 0 (impossible) to 1 (certain). P(Event) = Number of favorable outcomes / Total number of outcomes. This is the classical or mathematical definition.

Key terms include: Sample Space (all possible outcomes), Event (a subset of sample space), Mutually Exclusive Events (cannot occur simultaneously), Exhaustive Events (cover all possibilities), and Independent Events (occurrence of one does not affect the other).

Addition Theorem: For two events A and B, P(A or B) = P(A) + P(B) - P(A and B). For mutually exclusive events: P(A or B) = P(A) + P(B) since P(A and B) = 0.

Multiplication Theorem: For independent events, P(A and B) = P(A) x P(B). For dependent events, P(A and B) = P(A) x P(B|A), where P(B|A) is the conditional probability of B given A.

Bayes Theorem calculates the probability of a cause given an observed effect: P(A|B) = P(B|A) x P(A) / P(B). This is widely used in business for decision-making under uncertainty, quality control, and risk assessment.`,
        quizTitle: 'Probability Quiz',
        questions: [
          { question: 'Probability of a certain event is:', options: ['0', '0.5', '1', 'Infinity'], correctAnswer: 2, explanation: 'A certain event has a probability of 1 (100% chance of occurring).' },
          { question: 'For mutually exclusive events, P(A and B) =:', options: ['P(A) x P(B)', '0', '1', 'P(A) + P(B)'], correctAnswer: 1, explanation: 'Mutually exclusive events cannot occur together, so P(A and B) = 0.' },
          { question: 'For independent events, P(A and B) =:', options: ['P(A) + P(B)', 'P(A) x P(B)', 'P(A) - P(B)', 'P(A|B)'], correctAnswer: 1, explanation: 'For independent events, P(A and B) = P(A) x P(B).' },
          { question: 'P(A or B) = P(A) + P(B) - P(A and B) is the:', options: ['Multiplication theorem', 'Addition theorem', 'Bayes theorem', 'Normal distribution'], correctAnswer: 1, explanation: 'This is the Addition Theorem (or Union formula) of probability.' },
          { question: 'Probability always lies between:', options: ['-1 and 1', '0 and 1', '0 and 100', '-infinity and infinity'], correctAnswer: 1, explanation: 'Probability always lies between 0 (impossible) and 1 (certain), inclusive.' },
        ],
      },
    ],
  },
  {
    title: 'CA Foundation - Business Economics',
    slug: 'ca-foundation-economics',
    description: 'Complete coverage of Microeconomics, Macroeconomics, and Business & Commercial Knowledge as per the ICAI CA Foundation Paper 4 syllabus.',
    category: 'Economics',
    level: 'BEGINNER' as const,
    modules: [
      {
        title: 'Demand & Supply Analysis',
        textContent: `Demand refers to the quantity of a good or service that consumers are willing and able to purchase at various prices during a given period. The Law of Demand states that, other things being equal, as the price of a good rises, the quantity demanded falls, and vice versa.

The demand curve slopes downward from left to right due to: Income Effect (as price falls, real income increases), Substitution Effect (cheaper goods attract consumers from substitutes), Diminishing Marginal Utility, and new buyers entering at lower prices.

Supply refers to the quantity of a good that producers are willing and able to offer for sale at various prices. The Law of Supply states that, other things being equal, as price rises, quantity supplied increases. The supply curve slopes upward.

Market Equilibrium occurs where the demand curve intersects the supply curve. At this point, the quantity demanded equals the quantity supplied, and the market clears. Any deviation from equilibrium creates either surplus (excess supply) or shortage (excess demand).

Elasticity of Demand measures the responsiveness of quantity demanded to changes in price, income, or prices of related goods. Price Elasticity = % change in quantity demanded / % change in price. Demand is elastic when elasticity > 1 and inelastic when < 1.`,
        quizTitle: 'Demand & Supply Quiz',
        questions: [
          { question: 'The Law of Demand shows a relationship that is:', options: ['Direct/positive', 'Inverse/negative', 'No relationship', 'Constant'], correctAnswer: 1, explanation: 'The Law of Demand shows an inverse relationship - as price rises, quantity demanded falls.' },
          { question: 'Market equilibrium occurs when:', options: ['Demand exceeds supply', 'Supply exceeds demand', 'Quantity demanded equals quantity supplied', 'Price is zero'], correctAnswer: 2, explanation: 'Market equilibrium is where the demand and supply curves intersect - quantity demanded equals quantity supplied.' },
          { question: 'When price elasticity of demand > 1, demand is:', options: ['Inelastic', 'Elastic', 'Unitary elastic', 'Perfectly inelastic'], correctAnswer: 1, explanation: 'When elasticity > 1, demand is elastic, meaning quantity demanded is highly responsive to price changes.' },
          { question: 'The supply curve slopes:', options: ['Downward', 'Upward', 'Horizontal', 'Vertical'], correctAnswer: 1, explanation: 'The supply curve slopes upward because producers supply more at higher prices.' },
          { question: 'A surplus in the market means:', options: ['Demand exceeds supply', 'Supply exceeds demand', 'Market is in equilibrium', 'No goods available'], correctAnswer: 1, explanation: 'A surplus exists when quantity supplied exceeds quantity demanded at a given price.' },
        ],
      },
      {
        title: 'Theory of Production & Cost',
        textContent: `Production is the process of transforming inputs (factors of production) into outputs (goods and services). The four factors of production are Land (natural resources), Labour (human effort), Capital (manufactured resources), and Enterprise (organization and risk-taking).

The Production Function shows the relationship between inputs and output: Q = f(L, K), where Q is output, L is labour, and K is capital. In the short run, at least one factor is fixed (usually capital). In the long run, all factors are variable.

The Law of Diminishing Marginal Returns states that as more units of a variable factor are added to a fixed factor, the marginal product eventually decreases. This applies in the short run when at least one factor is fixed.

Cost concepts include: Fixed Costs (do not change with output), Variable Costs (change with output), Total Cost (FC + VC), Average Cost (TC/Q), and Marginal Cost (change in TC for one additional unit). The MC curve intersects the AC curve at its minimum point.

Returns to Scale describe what happens when all inputs are increased proportionally in the long run: Increasing Returns (output increases more than proportionally), Constant Returns (output increases proportionally), and Decreasing Returns (output increases less than proportionally).`,
        quizTitle: 'Production & Cost Quiz',
        questions: [
          { question: 'In the short run, which factor is typically fixed?', options: ['Labour', 'Capital', 'Raw materials', 'Energy'], correctAnswer: 1, explanation: 'In the short run, capital (machinery, buildings) is typically the fixed factor.' },
          { question: 'Marginal Cost is the cost of producing:', options: ['Total output', 'Average output', 'One additional unit', 'First unit'], correctAnswer: 2, explanation: 'Marginal Cost is the additional cost incurred to produce one more unit of output.' },
          { question: 'MC curve intersects AC curve at AC\'s:', options: ['Maximum point', 'Minimum point', 'Starting point', 'End point'], correctAnswer: 1, explanation: 'The Marginal Cost curve intersects the Average Cost curve at its minimum point.' },
          { question: 'Fixed costs in the short run:', options: ['Change with output', 'Do not change with output', 'Are always zero', 'Equal variable costs'], correctAnswer: 1, explanation: 'Fixed costs remain constant regardless of the level of output in the short run.' },
          { question: 'The Law of Diminishing Marginal Returns applies in:', options: ['Long run only', 'Short run only', 'Both short and long run', 'Neither'], correctAnswer: 1, explanation: 'The Law of Diminishing Marginal Returns applies in the short run when at least one factor is fixed.' },
        ],
      },
      {
        title: 'Market Structures & Price Determination',
        textContent: `Perfect Competition is a market structure with many buyers and sellers, homogeneous products, free entry and exit, perfect knowledge, and no transport costs. Firms are price takers. In long-run equilibrium, firms earn only normal profits.

Monopoly is a market with a single seller and no close substitutes. The monopolist is a price maker. Barriers to entry protect the monopolist's position. A monopolist maximizes profit where MR = MC. Price discrimination occurs when different prices are charged for the same product.

Monopolistic Competition has many sellers offering differentiated products. Each firm has some control over price due to product differentiation. Firms compete through advertising and branding. In long-run equilibrium, firms earn only normal profits due to free entry.

Oligopoly is a market dominated by a few large sellers. Products may be homogeneous or differentiated. There is interdependence among firms, meaning each firm considers rivals' reactions. Price rigidity is common, explained by the kinked demand curve theory.

Price determination in each market structure follows the principle of profit maximization: MR = MC. However, the relationship between price and marginal revenue varies. In perfect competition, P = MR. In monopoly and other imperfect markets, P > MR.`,
        quizTitle: 'Market Structures Quiz',
        questions: [
          { question: 'In perfect competition, firms are:', options: ['Price makers', 'Price takers', 'Price leaders', 'Price discriminators'], correctAnswer: 1, explanation: 'In perfect competition, firms are price takers because no single firm can influence the market price.' },
          { question: 'A monopolist maximizes profit where:', options: ['AR = AC', 'MR = MC', 'TR = TC', 'P = AVC'], correctAnswer: 1, explanation: 'A monopolist (like all firms) maximizes profit where Marginal Revenue equals Marginal Cost.' },
          { question: 'Product differentiation is a feature of:', options: ['Perfect competition', 'Monopolistic competition', 'Pure monopoly', 'Oligopsony'], correctAnswer: 1, explanation: 'Monopolistic competition is characterized by many firms selling differentiated products.' },
          { question: 'Interdependence of firms is a feature of:', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Monopolistic competition'], correctAnswer: 2, explanation: 'In oligopoly, each firm considers the reactions of rival firms before making decisions.' },
          { question: 'In long-run equilibrium under perfect competition, firms earn:', options: ['Super normal profits', 'Normal profits only', 'Losses', 'No revenue'], correctAnswer: 1, explanation: 'Free entry and exit ensure that firms earn only normal profits in long-run equilibrium.' },
        ],
      },
      {
        title: 'Indian Economy Overview',
        textContent: `India is a mixed economy with both public and private sectors playing significant roles. Since economic reforms of 1991 (LPG - Liberalization, Privatization, Globalization), India has shifted towards a more market-oriented economy.

Agriculture remains important, employing about 42% of the workforce but contributing about 17% to GDP. Industry contributes about 26% and Services about 57% to GDP. The services sector has been the fastest-growing sector.

Key economic indicators include GDP (Gross Domestic Product), which measures the total value of goods and services produced. GDP growth rate, inflation rate, fiscal deficit, current account deficit, and foreign exchange reserves are closely monitored.

Major economic reforms include demonetization (2016), Goods and Services Tax (2017), Insolvency and Bankruptcy Code (2016), Make in India, Digital India, and Start-up India initiatives. These aim to formalize the economy and boost growth.

Challenges facing the Indian economy include unemployment, income inequality, infrastructure gaps, agricultural distress, environmental concerns, and the need for skill development. Government policies aim to achieve inclusive and sustainable growth.`,
        quizTitle: 'Indian Economy Quiz',
        questions: [
          { question: 'LPG reforms were introduced in:', options: ['1947', '1991', '2001', '2014'], correctAnswer: 1, explanation: 'The Liberalization, Privatization, and Globalization reforms were introduced in 1991.' },
          { question: 'The largest contributor to India\'s GDP is:', options: ['Agriculture', 'Industry', 'Services', 'Mining'], correctAnswer: 2, explanation: 'The Services sector contributes the largest share (about 57%) to India\'s GDP.' },
          { question: 'GST was introduced in India in:', options: ['2014', '2016', '2017', '2019'], correctAnswer: 2, explanation: 'The Goods and Services Tax was implemented on July 1, 2017.' },
          { question: 'India is classified as a:', options: ['Pure market economy', 'Command economy', 'Mixed economy', 'Traditional economy'], correctAnswer: 2, explanation: 'India is a mixed economy with both public and private sectors operating together.' },
          { question: 'Agriculture employs approximately what percentage of workforce?', options: ['10%', '25%', '42%', '60%'], correctAnswer: 2, explanation: 'Agriculture still employs about 42% of India\'s workforce despite contributing only about 17% to GDP.' },
        ],
      },
      {
        title: 'Business & Commercial Knowledge',
        textContent: `Business refers to any economic activity involving the production and exchange of goods and services with the objective of earning profit. Types of business include Industry (manufacturing, mining, construction), Commerce (trade and auxiliaries), and Services.

Forms of business organization include: Sole Proprietorship (single owner), Partnership (two or more persons), Hindu Undivided Family (Karta manages), Company (separate legal entity), and Cooperative Society (voluntary association). Each has distinct advantages and legal requirements.

Business environment includes all external and internal factors that influence business operations. PESTEL analysis covers Political, Economic, Social, Technological, Environmental, and Legal factors. Understanding the business environment is crucial for strategic planning.

E-commerce and digital business have transformed commercial activities. Types include B2B (business to business), B2C (business to consumer), C2C (consumer to consumer), and B2G (business to government). Digital payments, online retail, and digital services continue to grow rapidly.

Key concepts include Start-ups (innovation-driven new businesses), MSMEs (Micro, Small, and Medium Enterprises forming the backbone of the economy), Special Economic Zones, Foreign Direct Investment, and intellectual property rights that protect business innovations.`,
        quizTitle: 'Business Knowledge Quiz',
        questions: [
          { question: 'B2C stands for:', options: ['Business to Commerce', 'Business to Consumer', 'Bank to Customer', 'Buyer to Company'], correctAnswer: 1, explanation: 'B2C stands for Business to Consumer - direct selling from businesses to end consumers.' },
          { question: 'PESTEL does NOT include:', options: ['Political', 'Economic', 'Spiritual', 'Legal'], correctAnswer: 2, explanation: 'PESTEL covers Political, Economic, Social, Technological, Environmental, and Legal factors.' },
          { question: 'In a company, the legal status is:', options: ['Same as owners', 'Separate legal entity', 'No legal status', 'Dependent on partners'], correctAnswer: 1, explanation: 'A company is a separate legal entity distinct from its members/shareholders.' },
          { question: 'MSME stands for:', options: ['Micro Small and Medium Enterprises', 'Major State Manufacturing Enterprises', 'Multi Sector Marketing Entities', 'Minimum Standard Management Efficiency'], correctAnswer: 0, explanation: 'MSME stands for Micro, Small, and Medium Enterprises.' },
          { question: 'Which is NOT a form of business organization?', options: ['Sole proprietorship', 'Partnership', 'Cooperative society', 'Central bank'], correctAnswer: 3, explanation: 'A central bank is a monetary authority, not a form of business organization.' },
        ],
      },
    ],
  },
];
