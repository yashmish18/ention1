import clientPromise from 'utils/db'
import bcrypt from 'bcrypt'

export default async function handler (req, res){
    if(req.method == 'POST'){
        try{
            const { name, email, password,  } = req.body;
            if(!name || !email || !password) {
                res.status(422).json({ message: 'Incomplete details provided'})
            }else {
                const client = await clientPromise;
                const col = await client.db('ention').collection('users')
                let user = await col.findOne({email: req.body?.email})
                if(user){
                    res.status(409).json({ message: 'Email already registered'})
                }else {
                    const hashedPassword = bcrypt.hashSync(password, 10)
                    await col.insert({name, email, password: hashedPassword})
                    res.status(200).json({ message: 'User registered successfully!', user: {name, email}})
                }
            }
            
        }catch(err){
            res.status(500).json({message: err.message})
        }finally{
            return res.end()
        }
    }
}