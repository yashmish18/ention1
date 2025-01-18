import React from 'react'
import { ServiceTemplate } from 'components'
// import { useSearchParams } from 'next/navigation'


const categories =[
  { 
    id: "sole proprietorship",
    title: "Sole Proprietorship Registration",
    description: "When a business is owned and governed by one person, it is called a sole proprietorship company. However, its liability is unlimited and it also doesn't have perpetual existence." ,
    startingPrice: '₹2,990',
    overview:{
      title: 'What is a Sole Proprietorship?',
      description: `This type of business can be incorporated in fifteen days and hence makes it one of the most popular types of business to begin in the unsystematic sector, specifically among merchants and small traders. For a Sole Proprietorship business, registration is not required as it is identified through alternate registrations, such as GST registrations.`
    },
    benefits:{
      title: 'Benefits of Sole Proprietorship Registration',
      benefits: [
        ' Sole proprietorship firms are easy to set up and operate.',
        ' The owner of a sole proprietorship firm has full control over the business.',
        ' Sole proprietorship firms offer great flexibility',
        ' Sole proprietorship firms are taxed as individual taxpayers.',
        ' A sole proprietorship firm does not have a separate legal entity from its owner.',
        ' They are not required to maintain any formal records or hold annual meetings.',
        ' Sole proprietorship firms are cost-effective to operate.'
      ],
      image: "/assets/business/1.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Sole Proprietorship?',
      description: 'To open a current account, the following documents are required;',
      documents: [
        'Proof of the existence of your business',
        'Shops & Establishments Act Registration',
        'PAN card',
        'Address and Identity proof'
      ]
    },
    whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    faq:{
      pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
      questions : [
        {
          id: 1,
          title: 'What is the difference between privacy and copyright?',
          info:
            'Privacy is the state of being private; the state of not being seen by others, whereas copyright is (uncountable) the legal right to be the entity that determines who may publish, copy, and distribute a piece of writing, music, picture, or other work of authorship. The right to have some control over how your personal information is gathered and utilised is known as information privacy. ',
        },
        {
          id: 2,
          title: 'Is Copyright Application applicable to Titles and names?',
          info:
            'Copyright does not ordinarily protect titles by themselves or names, short word combinations, slogans, short phrases, methods, plots, or factual information nor protect ideas or concepts. Copyright is provided only to original creative work.',
        },
      ]
    }
},
{ 
  id: "partnership firm",
  title: "Partnership Firm",
    description: "Registering your partnership firm online is now a very easy task! Start drafting your partnership deed in just three easy steps. The Indian Partnership Registration Act of 1932 is the primary governing partnership registration law in India." ,
    startingPrice: '₹2990',
    overview:{
      title: 'What is a Partnership Firm?',
      description: `A business established by two or more partners with the goal of achieving a profit is called a partnership firm registration. The legal document used to establish a partnership company registration is known as a partnership deed.`
    },
    benefits:{
      title: 'Benefits of Partnership Firm Registration',
      benefits: [
        'Partnership firms enjoy certain tax benefits.',
        'Provides legal recognition to the business entity.',
        'Enjoy the flexibility in terms of their internal structure and decision-making processes.',
        'Involves relatively less complex compliance requirements.',
        'Shared responsibility and pooling of resources among partners.'
      ],
      image: "/assets/business/2.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Partnership Firm?',
      description: 'Registering your partnership firm online is now a very easy task! Start drafting your partnership deed in just three easy steps. The Indian Partnership Registration Act of 1932 is the primary governing partnership registration law in India.',
      documents: [
        'Partnership Deed: A written agreement between the partners.',
        'Application for Partnership Registration: A duly filled and signed application.',
        `Proof of Address: Documents establishing the address of the firm.',
        'Identity proof of the partners: PAN cards, Aadhaar cards, passports, or driver's licenses.`,
        'Specimen Signatures: Will be required for future reference.',
        'Partnership Registration Fee: The fee amount can vary depending on the jurisdiction.'
      ]
    },
    whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `It is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    faq:{
      pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
      questions : [
        {
          id: 1,
          title: 'What is the difference between privacy and copyright?',
          info:
            'Privacy is the state of being private; the state of not being seen by others, whereas copyright is (uncountable) the legal right to be the entity that determines who may publish, copy, and distribute a piece of writing, music, picture, or other work of authorship. The right to have some control over how your personal information is gathered and utilised is known as information privacy. ',
        },
        {
          id: 2,
          title: 'Is Copyright Application applicable to Titles and names?',
          info:
            'Copyright does not ordinarily protect titles by themselves or names, short word combinations, slogans, short phrases, methods, plots, or factual information nor protect ideas or concepts. Copyright is provided only to original creative work.',
        },
      ]
    }
},
{ 
  id: "opc",
  title: "OPC",
  description: "The Companies Act of 2013 supports the formation of OPC (One Person Company) in India. Ention has a team of registration experts who can provide complete guidance to register your One Person Company (OPC)." ,
  startingPrice: '₹5,000',
  overview:{
    title: 'What is a OPC?',
    description: `One person company (OPC) is an unique entity where an individual can form a company who can act as a director and shareholder of the company. Its combined the concept of a company with limited liability, separate legal entity, perpetual succession a person to own and run a company in their name. OPC has very few compliances requirement in comparison with a private limited company. Required to use OPC at the name of  their name. `
  },
  benefits:{
    title: 'Benefits of OPC Registration',
    benefits: [
      'A single person can start business with very tittle compliance. For incorporation of OPC only one member and one nominee are required.',
      'No paid-up capital is required.',
      'Complete control by the individual, the decision making become easy and quick ',
      'Easy compliance under Companies Act, 2013. The OPC is not required to provide any annual reports and maintain any accounts books.',
     
    ],
    image: "/assets/business/3.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A OPC?',
    description: 'Identity and Address Proof -',
    documents: [
      'Scanned copy of PAN card, Aadhar card if member is foreign national and NRI than passport.',
      'Scanned copy of voter ID/passport/driving as identity proof of member.',
      'Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill of member.',
      'Scanned passport-sized photograph specimen signature (blank document with signature (directors only)'
    ],
    desc2:'Registered Office Proof -',
    docu2:
    [
      'Scanned copy of the latest bank statement/telephone or mobile bill/electricity or gas bill.',
      'Scanned copy of notarized rental agreement in English',
      'Scanned copy of no-objection certificate from the property owner',
      'Scanned copy of sale deed/property deed in English (in case of owned property)'
    ]
  },
  whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Deliverable under OPC Registration`,
   documents: [
    'Certificate of incorporation',
    'PAN and TAN number of OPC',
    'Designated identification numbers (DIN)',
    'Digital Signature Certificate (DSC)',
    'EPF and ESIC registration',
    'MOA and AOA of OPC',
    'OPC master data'
   ]
    },
  faq:{
  pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
  questions : [
    
     'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
    'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
  
    ],
    answers: [
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
    ]
}
},
{ 
  id: "llp",
  title: "LLP",
    description: "LLP (Limited Liability Partnerships) were introduced under the LLP Act in 2008. To Register your Limited Liability Partnership (LLP) with us. It combines the benefits of a partnership with that of a limited liability company." ,
    startingPrice: '₹8,000',
    overview:{
      title: 'What is a LLP?',
      description:'',
      point:[
        'LLP (Limited Liability Partnerships) were introduced under the LLP Act in 2008, as a balance structure between traditional partnership firms and Limited Companies. It combined the features of both these entities to form a LLP, that provided limited liability protection to partners with flexibility of management similar to a traditional part. With lower compliance requirement and structured roles and responsibilities like a traditional partnership, also offers some key benefits of limited company structure like limited liability of partners and separate legal entity and perpetual legal existence. ',
        'LLP is more popular and preferable business formation among services provider and professional like CA, CS, Management services consultant and other services base business, small businesses that are family-owned or closely held.',
        'No minimum capital required for formation. The best part is that the capital can also be in any form like land, machinery, or intangible properties, bank balance. ',
        'LLP required minimum 2 partners, one of the partners must be an Indian resident. '
      ],
      
    },
    benefits:{
      title: 'Benefits of LLP Registration',
      benefits: [
        'An LLP is only required to file its annual returns and financial statements to the ROC every financial year, Lower Compliances as compared to company. ',
        'LLP is easy to manage and statutory audit is not required for Limited Liability Partnership. Tax Audit is also not required for LLPs with capital less than Rs. 25 lack and turnover not exceeding Rs. 40 lack.',
        'Operational Flexibility, An LLP is managed according to the terms and conditions of the LLP Agreement among themselves, choose and appoint designated partners as sole authority to control the management and day to day affairs of LLP.',
        'An LLP is affordable to incorporate with lesser formalities.',
        'Banks and Financial Institutions prefer to lend funds to businesses that are registered with the government. This is because their credentials and financial status are verifiable in real time.',
        'Limited Liability Protection as per the terms mentioned in the LLP Agreement. Their personal assets are not at risk while paying-off the LLP’s liability.',
        'A distinct legal identity of the LLP lends it credibility, their credentials and financial status are verifiable in real time. Investors can inspect the LLP’s data before investing their capital into it. '
      ],
      image: "/assets/business/4.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A LLP?',
      description: 'Documents from each partner:',
      documents: [
        'Passport size of photograph of each partner',
        'PAN and Aadhar card of each partner.',
        'Voter id/ passport/ Driving license (Any one) of each partner',
        'Telephone/ electricity Bill/ Bank statement (not older then 2 months) of each partner',
        'Address proof as registered business address of entity',
        'Telephone Bill/ electricity bill (not older than 2 months)',
        'Title / sale deed if owned property',
        'Rent agreement if rented ',
        'NOC form owner'
      ],
      desc2:'Note- if partner is foreign nationals ,Then passport and documents should be apostilled. '
    },
    whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Deliverable under LLP Registration`,
      documents: [
       'Certificate of incorporation',
       'PAN and TAN number of LLP',
       'Designated Partner identification numbers (DIN)',
       'Digital Signature Certificate (DSC) of 2 partner',
       'LLP Agreement',
       'LLP master data'
      ]
    },
    faq:{
      pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
      questions : [
        
         'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
        'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
      
        ],
        answers: [
          'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
          'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
        ]
    }
},
{ 
  id: "private limited",
  title: "Private Limited Company",
  description: "No more delays or difficulties! Register your business with us. Registering a Company is quick, easy, and can be done online with Ention in simple steps." ,
  startingPrice: '₹10,000',
  overview:{
    title: 'What is a Private Limited Company?',
    description: `A private limited company registration refers to the process of legally establishing a business entity as a private limited company. This registration typically involves fulfilling certain legal requirements as per the jurisdiction's laws and regulations. Startup and business with higher growth aspiration popularly choose private company registration as a suitable business structure. A private limited company required minimum 2 person as a subscriber and as a director. `
  },
  benefits:{
    title: 'Benefits of Private Limited Company Registration',
   
    desc: 'Private limited companies offer several benefits, which contribute to their popularity as a business structure. Here are some key advantages: ',

    benefits: [
      `Limited Liability: Shareholders' liability is limited to the extent of their shareholding in the company. Personal assets of shareholders are generally protected in case of business debts or legal liabilities, offering a layer of financial security.`,
      'Separate Legal Entity: A private limited company is considered a separate legal entity distinct from its owners (shareholders) and directors. This separation ensures that the company can enter into contracts, own assets, and sue or be sued in its own name. ',
      `Ease of Ownership Transfer: Shares of a private limited company can be easily transferred between existing shareholders or sold to new investors, facilitating ownership changes without disrupting the company's operations. `,
      `Credibility and Trust: Being registered as a private limited company often enhances the credibility and trustworthiness of the business in the eyes of customers, suppliers, investors, and financial institutions. `,
      'Perpetual Succession: The existence of a private limited company is not affected by changes in its ownership or management. It enjoys perpetual succession, meaning it continues to exist even if its directors or shareholders change over time. ',
      'Access to Funding: Private limited companies have various options for raising capital, including equity financing from investors, issuing debentures, and borrowing from financial institutions. The separate legal entity status also allows them to offer shares to the public in certain cases. ',
     'Tax Benefits: Private limited companies may benefit from certain tax advantages, such as lower corporate tax rates, tax deductions for business expenses, and the ability to utilize tax-saving strategies to optimize their tax liabilities. ',
    `Flexible Management Structure: Private limited companies have the flexibility to appoint directors, managers, and officers to manage their affairs efficiently. They can also adopt tailored governance structures that suit their specific requirements. `,
    `Privacy: Unlike public companies, private limited companies are not required to disclose extensive financial and operational information to the public, providing a level of privacy to their shareholders and directors. `,
    `Continuity: Private limited companies can ensure business continuity and stability, as the company's operations are not dependent on the personal circumstances of individual shareholders or directors. `,
    `These benefits make private limited companies an attractive option for entrepreneurs and businesses looking to establish a legal entity that offers limited liability, operational flexibility, and growth opportunities. However, it's essential to consider the specific needs and objectives of the business before choosing this business structure. Consulting with legal and financial professionals is advisable to make informed decisions.`
    ],
    image: "/assets/business/5.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Private Limited Company?',
    description: 'For Proposed company -',
    documents: [
      'two proposed names',
'The objective of the proposed company',
'Authorized and paid-up share capital details ',
'Equity shareholding percentage of subscribers',
     
    ],
    desc2: `For Subscribers & director's -`,
    docu2: [
      'PAN Card of all the Subscribers/Directors',
      'Photograph of all the Subscribers/Directors',
      'Aadhar Card/ DL/Voter ID/ passport, anyone documents of all the Subscribers/Directors',
      'Mobile and Email of all the Subscribers/Directors',
      'Bank statement/ Electricity Bill not older than 2 month, in the name of the Subscribers/Directors, anyone documents of all the subscribers/directors'
    ],
    desc3: 'For Proof of Proposed Registered Office -',
    docu3: [
      'Latest utility bill i.e. electricity, landline, water bill, etc.',
      'For a rented place, a rent agreement is required in the name of the proposed company'
    ],
  },
  whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Deliverable under Private Limited Company Registration`,
   documents: [
    'Certificate of incorporation',
    'Director identification numbers (DIN)',
    'Digital signature token for directors',
    'Memorandum of association',
    'Articles of association',
    'ESI/PF registration',
    'Company PAN card',
    'Company TAN number',
    'GST registration (If required)'
   ]
    },
  faq:{
  pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
  questions : [
    
     'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
    'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
  
    ],
    answers: [
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
    ]
}
},
{
  id: "public limited",
  title: "Public Limited Company",
  description: "A public company, also known as a publicly traded company, is a business entity whose ownership is dispersed among the general public in the form of shares of stock that are freely traded on a stock exchange or in over-the-counter markets. " ,
  startingPrice: '₹12,000',
  overview:{
    title: 'What is a Public limited company?',
    description: `Public Limited Companies, governed by the Companies Act of 2013, stand out as the preferred choice for large-scale ventures aspiring to attain global prominence. The Companies Act lays down certain minimum requirements that must be met before starting the Public Limited Company Registration process. These requirements are related to the minimum shareholders and directors to start the company and other essentials like a company name and an office address. In the table below, we have mentioned all the requirements for Public Limited Company Registration. For details, you can consult our experts.`
  },
  benefits:{
    title: 'Benefits of Public limited company Registration',
    desc: 'Public companies offer several benefits, both to the company itself and to its shareholders. Some of the key benefits include: ',
    benefits: [
      'Public companies can raise capital by selling shares of stock to a broad base of investors through Initial public offerings (IPO) and subsequent secondary offerings to the public or other investors.',
      'Substantial source of funding for expansion, research and development, acquisitions, and other strategic initiatives.',
      'Shares of public companies are traded on stock exchanges, providing liquidity to investors. Shareholders can buy or sell their shares at any time during market hours, allowing them to easily convert their investment into cash. ',
      `Publicly traded company often enhances a company's prestige and visibility in the marketplace. It can attract attention from customers, suppliers, and potential business partners, which may attract to new opportunities for growth and collaboration. `,
      'Public companies can offer stock options, warrants, restricted stock units (RSUs), and other equity-based incentives to attract and retain talent.',
      'Public companies have access to public capital markets, where they can issue debt securities (bonds) and other financial instruments to raise additional funds. This provides them with wide source and flexibility in managing their capital structure and financing need for long term and short term.',
      'Public companies are subject to regulatory oversight and disclosure requirements, which often result in higher standards of corporate governance.',
      'Publicly traded stock can be used as currency for acquisitions and easy valuation. allowing companies to use their shares to acquire other businesses. This can be advantageous in mergers and acquisitions, as it provides a means to negotiate deals without necessarily needing to expend cash. ',
      `The rigorous regulatory requirements signal to stakeholders that the company is reputable and accountable. Being publicly traded can enhance a company's brand recognition. `
    ],
    image: "/assets/business/6.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Public limited company?',
    description: 'For Proposed company -',
    documents: [
      'two proposed names',
'The objective of the proposed company',
'Authorized and paid-up share capital details ',
'Equity shareholding percentage of subscribers',
     
    ],
    desc2: `For Subscribers & director's -`,
    docu2: [
      'PAN Card of all the Subscribers/Directors',
      'Photograph of all the Subscribers/Directors',
      'Aadhar Card/ DL/Voter ID/ passport, anyone documents of all the Subscribers/Directors',
      'Mobile and Email of all the Subscribers/Directors',
      'Bank statement/ Electricity Bill not older than 2 month, in the name of the Subscribers/Directors, anyone documents of all the subscribers/directors'
    ],
    desc3: 'For Proof of Proposed Registered Office -',
    docu3: [
      'Latest utility bill i.e. electricity, landline, water bill, etc.',
      'For a rented place, a rent agreement is required in the name of the proposed company'
    ],
  },

  whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
    title: 'Our Deliverable',
    description: `Deliverable under Public Limited Company Registration`,
 documents: [
  'Certificate of incorporation',
  'Director identification numbers (DIN)',
  'Digital signature token for directors',
  'Memorandum of association',
  'Articles of association',
  'ESI/PF registration',
  'Company PAN card',
  'Company TAN number',
  'GST registration (If required)'
 ]
  },
  faq:{
  pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
  questions : [
    
     'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
    'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
  
    ],
    answers: [
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
    ]
}
},
{
  id: "producer company",
title: "Producer Company",
description: "It's important to note that the specific requirements and regulations for establishing a Producer Company. It is advisable to seek professional guidance and consult the Ention to ensure compliance with the specific requirements of your region." ,
startingPrice: '₹15,000',
overview:{
  title: 'What is a Producer Company?',
  description:'',
  point:[ 'If you want to start a business of agricultural production, harvesting, grading, pooling, handing, export and trading of primary production in India, import of goods and services for members (producers, farmers, agriculturists), financing them for these activities which includes extending credit facilities also.',
   'Then you are at right stage because Producer Company is the most easy and affordable way to start your agricultural business in India. This type of company is formed with the aim to improve the lives of framers and producers.',
  'Requires 10 members (individual/ institutions) and 5 directors with easy documents requirement to start the Producer Company. The minimum capital requirement for Producer Company registration is Rs. 5 lakh. There is no upper limit for members. ',
  'It cannot deal with the public directly and can only work with its members. However, one can easily make members under Producer Company with specific process.'
],
},
benefits:{
  title: 'Benefits of Producer Company Registration',
  desc: '',
  benefits: [
    'Producer Company is hybrid of Company and Co-operative Society. It combines the character of a co-operative enterprise and features of a company and serve the unique elements of cooperative business with a regulatory framework of a company. ',
    'Help them financially, take help from them and promoting techniques of mutuality and mutual assistance.',
    'Government has passed a special provision for giving loans to the producer members through NABARD bank by given financial assistance to producers and famers.',
    'There are certain tax exemption and benefits for producer company.',
    'Producer company can accept deposits and advance loan to its members and farmers at lower rate of interest. ',
    
  ],
  image: "/assets/business/40.png"
},
requirements:{
  title: 'What Are The Documents Required For Registering A Producer Company?',
  description: 'The following documents are required for the registration of a Producer company:',
  documents: [
    'Passport size Photographs of each and every director and member.',
    'PAN and Aadhar card of each and every director and member.',
    'DSC of the directors and members.',
    'DIN of the directors and members.',
    'MOA and AOA of the company.',
    'Proof of address of every director and member. Any government-issued identity proof with address such as bank statement, driving license, residence card, etc.',
    'Proof of residence: Any utility bill (Mobile bill/ electricity bill/ landline bill) or bank statement with name and address.',
    'Passport: It is mandatory only for foreign directors of Nidhi companies. Indian directors do not need to submit passport.',
    'Proof of registered office: electricity bill/ rent agreement and copy of NOC from owner.'
  ]
  },
whyention:{
  title: 'Why Ention?',
  description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,

},

deliverable:{
  title: 'Our Deliverable',
  description: `Deliverable under Producer Company Registration`,
documents: [
'Certificate of incorporation',
'Director identification numbers (DIN)',
'Digital signature token for directors',
'Memorandum of association',
'Articles of association',
'ESI/PF registration',
'Company PAN card',
'Company TAN number',
'GST registration (If required)'
]
},
faq:{
  pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
  questions : [
    
     'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
    'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
  
    ],
    answers: [
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
      'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
    ]
}
},
{
  id: "nidhi company",
  title: "Nidhi Company",
  startingPrice: '₹18,000',
  description: "Before proceeding with Nidhi Company Registration, consult with the Ention to ensure compliance with all regulatory requirements. We offer certain benefits, that are subject to specific regulations and restrictions to prevent misuse and protect the interests of members.",
  overview:{
    title: 'What is a Nidhi Company?',
    description:'',
    point: ['Nidhi Company is a type of NBFC (a non-banking finance company) registered under Section 406 of the Companies Act 2013. Its primary function is to accelerate lending money between the prime members of the company.',
    'If you want to start a finance/loan business in India? Then you are at right stage. Nidhi Company can only do business of accepting deposit and lending money to its members only. It cannot deal with the public directly.',
    'It only requires 7 persons with easy documents requirement to start the Nidhi Company. The minimum capital requirement for Nidhi Company registration is Rs. 10 Lakh. Company with few documents and easy process. Also, Nidhi Company registration is the only form of company available to start the loan company in India without RBI approval. Nidhi Company cannot work outside the state. Hence, if you want to expand your business to another state, then you will need to register another Nidhi Company. The Ministry of Corporate Affairs (MCA) controls this type of company, and the RBI keeps an eye on all its money matters.',
    'Nidhi Company can open three branches after three years of working within the district. Further, to open any branch outside the district, the company shall require Regional Director (RD) approval. '
  ],
  },
  benefits:{
    title: 'Benefits of Nidhi Company Registration',
    benefits: [
      'Nidhi Company is basically a finance company which can accept deposit from members and lend the same money to its members.',
      'Nidhi Company mainly earns through interest on loans and its main expenditure is to pay interest on deposits (FD, RD and savings). ',
      'No RBI Requiremen',
      'Nidhi Company can earn max 20% interest on loan on reducing balance method.',
      'Nidhi Company can accept FD, RD & savings and can earn 12% rate of interest Nidhi Company.',
      'Nidhi Company can accept FD, RD & savings and can earn 12% rate of interest Nidhi Company cannot do micro finance business & vehicle finance business.',
      'Nidhi Company can lend only against gold, property, FD, Govt securities.',
      'Nidhi Company can open 3 branches after 3 years within the district.'
    ],
    image: "/assets/business/8.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Nidhi Company?',
    description: 'The following documents are required for the registration of a Nidhi company:',
    documents: [
      'Passport size Photographs of each and every director and member.',
      'PAN and Aadhar card of each and every director and member.',
      'DSC of the directors and members.',
      'DIN of the directors and members.',
      'MOA and AOA of the company.',
      'Proof of address of every director and member. Any government-issued identity proof with address such as bank statement, driving license, residence card, etc.',
      'Proof of residence: Any utility bill (Mobile bill/ electricity bill/ landline bill) or bank statement with name and address.',
      'Proof of registered office: electricity bill/ rent agreement and copy of NOC from owner.',
      'Passport: It is mandatory only for foreign directors of Nidhi companies. Indian directors do not need to submit passport.'
    ],
  
  },
  whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
   
deliverable:{
  title: 'Our Deliverable',
  description: `Deliverable under Nidhi Company Registration`,
documents: [
'Certificate of incorporation',
'Director identification numbers (DIN)',
'Digital signature token for directors',
'Memorandum of association',
'Articles of association',
'Company PAN card',
'Company TAN number',

]
},
  faq:{
    pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
    questions : [
      
       'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
      'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.',
    
      ],
      answers: [
        'It is the easiest form of business done in India since it Isnt governed by any specific laws.',
        'It is the easiest form of business done in India since it Isnt governed by any specific laws.'
      ]
  }
}

]
const Business = () => {

  return <ServiceTemplate categories={categories} />
}

export default Business