import React from 'react'
import { ServiceTemplate } from 'components'
// import { useSearchParams } from 'next/navigation'


const categories =[
  { 
    id: "startup registration",
    title: "Startup Registration",
    description: " Register under a new venture as a startup with the Ention. It's important to note that the specific benefits of startup registration may vary depending on the jurisdiction and applicable regulations" ,
    startingPrice: '₹2,990',
    overview:{
      title: 'What is a Startup registration?',
      description: `Startup registration refers to the process of formally registering with the relevant government authorities or agencies. It is advisable to consult with professionals or legal experts in associated with startup registration in India.`
    },
    benefits:{
      title: 'Benefits of Startup Registration',
      benefits: [
        'Business Name Protection. ',
   'Access to Government Support. ',
  'Intellectual Property Protection. ',
  'Public Procurement Benefits.',
  'Hiring and Employee Benefits.'
      ],
      image: "/assets/business/23.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Startup registration?',
      description: '',
      documents: [
        ' Identity Proof.', 
        ' Bank Account Details.', 
        ' Memorandum and Articles of Association (MAA).', 
        ' Tax Registrations.', 
        ' Certificate of Incorporation.'
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
      faq: [
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      ]
    }
},
{ 
  id: "msme",
  title: "MSME",
  description: "MSMEs are considered the backbone of many economies worldwide. The definition and classification of MSMEs may vary from country to country." ,
  startingPrice: '₹1,500',
  overview:{
    title: 'What is a MSME?',
    description: `Udyam Aadhar registration (MSME) is voluntary registration, its may be applicable to manufacturer, wholesaler, retailer who meet the MEME classification criteria, basis of classification  depend upon annual turnover, type of enterprise, investment.  `,
    point:[
      ' The classification of Micro, Small and Medium Enterprises is defined under the MSMED Act 2006 amendment dated 01/06/2020. The Micro, Small and Medium Enterprises is based on the Investment in Plant, Machinery or Equipment values (excluding land and building) and Annual Turnover.',
     '(a) Micro Enterprise: Where the investment in Plant and Machinery or Equipment does not exceed 1 crore rupees and turnover does not exceed 5 crore rupees.',
    '(b) Small Enterprise: Where the investment in Plant and Machinery or Equipment does not exceed 10 crore rupees and turnover does not exceed 50 crore rupees.',
    '(c) Medium Enterprises: Where the investment in Plant and Machinery or Equipment does not exceed 50 crore rupees and turnover does not exceed 250 crore rupees.',
],
},
  benefits:{
    title: 'Benefits of MSME Registration',
    benefits: [
      'Collateral free loan through CHTMSE ( credit Guarantee  Fund for Micro, small and medium enterprises)', 
    'Lower interest rates.', 
      'Get an opportunity to share their expertise on international stages and get  international exposure. ',
    'Subsidy in Patent registration process, get eligible for discount of 50% or 15Lakhs which ever is lower on total cost if filing and processing of patent registration. ', 
      'Tax exemption, protection against delayed payment.',
    ' Reimbursement of ISO certification and marketing and technological upgradation assistance ',
'BIS is providing an 80% concession on the certification/minimum marking fee across various product certification schemes of BIS. Additionally, units located in the North-East will continue to receive an extra 10% concession.'
    ],
    image: "/assets/business/24.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A MSME?',
    description: '1.Udyam Registration Detail:',
    documents: [
      'Contact Details - The Applicant should fill Mobile number, Email.',
      'Social categorisation : SC/ST/OBC/General',
      'Gender',
      'Specially abled - Yes/No',
      'Name of Enterprise',
      'Location of Plant/Unit',
      'Official address of enterprise',
      'Previous registration number (UAM / EM II)',
      'Status of enterprise : Date of Incorporation, Commencement ',
      'Bank Details- Bank name, IFS Code, Account Number',
      'Major Activity- "Manufacturing" or "Service". ',
      'National Industry Classification Code (NIC Code)',
      'No. of Persons employed- The total number of people who are directly been paid salary/ wages by the enterprise may be mentioned in the appropriate field.',
      'lnvestment in Plant & Machinery / Equipment',
      'Turnover',
      'GSTIN if registered '
    ]
  },
   
  whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Udyam Aadhar registration certificate `,
  
    },
  faq:{
    pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
    faq: [
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
    ]
  }
},
{ 
  id: "fssai",
  title: "FSSAI",
    description: " Obtain FSSAI (Food Safety and Standards Authority of India) registration certificate, mandatory for most food businesses operating in India." ,
    startingPrice: '₹2990',
    overview:{
      title: 'What is a FSSAI?',
      description: `FSSAI registration brings credibility, legal compliance, and consumer confidence to your 
      food business. It paves the way for growth, market expansion, and long-term sustainability in 
      the highly regulated food industry in India.`
    },
    benefits:{
      title: 'Benefits of FSSAI Registration',
      benefits: [
        '   Legal Compliance to avoid penalties, fines, and potential legal issues.', 
        '   Consumer Trust and Confidence. ',
        '   Quality Assurance of your products. ',
        '   Market Access and Expansion. ',
        '   Collaboration with Institutions such as research organizations and universities. ',
        '   Export Facilitation',
      ],
      image: "/assets/business/25.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A FSSAI?',
      description: '',
      documents: [
        '   Form A or Form B (Form A for basic registration and Form B for state or central license).', 
        '  Identity Proof and Address Proof. ',
        '   Food Safety Management System Plan. ',
        '   Partnership Deed or Certificate of Incorporation',
        ' List of Directors or Partners.',
        '   Proof of Ownership or Possession.',
        '   Layout Plan and Blueprint.',
        '   Food Safety Management System Plan.',
        '   Food Safety Supervisor Certificate.',
        '   Manufacturing Unit Details. ',
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
      faq: [
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
        {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      ]
    }
},
{ 
  id: "bis",
  title: "BIS",
  description: "BIS stands for the Bureau of Indian Standards. It is the national standards body of India and operates under the Ministry of Consumer Affairs, Food, and Public Distribution" ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a BIS?',
    description: `BIS is the easiest form of business done in India since it Isn't governed by any specific laws. Under BIS's, the compliance's are minimal and easy to fulfil. BIS means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`
  },
  benefits:{
    title: 'Benefits of BIS Registration',
    benefits: [
      'Quality Assurance: Ensuring its quality, safety, and reliability.',
      '  Legal Compliance: With the legal requirements set by the government.',
      '  Consumer Confidence: BIS certification builds trust and confidence among consumers.',
      '  Market Access: Many government tenders require BIS certification.',
      '  Export Facilitation: BIS certification is recognized internationally and facilitates exports.',
      '  Research and Development Support.',
      '  Earning National Recognition: Within the industry and among stakeholders. ',
    ],
    image: "/assets/business/26.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A BIS?',
    description: '',
    documents: [
      'Application Form and Test Reports. ',
      '   Product Information. ',
      '   Manufacturing Process and Test samples. ',
      '   Company Registration Documents. ',
      '   Quality Management System (QMS) Documents. ',
      '   Manufacturing Unit Details. ',
      '   Packaging Details. ',
      '   Trade License and Registration.',
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
    faq: [
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
    ]
  }
},
{ 
  id: "iso certification",
  title: "ISO certification",
  description: "Consult with the Ention to understand the precise documentation requirements for obtaining ISO certification. Get to know about certification body and follow their guidelines",
  startingPrice: '₹2990',
  overview:{
    title: 'What is a ISO certification?',
    description: ` ISO is an international standard-setting body that develops and publishes standards for 
    various industries and management systems. Obtain a certification from the International 
    Organization for Standardization (ISO) for compliance with specific ISO standards.`
  },
  benefits:{
    title: 'Benefits of ISO certification ',
    benefits: [
      'Enhanced Credibility and Reputation. ',
      '   Improved Quality and Efficiency. ',
      '   Expanded Market Opportunities. ',
      '   Compliance with Regulatory Requirements. ',
      '   Increased Customer Confidence. ',
      '   Better Risk Management. ',
      '   Increased Employee Engagement and Morale. ',
      '   Sustainability and Environmental Responsibility.',
    ],
    image: "/assets/business/27.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A ISO certification?',
    description: '',
    documents: [
      'Quality Manual and Quality Policy. ',
      '   Procedures and Work Instructions. ',
      '   Record of Internal Audits. ',
      '   Record of Management Reviews. ',
      '   Corrective and Preventive Action Records. ',
      '   Documented Procedures for Document Control. ',
      '   Training, Measurement and Monitoring Records. ',
      '   Customer Complaints and Feedback Records. ',
      '   Supplier Evaluation and Selection Records. ',
      '   External Communication Records.',
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
    faq: [
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
      {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
    ]
  }
}

]
const Certification = () => {

  return <ServiceTemplate categories={categories} />
}

export default Certification