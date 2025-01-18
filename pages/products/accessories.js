import React from 'react'
import Products from 'components/products/accessory'
import categories from 'lib/accessories'
// const categories = [
//   {
//     id: "charger",
//     slug: "charger",
//     title: "CHARGER",
//     description: "With performance that rivals superchargers of gaming laptops, this blazing-fast charger is even faster with modern compatibilities. Our portable laptop battery chargers are the ultimate travel partner when working anywhere appropriately.",

//     products: [
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41",
//         slug: "DELL G6J41",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/accessory.png",
//         ratings: ""
//       },

//     ],


//   },
//   {
//     id: "ssd",
//     title: "SSD",
//     description: "We offers faster read/write speeds, improved performance, and reliability compared to other SSD (Solid-State Drive) storage device that uses flash memory to store data.",

//     products: [
     
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       }, {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       }, {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       }, {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       }, {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:  "/assets/Accessories/SSD.png",
//         ratings: ""
//       },
//     ],


//   },
//   {
//     id: 'bags',
//     title: "LAPTOP BAGS",
//     description: "Your employees work hard every single day. Ention laptop bags are both functional and fashionable. Corporate laptop bags made for a perfect appreciation gift for employees. Custom-made laptop bags will attract a lot of attention because of their design.",

//     products: [
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images: "/assets/Accessories/lappybag.png",
//         ratings: ""
//       },
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images: "/assets/Accessories/lappybag.png",
//         ratings: ""
//       }, 
//        {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images: "/assets/Accessories/lappybag.png",
//         ratings: ""
//       }, 
//        {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images: "/assets/Accessories/lappybag.png",
//         ratings: ""
//       }, 
//        {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images: "/assets/Accessories/lappybag.png",
//         ratings: ""
//       },

//     ],

//   },
//   {
//     id: 'ram',
//     title: "RAM",
//     description: "From data analytics to online gaming, increased demand for memory capacity has paved the way for a new generation of random access memory (RAM). Positioned to support these exciting launch speeds deliver nearly double the bandwidth. DDR, DDR2, and DDR3 are the memory types covered. ",

//     products: [
      
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:"/assets/Accessories/RAM.png",
//         ratings: ""
//       }, 
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:"/assets/Accessories/RAM.png",
//         ratings: ""
//       }, 
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:"/assets/Accessories/RAM.png",
//         ratings: ""
//       }, 
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:"/assets/Accessories/RAM.png",
//         ratings: ""
//       }, 
//       {
//         title: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
//         slug: "DELL G6J41, 0G6J41, MGJN9, 43NY4, RWHHR, 450-AECO 65 W Adapter",
      
//         pricing: {
//           "sellingPrice": 799,
//           "mrp": 899,
//           "discount": 20
//       },
//       images:"/assets/Accessories/RAM.png",
//         ratings: ""
//       }, 
//     ],

//   }

// ]

const Accessories = () => {
  return <Products categories={categories} />
}
export default Accessories