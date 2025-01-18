import React from 'react'
import { ServiceTemplate } from 'components'
// import { useSearchParams } from 'next/navigation'
import { getBusinessList, getBusiness } from 'utils/hypgraph'
import Head from'next/head'

// const options = {
//     title: "Sole Proprietorship Registration",
//     description: "Quis nisi deserunt cupidatat quis tempor et laborum ut irure consequat est velit ut. Laborum irure anim voluptate ad consectetur eu tempor mollit officia. Dolore mollit non non et est voluptate." ,
//     startingPrice: 2990,
//     overview:{
//       title: 'What is a Sole Proprietorship?',
//       description: `Sole Proprietorship is the easiest form of business done in India since it Isn't governed by any specific laws. Under sole proprietorship's, the compliance's are minimal and easy to fulfil. Sole Proprietorship means a business carried on by one person. The decision making and management of the business is in the hands of a single person.`
//     },
//     benefits:{
//       title: 'Benefits of Sole Proprietorship Registration',
//       benefits: [
//         'Ea ea minim ea exercitation.',
//         'Minim occaecat in non reprehenderit.',
//         'Anim veniam Lorem ullamco culpa minim sint deserunt non cupidatat proident proident ad id non.',
//         'Tempor labore esse incididunt ipsum enim sit incididunt laboris.',
//         'Reprehenderit est veniam do labore deserunt.'
//       ],
//       image: "https://picsum.photos/200/300"
//     },
//     requirements:{
//       title: 'What Are The Documents Required For Registering A Sole Proprietorship?',
//       description: 'Aute ea sunt incididunt mollit eiusmod eiusmod reprehenderit culpa eu sit.',
//       documents: [
//         'Deserunt ea Lorem dolor incididunt eiusmod minim Lorem ut id nulla duis dolor sint.',
//         'Lorem ex minim mollit est magna do duis proident.',
//         'Duis eu tempor labore consectetur enim sunt eu magna enim in deserunt deserunt sint.',
//         'Enim duis culpa do ad minim elit amet ea minim officia.',
//         'Et quis voluptate minim incididunt dolor pariatur aliquip ea minim cupidatat.'
//       ]
//     },
//     faq:{
//       pdf: 'https://takabus.com/tips/wp-content/uploads/2022/11/sample.pdf',
//       faq: [
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//         {question: 'Deserunt non et cupidatat eu occaecat tempor ullamco ad velit nulla cillum do.', answer: 'Ullamco anim do duis aliqua. Commodo nulla commodo veniam quis labore ullamco et sit. Officia duis nulla occaecat eiusmod enim. Duis nisi irure et deserunt occaecat nisi aute aliqua mollit anim dolore. Ea est eiusmod ipsum nulla voluptate in veniam. Ea in nulla nisi excepteur voluptate dolor exercitation quis.'},
//       ]
//     }
// }

const Business = ({business}) => {
  return <>
    <Head>
      <title> {business?.title || ''} </title>
      <meta name="description" content={business?.description || ''} />
      <meta name="keywords" content={business?.keywords || ''} />
      <meta name="og:title" content={business?.title || ''} />
      <meta name="og:description" content={business?.description || ''} />
      <meta name="og:image" content={business?.image || ''} />
    </Head>

    {/* <ServiceT?emplate categories={business?.categories || []} /> */}
  </> 
}

export default Business

// export async function getStaticPaths() {
//   try{

//     const slugs = await getBusinessList()
//     const paths = slugs?.map( slug => ({ params: {slug} }) ) | []  
//     return {
//       paths,
//       fallback: false
//     }

//   }catch(err){

//     return []
    
//   }
// }

// export async function getStaticProps({ params }) {
//   try{

//     const business = await getBusiness(params.slug)
//     return { props: { business: business || null } };
  
//   }catch(err){

//     return {props: { categories: null}}

//   }
// }