import React from 'react'
import { ServiceTemplate } from 'components'
// import { useSearchParams } from 'next/navigation'


const categories =[
  { 

    id: "shop establishment",
    title: "Shop and establishment registration",
    description: "This registration process validates the establishment's existence and safeguards employees' rights and welfare. It ensures compliance with local labor laws and regulations. " ,
    startingPrice: '₹2,990',
    overview:{
      title: 'What is a Shop and establishment registration?',
      description: `Shop and Establishment Registration is a legal requirement for businesses operating within a particular jurisdiction. By obtaining this registration, businesses can operate legally, maintain a positive reputation, and enjoy various benefits and protections provided by the governing authorities.      `
    },
    benefits:{
      title: 'Benefits of Shop and establishment registration',
      benefits: [
        'Legally compliant operations.',
        'Protection of employee rights.',
        'Access to government schemes and incentives.',
        'Positive brand reputation.',
        'Eligibility for business loans and financial support.'
      ],
      image: "/assets/business/27.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Shop and establishment registration?',
      description: '',
      documents: [
        'Identity proof of the business owner/partners/directors.',
        'Address proof of the business premises.',
        'PAN card or Aadhaar card of the business owner/partners/directors.',
        'Copy of the rental agreement or ownership document of the premises.',
        'Passport-size photographs of the business owner/partners/directors. '
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
  id: "pf registration",
  title: "PF registration",
  description: "PF registration ensures financial security, retirement benefits, and access to savings for employees. Employers must make monthly contributions and comply with various regulations to facilitate the accumulation of funds. " ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a PF registration?',
    description: `PF registration, also known as Provident Fund registration, is a mandatory process for employers to enroll their employees in a social security scheme. It involves creating an account to contribute a portion of the employee's salary toward a retirement fund. This registration fosters employee welfare, compliance with labor laws, and long-term financial planning for a secure future.
    `
  },
  benefits:{
    title: 'Benefits of PF registration Registration',
    benefits: [
      'Retirement savings for employees.',
      "Employer contribution towards employees' provident fund.",
      'Financial security for employees and their families.',
      'Tax benefits for both employees and employers.',
      'Loan facilities against the accumulated provident fund.'
    ],
    image: "/assets/business/28.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A PF registration?',
    description: '',
    documents: [
      'PAN card of the establishment.',
      "Aadhaar card of the establishment's authorized signatory.",
      'Bank account details of the establishment.',
      'Address proof of the establishment.',
      'Registration certificate of the establishment (if applicable).'     
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
  id: "esi registration",
  title: "ESI registration",
    description: "By complying with the ESI Act, employers prioritize the well-being of their workforce and establish a secure and supportive work environment. This registration promotes employee welfare, facilitates access to quality healthcare services, and provides financial protection.    " ,
    startingPrice: '₹2990',
    overview:{
      title: 'What is a ESI registration?',
      description: `ESI registration, or Employee State Insurance registration, is a mandatory process for employers to provide social security benefits to their employees. It entails enrolling employees in a comprehensive health insurance and medical care scheme.       `
    },
    benefits:{
      title: 'Benefits of ESI registration Registration',
      benefits: [
        'Medical benefits for employees and their dependents.',
        'Cash benefits during sickness, maternity, disability, or injury.',
        'It enhance employee welfare and satisfaction.',
        'It reduced healthcare expenses for employees.',
        'Extended sick leave and maternity leave benefits.'
      ],
      image: "/assets/business/29.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A ESI registration?',
      description: '',
      documents: [
        'PAN card of the establishment.',
        'Registration certificate of the establishment (if applicable).',
        'Address proof of the establishment.',
        'Bank account details of the establishment.',
        'Incorporation certificate (for companies).'
      
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
  id: "iec",
  title: "IEC (import export code)",
  description: "IEC facilitates the legal and hassle-free movement of goods across international borders, allowing firms to participate in global trade. IEC registration is essential for businesses looking to expand their reach to export-import activities.  " ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a IEC (import export code)?',
    description: `Import Export Code (IEC) is a unique registration number issued by the Directorate General of Foreign Trade (DGFT) in India. It is a mandatory requirement for businesses engaged in import and export activities. It enables access to international markets, simplifies customs clearance procedures, and establishes credibility with foreign suppliers and buyers.    `
  },
  benefits:{
    title: 'Benefits of IEC (import export code) Registration',
    benefits: [
      'Enables legal import and export activities.',
      'Facilitates international trade transactions.',
      'Access to global markets and opportunities.',
      'Establishes credibility with international suppliers and buyers.',
      'Eligibility for government export incentives and benefits.',
    ],
    image: "/assets/business/30.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A IEC (import export code)?',
    description: '',
    documents: [
      'PAN card of the applicant or the business entity.',
      'Identity proof of the applicant (such as an Aadhaar card, passport, etc.).',
      'Address proof of the applicant (such as an Aadhaar card, passport, utility bill, etc.).',
      'Bank account details of the applicant or the business entity.',
      'Canceled cheque or bank certificate as proof of bank account.'
      
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
]

const Registration = () => {

  return <ServiceTemplate categories={categories} />
}

export default Registration