import { getServerSession } from "next-auth/next"
import authOptions from "../auth/[...nextauth]"
import clientPromise from "utils/db"
import { sendEmail } from "utils/email"
import {orderConfimTemplate} from 'lib/templates/order'

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if(session) {
        let output = {success: false, emailSent: false}
        try {
            let {user, payment, coupon, products, id, receipt} = req.body
            
            const client = await clientPromise
            const col = client.db('ention').collection('orders')
            const time = new Date().toISOString()
            const order = {
                user,
                payment,
                coupon,
                products,
                id,
                receipt,
                delivered: false,
                success: true,
                createdAt: time,
                updatedAt: time
            }
            await col.insertOne(order)
            // update coupon status in db, increment used count for both coupon and user
            if(coupon && coupon.status == 'applied'){
                try{
                    const couponCol = client.db('ention').collection('coupons')
                    await couponCol.updateOne(
                        {code: coupon.code}, 
                        {
                            $inc: {used: 1, ['usersUsed.' + [session.user.phone || session.user.email?.replace(/\./g, '')]]: 1},
                            $set: {updatedAt: time}
                        },
                    )
                }catch(err){
                    console.log(`🚀 ~ file: orders > complete.js:42 ~ handler ~ err`, err)
                }
            }

            output = { ...output, ...order }

            const response = await sendEmail({
                to: user.email,
                subject: `Your Ention order #${order.id} of ${products?.length} item${products?.length == 1 ? '' : 's'}.`,
                message: orderConfimTemplate({order, products: order.products, total: (order.products.reduce((a, b) => a + (b.pricing.sellingPrice * b.quantity), 0)) - (coupon?.discount || 0)})
            })

            output.emailSent = response.success
            res.status(200).json({...output})
            
        }
        catch(e) {
            console.log(`🚀 ~ file: orders > complete.js:36 ~ handler ~ e`, e)
            res.status(500).json({...output, message: e.message})
        }
    }else{
        res.status('404').json({success: false})
    }
    res.end()
}