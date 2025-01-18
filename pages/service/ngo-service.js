import React from 'react'
import { ServiceTemplate } from 'components'
//import { useSearchParams } from 'next/navigation'


const categories =[
  { 
    id: "society regisration",
    title: "Society Registration",
    description: "Society registration is essential for non-profit organizations working towards social, cultural, educational, or charitable causes. It offers various benefits such as tax exemptions, eligibility for grants and funding, and the ability to enter into contract" ,
    startingPrice: '',
    price1:'State level society fee - ₹12,000',
    price2:'National level society fee - ₹20,000',
    note:'Note- fee for society registration may very from state to state.',
    overview:{
      title: 'What is a Society registration?',
      description: `` , 
point:[
  'Group of minimum 7 individual, who are not related to each other by blood relation come together for common purpose. NGO are registered entity that operate independently, focused on addressing social, cultural, economic, educational, environmental issues, social services, rural development, human rights, poverty alleviation, healthcare, women empowerment. child welfare. ',
  'Under the society Registration Act, NGO can be registered as societies by submission of application to Registrar of Societies.  '
]
  },

    benefits:{
      title: 'Benefits of Society registration',
      desc:'There are multiple advantages of society registration-',
      benefits: [
        'Legal recognition and status to the organization, giving it a distinct legal identity.',
'Enhances the credibility and legitimacy of NGO.',
'May Purchase a certain property in his own name.',
'Funding and Grants.',
'In the event of a dispute can be sued and to be sued. Can file a lawsuit against the defaulters in his own name. allowing them to enforce their rights and defend their interest. ',
'By society registration you will get a tac benefits and exemption.',
'Donor can get deduction under sec 80G of the Income Tax Act.',
'The Act allows for the filing of income tax returns by Societies.',
'Carry fewer obligations.',
'Access to government programs and schemes related to its objective. ',
'Easy bank account opening.',
'Listed on government portal and directories increase Publicity and Recognition.'
      ],
      image: "/assets/business/14.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Society registration?',
      description: '',
      documents: [
        'PAN card, Aadhar card of all member',
        'Driving license / passport / Bank statement/utility Bill (any one) as a residential proof of all members.',
        'A letter to the appropriate official requesting that your society be registered under the Society Registration Act.',
        'Two copies of the Memorandum of Association, which should include the name and purpose of the society, as well as the names, addresses, and occupations of all members of the governing body in charge of the business.', 
        `Two copies of society's rules and regulations, which must be validated as correct by at least three members. `,
        `Proof of ownership (leased/general power of attorney and an electricity bill) of the society's registered office with No objection certification on stamp paper.`,
        'List of all members of governing body along with their signature and photo.',
        'Proposed society president must sign a declaration that he is willing and qualified to hold president position. '
      ]
    },
     whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Deliverable under Sec 8 Company Registration`,
      documents: [
       'Registration certificate ',
       'Memorandum of Association',
       'Rules and regulations book'
     
      ]
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
  id: "trust registration",
  title: "Trust Registration",
  description: " Trust registration is necessary to establish a legally recognized entity that can manage and distribute assets as per the trust's objectives and terms. It offers several benefits, including tax exemptions, eligibility for grants and donations, asset protection, and smooth succession planning." ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a Trust registration?',
    description: ` Trust registration is the legal process of creating a trust, a legal entity formed for the purpose 
    of managing and administering assets for the benefit of beneficiaries. Trust registration 
    provides a formal structure and legal recognition to the trust, ensuring transparency and 
    accountability in its operation`
  },
  benefits:{
    title: 'Benefits of Trust registration Registration',
    benefits: [
      'Legal recognition and establishment of a charitable organization. ',
        ' Tax exemptions and benefits for charitable activities and donations. ',
        ' Limited liability protection for trustees and members of the trust. ',
        ' Credibility and trustworthiness for donors, stakeholders, and beneficiaries. ',
        ' Ability to receive grants, funding, and government support for charitable initiatives.'
    ],
    image: "/assets/business/15.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Trust registration?',
    description: '',
    documents: [
      ' Trust deed containing the objectives, rules, and regulations of the trust. ',
      'Identity and address proof of the trustees and settlors. ',
      'Proof of address for the registered office of the trust. ',
      'Affidavits or declarations by the trustees and settlors. ',
      'List of trustees and their consent letters.'
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
  id: "sec company",
  title: "Sec 8 Company Registration",
    description: " Sec 8 Company registration provides legal recognition, limited liability protection, and tax benefits to such organizations. It enables them to operate as non-profit entities, raise funds, and carry out activities for the betterment of society" ,
    startingPrice: '₹8,000',
    overview:{
      title: 'What is a Sec 8 company registration?',
      description: `An NGO can choose to register itself as a `,
      point:[
        ' -society under the Societies Act 1860.',
        ' -trust under the Trust Act 1882  ',
         ' -Section 8 company under the Companies Act 2013',
        'By registering as a Section 8 company, an NGO can engage in various activities with non- profit motive for promoting Art, Commerce, research, Science, Technology, Sports, Education, Social Welfare, Social Research, Religion, Charity, and Protection of the Environment conservation, among others. Once the registration process is successfully completed, a Section 8 Company has the freedom to operate anywhere in India.',
        'The Section 8 company mentions provisions to establish a company as a NGO, is considered an upgraded form of registration compared to societies and trusts, offering numerous advantages for charitable institutions. It has become the most popular choice for NGO registration in India due to its ease of registration, operation, and management.',
        'Sec 8 company not allowed to use Private/ Public Limited at the end of name.'
      ]
    },
    benefits:{
      title: 'Benefits of Sec 8 company registration Registration',
      desc:`Being an NPO or Non-profit Organization does not imply that the Company can’t make a benefit or income. It just implies that the Company can earn benefits however the promoters are not to profit from those benefits. The benefits can’t be disseminated among the promoters. All incomes must be applied to advancing the objective of the company.

      Still, certain exclusions and advantages have been accommodated to an “NGO or an NPO” under section 8 of the Companies Act 2013. The donors contributing towards a Section 8 Company are eligible to confirm the Tax Exemption against these gifts.`,
      benefits: [
        ' A “Section 8 Company” does not need to add Limited or Private Limited, It can use names like Foundation, Charities, Association, Society, Council, Organization, Club,Academy, Institute, and Federation at the end of his name. ',
           'Separate Legal Identity: A Section 8 Company is a separate legal entity and is different from members. The Company has a never-ending presence.',
           'No Stamp Duty: A Section 8 Company is excluded from the necessity of paying stamp duty on both “MoA and AoA” during registration process. ',
           'No Minimum Capital Requirement: No minimum capital limit has been referenced for a Section 8 Company in India. Also, the capital structure can be adjust at  any phase according to the growing necessities of the company. This suggests that it may be formed without any share capital. The funds necessary for carrying the day to day business operations can be brought in the form of subscriptions, donations from members and the general public.',
           'Requirements of Companies Auditor’s Report Order or CARO do not apply to this type of company.',
           'Many tax benefits are granted to Section 8 Companies as their profiles are utilized for charitable purposes.',
           'Those donating to a Section 8 Company are eligible for tax exemptions under section “12A and 80G” of the Income Tax Act.'
      ],
      image: "/assets/business/16.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Sec 8 company registration?',
      description: 'For Proposed company -',
      documents: [
        'two proposed names',
  'The objective of the proposed company',
  'Authorized and paid-up share capital details ',
  'Equity shareholding percentage of subscribers',
       
      ],
      desc2: `For director's -`,
      docu2: [
        'PAN Card of all the Directors',
        'Photograph of all the Directors',
        'Aadhar Card/ DL/Voter ID/ passport, anyone documents of all the Directors',
        'Mobile and Email of all the Directors',
        'Bank statement/ Electricity Bill not older than 2 month, in the name of the Directors, anyone documents of all the directors'
      ],
      desc3: 'For Proof of Proposed Registered Office -',
      docu3: [
        'Latest utility bill i.e. electricity, landline, water bill, etc.',
        'For a rented place, a rent agreement is required in the name of the proposed company'
      ],
      desc4: 'Documents for Section 8 Licence',
      docu4:[
        'INC-12 Form',
        'MOA & AOA',
        `Professional's Declaration (INC-14)`,
        `Director's Declaration (INC-15)`,
        'Next 3 Years Income & Expenditure Statements',
        'Board Resolution',
        'Shareholders Resolution',
      ]
    },
      whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: `Deliverable under Sec 8 Company Registration`,
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
  id: "darpan registration",
  title: "Darpan Registration",
  description: "Darpan registration helps NGOs in gaining recognition, accessing resources, and establishing transparency in their operations. It aims to create a comprehensive database of non-governmental organizations (NGOs) operating in the country."
  , startingPrice: '₹2990',
  overview:{
    title: 'What is a Darpan Registration?',
    description: `Darpan registration is the process of enrolling an organization with the NGO Darpan portal, a 
    government initiative in India. Darpan registration provides NGOs with a unique identification 
    number and allows them to showcase their work, activities, and financial details. It offers 
    visibility, credibility, and opportunities for collaboration with government agencies, donors, 
    and other stakeholders.`
  },
  benefits:{
    title: 'Benefits of Darpan Registration Registration',
    benefits: [
      'Recognition and validation of the NGO existence and operations.', 
         'Access to government grants, funding, and schemes for social initiatives.', 
         'Enhanced credibility and trustworthiness among donors and stakeholders.', 
         'Platform for networking and collaboration with other NGOs and organizations. ',
         '   Transparent and accountable governance through regulatory compliance. '
    ],
    image: "/assets/business/17.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Darpan Registration?',
    description: '',
    documents: [
      " Identity proof of the NGO's authorized representative. ",
      "Address proof of the NGO's registered office. ",
      'Memorandum of Association (MOA) and Articles of Association (AOA). ',
      'PAN card of the NGO. ',
      'Certificate of registration under the Societies Registration Act or any other relevant act. '
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
 
  id: "sec 12a",
  title: "Sec 12A and Sec80G Registration",
  description: " Sec 12A and Sec 80G registration are provisions under the Income Tax Act, 1961 in India. It helps in attracting donations, building trust, and furthering the organization's social impact" ,
  startingPrice: '₹30,000',
  overview:{
    title: 'What is a Sec 12A and Sec80G Registration?',
    description: `Section 12A of Income Tax Act: `,
    point:[
      'NGO registered as trusts, Section 8 companies and societies enjoy Tax exemption under section 12A which allow them a relief to not pay taxes if they work for the welfare of the society and do not profit. If any non-profitable trust or NGO has not registered for 12A, their financial receipts or transactions would be considered as taxable. Private or family trusts are not allowed such exemptions and cannot obtain 12A registration. ',
      'Sec 80G registration -',
      'A sec 80G certificate issued by the Income Tax Department to Non-Profit Organizations that allows donor to claim deduction form its gross income under sec 80G.',
      'Application for registration under sec 80G and 12A can be applied together or separately. After every 5 year its required to do renewal. '
    ]
  },
  benefits:{
    title: 'Benefits of Sec 12A and Sec80G Registration ',
    desc:'',
    benefits: [
      ' The donor can receive tax deduction on the donated amount if the NGO where the donation is done is being registered with Section 80G.',
        'Section 12A registered trusts or NGOs can also receive multiple benefits under registration of Section 80G. ',
        'NGO credibility and trust increased among potential doners, as registration signifies compliance with regulatory requirement and transparency in financial matters. ',
        'Donors feel a sense of humanity and satisfaction by donating to such renowned NGOs, its provides assurance to donors that their contribution and donation will be utilized for genuine charitable purpose.',
        'The government funds and grants are easily available to such  NGOs which are registered with Section 12A and Section 80G. ',
      
    ],
    image: "/assets/business/42.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Sec 12A and Sec80G Registration?',
    description: 'Documents required for 12A and 80G certificate-',
    documents: [
      'Copy of registration certificate with registrar of companies or public trusts and societies.',
      'Self-attested document copies of yearly audited account of the trust or society and sec 8 company.',
       'NGO DARPAN id (if receiving government grant) and FCRA ID (if receiving foreign donations).',
       'The trust or society, sec 8 company should provide the note which has complete details of the activities',
       'The trust, society and sec 8 company should provide a self-certified document having existing order granting registration under the Section 12Aor Section 12AA',
       'They should also provide self-certified copy of the application rejection order for the grant of registration (if having).'
    ]
  },
    whyention:{
      title: 'Why Ention?',
      description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
     description: `Deliverable under Sec 12A and Sec80G Company Registration`,
    documents: [
     'Certificate of incorporation',
     'Director identification numbers (DIN)',
     'Digital signature token for directors',
     'Memorandum of association',
     'Articles of association',
     'Company PAN card',
     'Company TAN number',
   
    ],
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
const NGO = () => {

  return <ServiceTemplate categories={categories} />
}

export default NGO