export const ItData = [
  {
    registrationProcess: [
      {
        title: "Package Selection",
        paragraph:
          "Out of all the available packages, select the one that is most suitable for your business",
      },
      {
        title: "Allocation of manager",
        paragraph:
          "Based on the package selected by you, a permanent manager will be allocated",
      },
      {
        title: "Collection of details",
        paragraph:
          "Manager will collect all the details for filing of GST return from you on a monthly basis",
      },
      {
        title: "GST Return filing",
        paragraph:
          "Your assigned manager will prepare and file your GST returns",
      },
    ],
    pricing: [
      {
        // Itr Plan for Corporates
        title: "Turnover Upto",
        plan: [
          {
            planId: "Plan-1",
            price: 1499,
            subTitle: "50 Lacs",
          },
          {
            planId: "Plan-2",
            price: 1999,
            subTitle: "50 Lacs - 2.00 Cr",
          },
          {
            planId: "Plan-3",
            price: 2499,
            subTitle: "2.00 - 5.00 Cr",
          },
          {
            planId: "Plan-4",
            price: 2999,
            subTitle: "Above 5.00 Cr",
          },
        ],
        repeatedPerks: [
          "Business Income",
          "Rental Income",
          "CH-VI A deductions",
        ],
      },
      {
        title: "Income Upto",
        plan: [
          {
            planId: "Plan-1",
            price: 499,
            subTitle: "50 Lacs",
          },
          {
            planId: "Plan-2",
            price: 2199,
            subTitle: "Above 50 Lacs",
          },
        ],
        repeatedPerks: [
          "Salaried employee",
          "partner of firm",
          "director of a company",
        ],
      },
    ],
    addOns: [
      {
        addOnPlanId: "Rental Income",
        addOnPrice: 699,
        perks: "Rental Income",
      },
      {
        addOnPlanId: "Capital Gains",
        addOnPrice: 2299,
        perks: "Capital Gains",
      },
      {
        addOnPlanId: "Foreign Income/Assets",
        addOnPrice: 3899,
        perks: "Foreign Income/Assets",
      },
    ],
    whatIs: [
      {
        title: "Income Tax Return (ITR) filing ?",
        mainParagraph: `    Income Tax Return (ITR) is a form which a person is supposed to submit to the Income Tax Department of India. It contains information about the person’s income and the taxes to be paid on it during the year. Information filed in ITR should pertain to a particular financial year, i.e. starting on 1st April and ending on 31st March of the next year.`,
        sebParagraph: [
          `The Income Tax Department has prescribed 7 types of ITR forms - ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6, ITR-7 and applicability of the form will depend on the nature and amount of income and the type of taxpayer.`,
        ],
      },
    ],
  },
];
