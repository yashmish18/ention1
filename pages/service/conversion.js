import React from 'react'
import { ServiceTemplate } from 'components'
// import { useSearchParams } from 'next/navigation'


const categories =[
  { 
    id: "conversion proprietorship",
    title: "Conversion of proprietorship into company",
    description: " Conversion of proprietorship into a company involves transforming a sole proprietorship business into a separate legal entity with limited liabilit" ,
    startingPrice: '₹2,990',
    overview:{
      title: 'What is a Conversion of proprietorship into company?',
      description: ` Conversion of proprietorship into a company refers to the process of transforming a sole 
      proprietorship business structure into a company structure. This involves legally establishing 
      a separate legal entity with limited liability and distinct ownership structure.`
    },
    benefits:{
      title: 'Benefits of Conversion of proprietorship into company',
      benefits: [
        ' Limited liability protection for the owner(s).', 
        'Separation of personal and business assets. ',
        'Enhanced credibility and professional image. ',
        'Access to capital through equity funding. ',
        'Potential for easier business expansion and scalability.',
      ],
      image: "/assets/business/36.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Conversion of proprietorship into company?',
      description: '',
      documents: [
        'Memorandum of Association and Articles of Association.',
        'Conversion application form.',
       ' Copy of proprietorship registration certificate.',
       ' Identity proof and address proof of the proprietor.',
       ' PAN (Permanent Account Number) card of the proprietor',
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
  id: "conversion partnership",
  title: "Conversion of partnership firm into company",
  description: " Conversion of a partnership firm into a company involves changing the legal structure of a business from a partnership to a separate entity with limited liability and perpetual existence." ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a Conversion of partnership firm into company?',
    description: ` Conversion of a partnership firm into a company refers to the process of transforming an 
    existing partnership structure into a separate legal entity known as a company. It involves 
    legal procedures and documentation to establish the new company and transfer the assets 
    and liabilities from the partnership to the newly formed company.`
  },
  benefits:{
    title: 'Benefits of Conversion of partnership firm into company Registration',
    benefits: [
      ' Limited liability protection for partners. ',
     ' Separate legal identity and perpetual succession. ',
     ' Enhances credibility and professional image. ',
      'Access to equity funding and potential for business expansion. ',
     ' Facilitates transfer of ownership and exit of partners.',
    ],
    image: "/assets/business/37.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Conversion of partnership firm into company?',
    description: '',
    documents: [
      'Partnership deed. ',
 'Memorandum of Association and Articles of Association. ',
 'Conversion application form. ',
 'Copy of partnership registration certificate. ',
 'Identity proof and address proof of partners',
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
{ id: "conversion opc",
  title: "Conversion of OPC into company",
    description: " Conversion of OPC (One Person Company) into a company refers to the process of transforming a single-member company into a private limited company with multiple members." ,
    startingPrice: '₹2990',
    overview:{
      title: 'What is a Conversion of OPC into company?',
      description: ` Conversion of OPC (One Person Company) into a company refers to the process of 
      transforming an existing OPC structure into a private or public company. This conversion 
      allows the OPC to convert into a more flexible business structure with increased scalability 
      and potential for growt.`
    },
    benefits:{
      title: 'Benefits of Conversion of OPC into company Registration',
      benefits: [
        'Increased flexibility for business expansion and attracting investors. ',
        'Facilitates appointment of more directors and transfer of ownership. ',
        'Access to equity funding and potential for capital raising. ',
        'Enhances credibility and professional image of the company. ',
        'Perpetual succession and separate legal identity',
      ],
      image: "/assets/business/38.png"
    },
    requirements:{
      title: 'What Are The Documents Required For Registering A Conversion of OPC into company?',
      description: '',
      documents: [
        ' Copy of the OPC memorandum and articles of association. ',
       ' Board resolution approving the conversion. ',
      '  Copy of the OPC registration certificate. ',
       ' Identity proof and address proof of the sole member. ',
      '  PAN (Permanent Account Number) card of the sole member.'
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
{ id: "conversion llp",
  title: "Conversion of LLP into company",
  description: "It requires fulfilling specific legal formalities, including obtaining necessary approvals and filing relevant documents with the regulatory authorities. This conversion offers various advantages such as limited liability protection" ,
  startingPrice: '₹2990',
  overview:{
    title: 'What is a Conversion of LLP into company?',
    description: `Conversion of LLP (Limited Liability Partnership) into a company is the procedure of 
    changing the legal structure of an LLP into a private limited company. It involves 
    reorganizing the LLP's ownership, management, and compliance requirements to conform to 
    the regulations of a company`
  },
  benefits:{
    title: 'Benefits of Conversion of LLP into company Registration',
    benefits: [
      ' Access to equity funding and potential for capital raising. ',
      'Increased credibility and professional image. ',
      'Limited liability protection for shareholders. ',
      'Perpetual succession and separate legal identity. ',
      'Greater flexibility in ownership and transfer of shares',
    ],
    image: "/assets/business/39.png"
  },
  requirements:{
    title: 'What Are The Documents Required For Registering A Conversion of LLP into company?',
    description: '',
    documents: [
      ' LLP incorporation certificate and partnership agreement. ',
      'Memorandum of Association and Articles of Association of the company. ',
      'Conversion application form. ',
      'Board resolution approving the conversion. ',
      'Consent of partners to become shareholders of the compan',
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

const Conversion = () => {

  return <ServiceTemplate categories={categories} />
}

export default Conversion