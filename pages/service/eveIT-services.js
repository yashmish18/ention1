import React from 'react'
import { ServiceTemplate } from 'components'
//import { useSearchParams } from 'next/navigation'


const categories =[
  { 
    id: "eveIT services",
    title: "Website Development",
    description: "Website development services encompass a range of activities aimed at building, maintaining, and optimizing websites. From designing visually appealing layouts to ensuring seamless functionality, these services cover every aspect of a website's development lifecycle." ,
    startingPrice: '',
    price1:'',
    price2:'',
    note:'',
    overview:{
      title: 'What is Website Development?',
      description: `eveIT's website development services are designed to create visually appealing and user-friendly websites that captivate audiences. With a team of skilled developers and designers, eveIT ensures that each website is tailored to meet the unique needs of its clients. From responsive design to seamless navigation, eveIT focuses on delivering websites that not only look great but also drive conversions.` , 
point:[
  ]
  },

    benefits:{
      title: 'Benefits of Website Development',
      desc:'There are multiple advantages of Website Development-',
      benefits: [
        'eveIT is a leading provider of website development services, specializing in creating customized solutions for businesses of all sizes. Our team of experts is dedicated to delivering high-quality websites that not only look great but also perform exceptionally well.',
'Enhanced User Experience - User experience (UX) plays a crucial role in determining the success of a website. A seamless and intuitive user interface can significantly impact visitor engagement and conversion rates. ',
`Improved Search Engine Optimization (SEO) - In today's competitive digital landscape, visibility is key. Search engine optimization (SEO) is essential for ensuring that your website ranks well in search engine results pages (SERPs).`,
'Responsive Design - With the increasing use of mobile devices, having a responsive website is more important than ever.'
      ],
      image: ""
    },
    requirements:{
      title: '',
      description: '',
      documents: [
          ]
    },
     whyention:{
      title: 'Why eveIT?',
      description: `When it comes to website development services, eveIT Marketing Agency stands out as a top choice for businesses looking to establish or enhance their online presence. With a focus on innovation, creativity, and results, eveIT has earned a reputation for excellence in website development services.`,
  
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: ``,
      documents: [
       '',
       '',
       ''
     
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
    id: "eveIT services",
    title: "Social Media Marketing",
    description: `eveIT is a digital marketing agency known for its innovative approach and client-centric solutions. Specializing in website development, social media marketing, and email marketing, eveIT caters to businesses of all sizes, from startups to established enterprises. ` ,
    startingPrice: '',
    price1:'',
    price2:'',
    note:'',
    overview:{
      title: 'What is Social Media Marketing?',
      description: `
      Social media marketing refers to the use of social media platforms to promote products or services, connect with customers, and build brand awareness. With billions of active users worldwide, social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and TikTok offer unparalleled opportunities for businesses to reach their target audience and drive engagement.` , 
point:[
  ]
  },

    benefits:{
      title: 'Benefits of Social Media Marketing with eveIT',
      desc:'Partnering with eveIT for social media marketing offers numerous benefits for businesses, including:',
      benefits: [
        "Increased Brand Awareness - Social media platforms provide businesses with a vast audience reach, allowing them to increase brand visibility and reach potential customers who may not be aware of their products or services.",
        " Enhanced Customer Engagement - Social media marketing enables businesses to interact with their audience in real-time, fostering meaningful connections and building relationships with customers. By engaging with followers through comments, messages, and social media posts, businesses can create a loyal and engaged customer base.",
        "Improved Lead Generation and Conversions - By targeting specific demographics and interests, eveIT helps businesses generate qualified leads and drive conversions through strategic social media marketing campaigns. Whether it's through compelling ad creative, engaging content, or targeted messaging, eveIT maximizes the ROI of social media marketing efforts."      
    ],
    
        image: ""
    },
    requirements:{
      title: '',
      description: '',
      documents: [
          ]
    },
     whyention:{
      title: 'Why Choose eveIT for Social media marketing',
      description: ``,
      point:[
        `Cost-effectiveness and ROI - eveIT's social media marketing services offer exceptional value for money, delivering tangible results without breaking the bank. We work closely with our clients to optimize their social media marketing budgets and maximize their ROI.`, 
      
      `Continuous Improvement and Adaptation - Social media platforms are constantly evolving, with algorithm changes and new features being introduced regularly`, 
      
      `Personalized Approach and Client Satisfaction - At eveIT, we understand that every business is unique, with its own set of goals, challenges, and opportunities. That's why we take a personalized approach to every project, tailoring our strategies to meet the specific needs and objectives of each client. `,
      ],
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: ``,
      documents: [
       '',
       '',
       ''
     
      ]
    },
    faq:{
      pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
      faq: [
            ]
    }
},

{ 
    id: "eveIT services",
    title: "Email Marketing",
    description: `eveIT is a digital marketing agency known for its innovative approach and client-centric solutions. Specializing in website development, Email marketing, and email marketing, eveIT caters to businesses of all sizes, from startups to established enterprises. ` ,
    startingPrice: '',
    price1:'',
    price2:'',
    note:'',
    overview:{
      title: 'What is Email Marketing?',
      description: `
      Email marketing involves sending targeted messages to a group of recipients via email. These messages can range from promotional offers and product updates to newsletters and personalized content. The key to successful email marketing lies in delivering relevant and valuable content to your subscribers, thereby encouraging engagement and building brand loyalty.` , 
point:[
  ]
  },

    benefits:{
      title: 'Benefits of Social Media Marketing with eveIT',
      desc:'Partnering with eveIT for social media marketing offers numerous benefits for businesses, including:',
      benefits: [
        "Direct Communication Channel - Unlike other marketing channels that rely on algorithms or third-party platforms, email marketing provides a direct line of communication to your audience.",
        "Cost-Effective - Email marketing is incredibly cost-effective compared to traditional marketing methods. With minimal investment, businesses can reach a large audience and generate significant returns on investment (ROI).",
         "Personalization and Targeting - One of the biggest advantages of email marketing is its ability to personalize content based on user preferences and behavior. With advanced segmentation and targeting features, businesses can tailor their messages to specific audience segments, increasing the relevance and effectiveness of their campaigns."   ],
    
        image: ""
    },
    requirements:{
      title: '',
      description: '',
      documents: [
          ]
    },
     whyention:{
      title: 'How EveIT Can Help in Email Marketing',
      description: `From email automation and personalization to advanced analytics and reporting, EveIT empowers businesses to create and manage successful email campaigns with ease with no subscriber limit. By syncing customer information across platforms, EveIT ensures that your email marketing efforts are aligned with your overall marketing strategy, resulting in improved engagement and conversion rates.`,
      point:[
             ],
    },
    
    deliverable:{
      title: 'Our Deliverable',
      description: ``,
      documents: [
       '',
       '',
       ''
     
      ]
    },
    faq:{
      pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
      faq: [
            ]
    }
},
]
const eveit = () => {

  return <ServiceTemplate categories={categories} />
}

export default eveit