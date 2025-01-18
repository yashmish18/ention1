// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if(session) {
      if(req.method === 'POST'){
          const {code} = req.body
          const client = await clientPromise
          const couponData = await client.db('ention').collection('coupon').findOne({code})

          if(couponData){
              
          }else{
              res.status(200).json({success: false, msg: 'Coupon not found'})
          }
      }

  }else{
      res.status('404')
  }
  res.end()
}
