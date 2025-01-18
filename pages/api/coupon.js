import { getServerSession } from "next-auth/next"
import authOptions from "./auth/[...nextauth]"
import clientPromise from "utils/db"

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)
  console.log(session)
    if(session) {
        if(req.method === 'POST'){
            const {code} = req.body
            const client = await clientPromise
            const couponData = await client.db('ention').collection('coupons').findOne({code})

            if(couponData && couponData.expires > new Date().toISOString()){
                if(couponData.limit > couponData.used){
                    const useCount = couponData.usersUsed[session.user.phone || session.user.email?.replace(/\./g, '')]
                    if(!useCount || couponData.userLimit > useCount){
                        let amount = couponData.type === 'percentage' ? Math.ceil((couponData.discount / 100) * req.body.amount) : couponData.discount
                        res.status(200).json({success: true, discount: amount})
                    }else{
                        res.status(200).json({success: false, msg: 'You\'ve reached your limit for this coupon'})
                    }
                }else{
                    res.status(200).json({success: false, msg: 'Coupon limit reached'})
                }
            }else{
                res.status(200).json({success: false, msg: 'Invalid coupon or coupon expired'})
            }
            
        }
    }else{
      res.status('404')
    }
    res.end()
}


// Generate a basic coupon code schema without mongoose based on the above code
// 
