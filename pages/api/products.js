import { getServerSession } from "next-auth/next"
import authOptions from "./auth/[...nextauth]"
import clientPromise from "utils/db"
import productList from 'lib/products'

import categories from "lib/accessories"

export default async function handler(req, res, next) {
    // const session = await getServerSession(req, res, authOptions)

    
    //const [selected, setSelected] = useState(() => categories.find(c => c.title?.toLowerCase() == params.get('category')?.replace(/-/, ' ')) || categories[0])

    // if(session) {
        try {
           
            const {slugs} = req.body
            console.log(slugs)

            // const accessory = productLis.filter(a => categories)
            // console.log('accessory',accessory)
          
            // const client = await clientPromise
            // const products = await client.db('ention').collection('products').find({slug: {$in: [...slugs]}}).toArray()
            
            const products = productList.filter(p => slugs.includes(p.slug)).concat(categories.flatMap(category => category.products.filter(p => slugs.includes(p.slug))));
            console.log(products.length)
             res.status(200).json({products: products || []})
            
        }
        catch(e) {
            console.log(`🚀 ~ file: products.js:36 ~ handler ~ e`, e)
            res.status(500).json({msg: 'falied', err: e})
        }finally{
            res.end()
        }
    // }else{
    //     res.status('404')
    // }
}