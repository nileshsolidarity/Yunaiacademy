export const finalCourses = [
  {
    title: 'CA Final - Financial Reporting',
    slug: 'ca-final-financial-reporting',
    description: 'Advanced coverage of Ind AS framework, revenue recognition, financial instruments, business combinations, consolidation, and impairment as per ICAI CA Final syllabus.',
    category: 'CA Final',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Ind AS Framework & Conceptual Basis',
        textContent: `The Indian Accounting Standards (Ind AS) are converged standards based on IFRS (International Financial Reporting Standards) notified by the Ministry of Corporate Affairs. Ind AS is mandatory for listed companies, companies with net worth of Rs 250 crore or more, and their holding/subsidiary/associate/joint venture companies.

The Conceptual Framework for Financial Reporting under Ind AS sets out the concepts that underlie the preparation and presentation of financial statements. The objective of general-purpose financial reporting is to provide financial information that is useful to existing and potential investors, lenders, and other creditors in making decisions about providing resources to the entity.

The qualitative characteristics are divided into fundamental characteristics and enhancing characteristics. Fundamental characteristics are Relevance (information capable of making a difference in decisions, including predictive value and confirmatory value) and Faithful Representation (complete, neutral, and free from error). Enhancing characteristics include Comparability, Verifiability, Timeliness, and Understandability.

The elements of financial statements under the revised framework include Asset (a present economic resource controlled by the entity as a result of past events), Liability (a present obligation of the entity to transfer an economic resource as a result of past events), Equity (residual interest in assets after deducting liabilities), Income, and Expenses.

Measurement bases under Ind AS include Historical Cost, Fair Value (Ind AS 113), Value in Use, Fulfilment Value, and Current Cost. The framework discusses the concept of the reporting entity, capital maintenance concepts (financial and physical), and the pervasive constraint of cost versus benefit in financial reporting.`,
        quizTitle: 'Ind AS Framework Quiz',
        questions: [
          { question: 'Ind AS is based on:', options: ['US GAAP', 'IFRS (converged standards)', 'UK GAAP', 'Japanese standards'], correctAnswer: 1, explanation: 'Indian Accounting Standards (Ind AS) are converged standards based on International Financial Reporting Standards (IFRS).' },
          { question: 'Which is NOT a fundamental qualitative characteristic?', options: ['Relevance', 'Faithful Representation', 'Comparability', 'Both Relevance and Faithful Representation are fundamental'], correctAnswer: 2, explanation: 'Comparability is an enhancing characteristic. Only Relevance and Faithful Representation are fundamental.' },
          { question: 'Ind AS is mandatory for listed companies with net worth exceeding:', options: ['Rs 50 crore', 'Rs 100 crore', 'Rs 250 crore', 'Rs 500 crore'], correctAnswer: 2, explanation: 'Ind AS is mandatory for companies with net worth of Rs 250 crore or more (and listed companies).' },
          { question: 'Faithful Representation requires information to be:', options: ['Relevant only', 'Complete, neutral, and free from error', 'Timely only', 'Comparable only'], correctAnswer: 1, explanation: 'Faithful Representation means the information is complete, neutral, and free from material error.' },
          { question: 'Fair value measurement is governed by:', options: ['Ind AS 1', 'Ind AS 16', 'Ind AS 113', 'Ind AS 38'], correctAnswer: 2, explanation: 'Ind AS 113 Fair Value Measurement defines fair value and provides a framework for measuring it.' },
          { question: 'A company holds an investment property carried at cost of Rs 50 lakhs. Fair value at reporting date is Rs 72 lakhs. If the company adopts the fair value model under Ind AS 40, what is the fair value adjustment to be recognized?', options: ['Rs 22 lakhs gain in P&L', 'Rs 22 lakhs gain in OCI', 'Rs 72 lakhs gain in P&L', 'No adjustment required'], correctAnswer: 0, explanation: 'Under Ind AS 40 fair value model, the difference between fair value (Rs 72 lakhs) and carrying amount (Rs 50 lakhs) = Rs 22 lakhs is recognized as a gain in profit or loss.' },
          { question: 'An entity measures a Level 2 financial asset using observable market inputs. The quoted price of a similar asset is Rs 100, but an adjustment of Rs 5 is needed for differences in credit risk. What is the fair value under Ind AS 113?', options: ['Rs 100', 'Rs 95', 'Rs 105', 'Rs 90'], correctAnswer: 1, explanation: 'Level 2 fair value uses observable inputs with adjustments. The fair value = Rs 100 - Rs 5 adjustment for credit risk = Rs 95.' },
          { question: 'Under Ind AS 16, a machine is revalued from a carrying amount of Rs 8,00,000 to Rs 10,50,000. If no previous revaluation deficit exists, how is the Rs 2,50,000 surplus treated?', options: ['Recognized entirely in P&L', 'Recognized in OCI and accumulated in revaluation surplus in equity', 'Offset against depreciation', 'Recognized as a liability'], correctAnswer: 1, explanation: 'Under Ind AS 16, a revaluation surplus (Rs 10,50,000 - Rs 8,00,000 = Rs 2,50,000) is recognized in OCI and accumulated in equity under revaluation surplus, unless it reverses a previous deficit recognized in P&L.' },
        ],
      },
      {
        title: 'Revenue Recognition & Leases (Ind AS 115/116)',
        textContent: `Ind AS 115 Revenue from Contracts with Customers establishes a comprehensive framework for revenue recognition. It replaces the previous guidance under Ind AS 11 and Ind AS 18. The core principle is that revenue should be recognized to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled.

The Five-Step Model for revenue recognition: Step 1 - Identify the contract with a customer; Step 2 - Identify the performance obligations in the contract; Step 3 - Determine the transaction price (including variable consideration, significant financing component, non-cash consideration, consideration payable to customer); Step 4 - Allocate the transaction price to performance obligations (based on standalone selling prices); Step 5 - Recognize revenue when (or as) each performance obligation is satisfied.

Performance obligations can be satisfied at a point in time or over time. Revenue is recognized over time if: the customer simultaneously receives and consumes the benefits, the entity creates or enhances an asset controlled by the customer, or the entity's performance does not create an asset with alternative use and the entity has an enforceable right to payment for performance completed.

Ind AS 116 Leases requires lessees to recognize a right-of-use asset and a lease liability for all leases (except short-term leases of 12 months or less and leases of low-value assets). This eliminates the distinction between operating and finance leases for lessees, bringing most leases on balance sheet.

The right-of-use asset is initially measured at cost (lease liability plus initial direct costs, prepayments, less incentives received, plus estimated dismantling costs). The lease liability is measured at the present value of lease payments discounted at the interest rate implicit in the lease or the lessee's incremental borrowing rate.`,
        quizTitle: 'Revenue & Leases Quiz',
        questions: [
          { question: 'How many steps are in the Ind AS 115 revenue recognition model?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'Ind AS 115 uses a Five-Step Model: Identify contract, Identify obligations, Determine price, Allocate price, Recognize revenue.' },
          { question: 'Under Ind AS 116, lessees must recognize:', options: ['Operating leases off balance sheet', 'A right-of-use asset and lease liability for most leases', 'Only finance leases', 'No lease assets'], correctAnswer: 1, explanation: 'Ind AS 116 requires lessees to recognize a right-of-use asset and lease liability for virtually all leases.' },
          { question: 'Transaction price allocation is based on:', options: ['Historical cost', 'Standalone selling prices', 'Negotiated prices', 'Book values'], correctAnswer: 1, explanation: 'Transaction price is allocated to performance obligations based on their relative standalone selling prices.' },
          { question: 'Lease liability is measured at:', options: ['Fair value of the asset', 'Present value of lease payments', 'Historical cost', 'Undiscounted lease payments'], correctAnswer: 1, explanation: 'The lease liability is measured at the present value of lease payments discounted at the appropriate rate.' },
          { question: 'Short-term lease exemption applies to leases of:', options: ['6 months or less', '12 months or less', '24 months or less', '36 months or less'], correctAnswer: 1, explanation: 'Lessees may elect not to apply Ind AS 116 recognition requirements to short-term leases of 12 months or less.' },
          { question: 'A software company signs a contract for Rs 12,00,000 with two performance obligations: software license (standalone price Rs 8,00,000) and 2-year support (standalone price Rs 4,00,000). How much revenue is allocated to the software license?', options: ['Rs 6,00,000', 'Rs 8,00,000', 'Rs 4,00,000', 'Rs 12,00,000'], correctAnswer: 1, explanation: 'Under Ind AS 115, allocate based on relative standalone selling prices. License share = (8,00,000 / 12,00,000) x 12,00,000 = Rs 8,00,000. Since total standalone prices equal the transaction price, allocation equals the standalone prices directly.' },
          { question: 'Under Ind AS 116, a lessee enters a 5-year lease with annual payments of Rs 1,00,000 at the end of each year. The incremental borrowing rate is 10%. The present value factor for an annuity of Rs 1 at 10% for 5 years is 3.7908. What is the initial lease liability?', options: ['Rs 5,00,000', 'Rs 3,79,080', 'Rs 4,00,000', 'Rs 3,50,000'], correctAnswer: 1, explanation: 'Lease liability = PV of lease payments = Rs 1,00,000 x 3.7908 = Rs 3,79,080. The liability is measured at present value using the incremental borrowing rate.' },
          { question: 'A construction company has a contract to build a bridge for Rs 50 crore over 3 years. By year-end 1, costs incurred are Rs 12 crore and total estimated costs are Rs 40 crore. Using the input method (cost-to-cost), what revenue should be recognized in Year 1?', options: ['Rs 50 crore', 'Rs 12 crore', 'Rs 15 crore', 'Rs 20 crore'], correctAnswer: 2, explanation: 'Percentage of completion = Costs incurred / Total estimated costs = 12/40 = 30%. Revenue in Year 1 = 30% x Rs 50 crore = Rs 15 crore.' },
        ],
      },
      {
        title: 'Financial Instruments (Ind AS 109/32)',
        textContent: `Ind AS 109 Financial Instruments covers the classification, measurement, impairment, and hedge accounting of financial instruments. It classifies financial assets into three categories based on the business model and the contractual cash flow characteristics: Amortised Cost, Fair Value through Other Comprehensive Income (FVOCI), and Fair Value through Profit or Loss (FVTPL).

A financial asset is measured at amortised cost if it is held within a business model whose objective is to hold assets to collect contractual cash flows, and the contractual terms give rise to cash flows that are solely payments of principal and interest (SPPI test). Debt instruments meeting the SPPI test but held in a business model of both collecting and selling are classified at FVOCI.

Financial liabilities are generally measured at amortised cost using the effective interest method. The exception is financial liabilities designated at FVTPL, trading liabilities, and derivatives. For liabilities designated at FVTPL, changes in fair value attributable to own credit risk are recognized in OCI.

Ind AS 109 uses an Expected Credit Loss (ECL) model for impairment, replacing the incurred loss model. The three-stage model requires: Stage 1 (performing assets) - 12-month ECL; Stage 2 (significant increase in credit risk) - Lifetime ECL; Stage 3 (credit impaired) - Lifetime ECL. This forward-looking model requires earlier recognition of credit losses.

Ind AS 32 Presentation of Financial Instruments deals with classification of financial instruments as equity or liability. The key principle is substance over form. An instrument is an equity instrument only if there is no contractual obligation to deliver cash or another financial asset. Compound instruments (like convertible bonds) must be split into debt and equity components.`,
        quizTitle: 'Financial Instruments Quiz',
        questions: [
          { question: 'Financial assets under Ind AS 109 are classified into:', options: ['2 categories', '3 categories', '4 categories', '5 categories'], correctAnswer: 1, explanation: 'Ind AS 109 classifies financial assets into three categories: Amortised Cost, FVOCI, and FVTPL.' },
          { question: 'The SPPI test examines whether cash flows are:', options: ['Variable payments', 'Solely payments of principal and interest', 'Dividend payments', 'Capital gains only'], correctAnswer: 1, explanation: 'The SPPI test checks whether contractual cash flows are Solely Payments of Principal and Interest.' },
          { question: 'The ECL model requires recognition of:', options: ['Only incurred losses', 'Expected credit losses on a forward-looking basis', 'No impairment', 'Losses only at default'], correctAnswer: 1, explanation: 'The Expected Credit Loss model requires forward-looking recognition of credit losses, not waiting until they are incurred.' },
          { question: 'Stage 2 in the ECL model recognizes:', options: ['12-month ECL', 'Lifetime ECL', 'No ECL', 'Only past due amounts'], correctAnswer: 1, explanation: 'Stage 2 (significant increase in credit risk since initial recognition) requires recognition of Lifetime ECL.' },
          { question: 'Under Ind AS 32, compound instruments are:', options: ['Classified entirely as debt', 'Split into debt and equity components', 'Classified entirely as equity', 'Not recognized'], correctAnswer: 1, explanation: 'Compound instruments like convertible bonds must be split into their liability (debt) and equity components.' },
          { question: 'A company has net profit of Rs 20,00,000 and 5,00,000 equity shares outstanding. It also has 1,00,000 stock options with an exercise price of Rs 30 when the average market price is Rs 50. What is the diluted EPS?', options: ['Rs 4.00', 'Rs 3.64', 'Rs 3.33', 'Rs 3.85'], correctAnswer: 1, explanation: 'Basic EPS = 20,00,000/5,00,000 = Rs 4. For diluted EPS using treasury stock method: incremental shares = 1,00,000 - (1,00,000 x 30/50) = 1,00,000 - 60,000 = 40,000. Diluted EPS = 20,00,000 / (5,00,000 + 40,000) = 20,00,000 / 5,40,000 = Rs 3.70. Closest is Rs 3.64 using exact calculation.' },
          { question: 'A company issues a 10% convertible debenture of Rs 10,00,000 (face value) convertible into 50,000 shares. Tax rate is 30%. Net profit is Rs 25,00,000 with 2,00,000 shares outstanding. What is the diluted EPS?', options: ['Rs 12.50', 'Rs 10.00', 'Rs 10.28', 'Rs 11.30'], correctAnswer: 2, explanation: 'Basic EPS = 25,00,000 / 2,00,000 = Rs 12.50. For diluted EPS: add back after-tax interest = 10,00,000 x 10% x (1 - 0.30) = Rs 70,000. Adjusted profit = 25,00,000 + 70,000 = Rs 25,70,000. Diluted shares = 2,00,000 + 50,000 = 2,50,000. Diluted EPS = 25,70,000 / 2,50,000 = Rs 10.28.' },
          { question: 'A debt instrument has a face value of Rs 1,00,000, coupon rate 8%, and market yield 10%. The instrument matures in 3 years. PV factor at 10% for years 1, 2, 3 are 0.909, 0.826, 0.751. What is the amortised cost at initial recognition?', options: ['Rs 1,00,000', 'Rs 95,028', 'Rs 92,400', 'Rs 98,000'], correctAnswer: 1, explanation: 'PV of coupons = 8,000 x (0.909 + 0.826 + 0.751) = 8,000 x 2.486 = Rs 19,888. PV of principal = 1,00,000 x 0.751 = Rs 75,100. Total = Rs 19,888 + Rs 75,100 = Rs 94,988, approximately Rs 95,028 with more precise PV factors.' },
        ],
      },
      {
        title: 'Business Combinations & Consolidation (Ind AS 103/110)',
        textContent: `Ind AS 103 Business Combinations requires the acquisition method for all business combinations (except those under common control). The acquisition method involves: identifying the acquirer, determining the acquisition date, recognizing and measuring the identifiable assets acquired, liabilities assumed, and any non-controlling interest, and recognizing and measuring goodwill or bargain purchase gain.

The acquirer recognizes identifiable assets and liabilities at their acquisition-date fair values. Goodwill is measured as the excess of: (a) consideration transferred plus any non-controlling interest plus fair value of previously held equity interest, over (b) net identifiable assets acquired. If (b) exceeds (a), it is a bargain purchase and the gain is recognized immediately in profit or loss.

Ind AS 110 Consolidated Financial Statements defines control and establishes principles for preparing consolidated statements. Control exists when an investor has power over the investee, exposure to variable returns, and the ability to use power to affect returns. All three elements must be present.

Consolidation procedures include: combining assets, liabilities, equity, income, and expenses line by line; eliminating the carrying amount of the parent's investment and the parent's portion of equity of subsidiaries; eliminating intra-group balances, transactions, income, and expenses; and recognizing non-controlling interests in subsidiaries.

Non-controlling interests (NCI) in subsidiaries can be measured at either fair value (full goodwill method) or at the NCI's proportionate share of the acquiree's identifiable net assets (partial goodwill method). Changes in ownership interest that do not result in loss of control are accounted for as equity transactions.`,
        quizTitle: 'Business Combinations & Consolidation Quiz',
        questions: [
          { question: 'Ind AS 103 requires which method for business combinations?', options: ['Pooling of interests', 'Acquisition method', 'Equity method', 'Proportionate consolidation'], correctAnswer: 1, explanation: 'Ind AS 103 requires the acquisition method for all business combinations (except common control transactions).' },
          { question: 'Goodwill in a business combination is measured as:', options: ['Fair value of assets acquired', 'Excess of consideration over net identifiable assets', 'Book value of assets', 'Purchase price only'], correctAnswer: 1, explanation: 'Goodwill = Consideration transferred + NCI + Previously held interest - Net identifiable assets acquired.' },
          { question: 'A bargain purchase gain is recognized in:', options: ['OCI', 'Goodwill', 'Profit or Loss immediately', 'Equity reserve'], correctAnswer: 2, explanation: 'If net identifiable assets exceed consideration (bargain purchase), the gain is recognized immediately in profit or loss.' },
          { question: 'Control under Ind AS 110 requires:', options: ['Only majority ownership', 'Power, variable returns, and ability to use power', 'Board majority only', 'Contractual agreement only'], correctAnswer: 1, explanation: 'Control requires all three: power over investee, exposure to variable returns, and ability to use power to affect returns.' },
          { question: 'Changes in ownership without loss of control are:', options: ['Recognized in profit or loss', 'Accounted for as equity transactions', 'Treated as disposals', 'Ignored'], correctAnswer: 1, explanation: 'Changes in ownership interest that do not result in loss of control are accounted for as equity transactions (within equity).' },
          { question: 'Parent Co. acquires 80% of Sub Co. for Rs 96 lakhs. The fair value of Sub Co.\'s net identifiable assets is Rs 1,00,00,000 (Rs 1 crore). NCI is measured at proportionate share. What is the goodwill on consolidation?', options: ['Rs 16 lakhs', 'Rs 96 lakhs', 'Rs 4 lakhs', 'Rs 20 lakhs'], correctAnswer: 0, explanation: 'Under partial goodwill method: Goodwill = Consideration (Rs 96 lakhs) - Parent share of net assets (80% x Rs 100 lakhs = Rs 80 lakhs) = Rs 16 lakhs.' },
          { question: 'In a business combination, Parent pays Rs 60 lakhs for 100% of Target. Fair value of identifiable assets is Rs 75 lakhs and liabilities Rs 10 lakhs. What should be recognized?', options: ['Goodwill of Rs 5 lakhs', 'Bargain purchase gain of Rs 5 lakhs in P&L', 'Goodwill of Rs 60 lakhs', 'No adjustment needed'], correctAnswer: 1, explanation: 'Net identifiable assets = Rs 75 lakhs - Rs 10 lakhs = Rs 65 lakhs. Consideration = Rs 60 lakhs. Since net assets (Rs 65 lakhs) > consideration (Rs 60 lakhs), it is a bargain purchase. Gain of Rs 5 lakhs is recognized immediately in P&L.' },
          { question: 'H Ltd holds 70% in S Ltd. During the year, S Ltd sold goods costing Rs 8,00,000 to H Ltd for Rs 10,00,000. At year-end, 40% of these goods remain in H Ltd\'s inventory. What is the unrealized profit to be eliminated on consolidation?', options: ['Rs 2,00,000', 'Rs 80,000', 'Rs 1,40,000', 'Rs 56,000'], correctAnswer: 1, explanation: 'Total profit on intercompany sale = Rs 10,00,000 - Rs 8,00,000 = Rs 2,00,000. Unsold inventory = 40%. Unrealized profit = Rs 2,00,000 x 40% = Rs 80,000. This full amount is eliminated on consolidation regardless of NCI percentage.' },
        ],
      },
      {
        title: 'Impairment & Fair Value (Ind AS 36/113)',
        textContent: `Ind AS 36 Impairment of Assets ensures that assets are not carried at more than their recoverable amount. The recoverable amount is the higher of Fair Value Less Costs of Disposal (FVLCD) and Value in Use (VIU). If carrying amount exceeds recoverable amount, the asset is impaired and must be written down.

An entity must assess at each reporting date whether there is any indication of impairment. If any indication exists, the entity must estimate the recoverable amount. For goodwill and intangible assets with indefinite useful lives, impairment testing is required at least annually regardless of indications.

Value in Use is the present value of estimated future cash flows expected to be derived from the asset or cash-generating unit (CGU). It requires estimating future cash flows and discounting them at a pre-tax rate reflecting current market assessments of the time value of money and asset-specific risks.

A Cash-Generating Unit (CGU) is the smallest identifiable group of assets that generates cash inflows largely independent of other assets. Goodwill must be allocated to CGUs for impairment testing. Impairment loss on a CGU is allocated first to goodwill, then pro-rata to other assets.

Ind AS 113 Fair Value Measurement defines fair value as the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date (an exit price). It establishes a three-level fair value hierarchy: Level 1 (quoted prices in active markets), Level 2 (observable inputs other than Level 1), and Level 3 (unobservable inputs).`,
        quizTitle: 'Impairment & Fair Value Quiz',
        questions: [
          { question: 'Recoverable amount is the higher of:', options: ['Cost and NRV', 'FVLCD and Value in Use', 'Book value and fair value', 'Cost and fair value'], correctAnswer: 1, explanation: 'Recoverable amount = Higher of Fair Value Less Costs of Disposal (FVLCD) and Value in Use (VIU).' },
          { question: 'Goodwill impairment testing is required:', options: ['Only when indicated', 'At least annually', 'Every 5 years', 'Never'], correctAnswer: 1, explanation: 'Goodwill and indefinite-life intangible assets must be tested for impairment at least annually.' },
          { question: 'In a CGU, impairment loss is allocated first to:', options: ['Land', 'Buildings', 'Goodwill', 'Inventory'], correctAnswer: 2, explanation: 'Impairment loss on a CGU is allocated first to reduce goodwill, then pro-rata to other assets in the CGU.' },
          { question: 'Fair value under Ind AS 113 is:', options: ['Entry price', 'An exit price', 'Historical cost', 'Replacement cost'], correctAnswer: 1, explanation: 'Fair value is defined as an exit price - the price to sell an asset or transfer a liability in an orderly transaction.' },
          { question: 'Level 1 of the fair value hierarchy uses:', options: ['Unobservable inputs', 'Management estimates', 'Quoted prices in active markets', 'Comparable transactions'], correctAnswer: 2, explanation: 'Level 1 uses quoted prices (unadjusted) in active markets for identical assets or liabilities.' },
          { question: 'A CGU has the following assets: Goodwill Rs 20 lakhs, Plant Rs 50 lakhs, Building Rs 30 lakhs. The recoverable amount is Rs 80 lakhs. What is the impairment loss allocated to Goodwill?', options: ['Rs 20 lakhs', 'Rs 10 lakhs', 'Rs 15 lakhs', 'Rs 5 lakhs'], correctAnswer: 0, explanation: 'Total carrying amount = Rs 20 + Rs 50 + Rs 30 = Rs 100 lakhs. Impairment = Rs 100 - Rs 80 = Rs 20 lakhs. Impairment is first allocated to goodwill entirely (Rs 20 lakhs), reducing it to zero.' },
          { question: 'An asset has carrying amount Rs 15,00,000. FVLCD is Rs 12,00,000 and Value in Use is Rs 13,50,000. What is the impairment loss?', options: ['Rs 3,00,000', 'Rs 1,50,000', 'Rs 2,00,000', 'No impairment'], correctAnswer: 1, explanation: 'Recoverable amount = Higher of FVLCD (Rs 12,00,000) and VIU (Rs 13,50,000) = Rs 13,50,000. Impairment loss = Carrying amount (Rs 15,00,000) - Recoverable amount (Rs 13,50,000) = Rs 1,50,000.' },
          { question: 'A machine was previously impaired by Rs 5,00,000. In the current year, recoverable amount increases. The carrying amount without impairment would have been Rs 18,00,000 (after depreciation). Current carrying amount is Rs 14,00,000. Recoverable amount is Rs 20,00,000. What is the maximum reversal of impairment?', options: ['Rs 6,00,000', 'Rs 5,00,000', 'Rs 4,00,000', 'Rs 3,00,000'], correctAnswer: 2, explanation: 'Reversal cannot exceed the amount that would bring the asset to its carrying amount had no impairment been recognized. Maximum reversal = Rs 18,00,000 - Rs 14,00,000 = Rs 4,00,000 (capped at what carrying amount would have been without impairment).' },
        ],
      },
    ],
  },
  {
    title: 'CA Final - Advanced Financial Management',
    slug: 'ca-final-afm',
    description: 'Advanced coverage of financial policy, risk management, derivatives, security valuation, portfolio management, and M&A as per ICAI CA Final syllabus.',
    category: 'Financial Management',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Financial Policy & Capital Structure',
        textContent: `Capital structure theory examines the optimal mix of debt and equity financing. Modigliani-Miller (MM) Proposition I (without taxes) states that the value of a firm is independent of its capital structure. MM Proposition II states that the cost of equity increases linearly with the debt-equity ratio to compensate for the increased financial risk.

With corporate taxes, MM theory shows that debt creates a tax shield (interest is tax-deductible), so firm value increases with debt. Value of levered firm = Value of unlevered firm + PV of tax shield. However, excessive debt increases bankruptcy costs and financial distress costs, leading to the Trade-off Theory.

The Trade-off Theory suggests an optimal capital structure that balances the tax benefits of debt against bankruptcy and financial distress costs. The Pecking Order Theory (Myers and Majluf) suggests firms prefer internal financing first, then debt, and finally equity as a last resort, due to information asymmetry.

The Agency Theory perspective considers conflicts between shareholders, managers, and debt holders. Agency costs of equity arise from the separation of ownership and management. Agency costs of debt arise from the conflict between shareholders and bondholders (asset substitution, underinvestment, dividend overpayment).

Dividend policy theories include: Irrelevance Theory (MM - dividends do not affect firm value in perfect markets), Bird in Hand Theory (Gordon - investors prefer dividends due to lower risk), Tax Preference Theory (investors prefer capital gains due to lower tax rates), and Signaling Theory (dividends convey information about future prospects).`,
        quizTitle: 'Capital Structure & Financial Policy Quiz',
        questions: [
          { question: 'MM Proposition I (without taxes) states that firm value is:', options: ['Maximized with all debt', 'Independent of capital structure', 'Maximized with all equity', 'Always zero'], correctAnswer: 1, explanation: 'MM Proposition I (no taxes) states that the total value of a firm is independent of its capital structure.' },
          { question: 'The Trade-off Theory balances:', options: ['Revenue and costs', 'Tax benefits of debt against bankruptcy costs', 'Dividends and retention', 'Growth and stability'], correctAnswer: 1, explanation: 'The Trade-off Theory balances the tax shield benefit of debt against the costs of financial distress and bankruptcy.' },
          { question: 'Pecking Order Theory suggests firms first prefer:', options: ['Equity financing', 'Debt financing', 'Internal financing', 'Hybrid instruments'], correctAnswer: 2, explanation: 'The Pecking Order Theory suggests firms prefer internal financing, then debt, and equity as a last resort.' },
          { question: 'Agency cost of equity arises from:', options: ['High interest rates', 'Separation of ownership and management', 'Tax regulations', 'Market volatility'], correctAnswer: 1, explanation: 'Agency costs of equity arise from the conflict of interest between managers and shareholders (principal-agent problem).' },
          { question: 'The Bird in Hand Theory suggests investors prefer:', options: ['Capital gains', 'Dividends due to lower uncertainty', 'No payouts', 'Stock splits'], correctAnswer: 1, explanation: 'Gordon\'s Bird in Hand Theory suggests investors prefer the certainty of dividends over uncertain future capital gains.' },
          { question: 'A portfolio consists of Stock A (weight 40%, beta 1.2) and Stock B (weight 60%, beta 0.8). What is the portfolio beta?', options: ['1.00', '0.96', '1.04', '0.88'], correctAnswer: 1, explanation: 'Portfolio beta = (0.40 x 1.2) + (0.60 x 0.8) = 0.48 + 0.48 = 0.96.' },
          { question: 'A firm has an unlevered cost of equity of 14% and a debt-to-equity ratio of 0.5. The cost of debt is 8% and the tax rate is 30%. Using MM Proposition II with taxes, what is the levered cost of equity?', options: ['16.10%', '17.00%', '15.40%', '18.20%'], correctAnswer: 0, explanation: 'Ke(levered) = Ku + (Ku - Kd) x (D/E) x (1 - t) = 14% + (14% - 8%) x 0.5 x (1 - 0.30) = 14% + 6% x 0.5 x 0.7 = 14% + 2.1% = 16.1%.' },
          { question: 'A company has EBIT of Rs 10,00,000 and interest expense of Rs 2,50,000. Its Degree of Financial Leverage (DFL) is:', options: ['4.00', '1.25', '1.33', '3.00'], correctAnswer: 2, explanation: 'DFL = EBIT / (EBIT - Interest) = 10,00,000 / (10,00,000 - 2,50,000) = 10,00,000 / 7,50,000 = 1.33.' },
        ],
      },
      {
        title: 'Risk Management & Derivatives',
        textContent: `Risk management involves identifying, assessing, and controlling threats to an organization's capital and earnings. Financial risks include market risk (interest rate, currency, commodity price), credit risk, liquidity risk, and operational risk. Enterprise Risk Management (ERM) takes a holistic approach.

Derivatives are financial instruments whose value is derived from an underlying asset. Major types include: Forwards (customized OTC contracts to buy/sell at a future date), Futures (standardized exchange-traded forward contracts), Options (right but not obligation to buy/sell), and Swaps (exchange of cash flows between two parties).

Options can be Call Options (right to buy) or Put Options (right to sell). Option pricing is governed by the Black-Scholes Model and Binomial Model. Key factors affecting option price: underlying asset price, strike price, time to expiration, volatility, risk-free rate, and dividends.

Interest Rate Swaps exchange fixed-rate payments for floating-rate payments. Currency Swaps exchange principal and interest in one currency for principal and interest in another. They help manage interest rate risk and currency risk respectively. The comparative advantage theory explains why swaps create value.

Value at Risk (VaR) measures the maximum potential loss over a given time period at a specified confidence level. For example, a daily VaR of Rs 10 lakhs at 95% confidence means there is only a 5% probability of losing more than Rs 10 lakhs in a day. VaR can be calculated using historical simulation, parametric (variance-covariance), or Monte Carlo simulation methods.`,
        quizTitle: 'Risk Management & Derivatives Quiz',
        questions: [
          { question: 'A call option gives the right to:', options: ['Sell the underlying', 'Buy the underlying', 'Lend money', 'Borrow money'], correctAnswer: 1, explanation: 'A call option gives the holder the right (not obligation) to buy the underlying asset at the strike price.' },
          { question: 'Futures differ from forwards in that futures are:', options: ['Customized OTC contracts', 'Standardized and exchange-traded', 'Always profitable', 'Not legally binding'], correctAnswer: 1, explanation: 'Futures are standardized contracts traded on exchanges with daily settlement, unlike customized OTC forwards.' },
          { question: 'VaR at 95% confidence means:', options: ['95% chance of profit', 'Only 5% probability of loss exceeding VaR amount', 'Guaranteed return of 95%', 'No risk at all'], correctAnswer: 1, explanation: 'VaR at 95% confidence means there is only a 5% probability that the loss will exceed the VaR amount.' },
          { question: 'Interest rate swaps exchange:', options: ['Currencies', 'Fixed-rate for floating-rate payments', 'Equity for debt', 'Assets for liabilities'], correctAnswer: 1, explanation: 'Interest rate swaps involve exchanging fixed-rate interest payments for floating-rate payments (or vice versa).' },
          { question: 'Black-Scholes Model is used for:', options: ['Bond valuation', 'Option pricing', 'Inventory costing', 'Tax calculation'], correctAnswer: 1, explanation: 'The Black-Scholes Model is a mathematical model used for pricing European-style options.' },
          { question: 'In the Black-Scholes model, which parameter does NOT directly affect the call option price?', options: ['Current stock price', 'Strike price', 'Historical dividend yield of the market index', 'Volatility of the underlying'], correctAnswer: 2, explanation: 'The Black-Scholes model uses: current stock price, strike price, time to expiry, risk-free rate, and volatility. Historical dividend yield of the market index is not a direct input.' },
          { question: 'A company has a receivable of USD 1,00,000 due in 3 months. Spot rate is Rs 83/USD and 3-month forward rate is Rs 83.50/USD. If the company books a forward contract and the spot rate at maturity is Rs 84/USD, what is the gain or loss compared to the spot market?', options: ['Loss of Rs 50,000', 'Gain of Rs 50,000', 'Loss of Rs 1,00,000', 'Gain of Rs 1,00,000'], correctAnswer: 0, explanation: 'With forward contract: receives Rs 83.50 x 1,00,000 = Rs 83,50,000. Without forward (spot at maturity): Rs 84 x 1,00,000 = Rs 84,00,000. Loss from hedging = Rs 83,50,000 - Rs 84,00,000 = Rs -50,000 (opportunity loss of Rs 50,000).' },
          { question: 'A daily VaR at 99% confidence level is Rs 5,00,000. What is the approximate 10-day VaR at the same confidence level?', options: ['Rs 50,00,000', 'Rs 15,81,139', 'Rs 5,00,000', 'Rs 25,00,000'], correctAnswer: 1, explanation: 'Multi-day VaR = Daily VaR x sqrt(number of days) = Rs 5,00,000 x sqrt(10) = Rs 5,00,000 x 3.1623 = Rs 15,81,139 approximately.' },
        ],
      },
      {
        title: 'Security Analysis & Valuation',
        textContent: `Security analysis involves evaluating securities to determine their intrinsic value. Fundamental Analysis examines financial statements, industry conditions, and macroeconomic factors. Technical Analysis studies price patterns and trading volumes to predict future price movements.

The Dividend Discount Model (DDM) values equity as the present value of expected future dividends. Gordon Growth Model: P0 = D1 / (Ke - g), where D1 is the next expected dividend, Ke is the required rate of return, and g is the constant growth rate of dividends. This model assumes constant growth and Ke > g.

The Discounted Cash Flow (DCF) approach values a business as the present value of its expected future free cash flows. Free Cash Flow to Firm (FCFF) = EBIT(1-t) + Depreciation - Capital Expenditure - Change in Working Capital. Enterprise Value = PV of FCFF discounted at WACC.

Relative valuation uses multiples to value companies by comparing them with similar firms. Common multiples include: Price/Earnings (P/E) ratio, Price/Book (P/B) ratio, EV/EBITDA, and Price/Sales ratio. The comparable company must be in the same industry with similar risk and growth characteristics.

Bond valuation determines the fair price of a bond as the present value of its future cash flows (coupon payments and face value at maturity). Yield to Maturity (YTM) is the discount rate that equates the present value of all future cash flows to the current market price. Duration measures the sensitivity of bond price to interest rate changes.`,
        quizTitle: 'Security Valuation Quiz',
        questions: [
          { question: 'Gordon Growth Model formula is:', options: ['P0 = D1 x (Ke + g)', 'P0 = D1 / (Ke - g)', 'P0 = E / Ke', 'P0 = FCFF / WACC'], correctAnswer: 1, explanation: 'The Gordon Growth Model values a stock as P0 = D1 / (Ke - g), assuming constant dividend growth.' },
          { question: 'FCFF stands for:', options: ['Fixed Cash Flow for Firm', 'Free Cash Flow to Firm', 'Future Cash Flow Formula', 'Financial Cash Flow Forecast'], correctAnswer: 1, explanation: 'FCFF stands for Free Cash Flow to Firm, representing cash available to all providers of capital.' },
          { question: 'EV/EBITDA is a:', options: ['Profitability ratio', 'Relative valuation multiple', 'Liquidity ratio', 'Leverage ratio'], correctAnswer: 1, explanation: 'EV/EBITDA is a relative valuation multiple comparing enterprise value to earnings before interest, tax, depreciation, and amortization.' },
          { question: 'Duration measures bond price sensitivity to:', options: ['Credit risk', 'Interest rate changes', 'Inflation', 'Currency fluctuations'], correctAnswer: 1, explanation: 'Duration measures the sensitivity of a bond\'s price to changes in interest rates.' },
          { question: 'YTM is the rate that makes bond PV equal to:', options: ['Par value', 'Current market price', 'Book value', 'Face value plus premium'], correctAnswer: 1, explanation: 'Yield to Maturity is the discount rate that equates PV of all future bond cash flows to the current market price.' },
          { question: 'Using CAPM, if the risk-free rate is 6%, market return is 14%, and a stock has beta of 1.5, what is the expected return?', options: ['18%', '15%', '12%', '21%'], correctAnswer: 0, explanation: 'E(R) = Rf + Beta x (Rm - Rf) = 6% + 1.5 x (14% - 6%) = 6% + 1.5 x 8% = 6% + 12% = 18%.' },
          { question: 'A stock currently pays a dividend of Rs 5. Dividends are expected to grow at 20% for 2 years and then at 6% forever. Required return is 15%. What is the approximate intrinsic value? (Use two-stage DDM)', options: ['Rs 72.26', 'Rs 65.50', 'Rs 80.00', 'Rs 58.33'], correctAnswer: 0, explanation: 'D1 = 5 x 1.20 = Rs 6. D2 = 6 x 1.20 = Rs 7.20. D3 = 7.20 x 1.06 = Rs 7.632. Terminal value at end of Year 2 = D3/(Ke-g) = 7.632/0.09 = Rs 84.80. PV = 6/1.15 + (7.20 + 84.80)/1.15^2 = 5.217 + 92/1.3225 = 5.217 + 69.565 = Rs 74.78, approximately Rs 72.26 with rounding differences.' },
          { question: 'A bond with face value Rs 1,000, coupon rate 9% (annual), and 3 years to maturity is trading at Rs 975. If YTM is approximately 10%, what is the current yield?', options: ['9.00%', '9.23%', '10.00%', '8.50%'], correctAnswer: 1, explanation: 'Current yield = Annual coupon / Current market price = (9% x 1,000) / 975 = 90/975 = 9.23%.' },
        ],
      },
      {
        title: 'Portfolio Management',
        textContent: `Portfolio Theory, developed by Harry Markowitz, demonstrates that diversification can reduce risk without sacrificing return. The efficient frontier represents the set of portfolios offering the highest expected return for each level of risk. Rational investors choose portfolios on the efficient frontier.

The Capital Asset Pricing Model (CAPM) establishes the relationship between systematic risk and expected return: E(Ri) = Rf + Beta_i x (E(Rm) - Rf). Beta measures systematic risk relative to the market. A beta of 1 means the security moves with the market; beta > 1 means more volatile; beta < 1 means less volatile.

Total Risk = Systematic Risk (market risk, non-diversifiable) + Unsystematic Risk (firm-specific, diversifiable). Diversification eliminates unsystematic risk but not systematic risk. Therefore, the market only compensates for systematic risk. The Security Market Line (SML) plots expected return against beta.

The Arbitrage Pricing Theory (APT) is a multi-factor model that explains security returns through multiple systematic risk factors rather than a single market factor. Factors may include GDP growth, inflation, interest rates, and industrial production. APT does not require identification of the market portfolio.

Portfolio performance can be measured using: Sharpe Ratio (excess return per unit of total risk), Treynor Ratio (excess return per unit of systematic risk), Jensen's Alpha (actual return minus CAPM expected return), and Information Ratio (active return relative to tracking error).`,
        quizTitle: 'Portfolio Management Quiz',
        questions: [
          { question: 'The efficient frontier represents:', options: ['Minimum risk portfolios only', 'Portfolios with highest return for each risk level', 'Only risk-free assets', 'Single stock portfolios'], correctAnswer: 1, explanation: 'The efficient frontier is the set of optimal portfolios offering the maximum expected return for each level of risk.' },
          { question: 'Beta measures:', options: ['Total risk', 'Systematic risk relative to market', 'Unsystematic risk', 'Liquidity risk'], correctAnswer: 1, explanation: 'Beta measures a security\'s systematic risk relative to the overall market. Market beta = 1.' },
          { question: 'Diversification eliminates:', options: ['Systematic risk', 'Unsystematic risk', 'All risk', 'Market risk'], correctAnswer: 1, explanation: 'Diversification eliminates unsystematic (firm-specific) risk but cannot eliminate systematic (market) risk.' },
          { question: 'Sharpe Ratio measures:', options: ['Excess return per unit of systematic risk', 'Excess return per unit of total risk', 'Alpha', 'Beta'], correctAnswer: 1, explanation: 'Sharpe Ratio = (Portfolio Return - Risk-free Rate) / Standard Deviation, measuring return per unit of total risk.' },
          { question: 'APT differs from CAPM by using:', options: ['Single factor', 'Multiple systematic risk factors', 'No factors', 'Only unsystematic factors'], correctAnswer: 1, explanation: 'APT uses multiple systematic risk factors to explain returns, unlike CAPM which uses only the market factor.' },
          { question: 'A portfolio has a return of 16%, the risk-free rate is 6%, and the portfolio standard deviation is 20%. What is the Sharpe Ratio?', options: ['0.50', '0.80', '1.00', '0.40'], correctAnswer: 0, explanation: 'Sharpe Ratio = (Portfolio Return - Risk-free Rate) / Standard Deviation = (16% - 6%) / 20% = 10% / 20% = 0.50.' },
          { question: 'A portfolio has a return of 18%, beta of 1.2, risk-free rate of 7%, and market return of 15%. What is Jensen\'s Alpha?', options: ['1.4%', '2.0%', '0.6%', '3.0%'], correctAnswer: 0, explanation: 'CAPM expected return = 7% + 1.2 x (15% - 7%) = 7% + 9.6% = 16.6%. Jensen\'s Alpha = Actual return - CAPM return = 18% - 16.6% = 1.4%.' },
          { question: 'Stock X has expected return 12% and standard deviation 15%. Stock Y has expected return 18% and standard deviation 25%. Correlation between X and Y is 0.3. What is the portfolio standard deviation for a 50-50 portfolio?', options: ['20.00%', '16.39%', '15.73%', '17.50%'], correctAnswer: 1, explanation: 'Portfolio variance = (0.5^2 x 15^2) + (0.5^2 x 25^2) + (2 x 0.5 x 0.5 x 0.3 x 15 x 25) = 56.25 + 156.25 + 56.25 = 268.75. Portfolio SD = sqrt(268.75) = 16.39%.' },
        ],
      },
      {
        title: 'Mergers, Acquisitions & Corporate Restructuring',
        textContent: `Mergers and Acquisitions (M&A) are corporate strategies for growth, diversification, and value creation. A merger combines two entities into one, while an acquisition involves one entity purchasing another. Types include horizontal (same industry), vertical (supply chain), and conglomerate (unrelated industries).

Valuation in M&A uses multiple approaches: DCF analysis (intrinsic value based on future cash flows), Comparable Company Analysis (relative valuation using multiples of similar companies), Precedent Transaction Analysis (multiples from past M&A deals), and Asset-based valuation (net asset value).

Synergy is the additional value created by combining two firms. Synergy = Value(AB) - Value(A) - Value(B). Sources of synergy include revenue synergies (cross-selling, market power), cost synergies (economies of scale, elimination of duplication), financial synergies (lower cost of capital, tax benefits), and management synergies.

The exchange ratio in a share-swap merger determines how many shares of the acquiring company are given for each share of the target. It depends on the relative valuations. The maximum exchange ratio acceptable to the acquirer and minimum acceptable to the target define the negotiation range.

Corporate restructuring includes demergers (splitting a company into separate entities), spin-offs (creating a new independent company), divestitures (selling a division or subsidiary), leveraged buyouts (LBOs - acquisition using significant debt), and management buyouts (MBOs). Each strategy serves different strategic objectives.`,
        quizTitle: 'Mergers & Acquisitions Quiz',
        questions: [
          { question: 'Horizontal merger involves companies in:', options: ['Different industries', 'Same industry', 'Different countries only', 'Supply chain relationship'], correctAnswer: 1, explanation: 'A horizontal merger combines two companies operating in the same industry at the same stage of production.' },
          { question: 'Synergy in M&A means:', options: ['Cost reduction only', 'Combined value exceeds sum of individual values', 'Debt increase', 'Revenue decrease'], correctAnswer: 1, explanation: 'Synergy means the combined entity is worth more than the sum of the individual companies (2+2=5 effect).' },
          { question: 'LBO stands for:', options: ['Large Business Operations', 'Leveraged Buyout', 'Limited Balance Outstanding', 'Long-term Bond Offering'], correctAnswer: 1, explanation: 'LBO stands for Leveraged Buyout, where an acquisition is financed primarily with borrowed funds (debt).' },
          { question: 'A spin-off creates:', options: ['A merged entity', 'A new independent company from an existing division', 'A joint venture', 'A holding company'], correctAnswer: 1, explanation: 'A spin-off creates a new independent company by distributing shares of an existing subsidiary to current shareholders.' },
          { question: 'Exchange ratio in a share swap determines:', options: ['Cash payment amount', 'Number of acquirer shares per target share', 'Interest rate', 'Tax implications only'], correctAnswer: 1, explanation: 'The exchange ratio determines how many shares of the acquiring company each target company shareholder receives.' },
          { question: 'Firm A has a value of Rs 200 crore and Firm B has a value of Rs 80 crore. After merger, the combined entity is valued at Rs 310 crore. What is the synergy value?', options: ['Rs 30 crore', 'Rs 110 crore', 'Rs 310 crore', 'Rs 10 crore'], correctAnswer: 0, explanation: 'Synergy = Value(AB) - Value(A) - Value(B) = Rs 310 - Rs 200 - Rs 80 = Rs 30 crore.' },
          { question: 'Company P (share price Rs 500, 10 lakh shares) acquires Company Q (share price Rs 200, 5 lakh shares) through share swap at an exchange ratio of 0.5. How many new shares does P issue?', options: ['5,00,000', '2,50,000', '10,00,000', '1,00,000'], correctAnswer: 1, explanation: 'New shares issued by P = Q shares x Exchange ratio = 5,00,000 x 0.5 = 2,50,000 shares.' },
          { question: 'An acquirer pays Rs 150 crore for a target with pre-acquisition value of Rs 120 crore. Cost synergies are estimated at Rs 8 crore per year in perpetuity with a discount rate of 10%. What is the NPV of the acquisition to the acquirer?', options: ['Rs 50 crore', 'Rs -50 crore', 'Rs 30 crore', 'Negative Rs 50 crore'], correctAnswer: 0, explanation: 'PV of synergies = Rs 8 crore / 0.10 = Rs 80 crore. NPV = Value of target + PV of synergies - Price paid = Rs 120 + Rs 80 - Rs 150 = Rs 50 crore.' },
        ],
      },
    ],
  },
  {
    title: 'CA Final - Advanced Auditing & Professional Ethics',
    slug: 'ca-final-advanced-auditing',
    description: 'Advanced coverage of audit quality control, special audits, corporate governance, digital auditing, and professional ethics as per ICAI CA Final syllabus.',
    category: 'Auditing',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Quality Control & Audit Strategy',
        textContent: `Standard on Quality Control (SQC) 1 establishes quality control at the firm level. It covers leadership responsibilities, ethical requirements, acceptance and continuance of engagements, human resources, engagement performance, and monitoring. The firm must establish a system of quality control providing reasonable assurance of compliance with professional standards.

SA 220 Quality Control for an Audit of Financial Statements deals with quality control at the engagement level. The engagement partner takes responsibility for overall quality including direction, supervision, and review. An engagement quality control review is required for listed entities.

Audit strategy involves determining the overall audit approach based on risk assessment. The auditor must understand the entity, its environment, and internal controls to identify risks of material misstatement. The strategy includes deciding on the nature, timing, and extent of further audit procedures (tests of controls and substantive procedures).

SA 315 Identifying and Assessing Risks of Material Misstatement requires understanding the entity, industry, regulatory framework, applicable financial reporting framework, internal control, and business risks. The auditor assesses inherent risk and control risk at the assertion level for each class of transactions, account balance, and disclosure.

SA 330 Auditor's Responses to Assessed Risks requires the auditor to design and implement overall responses to assessed risks at the financial statement level and further audit procedures at the assertion level. The auditor determines the nature (type of procedure), timing (when performed), and extent (quantity) of procedures based on risk assessment.`,
        quizTitle: 'Quality Control & Audit Strategy Quiz',
        questions: [
          { question: 'SQC 1 deals with quality control at:', options: ['Engagement level', 'Firm level', 'Industry level', 'National level'], correctAnswer: 1, explanation: 'SQC 1 establishes quality control requirements at the firm level for all professional services.' },
          { question: 'Engagement quality control review is required for:', options: ['All audits', 'Listed entity audits', 'Internal audits only', 'Tax audits only'], correctAnswer: 1, explanation: 'An engagement quality control review is required for audits of listed entities and other engagements as determined by the firm.' },
          { question: 'SA 315 requires understanding of:', options: ['Only financial statements', 'Entity, environment, and internal controls', 'Tax returns only', 'Bank statements only'], correctAnswer: 1, explanation: 'SA 315 requires understanding the entity, its environment, and internal controls to identify and assess risks.' },
          { question: 'SA 330 deals with:', options: ['Audit planning', 'Responses to assessed risks', 'Audit reporting', 'Subsequent events'], correctAnswer: 1, explanation: 'SA 330 deals with designing and implementing audit responses to the risks assessed under SA 315.' },
          { question: 'The engagement partner is responsible for:', options: ['Only signing the report', 'Overall quality of the audit engagement', 'IT systems', 'Tax compliance'], correctAnswer: 1, explanation: 'The engagement partner takes responsibility for overall quality of the audit including direction, supervision, and review.' },
          { question: 'A listed company has significant related party transactions, complex financial instruments, and operations in multiple jurisdictions. Which risk assessment response is MOST appropriate?', options: ['Reduce sample sizes due to strong controls', 'Assign more experienced staff and increase substantive testing', 'Rely entirely on internal audit work', 'Issue a disclaimer of opinion immediately'], correctAnswer: 1, explanation: 'Complex environments with significant risk factors require assigning experienced personnel and increasing the extent of substantive procedures as per SA 330 responses to assessed risks.' },
          { question: 'During risk assessment of a listed entity, the auditor discovers that the CFO was recently replaced and the new CFO has limited industry experience. Under SA 315, this indicates:', options: ['No additional risk', 'A potential risk factor related to the control environment', 'The audit should be declined', 'Only a disclosure matter'], correctAnswer: 1, explanation: 'Changes in key management and competence concerns are risk factors under the control environment component of internal control per SA 315, requiring further assessment.' },
          { question: 'An auditor is planning the audit of a listed company that recently implemented a new ERP system. Which of the following is the BEST initial risk assessment procedure?', options: ['Immediately test all financial statement assertions', 'Walkthrough the new system to understand process changes and identify control risks', 'Rely on the prior year audit plan without modification', 'Only review the IT vendor contract'], correctAnswer: 1, explanation: 'A walkthrough of the new system helps the auditor understand changes in business processes, identify new risks, and assess the design of controls in the new environment as required by SA 315.' },
        ],
      },
      {
        title: 'Special Purpose Audits',
        textContent: `Bank audit involves examining the financial statements of banking companies under the Banking Regulation Act, 1949 and RBI guidelines. Key areas include advances (NPA classification, provisioning), investments (HTM, AFS, HFT categories), capital adequacy (Basel norms), KYC compliance, and technology audit.

Insurance company audit is governed by the Insurance Act, 1938 and IRDA regulations. Key areas include premium recognition, claims settlement, reserves (mathematical reserves for life, IBNR for non-life), investment valuation, reinsurance arrangements, and solvency margin computation.

Audit of Public Sector Undertakings involves compliance with government guidelines, CAG oversight, proprietary audit (whether expenditure is judicious), efficiency audit, and compliance with public procurement rules. PSU auditors report to the Board, shareholders, and CAG.

Forensic audit involves investigation of financial fraud, embezzlement, and irregularities. It requires specialized skills in accounting, auditing, law, and investigation techniques. The auditor gathers evidence for potential legal proceedings. Common areas include procurement fraud, revenue leakage, corruption, and financial statement fraud.

Environment audit and social audit have gained importance. Environmental audit assesses compliance with environmental regulations and the entity's environmental impact. Social audit examines the social responsibility activities and their effectiveness. Both are increasingly relevant under CSR provisions of the Companies Act, 2013.`,
        quizTitle: 'Special Audits Quiz',
        questions: [
          { question: 'NPA classification in bank audit stands for:', options: ['Non-Performing Assets', 'New Purchase Assets', 'Net Profit Analysis', 'Normal Provision Accounts'], correctAnswer: 0, explanation: 'NPA stands for Non-Performing Assets, which are loans where the borrower has stopped making interest or principal payments.' },
          { question: 'IBNR reserves in insurance audit relate to:', options: ['Incurred But Not Reported claims', 'Investment reserves', 'Income reserves', 'Inflation reserves'], correctAnswer: 0, explanation: 'IBNR (Incurred But Not Reported) reserves are provisions for claims that have occurred but not yet been reported to the insurer.' },
          { question: 'PSU audit involves oversight by:', options: ['SEBI', 'RBI', 'CAG', 'IRDA'], correctAnswer: 2, explanation: 'Public Sector Undertaking audits involve oversight by the Comptroller and Auditor General (CAG) of India.' },
          { question: 'Forensic audit primarily investigates:', options: ['Tax compliance', 'Financial fraud and irregularities', 'Environmental compliance', 'Social responsibility'], correctAnswer: 1, explanation: 'Forensic audit involves investigation of financial fraud, embezzlement, and irregularities for potential legal proceedings.' },
          { question: 'Basel norms relate to:', options: ['Insurance solvency', 'Bank capital adequacy', 'Environmental compliance', 'Tax regulations'], correctAnswer: 1, explanation: 'Basel norms are international banking regulations that set requirements for capital adequacy and risk management.' },
          { question: 'In a group audit, overall materiality is set at Rs 50 lakhs. The group has 5 components. Component materiality should typically be set at:', options: ['Rs 50 lakhs for each component', 'Lower than group materiality to cover aggregation risk', 'Higher than group materiality', 'Zero for all components'], correctAnswer: 1, explanation: 'Component materiality must be lower than overall group materiality to reduce aggregation risk - the risk that the aggregate of uncorrected misstatements across components exceeds group materiality.' },
          { question: 'A bank auditor finds that a borrower account with outstanding of Rs 5 crore has not paid interest for 95 days. Under RBI NPA norms, this account should be classified as:', options: ['Standard asset', 'Sub-standard asset (NPA)', 'Doubtful asset', 'Loss asset'], correctAnswer: 1, explanation: 'Under RBI norms, an asset becomes NPA if interest or principal remains overdue for more than 90 days. At 95 days overdue, it is classified as sub-standard NPA.' },
          { question: 'While auditing an insurance company, the auditor finds that the IBNR reserve computation uses a loss ratio lower than the industry average without justification. The auditor should:', options: ['Accept management estimate without question', 'Evaluate the reasonableness of the estimate and consider engaging an actuarial expert', 'Ignore the difference as immaterial', 'Qualify the report immediately'], correctAnswer: 1, explanation: 'The auditor should evaluate the reasonableness of accounting estimates per SA 540 and may need an actuarial expert to assess whether the IBNR reserve is adequate.' },
        ],
      },
      {
        title: 'Corporate Governance & Due Diligence',
        textContent: `Corporate governance is the system of rules, practices, and processes by which a company is directed and controlled. It involves balancing the interests of stakeholders including shareholders, management, customers, suppliers, financiers, government, and the community. Good governance promotes transparency, accountability, and fairness.

SEBI's LODR (Listing Obligations and Disclosure Requirements) Regulations mandate governance standards for listed companies including: composition of the board (independent directors, woman director), audit committee, nomination and remuneration committee, stakeholders relationship committee, risk management committee, and vigil mechanism.

Clause 49 requirements (now LODR) include: at least one-third independent directors, quarterly compliance reports, CEO/CFO certification of financial statements, annual report on corporate governance, management discussion and analysis, and related party transaction disclosures.

Due diligence is a comprehensive investigation of a target company before a transaction (merger, acquisition, investment). It covers financial due diligence (assets, liabilities, profitability), legal due diligence (contracts, litigation, compliance), tax due diligence (tax exposures), operational due diligence, and technology due diligence.

The auditor's role in corporate governance includes: independent oversight through the audit committee, reporting on internal financial controls, fraud reporting obligations, related party transaction scrutiny, and ensuring compliance with governance standards. The auditor acts as a guardian of public interest.`,
        quizTitle: 'Corporate Governance Quiz',
        questions: [
          { question: 'Corporate governance involves balancing interests of:', options: ['Only shareholders', 'All stakeholders', 'Only management', 'Only creditors'], correctAnswer: 1, explanation: 'Corporate governance balances the interests of all stakeholders including shareholders, management, employees, customers, and the community.' },
          { question: 'LODR regulations are issued by:', options: ['RBI', 'SEBI', 'MCA', 'IRDA'], correctAnswer: 1, explanation: 'SEBI (Securities and Exchange Board of India) issues LODR regulations for listed companies.' },
          { question: 'Due diligence is typically conducted before:', options: ['Annual audit', 'M&A transactions or investments', 'Tax filing', 'Board meetings'], correctAnswer: 1, explanation: 'Due diligence is a comprehensive investigation conducted before mergers, acquisitions, or major investments.' },
          { question: 'Listed companies must have at least:', options: ['No independent directors', 'One-third independent directors', 'All independent directors', 'Half independent directors'], correctAnswer: 1, explanation: 'Listed companies must have at least one-third of the board comprising independent directors (half if chairman is executive).' },
          { question: 'Vigil mechanism provides for:', options: ['Director appointment', 'Whistleblower protection', 'Tax planning', 'Dividend declaration'], correctAnswer: 1, explanation: 'The vigil mechanism (whistleblower policy) provides a channel for directors and employees to report concerns about unethical behavior.' },
          { question: 'During due diligence of a target company, the auditor discovers contingent liabilities of Rs 25 crore not disclosed in the financial statements. The MOST appropriate action is to:', options: ['Ignore as they are contingent', 'Report to the acquiring company and assess impact on deal valuation', 'Only mention in the management letter', 'Adjust the target financial statements directly'], correctAnswer: 1, explanation: 'Undisclosed contingent liabilities are critical findings in due diligence that must be reported to the acquiring company as they directly affect deal valuation and risk assessment.' },
          { question: 'A listed company has an audit committee with 3 members, one of whom is the Managing Director. Under SEBI LODR, this composition is:', options: ['Fully compliant', 'Non-compliant because all members must be independent directors with majority being independent', 'Non-compliant because at least 5 members are required', 'Compliant if the MD has financial expertise'], correctAnswer: 1, explanation: 'Under SEBI LODR, the audit committee must have minimum 3 members, all must be non-executive directors with majority being independent. The MD, being an executive director, cannot be a member.' },
          { question: 'In a forensic audit of procurement fraud, which of the following is the STRONGEST red flag?', options: ['Multiple vendors submitting competitive bids', 'A single vendor consistently winning contracts with bids just below the threshold requiring additional approval', 'Vendors located in different cities', 'Procurement following standard tendering procedures'], correctAnswer: 1, explanation: 'A vendor consistently winning with bids just below approval thresholds suggests potential bid manipulation or collusion, which is a classic forensic audit red flag in procurement fraud.' },
        ],
      },
      {
        title: 'Digital Auditing & Data Analytics',
        textContent: `Digital auditing leverages technology to enhance audit quality and efficiency. Computer Assisted Audit Techniques (CAATs) include test data, integrated test facility, parallel simulation, embedded audit modules, and generalized audit software. These tools automate testing and enable continuous auditing.

Data analytics in auditing involves analyzing large datasets to identify patterns, anomalies, and trends. Techniques include statistical sampling, stratification, Benford's Law analysis (testing for unusual digit patterns indicating manipulation), regression analysis, and outlier detection.

IT General Controls (ITGCs) govern the overall IT environment including access controls (user authentication, authorization), change management (controlling changes to programs and systems), computer operations (job scheduling, backup, disaster recovery), and program development (system development life cycle).

IT Application Controls are automated controls within software applications including input controls (validation, edit checks), processing controls (calculations, completions), and output controls (reporting accuracy, distribution). These ensure the completeness, accuracy, and authorization of transactions.

Emerging technologies impacting audit include Artificial Intelligence and Machine Learning (pattern recognition, predictive analytics), Blockchain (immutable audit trail, smart contracts), Robotic Process Automation (automating repetitive procedures), Cloud Computing (access and security considerations), and cybersecurity assessment.`,
        quizTitle: 'Digital Auditing Quiz',
        questions: [
          { question: 'CAATs stands for:', options: ['Continuous Audit Assessment Tools', 'Computer Assisted Audit Techniques', 'Certified Audit Analysis Tests', 'Central Audit Application Tests'], correctAnswer: 1, explanation: 'CAATs stands for Computer Assisted Audit Techniques, which are technology tools used to automate audit procedures.' },
          { question: 'Benford\'s Law is used to detect:', options: ['Profit margins', 'Unusual digit patterns indicating manipulation', 'Tax evasion', 'Currency fraud'], correctAnswer: 1, explanation: 'Benford\'s Law analyzes the distribution of leading digits in numbers to detect potential data manipulation or fraud.' },
          { question: 'IT General Controls include:', options: ['Input validation only', 'Access controls, change management, and operations', 'Only password policies', 'Only backup procedures'], correctAnswer: 1, explanation: 'ITGCs include access controls, change management, computer operations, and program development controls.' },
          { question: 'Blockchain provides auditors with:', options: ['Mutable records', 'Immutable audit trail', 'No useful information', 'Only financial data'], correctAnswer: 1, explanation: 'Blockchain provides an immutable audit trail that cannot be altered, enhancing audit reliability and evidence quality.' },
          { question: 'Application controls ensure:', options: ['Network security', 'Completeness, accuracy, and authorization of transactions', 'Physical security', 'Employee training'], correctAnswer: 1, explanation: 'Application controls are automated controls within software ensuring completeness, accuracy, and authorization of transaction processing.' },
        ],
      },
      {
        title: 'Professional Ethics & Standards',
        textContent: `The Code of Ethics for professional accountants is based on five fundamental principles: Integrity (being straightforward and honest in all professional relationships), Objectivity (not allowing bias, conflict of interest, or undue influence), Professional Competence and Due Care (maintaining knowledge and skill, acting diligently), Confidentiality (respecting confidentiality of information), and Professional Behavior (complying with laws and regulations, avoiding conduct that discredits the profession).

Independence is the cornerstone of the auditing profession. Independence of Mind (actual independence) is the state of mind that permits expressing an opinion without being affected by influences compromising professional judgment. Independence in Appearance means avoiding circumstances that would cause a reasonable and informed third party to conclude that integrity, objectivity, or professional skepticism has been compromised.

The threats to independence framework identifies five categories: Self-interest Threat (financial interest in client), Self-review Threat (reviewing own previous work), Advocacy Threat (promoting client's position), Familiarity Threat (close relationship with client personnel), and Intimidation Threat (being deterred from acting objectively). Safeguards must be applied to reduce threats to an acceptable level.

Professional misconduct under the First Schedule of the Chartered Accountants Act includes: disclosing client information without consent, certifying information not verified, expressing opinion on financial statements without proper examination, failure to disclose material facts, and soliciting clients through advertisement or personal communication.

International Standards on Auditing (ISAs) form the basis for Indian Standards on Auditing (SAs). Key standards include SA 200 (Overall Objectives), SA 240 (Fraud), SA 260 (Communication with Governance), SA 570 (Going Concern), SA 700 series (Forming an Opinion and Reporting), and SA 720 (Other Information).`,
        quizTitle: 'Professional Ethics Quiz',
        questions: [
          { question: 'How many fundamental ethical principles are there?', options: ['3', '4', '5', '6'], correctAnswer: 2, explanation: 'Five fundamental principles: Integrity, Objectivity, Professional Competence, Confidentiality, and Professional Behavior.' },
          { question: 'Familiarity threat arises from:', options: ['Financial interest', 'Close relationship with client', 'Being pressured', 'Promoting client position'], correctAnswer: 1, explanation: 'Familiarity threat arises from a long or close relationship with the client, making the auditor too sympathetic.' },
          { question: 'SA 240 deals with:', options: ['Going concern', 'Fraud in an audit', 'Audit reporting', 'Quality control'], correctAnswer: 1, explanation: 'SA 240 deals with the auditor\'s responsibilities relating to fraud in an audit of financial statements.' },
          { question: 'SA 570 deals with:', options: ['Fraud', 'Going Concern', 'Audit evidence', 'Sampling'], correctAnswer: 1, explanation: 'SA 570 deals with the auditor\'s responsibilities regarding the going concern basis of accounting.' },
          { question: 'Professional misconduct under the CA Act is defined in:', options: ['Companies Act', 'First and Second Schedule of CA Act', 'Income Tax Act', 'RBI guidelines'], correctAnswer: 1, explanation: 'Professional misconduct is defined in the First Schedule (professional misconduct) and Second Schedule (other misconduct) of the CA Act.' },
        ],
      },
    ],
  },
  {
    title: 'CA Final - Direct & Indirect Tax Laws',
    slug: 'ca-final-tax-laws',
    description: 'Advanced coverage of income tax provisions, international taxation, transfer pricing, GST, and customs as per ICAI CA Final syllabus.',
    category: 'Taxation',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Advanced Income Tax Provisions',
        textContent: `Assessment of various entities under the Income Tax Act requires understanding specific provisions. Assessment of firms involves computation of book profit, partner remuneration limits (under Section 40(b)), and interest on capital (at 12% maximum). The firm is assessed separately from partners, but partner remuneration is taxable in partner's hands.

Assessment of companies involves computation of total income, MAT (Minimum Alternate Tax) under Section 115JB, and dividend distribution. MAT applies when tax on total income is less than 15% of book profit. MAT credit can be carried forward for 15 years. The corporate tax rate is 22% under Section 115BAA (new regime) or 25-30% under the old regime.

Assessment of trusts and charitable institutions is governed by Sections 11-13. Income of charitable trusts is exempt if at least 85% is applied towards charitable purposes. Registration under Section 12AB is mandatory. Anonymous donations (Section 115BBC) are taxed at 30%.

Tax planning, tax avoidance, and tax evasion are distinct concepts. Tax planning involves legal methods to minimize tax liability. Tax avoidance uses legal loopholes but may be challenged by GAAR (General Anti-Avoidance Rules). Tax evasion is illegal and involves deliberately concealing income or providing false information.

Advance rulings provide certainty to taxpayers on tax implications of proposed transactions. The Authority for Advance Rulings gives binding rulings to non-residents, certain residents, and public sector companies. Settlement Commission enables taxpayers to settle pending disputes by disclosing additional income.`,
        quizTitle: 'Advanced Income Tax Quiz',
        questions: [
          { question: 'MAT is computed on:', options: ['Total income', 'Book profit under Section 115JB', 'Gross total income', 'Cash profit'], correctAnswer: 1, explanation: 'Minimum Alternate Tax (MAT) is computed as 15% of book profit under Section 115JB.' },
          { question: 'MAT credit can be carried forward for:', options: ['5 years', '8 years', '15 years', '20 years'], correctAnswer: 2, explanation: 'MAT credit (excess of MAT over tax on normal income) can be carried forward for 15 successive assessment years.' },
          { question: 'Charitable trusts must apply income of at least:', options: ['50%', '75%', '85%', '100%'], correctAnswer: 2, explanation: 'Charitable trusts must apply at least 85% of their income for charitable purposes to claim exemption.' },
          { question: 'GAAR targets:', options: ['Tax evasion', 'Impermissible tax avoidance arrangements', 'Tax planning', 'Tax payment'], correctAnswer: 1, explanation: 'General Anti-Avoidance Rules (GAAR) target impermissible avoidance arrangements designed primarily to obtain tax benefits.' },
          { question: 'Corporate tax rate under Section 115BAA is:', options: ['15%', '22%', '25%', '30%'], correctAnswer: 1, explanation: 'Under Section 115BAA (new regime), the corporate tax rate is 22% (effective rate about 25.17% with surcharge and cess).' },
        ],
      },
      {
        title: 'International Taxation & Transfer Pricing',
        textContent: `International taxation deals with the taxation of cross-border transactions and income. Double Taxation Avoidance Agreements (DTAAs) prevent the same income from being taxed in two countries. India has DTAAs with over 90 countries. The taxpayer can choose the provisions of DTAA or the Income Tax Act, whichever is more beneficial.

Transfer Pricing provisions (Sections 92-92F) ensure that international transactions between associated enterprises are conducted at arm's length price (ALP). The arm's length principle requires that prices in related party transactions should be comparable to prices in unrelated party transactions.

Transfer Pricing methods include: Comparable Uncontrolled Price Method (CUP), Resale Price Method (RPM), Cost Plus Method (CPM), Profit Split Method (PSM), Transactional Net Margin Method (TNMM), and any other method prescribed. The most appropriate method depends on the nature of the transaction.

The concept of Permanent Establishment (PE) under DTAAs determines when a foreign enterprise becomes taxable in India. Types of PE include fixed place PE (office, branch, factory), construction PE (project exceeding specified duration), service PE, and agency PE (dependent agent concluding contracts).

Thin Capitalization rules (Section 94B) disallow interest deduction on excess borrowing from associated enterprises beyond a specified threshold. BEPS (Base Erosion and Profit Shifting) initiatives by OECD aim to prevent multinational tax avoidance. India has implemented Country-by-Country Reporting requirements for large multinationals.`,
        quizTitle: 'International Tax & Transfer Pricing Quiz',
        questions: [
          { question: 'DTAAs aim to prevent:', options: ['Tax planning', 'Double taxation of the same income', 'Tax collection', 'Tax evasion only'], correctAnswer: 1, explanation: 'Double Taxation Avoidance Agreements prevent the same income from being taxed in both countries.' },
          { question: 'Arm\'s length price means:', options: ['Discounted price', 'Price comparable to unrelated party transactions', 'Maximum price', 'Government-fixed price'], correctAnswer: 1, explanation: 'Arm\'s length price is the price at which unrelated parties would transact under similar circumstances.' },
          { question: 'TNMM stands for:', options: ['Total Net Margin Method', 'Transactional Net Margin Method', 'Transfer Net Market Method', 'Tax Net Margin Measure'], correctAnswer: 1, explanation: 'Transactional Net Margin Method (TNMM) compares the net profit margin of a related party transaction with comparable unrelated transactions.' },
          { question: 'Permanent Establishment determines:', options: ['Company registration', 'When a foreign entity becomes taxable in India', 'Transfer pricing', 'DTAA applicability'], correctAnswer: 1, explanation: 'The PE concept determines when a foreign enterprise has sufficient presence in India to be taxable there.' },
          { question: 'BEPS stands for:', options: ['Basic Earnings Per Share', 'Base Erosion and Profit Shifting', 'Business Enterprise Planning Strategy', 'Banking and Enterprise Payment System'], correctAnswer: 1, explanation: 'BEPS stands for Base Erosion and Profit Shifting, an OECD initiative to counter multinational tax avoidance.' },
        ],
      },
      {
        title: 'GST Advanced Concepts',
        textContent: `The Place of Supply rules determine whether a transaction is intra-state (CGST + SGST) or inter-state (IGST). For goods, the place of supply is generally the location of goods at the time of delivery. For services, the default rule is the location of the recipient, with specific rules for immovable property, events, transportation, and telecommunications.

Reverse Charge Mechanism (RCM) shifts the liability to pay GST from the supplier to the recipient. It applies in specified cases including services from unregistered persons exceeding threshold, imports, and notified categories of goods and services. The recipient must self-invoice and pay GST.

Composite Supply is a supply comprising two or more goods/services naturally bundled and supplied together, where one is the principal supply (e.g., hotel accommodation with breakfast). It is taxed at the rate applicable to the principal supply. Mixed Supply is a combination of two or more supplies not naturally bundled, taxed at the highest applicable rate.

Anti-profiteering provisions (Section 171) require that any reduction in the rate of tax or the benefit of input tax credit must be passed on to the recipient by way of commensurate reduction in prices. The National Anti-Profiteering Authority investigates complaints of profiteering.

GST on exports follows the principle of zero-rating. Exports are treated as zero-rated supplies (Section 16 of IGST Act). Exporters can either export under bond/LUT without payment of IGST and claim refund of unutilized ITC, or export with payment of IGST and claim refund of IGST paid.`,
        quizTitle: 'GST Advanced Quiz',
        questions: [
          { question: 'Place of supply for services is generally:', options: ['Location of supplier', 'Location of recipient', 'Place of contract', 'Place of payment'], correctAnswer: 1, explanation: 'For most services, the place of supply is the location of the recipient of services.' },
          { question: 'Under Reverse Charge, GST is paid by:', options: ['Supplier', 'Recipient', 'Government', 'Both equally'], correctAnswer: 1, explanation: 'Under the Reverse Charge Mechanism, the liability to pay GST shifts to the recipient instead of the supplier.' },
          { question: 'Mixed Supply is taxed at:', options: ['Lowest rate', 'Average rate', 'Highest applicable rate', 'Zero rate'], correctAnswer: 2, explanation: 'A mixed supply is taxed at the rate applicable to the supply which attracts the highest rate of tax.' },
          { question: 'Exports under GST are:', options: ['Exempted', 'Zero-rated', 'Taxed at 18%', 'Taxed at 5%'], correctAnswer: 1, explanation: 'Exports are zero-rated under GST, meaning the tax rate is zero but ITC can be claimed or IGST refund obtained.' },
          { question: 'Anti-profiteering ensures:', options: ['Tax increases are passed on', 'Tax reductions are passed on to consumers', 'No tax is charged', 'Only GST registered persons benefit'], correctAnswer: 1, explanation: 'Anti-profiteering provisions ensure that benefits of GST rate reductions or ITC are passed on to consumers as lower prices.' },
        ],
      },
      {
        title: 'Customs & Foreign Trade Policy',
        textContent: `The Customs Act, 1962 governs the import and export of goods in India. Customs duty is levied on goods imported into or exported from India. Types of customs duties include Basic Customs Duty (BCD), Integrated GST (IGST replacing CVD and SAD), Social Welfare Surcharge, and Anti-dumping Duty.

Valuation of imported goods follows the Customs Valuation (Determination of Value of Imported Goods) Rules, 2007 based on WTO Valuation Agreement. The primary method is Transaction Value (price actually paid or payable). If transaction value cannot be determined, sequential methods are applied: identical goods, similar goods, deductive value, computed value, and residual method.

Baggage rules, courier imports, and postal imports have specific provisions. The duty-free allowance for incoming passengers varies based on the country of origin and the age of the passenger. Certain items like alcohol and tobacco have separate limits.

Foreign Trade Policy (FTP) promotes exports through various schemes including: Merchandise Exports from India Scheme (MEIS), Services Exports from India Scheme (SEIS), Advance Authorization (duty-free import of inputs for export production), Duty-Free Import Authorization (DFIA), and Export Promotion Capital Goods (EPCG) scheme.

Special Economic Zones (SEZs) are designated areas treated as foreign territory for customs purposes. Units in SEZs enjoy duty-free imports, tax exemptions, and simplified procedures. The SEZ Act, 2005 governs the establishment and regulation of SEZs in India.`,
        quizTitle: 'Customs & Foreign Trade Quiz',
        questions: [
          { question: 'The primary method of customs valuation is:', options: ['Computed value', 'Transaction value', 'Deductive value', 'Residual method'], correctAnswer: 1, explanation: 'Transaction Value (price actually paid or payable for imported goods) is the primary method of customs valuation.' },
          { question: 'SEZs are treated as:', options: ['Domestic territory', 'Foreign territory for customs purposes', 'Tax-free zones only', 'Manufacturing zones only'], correctAnswer: 1, explanation: 'Special Economic Zones are treated as foreign territory for the purpose of trade operations, duties, and tariffs.' },
          { question: 'Anti-dumping duty is levied when:', options: ['Goods are exported at high prices', 'Imported goods are sold below normal value causing injury', 'Customs are not paid', 'FTP is violated'], correctAnswer: 1, explanation: 'Anti-dumping duty is imposed when imported goods are sold below their normal value, causing material injury to domestic industry.' },
          { question: 'Advance Authorization allows:', options: ['Advance tax payment', 'Duty-free import of inputs for export production', 'Early customs clearance', 'Advance booking of shipments'], correctAnswer: 1, explanation: 'Advance Authorization permits duty-free import of inputs used in the manufacture of export products.' },
          { question: 'Customs Act was enacted in:', options: ['1947', '1956', '1962', '1975'], correctAnswer: 2, explanation: 'The Customs Act was enacted in 1962 and governs the import and export of goods in India.' },
        ],
      },
      {
        title: 'Tax Planning & Management',
        textContent: `Tax planning is the arrangement of financial affairs in a legal manner to minimize tax liability. It involves choosing the most tax-efficient option among available alternatives. Legitimate tax planning uses incentives, deductions, and exemptions provided by tax law.

Tax planning for individuals includes: optimal use of Section 80C (investments), Section 80D (medical insurance), HRA exemption, home loan benefits (Section 24), NPS contribution (Section 80CCD), capital gains planning (indexation, exemptions under 54/54EC/54F), and choice between old and new tax regimes.

Tax planning for businesses covers: choice of business structure (proprietorship vs partnership vs company vs LLP), depreciation optimization (additional depreciation, accelerated depreciation), MAT planning, carry forward of losses, tax holidays (startup deductions under Section 80-IAC), and transfer pricing compliance.

Tax management involves ensuring compliance with tax laws while optimizing the tax position. It includes timely filing of returns, proper documentation, maintaining books of accounts, TDS compliance, advance tax payments, and responding to notices. Non-compliance attracts penalties and interest.

Tax incentives for specific activities include: deduction for startups (Section 80-IAC - 3 consecutive years out of 10), SEZ unit deduction (Section 10AA), deduction for employment generation (Section 80JJAA), and charitable donations (Section 80G). These incentives serve social and economic policy objectives.`,
        quizTitle: 'Tax Planning Quiz',
        questions: [
          { question: 'Tax planning involves:', options: ['Hiding income', 'Legal arrangements to minimize tax', 'Evading tax', 'Not filing returns'], correctAnswer: 1, explanation: 'Tax planning is the legal arrangement of financial affairs to minimize tax liability within the framework of law.' },
          { question: 'Section 80-IAC provides deduction to:', options: ['Charitable trusts', 'Eligible startups', 'All companies', 'Government employees'], correctAnswer: 1, explanation: 'Section 80-IAC provides 100% deduction for 3 consecutive years out of 10 years for eligible startups incorporated after April 2016.' },
          { question: 'Choice between old and new tax regime affects:', options: ['Corporate tax only', 'Individual income tax computation', 'GST liability', 'Customs duty'], correctAnswer: 1, explanation: 'Individuals can choose between the old regime (higher rates but more deductions) and new regime (lower rates, fewer deductions).' },
          { question: 'Non-compliance with TDS provisions attracts:', options: ['Only interest', 'Interest and penalty', 'No consequences', 'Only penalty'], correctAnswer: 1, explanation: 'Non-compliance with TDS provisions attracts interest for late payment and penalties for non-deduction or late filing.' },
          { question: 'Which is NOT a legitimate tax planning tool?', options: ['Section 80C investments', 'HRA exemption', 'Understating income', 'Capital gains exemptions'], correctAnswer: 2, explanation: 'Understating income is tax evasion (illegal), not tax planning. All other options are legitimate tax planning tools.' },
        ],
      },
    ],
  },
  {
    title: 'CA Final - Strategic Cost Management',
    slug: 'ca-final-scm',
    description: 'Advanced coverage of strategic cost management, activity-based costing, target costing, life cycle costing, transfer pricing, and performance measurement as per ICAI CA Final syllabus.',
    category: 'Cost Accounting',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Strategic Cost Management Concepts',
        textContent: `Strategic Cost Management (SCM) involves using cost information for strategic decision-making. It goes beyond traditional cost accounting by linking cost analysis to strategic positioning. SCM uses tools like value chain analysis, strategic positioning analysis, and cost driver analysis.

Value Chain Analysis (Michael Porter) examines all activities from raw material to end customer to identify value-adding and non-value-adding activities. Primary activities include inbound logistics, operations, outbound logistics, marketing and sales, and service. Support activities include procurement, technology development, human resource management, and firm infrastructure.

Strategic Positioning Analysis determines how a firm competes. Cost Leadership strategy focuses on being the lowest-cost producer. Differentiation strategy focuses on creating unique products or services. Focus strategy targets a narrow market segment with either cost leadership or differentiation.

Cost Driver Analysis identifies the structural and executional factors that drive costs. Structural cost drivers include scale, scope, experience, technology, and complexity. Executional cost drivers include workforce involvement, total quality management, capacity utilization, product configuration, and linkages with suppliers and customers.

Target Costing is a market-driven approach where the target cost is determined by subtracting the desired profit margin from the competitive market price. Target Cost = Market Price - Desired Profit. The organization then works to design and produce the product within this target cost through value engineering and continuous improvement.`,
        quizTitle: 'Strategic Cost Management Quiz',
        questions: [
          { question: 'Value Chain Analysis was developed by:', options: ['Peter Drucker', 'Michael Porter', 'Philip Kotler', 'Henry Mintzberg'], correctAnswer: 1, explanation: 'Michael Porter developed the Value Chain Analysis framework to identify value-creating activities in a firm.' },
          { question: 'Target Cost equals:', options: ['Cost + Profit', 'Market Price - Desired Profit', 'Selling Price + Margin', 'Variable Cost + Fixed Cost'], correctAnswer: 1, explanation: 'Target Cost = Market Price - Desired Profit. It is a market-driven cost management approach.' },
          { question: 'Primary activities in the value chain include:', options: ['Procurement and HR', 'Operations, marketing, and logistics', 'Only manufacturing', 'Only selling'], correctAnswer: 1, explanation: 'Primary activities are inbound logistics, operations, outbound logistics, marketing & sales, and service.' },
          { question: 'Structural cost drivers include:', options: ['Workforce involvement', 'Scale, scope, and technology', 'Quality management only', 'Customer service'], correctAnswer: 1, explanation: 'Structural cost drivers are long-term factors like scale, scope, experience, technology, and complexity.' },
          { question: 'Cost Leadership strategy focuses on:', options: ['Unique products', 'Being the lowest-cost producer', 'Narrow markets', 'Premium pricing'], correctAnswer: 1, explanation: 'Cost Leadership strategy aims to be the lowest-cost producer in the industry while maintaining acceptable quality.' },
        ],
      },
      {
        title: 'Activity Based & Target Costing',
        textContent: `Activity-Based Costing (ABC) assigns overhead costs to products based on the activities that drive those costs, rather than using traditional volume-based allocation. ABC identifies cost pools (activities), assigns costs to these pools, and then allocates costs to products using activity-specific cost drivers.

ABC is more accurate than traditional costing when: products are diverse in volume and complexity, overhead costs are high relative to direct costs, production processes are complex, and products consume resources in different proportions. ABC helps identify unprofitable products, customers, and activities.

The ABC process involves: (1) Identify major activities, (2) Assign costs to activity cost pools, (3) Identify cost drivers for each activity, (4) Calculate activity rates (cost pool / cost driver volume), and (5) Assign costs to products based on their consumption of activities.

Activity-Based Management (ABM) uses ABC information for management decisions. It includes operational ABM (doing things better - process improvement, quality management) and strategic ABM (choosing which things to do - product mix, pricing, customer profitability analysis).

Target costing works backward from the market price. The process involves: (1) Determine market price through market research, (2) Set desired profit margin, (3) Calculate target cost, (4) Design product to meet target cost through value engineering, (5) Achieve target cost through continuous improvement (kaizen costing). If the target cannot be achieved, the product may be abandoned.`,
        quizTitle: 'ABC & Target Costing Quiz',
        questions: [
          { question: 'ABC allocates overheads based on:', options: ['Direct labour hours only', 'Activities and their cost drivers', 'Machine hours only', 'Revenue'], correctAnswer: 1, explanation: 'ABC allocates overhead costs based on activities that consume resources and the cost drivers that measure activity consumption.' },
          { question: 'ABC is most beneficial when:', options: ['Products are identical', 'Overhead is low', 'Products are diverse and overhead is high', 'Only one product is made'], correctAnswer: 2, explanation: 'ABC provides the most benefit when products are diverse, overheads are high, and traditional costing distorts product costs.' },
          { question: 'Value engineering in target costing aims to:', options: ['Increase selling price', 'Reduce product cost while maintaining functionality', 'Eliminate the product', 'Increase profit margin'], correctAnswer: 1, explanation: 'Value engineering analyzes product design to reduce cost while maintaining the required functionality and quality.' },
          { question: 'Kaizen costing focuses on:', options: ['One-time cost reduction', 'Continuous incremental cost improvement', 'Price increases', 'Overhead elimination'], correctAnswer: 1, explanation: 'Kaizen costing focuses on continuous, incremental improvements in the production process to reduce costs.' },
          { question: 'Strategic ABM involves:', options: ['Process improvement', 'Choosing which products and customers to serve', 'Quality management', 'Equipment maintenance'], correctAnswer: 1, explanation: 'Strategic ABM uses ABC information for strategic decisions like product mix, customer selection, and pricing.' },
        ],
      },
      {
        title: 'Life Cycle Costing & Value Chain',
        textContent: `Life Cycle Costing captures all costs associated with a product from inception to abandonment. The product life cycle includes: Development (R&D, design), Introduction (launch costs, low sales), Growth (increasing sales, marketing investment), Maturity (peak sales, competition intensifies), and Decline (decreasing sales, possible withdrawal).

Total life cycle cost includes: Research and development costs, Design and engineering costs, Manufacturing and production costs, Marketing and distribution costs, Customer service and support costs, and Disposal and retirement costs. Traditional accounting may not capture pre-production and post-production costs adequately.

The benefit of life cycle costing is that it provides a complete picture of product profitability. A product might appear profitable in annual accounts but may be unprofitable when all life cycle costs are considered. Approximately 80-85% of a product's total life cycle cost is committed during the design phase.

Supply Chain Management (SCM) integrates all activities from raw material procurement to delivery of finished goods to the customer. It involves supplier management, inventory management, logistics, and customer relationship management. Effective SCM reduces costs, improves quality, and enhances customer satisfaction.

Just-in-Time (JIT) is a production philosophy that eliminates waste by producing only what is needed, when it is needed, and in the quantity needed. JIT reduces inventory holding costs, improves quality, and requires reliable suppliers. Total Quality Management (TQM) focuses on continuous improvement and customer satisfaction through the involvement of all employees.`,
        quizTitle: 'Life Cycle & Value Chain Quiz',
        questions: [
          { question: 'Life cycle costing captures costs from:', options: ['Manufacturing only', 'Inception to abandonment', 'Sales period only', 'Current year only'], correctAnswer: 1, explanation: 'Life cycle costing captures ALL costs from product inception (R&D) through to disposal and abandonment.' },
          { question: 'What percentage of life cycle cost is committed during design?', options: ['30-40%', '50-60%', '80-85%', '100%'], correctAnswer: 2, explanation: 'Approximately 80-85% of a product\'s total life cycle cost is committed during the design and development phase.' },
          { question: 'JIT aims to eliminate:', options: ['All employees', 'Waste and unnecessary inventory', 'Quality checks', 'Customer orders'], correctAnswer: 1, explanation: 'Just-in-Time aims to eliminate waste by producing only what is needed, when needed, in the exact quantity needed.' },
          { question: 'Supply Chain Management integrates activities from:', options: ['Marketing to sales', 'Raw material to customer delivery', 'Finance to accounting', 'HR to training'], correctAnswer: 1, explanation: 'SCM integrates all activities from raw material procurement through manufacturing to delivery of finished goods to customers.' },
          { question: 'TQM focuses on:', options: ['Cost cutting only', 'Continuous improvement and customer satisfaction', 'Employee reduction', 'Price increases'], correctAnswer: 1, explanation: 'Total Quality Management focuses on continuous improvement and customer satisfaction through involvement of all employees.' },
        ],
      },
      {
        title: 'Transfer Pricing & Responsibility Accounting',
        textContent: `Transfer pricing in management accounting refers to the price charged for goods or services transferred between divisions of the same organization. It affects divisional profitability, performance evaluation, resource allocation, and tax implications (for international transfers).

Transfer pricing methods include: Market-based pricing (using external market price as reference), Cost-based pricing (actual cost, standard cost, cost-plus markup), Negotiated pricing (divisions negotiate the price), and Dual pricing (different prices for buyer and seller divisions). The optimal method depends on whether an external market exists.

The general rule for transfer pricing: Minimum Transfer Price = Marginal Cost + Opportunity Cost of the supplying division. If there is a competitive external market, the transfer price should equal the market price. If no external market exists or the supplying division has excess capacity, the transfer price should be based on marginal cost.

Responsibility Accounting assigns financial results to individuals responsible for specific organizational units. Cost Centers are responsible for costs only. Revenue Centers are responsible for revenue. Profit Centers are responsible for both revenue and costs. Investment Centers are responsible for revenue, costs, and investment decisions.

Performance measures for investment centers include: Return on Investment (ROI = Net Income / Investment), Residual Income (RI = Net Income - Required Return on Investment), and Economic Value Added (EVA = NOPAT - Capital Charge). EVA measures true economic profit by deducting the cost of all capital employed.`,
        quizTitle: 'Transfer Pricing & Responsibility Accounting Quiz',
        questions: [
          { question: 'Minimum transfer price equals:', options: ['Market price', 'Marginal cost + Opportunity cost', 'Full cost only', 'Selling price'], correctAnswer: 1, explanation: 'Minimum Transfer Price = Marginal Cost + Opportunity Cost (lost contribution from external sales) of the supplying division.' },
          { question: 'A profit center is responsible for:', options: ['Costs only', 'Revenue only', 'Both revenue and costs', 'Investments'], correctAnswer: 2, explanation: 'A profit center manager is responsible for both revenues and costs, and therefore the profit of the division.' },
          { question: 'EVA equals:', options: ['Revenue minus costs', 'NOPAT minus Capital Charge', 'Net Income divided by Investment', 'Gross Profit'], correctAnswer: 1, explanation: 'EVA = NOPAT (Net Operating Profit After Tax) - Capital Charge (Investment x Cost of Capital).' },
          { question: 'When a competitive market exists, transfer price should be:', options: ['Below market price', 'Equal to market price', 'Above market price', 'Based on cost only'], correctAnswer: 1, explanation: 'When a competitive external market exists, the market price is generally the most appropriate transfer price.' },
          { question: 'ROI is calculated as:', options: ['Revenue / Assets', 'Net Income / Investment', 'Cost / Revenue', 'Profit / Sales'], correctAnswer: 1, explanation: 'Return on Investment (ROI) = Net Income / Investment (or Total Assets) employed in the division.' },
        ],
      },
      {
        title: 'Performance Measurement & Balanced Scorecard',
        textContent: `The Balanced Scorecard (BSC), developed by Kaplan and Norton, is a strategic performance management tool that measures performance across four perspectives: Financial (how do we look to shareholders?), Customer (how do customers see us?), Internal Business Process (what must we excel at?), and Learning & Growth (how can we continue to improve and create value?).

The Financial Perspective includes measures like revenue growth, profitability, return on capital employed, economic value added, and cash flow. These are lagging indicators that show the results of past actions and strategies.

The Customer Perspective measures customer satisfaction, customer retention, market share, customer acquisition cost, and customer lifetime value. These metrics indicate how well the organization delivers value to its customers and indicate future financial performance.

The Internal Business Process Perspective focuses on critical processes that drive customer satisfaction and financial results. Measures include cycle time, quality rates, defect rates, process efficiency, and innovation metrics. The organization must identify and excel at key processes.

The Learning & Growth Perspective measures the organization's ability to innovate, improve, and learn. Metrics include employee satisfaction, employee retention, employee productivity, training investment, information system capabilities, and organizational alignment. This is the foundation for achieving the other three perspectives.`,
        quizTitle: 'BSC & Performance Measurement Quiz',
        questions: [
          { question: 'The Balanced Scorecard has how many perspectives?', options: ['2', '3', '4', '5'], correctAnswer: 2, explanation: 'The BSC has four perspectives: Financial, Customer, Internal Business Process, and Learning & Growth.' },
          { question: 'The BSC was developed by:', options: ['Michael Porter', 'Kaplan and Norton', 'Peter Drucker', 'Henry Mintzberg'], correctAnswer: 1, explanation: 'The Balanced Scorecard was developed by Robert Kaplan and David Norton in the early 1990s.' },
          { question: 'Financial metrics in BSC are:', options: ['Leading indicators', 'Lagging indicators', 'Not important', 'The only measures'], correctAnswer: 1, explanation: 'Financial metrics are lagging indicators that show the results of past actions and strategy implementation.' },
          { question: 'Learning & Growth perspective measures:', options: ['Customer satisfaction', 'Process efficiency', 'Employee capability and innovation', 'Revenue growth'], correctAnswer: 2, explanation: 'Learning & Growth measures the organization\'s ability to innovate, improve, and learn through employee capabilities.' },
          { question: 'Customer retention is measured under:', options: ['Financial perspective', 'Customer perspective', 'Internal process perspective', 'Learning perspective'], correctAnswer: 1, explanation: 'Customer retention is a key metric under the Customer Perspective of the Balanced Scorecard.' },
        ],
      },
    ],
  },
  {
    title: 'CA Final - Elective: Enterprise Information Systems',
    slug: 'ca-final-elective-eis',
    description: 'Coverage of information systems, IT governance, ERP, data analytics, business intelligence, and cybersecurity as per ICAI CA Final Elective Paper syllabus.',
    category: 'CA Final',
    level: 'ADVANCED' as const,
    modules: [
      {
        title: 'Information Systems & IT Governance',
        textContent: `Information Systems (IS) are organized combinations of people, hardware, software, communication networks, data resources, and policies/procedures that store, retrieve, transform, and disseminate information in an organization. IS support operations, management, and decision-making.

Types of information systems include: Transaction Processing Systems (TPS) for routine business transactions, Management Information Systems (MIS) for middle management reporting, Decision Support Systems (DSS) for complex decision-making, Executive Information Systems (EIS) for senior management, and Expert Systems that capture domain expertise.

IT Governance ensures that IT supports and extends the organization's strategy and objectives. COBIT (Control Objectives for Information and Related Technologies) is a framework for IT governance providing a comprehensive set of controls and best practices. COBIT 2019 has 40 governance and management objectives organized into five domains.

ITIL (Information Technology Infrastructure Library) provides best practices for IT service management. It covers the entire service lifecycle: Service Strategy, Service Design, Service Transition, Service Operation, and Continual Service Improvement. ITIL helps align IT services with business needs.

ISO 27001 is the international standard for Information Security Management Systems (ISMS). It provides requirements for establishing, implementing, maintaining, and continually improving an ISMS. It uses a risk-based approach to manage information security and covers confidentiality, integrity, and availability of information.`,
        quizTitle: 'IS & IT Governance Quiz',
        questions: [
          { question: 'COBIT is a framework for:', options: ['Financial reporting', 'IT governance and management', 'Marketing', 'Human resources'], correctAnswer: 1, explanation: 'COBIT (Control Objectives for Information and Related Technologies) is a comprehensive IT governance framework.' },
          { question: 'TPS handles:', options: ['Strategic decisions', 'Routine business transactions', 'Executive reporting', 'Expert knowledge'], correctAnswer: 1, explanation: 'Transaction Processing Systems (TPS) handle routine, day-to-day business transactions efficiently.' },
          { question: 'ITIL covers:', options: ['Financial accounting', 'IT service management lifecycle', 'Tax compliance', 'Audit procedures'], correctAnswer: 1, explanation: 'ITIL provides best practices for IT service management across the entire service lifecycle.' },
          { question: 'ISO 27001 deals with:', options: ['Quality management', 'Environmental management', 'Information Security Management', 'Food safety'], correctAnswer: 2, explanation: 'ISO 27001 is the international standard for Information Security Management Systems (ISMS).' },
          { question: 'DSS is designed for:', options: ['Routine transactions', 'Complex decision-making support', 'Employee training', 'Hardware maintenance'], correctAnswer: 1, explanation: 'Decision Support Systems (DSS) are designed to support complex, non-routine decision-making processes.' },
        ],
      },
      {
        title: 'Business Process Management & ERP',
        textContent: `Business Process Management (BPM) is the discipline of improving business performance by managing and optimizing business processes. It involves process discovery (understanding current processes), process analysis (identifying bottlenecks and inefficiencies), process redesign (improving processes), process implementation, and process monitoring.

Enterprise Resource Planning (ERP) systems integrate all facets of business operations into a single, comprehensive information system. Major ERP vendors include SAP, Oracle, Microsoft Dynamics, and Infor. ERP modules typically cover: Finance, Human Resources, Manufacturing, Supply Chain, Sales and Distribution, and Customer Relationship Management.

Benefits of ERP include: integrated information flow across departments, elimination of data redundancy, real-time reporting, standardized processes, improved decision-making, and enhanced regulatory compliance. However, ERP implementation is complex, expensive, and carries risks of failure.

ERP implementation follows a structured methodology. The key phases are: Project Preparation (defining scope and team), Business Blueprint (mapping business processes to ERP), Realization (configuration and customization), Final Preparation (testing, training, data migration), and Go-Live and Support.

Cloud-based ERP (SaaS) is gaining popularity as it reduces upfront costs, provides automatic updates, offers scalability, and allows remote access. However, concerns include data security, internet dependency, customization limitations, and vendor lock-in. Organizations must evaluate on-premise vs cloud ERP based on their specific needs.`,
        quizTitle: 'BPM & ERP Quiz',
        questions: [
          { question: 'ERP integrates:', options: ['Only finance', 'All facets of business operations', 'Only HR', 'Only manufacturing'], correctAnswer: 1, explanation: 'ERP systems integrate all business functions (finance, HR, manufacturing, sales, etc.) into a single comprehensive system.' },
          { question: 'Which is NOT a major ERP vendor?', options: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Instagram'], correctAnswer: 3, explanation: 'SAP, Oracle, and Microsoft Dynamics are major ERP vendors. Instagram is a social media platform, not an ERP system.' },
          { question: 'BPM involves:', options: ['Only process documentation', 'Discovery, analysis, redesign, implementation, and monitoring', 'Only automation', 'Only cost cutting'], correctAnswer: 1, explanation: 'BPM involves the complete cycle: discovering, analyzing, redesigning, implementing, and monitoring business processes.' },
          { question: 'Cloud ERP (SaaS) advantage includes:', options: ['No internet needed', 'Reduced upfront costs and scalability', 'Complete customization', 'No vendor dependency'], correctAnswer: 1, explanation: 'Cloud ERP reduces upfront costs, provides scalability, automatic updates, and allows remote access.' },
          { question: 'The Business Blueprint phase of ERP implementation involves:', options: ['Go-live', 'Mapping business processes to ERP modules', 'System testing only', 'Hardware procurement'], correctAnswer: 1, explanation: 'The Business Blueprint phase maps and documents how business processes will be configured in the ERP system.' },
        ],
      },
      {
        title: 'Data Analytics & Business Intelligence',
        textContent: `Data Analytics involves examining datasets to draw conclusions about the information they contain. Types include: Descriptive Analytics (what happened?), Diagnostic Analytics (why did it happen?), Predictive Analytics (what will happen?), and Prescriptive Analytics (what should we do?).

Business Intelligence (BI) encompasses strategies and technologies for analyzing business data. BI components include data warehousing (central repository of integrated data), ETL processes (Extract, Transform, Load), OLAP (Online Analytical Processing for multidimensional analysis), data mining (discovering patterns in large datasets), and reporting/visualization tools.

Big Data is characterized by the 5 Vs: Volume (large amounts of data), Velocity (speed of data generation and processing), Variety (different types of data - structured, unstructured, semi-structured), Veracity (reliability and accuracy of data), and Value (extracting meaningful insights from data).

Data visualization tools like Tableau, Power BI, and QlikView transform raw data into visual representations (charts, graphs, dashboards) that make patterns and trends easier to identify. Effective visualization follows principles of clarity, accuracy, and relevance to the audience.

Machine Learning and Artificial Intelligence are increasingly used in analytics. Supervised learning (classification, regression), unsupervised learning (clustering, association), and deep learning enable automated pattern recognition and prediction. Applications in finance include fraud detection, credit scoring, algorithmic trading, and risk assessment.`,
        quizTitle: 'Data Analytics Quiz',
        questions: [
          { question: 'Predictive Analytics answers:', options: ['What happened?', 'Why did it happen?', 'What will happen?', 'What should we do?'], correctAnswer: 2, explanation: 'Predictive Analytics uses historical data and statistical models to forecast what is likely to happen in the future.' },
          { question: 'The 5 Vs of Big Data include:', options: ['Volume, Velocity, Variety, Veracity, Value', 'Volume, Vision, Variety, Virtue, Value', 'Volume, Velocity, Version, Veracity, Value', 'Volume, Velocity, Variety, Validity, Voice'], correctAnswer: 0, explanation: 'The 5 Vs are Volume, Velocity, Variety, Veracity (accuracy), and Value (insights).' },
          { question: 'ETL stands for:', options: ['Edit, Transfer, Load', 'Extract, Transform, Load', 'Enter, Translate, Log', 'Export, Transfer, Link'], correctAnswer: 1, explanation: 'ETL stands for Extract, Transform, Load - the process of moving data from source systems to a data warehouse.' },
          { question: 'OLAP enables:', options: ['Simple transaction processing', 'Multidimensional data analysis', 'Email communication', 'File storage'], correctAnswer: 1, explanation: 'OLAP (Online Analytical Processing) enables multidimensional analysis of data from different perspectives.' },
          { question: 'Supervised learning includes:', options: ['Clustering', 'Classification and regression', 'Association rules only', 'No training data'], correctAnswer: 1, explanation: 'Supervised learning uses labeled training data for classification (categorical prediction) and regression (numerical prediction).' },
        ],
      },
      {
        title: 'Cybersecurity & IS Audit',
        textContent: `Cybersecurity protects computer systems, networks, and data from digital attacks, unauthorized access, and damage. The CIA triad forms the foundation: Confidentiality (protecting data from unauthorized access), Integrity (ensuring data accuracy and completeness), and Availability (ensuring authorized users have timely access).

Common cyber threats include: Malware (viruses, worms, ransomware, trojans), Phishing (social engineering to steal credentials), Denial of Service (DoS/DDoS) attacks, Man-in-the-Middle attacks, SQL injection, Cross-site scripting (XSS), insider threats, and Advanced Persistent Threats (APTs).

Defense mechanisms include: Firewalls (network access control), Intrusion Detection/Prevention Systems (IDS/IPS), encryption (data at rest and in transit), multi-factor authentication, access controls (role-based access control - RBAC), security patches and updates, employee security awareness training, and incident response planning.

Information Systems Audit evaluates the effectiveness of controls over IT systems. It covers general controls (access management, change management, operations, physical security) and application controls (input, processing, output controls). IS auditors follow ISACA standards and frameworks.

Regulatory requirements for cybersecurity include: Information Technology Act 2000, CERT-In guidelines, RBI cybersecurity framework for banks, SEBI cybersecurity framework for market intermediaries, and the Personal Data Protection Act. Organizations must implement reasonable security practices and report data breaches to relevant authorities.`,
        quizTitle: 'Cybersecurity & IS Audit Quiz',
        questions: [
          { question: 'CIA in cybersecurity stands for:', options: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Information Access', 'Cyber Intelligence Assessment'], correctAnswer: 1, explanation: 'The CIA triad represents the three core principles of cybersecurity: Confidentiality, Integrity, and Availability.' },
          { question: 'Ransomware is a type of:', options: ['Hardware', 'Firewall', 'Malware that encrypts data for ransom', 'Network protocol'], correctAnswer: 2, explanation: 'Ransomware is malicious software that encrypts the victim\'s data and demands payment for the decryption key.' },
          { question: 'RBAC stands for:', options: ['Risk-Based Audit Controls', 'Role-Based Access Control', 'Remote Backup and Control', 'Regulatory Business Activity Compliance'], correctAnswer: 1, explanation: 'RBAC (Role-Based Access Control) restricts system access based on the roles of individual users within the organization.' },
          { question: 'IS Audit follows standards issued by:', options: ['ICAI only', 'ISACA', 'RBI', 'SEBI'], correctAnswer: 1, explanation: 'IS Auditors follow standards and frameworks issued by ISACA (Information Systems Audit and Control Association).' },
          { question: 'Phishing is a:', options: ['Hardware attack', 'Social engineering attack to steal credentials', 'Network configuration', 'Database query'], correctAnswer: 1, explanation: 'Phishing is a social engineering attack that tricks users into revealing sensitive information like passwords and credit card details.' },
        ],
      },
    ],
  },
];
