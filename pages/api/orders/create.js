// const {connectDb, addUser, getUser} = require('../lib/mongodb');
import Razorpay from "razorpay"
import shortid from "shortid"
import { getServerSession } from "next-auth/next"
import authOptions from "../auth/[...nextauth]"
import clientPromise from "utils/db"

const generateRecieptId = ( type="", phone = "") => `${type ? `${type}-` : ''}${phone ? `${phone}-` : ''}${shortid.generate()}`

const calculatePrice = async (data) => {
    try{
        const result = {}
        const client = await clientPromise
        // const productPromise = client.db('ention').collection('product').find({}).toArray();
        // const accessoriesPromise = client.db('ention').collection('accessory').find({}).toArray();
        // const [products, accessories] = await Promise.all([productPromise, accessoriesPromise]);
        // // Now `products` and `accessories` contain the fetched documents from both collections
        // console.log(products);
        // console.log(accessories);
        // // Merge the results if needed
        // const mergedData = [...products, ...accessories];
        // console.log(mergedData);
       let products1 = await client.db('ention').collection('accessory').find({slug: {$in: [...data.products.map(p => p.slug)]}}).toArray()
        let products2 = await client.db('ention').collection('product').find({slug: {$in: [...data.products.map(p => p.slug)]}}).toArray()
        const products = [...products1, ...products2];
        console.log('productmerged', products)
        result.products = products.map(p => ({...p, quantity: data.products.find(product => product.slug === p.slug)?.quantity}))

        result.amount = result.products.reduce((a, b) => a + (b.pricing.sellingPrice * b.quantity), 0)
        // result.mergedData = mergedData.map(p => ({...p, quantity: data.mergedData.find(product => product.slug === p.slug)?.quantity}))
        console.log('amount', result.amount)
        // result.amount = result.mergedData.reduce((a, b) => a + (b.pricing.sellingPrice * b.quantity), 0)
        //
         if(data.coupon){
            const couponData = await client.db('ention').collection('coupons').findOne({code: data.coupon?.code})
            const discount = (couponData.type === 'percentage' ? (couponData.discount / 100) * req.body.amount : couponData.discount) || 0
            result.amount = result.amount - discount
            result.coupon = {...data.coupon, discount}
        }else result.coupon = null
        result.amount = result.amount * 100
        console.log(result)

        return result
    }catch(err) {
        console.log(`🚀 ~ file: orders > create.js:36 ~ calculatePrice ~ err`, err)
        return null
    }
}

export default async function handler(req, res) {
        const session = await getServerSession(req, res, authOptions)

        if(session) {
        if(req.method === 'POST'){
            // Initialize razorpay object
            const mode = process.env.NODE_ENV === 'development' ? 'TEST' : 'LIVE'
            const razorpay = new Razorpay({
                key_id: process.env['RAZORPAY_KEY'],
                key_secret: process.env['RAZORPAY_SECRET'],
            });
              
            const {user} = req.body
            const data = await calculatePrice(req.body)

            if(!data) return res.status(400).json({success: false, msg: 'Invalid amount'})
            // if(!coupon) return res.status(400).json({success: false, msg: 'Invalid coupon or coupon expired'})

            // Create an order -> generate the OrderID -> Send it to the Front-end
            const payment_capture = 1;
            const currency = "INR";
            const options = {
                amount: data.amount,
                currency,
                receipt: generateRecieptId(null, user.phone),
                payment_capture,
                // notes
            };
        
            try {
                const response = await razorpay.orders.create(options);    
                res.status(200).json({
                    success: true,
                    order: {
                        id: response.id,
                        currency: response.currency,
                        amount: response.amount,
                        receipt: response.receipt,
                        products: data.products,
                        coupon: data.coupon
                    }
                });           

            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        }else{
            res.redirect('/')
        }
    }else{
        res.status('404')
    }
    res.end()
}